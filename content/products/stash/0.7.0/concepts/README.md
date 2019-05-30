---
title: Concepts | Stash
menu:
  product_stash_0.7.0:
    identifier: concepts-readme
    name: Readme
    parent: concepts
    weight: -1
product_name: stash
menu_name: product_stash_0.7.0
section_menu_id: concepts
url: /products/stash/0.7.0/concepts/
aliases:
  - /products/stash/0.7.0/concepts/README/
---
# Concepts

Concepts help you learn about the different parts of the Stash and the abstractions it uses.

- What is Stash?
  - [Overview](/products/stash/0.7.0/concepts/what-is-stash/overview). Provides a conceptual introduction to Stash, including the problems it solves and its high-level architecture.
- Custom Resource Definitions
  - [Restic](/products/stash/0.7.0/concepts/crds/restic). Introduces the concept of `Restic` for configuring [restic](https://restic.net) in a Kubernetes native way.
  - [Recovery](/products/stash/0.7.0/concepts/crds/recovery). Introduces the concept of `Recovery` to restore a backup taken using Stash.
  - [Repository](/products/stash/0.7.0/concepts/crds/repository) Introduce concept of `Repository` that represents restic repository in a Kubernetes native way.
  - [Snapshot](/products/stash/0.7.0/concepts/crds/snapshot) Introduce concept of `Snapshot` that represents backed up snapshots in a Kubernetes native way.