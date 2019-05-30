---
title: Stash
menu:
  product_stash_0.8.1:
    identifier: stash
    name: Stash
    parent: reference
    weight: 0

product_name: stash
menu_name: product_stash_0.8.1
section_menu_id: reference
aliases:
  - products/stash/0.8.1/reference/

---
## stash

Stash by AppsCode - Backup your Kubernetes Volumes

### Synopsis

Stash is a Kubernetes operator for restic. For more information, visit here: https://appscode.com/products/stash

### Options

```
      --alsologtostderr                  log to standard error as well as files
      --bypass-validating-webhook-xray   if true, bypasses validating webhook xray checks
      --enable-analytics                 Send analytical events to Google Analytics (default true)
      --enable-status-subresource        If true, uses sub resource for crds.
  -h, --help                             help for stash
      --log-flush-frequency duration     Maximum number of seconds between log flushes (default 5s)
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files (default true)
      --service-name string              Stash service name. (default "stash-operator")
      --stderrthreshold severity         logs at or above this threshold go to stderr
      --use-kubeapiserver-fqdn-for-aks   if true, uses kube-apiserver FQDN for AKS cluster to workaround https://github.com/Azure/AKS/issues/522 (default true)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging
```

### SEE ALSO

* [stash backup](/products/stash/0.8.1/reference/stash_backup)	 - Run Stash Backup
* [stash check](/products/stash/0.8.1/reference/stash_check)	 - Check restic backup
* [stash forget](/products/stash/0.8.1/reference/stash_forget)	 - Delete snapshots from a restic repository
* [stash recover](/products/stash/0.8.1/reference/stash_recover)	 - Recover restic backup
* [stash run](/products/stash/0.8.1/reference/stash_run)	 - Launch Stash Controller
* [stash scaledown](/products/stash/0.8.1/reference/stash_scaledown)	 - Scale down workload
* [stash snapshots](/products/stash/0.8.1/reference/stash_snapshots)	 - Get snapshots of restic repo
* [stash version](/products/stash/0.8.1/reference/stash_version)	 - Prints binary version number.
