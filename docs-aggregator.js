#!/usr/bin/env node

const jsonFile = require('jsonfile');
const productFile = "./data/products.json";
const shell = require('shelljs');
const path = require('path');
const replace = require('replace');
const fse = require('fs-extra');

jsonFile.readFile(productFile, (err, obj) => {
  const selectedProducts = process.argv.slice(2);
  const isAllProducts = selectedProducts.length ? false : true;
  const allProducts = obj.products;
  // clean repos/
  shell.exec('rm -rf ./repos/');

  for (const key in allProducts) {
    if (allProducts.hasOwnProperty(key) && (isAllProducts || selectedProducts.find((productName) => { return productName === key; }))) {
      console.log('***************Updating product ', key);
      // clone repo
      const url = allProducts[key].url;
      shell.exec('git clone ' + url + ' ./repos/' + key);

      const repoName = key;
      const docsDestRoot = path.join('./content/products', repoName);
      const versions = allProducts[key].versions;
      const versionsLen = versions.length;

      for (let j = 0; j < versionsLen; j++) {
        if (versions[j].hostDocs) {
          const branch = versions[j].branch;

          shell.exec('pwd');
          shell.pushd(path.join('.', 'repos', repoName));

          console.log('Checking out... ', branch);
          shell.exec('git checkout ' + branch);
          shell.popd();

          const replaceWith = path.join('(/products', repoName, branch);

          // replace /docs prefix with /products
          replace({
            regex: '(\\(/docs)',
            replacement: `${replaceWith}`,
            paths: [`./repos/${repoName}/docs/`],
            recursive: true,
            silent: true
          });

          // total hack to force write sync
          // ref: http://www.daveeddy.com/2013/03/26/synchronous-file-io-in-nodejs/
          for (i = 0; i < 5; i++) {
            // .md#xyz) -> #xyz)
            replace({
              regex: '(\\(/products/.*)(\\.md)(#.*)?\\)',
              replacement: '$1$3)',
              paths: [`./repos/${repoName}/docs/`],
              recursive: true,
              silent: true
            });
          }
          // // .md) -> )
          // replace({
          //   regex: '(\\(/products/.*)(\\.md\\))',
          //   replacement: '$1)',
          //   paths: [`./repos/${repoName}/docs/`],
          //   recursive: true,
          //   silent: true
          // });

          replace({
            regex: '/docs/images',
            replacement: `/products/${repoName}/${branch}/images`,
            paths: [`./repos/${repoName}/docs/`],
            recursive: true,
            silent: true
          });

          const docsDestDir = path.join(docsDestRoot, branch);
          // delete the dir if exist
          fse.removeSync(docsDestDir);
          // create the dir
          fse.ensureDirSync(docsDestDir);
          try {
            fse.copySync(`./repos/${repoName}/docs`, `./content/products/${repoName}/${branch}/`);
            console.log('success!');
          } catch (error) {
            console.log('=======error: ', error);
          }
          shell.pushd(path.join('.', 'repos', repoName));
          shell.exec('git checkout -- .');
          shell.popd();
        }
      }
      // clean
      shell.exec('rm -rf ./repos');
    }
  }
});
