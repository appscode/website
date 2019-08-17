---
title: Table of Contents | Guides
description: Table of Contents | Guides
menu:
  product_searchlight_8.0.0-rc.0:
    identifier: guides-readme
    name: Readme
    parent: guides
    weight: -1
product_name: searchlight
menu_name: product_searchlight_8.0.0-rc.0
section_menu_id: guides
url: /products/searchlight/8.0.0-rc.0/guides/
aliases:
- /products/searchlight/8.0.0-rc.0/guides/README/
---

# Guides

Guides show you how to perform tasks with Searchlight.

- Cluster Alerts
  - [ca-cert](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/ca-cert) - To check expiration of CA certificate used by Kubernetes api server.
  - [component-status](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/component-status) - To check Kubernetes component status.
  - [event](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/event) - To check Kubernetes Warning events.
  - [json-path](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/json-path) - To check any JSON HTTP response using [jsonpath](https://kubernetes.io/docs/reference/kubectl/jsonpath/).
  - [node-exists](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/node-exists) - To check existence of Kubernetes nodes.
  - [pod-exists](/products/searchlight/8.0.0-rc.0/guides/cluster-alerts/pod-exists) - To check existence of Kubernetes pods.

- Node Alerts
  - [node-status](/products/searchlight/8.0.0-rc.0/guides/node-alerts/node-status) - To check Kubernetes Node status.
  - [node-volume](/products/searchlight/8.0.0-rc.0/guides/node-alerts/node-volume) - To check Node Disk stat.

- Pod Alerts
  - [pod-exec](/products/searchlight/8.0.0-rc.0/guides/pod-alerts/pod-exec) - To check Kubernetes exec command. Returns OK if exit code is zero, otherwise, returns Critical
  - [pod-status](/products/searchlight/8.0.0-rc.0/guides/pod-alerts/pod-status) - To check Kubernetes pod status.
  - [pod-volume](/products/searchlight/8.0.0-rc.0/guides/pod-alerts/pod-volume) - To check Pod volume stat.

- [Supported Notifiers](/products/searchlight/8.0.0-rc.0/guides/notifiers): This article documents how to configure Searchlight to send notifications via Email, SMS or Chat.
