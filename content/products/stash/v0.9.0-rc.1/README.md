---
title: Welcome | Stash
description: Welcome to Stash
menu:
  product_stash_v0.9.0-rc.1:
    identifier: readme-stash
    name: Readme
    parent: welcome
    weight: -1
product_name: stash
menu_name: product_stash_v0.9.0-rc.1
section_menu_id: welcome
url: /products/stash/v0.9.0-rc.1/welcome/
aliases:
- /products/stash/v0.9.0-rc.1/
- /products/stash/v0.9.0-rc.1/README/
info:
  version: v0.9.0-rc.1
---

# Stash
 Stash by AppsCode is a Kubernetes operator for [restic](https://restic.net). If you are running production workloads in Kubernetes, you might want to take backup of your disks. Using Stash, you can backup Kubernetes volumes mounted in following types of workloads:

- Deployment
- DaemonSet
- ReplicaSet
- ReplicationController
- StatefulSet

From here you can learn all about Stash's architecture and how to deploy and use Stash.

- [Concepts](/products/stash/v0.9.0-rc.1/concepts/). Concepts explain some significant aspect of Stash. This is where you can learn about what Stash does and how it does it.

- [Setup](/products/stash/v0.9.0-rc.1/setup/). Setup contains instructions for installing
  the Stash in various cloud providers.

- [Guides](/products/stash/v0.9.0-rc.1/guides/latest/). Guides show you how to perform tasks with Stash.

- [Reference](/products/stash/v0.9.0-rc.1/reference/). Detailed exhaustive lists of
command-line options, configuration options, API definitions, and procedures.

We're always looking for help improving our documentation, so please don't hesitate to [file an issue](https://github.com/stashed/stash/issues/new) if you see some problem. Or better yet, submit your own [contributions](/products/stash/v0.9.0-rc.1/CONTRIBUTING) to help
make our docs better.

---

**Stash binaries collects anonymous usage statistics to help us learn how the software is being used and how we can improve it. To disable stats collection, run the operator with the flag** `--enable-analytics=false`.

---