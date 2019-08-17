---
title: Configure Ingress Annotations
menu:
  product_voyager_7.0.0-rc.1:
    identifier: annotations-configuration
    name: Annotations
    parent: config-ingress
    weight: 1
product_name: voyager
menu_name: product_voyager_7.0.0-rc.1
section_menu_id: guides
---

> New to Voyager? Please start [here](/products/voyager/7.0.0-rc.1/concepts/overview).

# Configure ingress with annotations

Below is the full list of supported annotations:

|  Keys  |   Value   |  Default |
|--------|-----------|----------|
| [ingress.appscode.com/type](/products/voyager/7.0.0-rc.1/concepts/README) | LoadBalancer, HostPort, NodePort, Internal | `LoadBalancer` |
| [ingress.appscode.com/api-schema](/products/voyager/7.0.0-rc.1/concepts/overview) | {APIGroup}/{APIVersion} | `voyager.appscode.com/v1beta1` |
| [ingress.appscode.com/accept-proxy](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/accept-proxy) | bool | `false` |
| [ingress.appscode.com/affinity](/products/voyager/7.0.0-rc.1/guides/ingress/http/sticky-session) | `cookie` | |
| [ingress.appscode.com/session-cookie-hash](/products/voyager/7.0.0-rc.1/guides/ingress/http/sticky-session) | string | |
| [ingress.appscode.com/session-cookie-name](/products/voyager/7.0.0-rc.1/guides/ingress/http/sticky-session) | string | `SERVERID` |
| [ingress.appscode.com/hsts](/products/voyager/7.0.0-rc.1/guides/ingress/http/hsts) | bool | `true` |
| [ingress.appscode.com/hsts-include-subdomains](/products/voyager/7.0.0-rc.1/guides/ingress/http/hsts) | bool | `false` |
| [ingress.appscode.com/hsts-max-age](/products/voyager/7.0.0-rc.1/guides/ingress/http/hsts) | string | `15768000` |
| [ingress.appscode.com/hsts-preload](/products/voyager/7.0.0-rc.1/guides/ingress/http/hsts) | bool | `false` |
| [ingress.appscode.com/use-node-port](/products/voyager/7.0.0-rc.1/concepts/ingress-types/nodeport) | bool | `false` |
| [ingress.appscode.com/enable-cors](/products/voyager/7.0.0-rc.1/guides/ingress/http/cors) | bool | `false` |
| [ingress.appscode.com/cors-allow-headers](/products/voyager/7.0.0-rc.1/guides/ingress/http/cors) | string | `DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization` |
| [ingress.appscode.com/cors-allow-methods](/products/voyager/7.0.0-rc.1/guides/ingress/http/cors) | string | `GET,PUT,POST,DELETE,PATCH,OPTIONS` |
| [ingress.appscode.com/cors-allow-origin](/products/voyager/7.0.0-rc.1/guides/ingress/http/cors) | string | `*` |
| [ingress.appscode.com/default-option](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/default-options) | map | `{"http-server-close": "true", "dontlognull": "true"}` |
| [ingress.appscode.com/default-timeout](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/default-timeouts) | map | `{"connect": "50s", "server": "50s", "client": "50s", "client-fin": "50s", "tunnel": "50s"}` |
| [ingress.appscode.com/auth-type](/products/voyager/7.0.0-rc.1/guides/ingress/security/basic-auth) | `basic` | |
| [ingress.appscode.com/auth-realm](/products/voyager/7.0.0-rc.1/guides/ingress/security/basic-auth) | string | |
| [ingress.appscode.com/auth-secret](/products/voyager/7.0.0-rc.1/guides/ingress/security/basic-auth) | string | |
| [ingress.appscode.com/auth-tls-error-page](/products/voyager/7.0.0-rc.1/guides/ingress/security/tls-auth) | string | |
| [ingress.appscode.com/auth-tls-secret](/products/voyager/7.0.0-rc.1/guides/ingress/security/tls-auth) | string | |
| [ingress.appscode.com/auth-tls-verify-client](/products/voyager/7.0.0-rc.1/guides/ingress/security/tls-auth) | `required` or, `optional` | `required` |
| [ingress.appscode.com/backend-tls](/products/voyager/7.0.0-rc.1/guides/ingress/tls/backend-tls) | string | |
| [ingress.appscode.com/replicas](/products/voyager/7.0.0-rc.1/guides/ingress/scaling) | int | `1` |
| [ingress.appscode.com/backend-weight](/products/voyager/7.0.0-rc.1/guides/ingress/http/blue-green-deployment) | int | |
| [ingress.appscode.com/whitelist-source-range](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/whitelist) | string | |
| [ingress.appscode.com/max-connections](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/max-connections) | int | |
| [ingress.appscode.com/ssl-redirect](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/ssl-redirect) | bool | `true` |
| [ingress.appscode.com/force-ssl-redirect](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/ssl-redirect) | bool | `false` |
| [ingress.appscode.com/limit-connection](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/rate-limit) | int | |
| [ingress.appscode.com/limit-rpm](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/rate-limit) | int | |
| [ingress.appscode.com/limit-rps](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/rate-limit) | int | |
| [ingress.appscode.com/errorfiles](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/error-files) | string | |
| [ingress.appscode.com/proxy-body-size](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/body-size) | int | |
| [ingress.appscode.com/ssl-passthrough](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/ssl-passthrough) | bool | `false` |
| [ingress.appscode.com/rewrite-target](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/rewrite-target) | string | |
| [ingress.appscode.com/keep-source-ip](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/keep-source-ip) | bool | `false` |
| [ingress.appscode.com/load-balancer-ip](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/loadbalancer-ip) | string | |
| [ingress.appscode.com/annotations-pod](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/pod-annotations) | map | |
| [ingress.appscode.com/annotations-service](/products/voyager/7.0.0-rc.1/guides/ingress/configuration/service-annotations) | map | |
| [ingress.appscode.com/stats](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/haproxy-stats) | bool | `false` |
| [ingress.appscode.com/stats-port](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/haproxy-stats) | int | `56789` |
| [ingress.appscode.com/stats-secret-name](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/haproxy-stats) | string | |
| [ingress.appscode.com/monitoring-agent](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/using-coreos-prometheus-operator) | string  |         |
| [ingress.appscode.com/service-monitor-labels](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/using-coreos-prometheus-operator) | map     |         |
| [ingress.appscode.com/service-monitor-namespace](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/using-coreos-prometheus-operator) | string  |         |
| [ingress.appscode.com/service-monitor-endpoint-port](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/using-coreos-prometheus-operator) | integer | 56790   |
| [ingress.appscode.com/service-monitor-endpoint-scrape-interval](/products/voyager/7.0.0-rc.1/guides/ingress/monitoring/using-coreos-prometheus-operator) | string  |         |
| [ingress.appscode.com/use-dns-resolver](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | bool | `false` |
| [ingress.appscode.com/dns-resolver-nameservers](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | string | |
| [ingress.appscode.com/dns-resolver-check-health](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | bool | `true` |
| [ingress.appscode.com/dns-resolver-retries](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | int | `0` |
| [ingress.appscode.com/dns-resolver-timeout](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | map | |
| [ingress.appscode.com/dns-resolver-hold](/products/voyager/7.0.0-rc.1/guides/ingress/http/external-svc#using-external-domain) | map | |
| [ingress.appscode.com/workload-kind](/products/voyager/7.0.0-rc.1/guides/ingress/pod-placement#choosing-workload-kind) | string | `Deployment` |
