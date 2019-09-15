---
title: Weclome | Searchlight
description: Welcome to Searchlight
menu:
  product_searchlight_5.0.0:
    identifier: readme-searchlight
    name: Readme
    parent: welcome
    weight: -1
product_name: searchlight
menu_name: product_searchlight_5.0.0
section_menu_id: welcome
url: /products/searchlight/5.0.0/welcome/
aliases:
- /products/searchlight/5.0.0/
- /products/searchlight/5.0.0/README/
info:
  version: 5.0.0
---

# Searchlight

<img src="/products/searchlight/5.0.0/images/cover.jpg">

Searchlight by AppsCode is a Kubernetes operator for [Icinga](https://www.icinga.com/). If you are running production workloads in Kubernetes, you probably want to be alerted when things go wrong. Icinga periodically runs various checks on a Kubernetes cluster and sends notifications if detects an issue. It also nicely supplements whitebox monitoring tools like, [Prometheus](https://prometheus.io/) with blackbox monitoring can catch problems that are otherwise invisible, and also serves as a fallback in case internal systems completely fail.

From here you can learn all about Searchlight's architecture and how to deploy and use Searchlight.

- [Concepts](/products/searchlight/5.0.0/concepts/). Concepts explain some significant aspect of Searchlight. This is where you can learn about what Searchlight does and how it does it.

- [Setup](/products/searchlight/5.0.0/setup/). Setup contains instructions for installing
  the Searchlight in various cloud providers.

- [Guides](/products/searchlight/5.0.0/guides/). Guides show you how to perform tasks with Searchlight.

- [Reference](/products/searchlight/5.0.0/reference/searchlight). Detailed exhaustive lists of command-line options for various Searchlight binaries.

We're always looking for help improving our documentation, so please don't hesitate to
[file an issue](https://github.com/appscode/searchlight/issues/new) if you see some problem.
Or better yet, submit your own [contributions](/products/searchlight/5.0.0/CONTRIBUTING) to help
make our docs better.

---

**Searchlight binaries collects anonymous usage statistics to help us learn how the software is being used and how we can improve it.
To disable stats collection, run the operator with the flag** `--analytics=false`.

---