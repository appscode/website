---
title: Monitoring | Stash
description: monitoring of Stash
menu:
  product_stash_0.7.0-rc.5:
    identifier: monitoring-stash
    name: Monitoring
    parent: guides
    weight: 45
product_name: stash
menu_name: product_stash_0.7.0-rc.5
section_menu_id: guides
---

> New to Stash? Please start [here](/products/stash/0.7.0-rc.5/concepts/README).

# Monitoring Stash

Stash has native support for monitoring via Prometheus.

## Monitoring Stash Operator
Stash operator exposes Prometheus native monitoring data via `/metrics` endpoint on `:56790` port. You can setup a [CoreOS Prometheus ServiceMonitor](https://github.com/coreos/prometheus-operator) using `stash-operator` service.

## Monitoring Backup Operation
Since backup operations are run as cron jobs, Stash can use [Prometheus Pushgateway](https://github.com/prometheus/pushgateway) cache metrics for backup operation. The installation scripts for Stash operator deploys a Prometheus Pushgateway as a sidecar container. You can configure a Prometheus server to scrape this Pushgateway via `stash-operator` service on port `:56789`. Backup operations send the following metrics to this Pushgateway:

 - `restic_session_success{job="<restic.namespace>-<restic.name>", app="<workload>"}`: Indicates if session was successfully completed
 - `restic_session_fail{job="<restic.namespace>-<restic.name>", app="<workload>"}`: Indicates if session failed
 - `restic_session_duration_seconds_total{job="<restic.namespace>-<restic.name>", app="<workload>"}`: Total seconds taken to complete restic session
 - `restic_session_duration_seconds{job="<restic.namespace>-<restic.name>", app="<workload>", filegroup="dir1", op="backup|forget"}`: Total seconds taken to complete restic session

## Grafana Dashboard
The dashboard can be downloaded directly [from the repo](/contrib/monitoring/Grafana%20-%20Stash%20-%20Backup%20Overview.json) or from [Grafana.com](https://grafana.com/dashboards/4198).
You can import the dashboard JSON file or through Grafana.com import by ID `4198`.

The dashboard looks like this:
![Stash - Backup Overview - Grafana Dashboard](/products/stash/0.7.0-rc.5/images/grafana/dashboard-stash-backup-overview.png)

## Next Steps

- Learn how to use Stash to backup a Kubernetes deployment [here](/products/stash/0.7.0-rc.5/guides/backup).
- Learn about the details of Restic CRD [here](/products/stash/0.7.0-rc.5/concepts/crds/restic).
- To restore a backup see [here](/products/stash/0.7.0-rc.5/guides/restore).
- Learn about the details of Recovery CRD [here](/products/stash/0.7.0-rc.5/concepts/crds/recovery).
- To run backup in offline mode see [here](/products/stash/0.7.0-rc.5/guides/offline_backup)
- See the list of supported backends and how to configure them [here](/products/stash/0.7.0-rc.5/guides/backends).
- See working examples for supported workload types [here](/products/stash/0.7.0-rc.5/guides/workloads).
- Learn about how to configure [RBAC roles](/products/stash/0.7.0-rc.5/guides/rbac).
- Want to hack on Stash? Check our [contribution guidelines](/products/stash/0.7.0-rc.5/CONTRIBUTING).