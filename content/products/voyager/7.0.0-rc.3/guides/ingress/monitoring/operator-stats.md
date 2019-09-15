---
title: Monitoring Voyager operator
menu:
  product_voyager_7.0.0-rc.3:
    identifier: operator-stats-monitoring
    name: Monitoring Voyager operator
    parent: monitoring-ingress
    weight: 25
product_name: voyager
menu_name: product_voyager_7.0.0-rc.3
section_menu_id: guides
info:
  version: 7.0.0-rc.3
---

> New to Voyager? Please start [here](/products/voyager/7.0.0-rc.3/concepts/overview).

# Monitoring Voyager operator

Voyager operator exposes Prometheus ready metrics via the following endpoints on port `:56790`:

- `/metrics`: Scrape this to monitor operator.

To change the port, use `--ops-address` flag on Voyager opreator.
