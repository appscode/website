---
title: Table of Contents | Guides
description: Table of Contents | Guides
menu:
  product_searchlight_5.1.1:
    identifier: guides-readme
    name: Readme
    parent: guides
    weight: -1
product_name: searchlight
menu_name: product_searchlight_5.1.1
section_menu_id: guides
url: /products/searchlight/5.1.1/guides/
aliases:
- /products/searchlight/5.1.1/guides/README/
info:
  version: 5.1.1
---

# Guides

Guides show you how to perform tasks with Searchlight.

- Cluster Alerts
  - [ca_cert](/products/searchlight/5.1.1/guides/cluster-alerts/ca_cert) - To check expiration of CA certificate used by Kubernetes api server.
  - [component_status](/products/searchlight/5.1.1/guides/cluster-alerts/component_status) - To check Kubernetes component status.
  - [event](/products/searchlight/5.1.1/guides/cluster-alerts/event) - To check Kubernetes Warning events.
  - [json_path](/products/searchlight/5.1.1/guides/cluster-alerts/json_path) - To check any JSON HTTP response using [jq](https://stedolan.github.io/jq/).
  - [node_exists](/products/searchlight/5.1.1/guides/cluster-alerts/node_exists) - To check existence of Kubernetes nodes.
  - [pod_exists](/products/searchlight/5.1.1/guides/cluster-alerts/pod_exists) - To check existence of Kubernetes pods.

- Node Alerts
  - [influx_query](/products/searchlight/5.1.1/guides/node-alerts/influx_query) - To check InfluxDB query result.
  - [node_status](/products/searchlight/5.1.1/guides/node-alerts/node_status) - To check Kubernetes Node status.
  - [node_volume](/products/searchlight/5.1.1/guides/node-alerts/node_volume) - To check Node Disk stat.

- Pod Alerts
  - [influx_query](/products/searchlight/5.1.1/guides/pod-alerts/influx_query) - To check InfluxDB query result.
  - [pod_exec](/products/searchlight/5.1.1/guides/pod-alerts/pod_exec) - To check Kubernetes exec command. Returns OK if exit code is zero, otherwise, returns CRITICAL
  - [pod_status](/products/searchlight/5.1.1/guides/pod-alerts/pod_status) - To check Kubernetes pod status.
  - [pod_volume](/products/searchlight/5.1.1/guides/pod-alerts/pod_volume) - To check Pod volume stat.

- [Supported Notifiers](/products/searchlight/5.1.1/guides/notifiers): This article documents how to configure Searchlight to send notifications via Email, SMS or Chat.
