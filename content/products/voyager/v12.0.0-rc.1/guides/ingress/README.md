---
title: Ingress | Voyager
menu:
  product_voyager_v12.0.0-rc.1:
    identifier: readme-ingress
    name: Readme
    parent: ingress-guides
    weight: -1
product_name: voyager
menu_name: product_voyager_v12.0.0-rc.1
section_menu_id: guides
url: /products/voyager/v12.0.0-rc.1/guides/ingress/
aliases:
- /products/voyager/v12.0.0-rc.1/guides/ingress/README/
info:
  version: v12.0.0-rc.1
---

# Guides

Guides show you how to use Voyager as a Kubernetes Ingress controller.

- HTTP
  - [Exposing Service via Ingress](/products/voyager/v12.0.0-rc.1/guides/ingress/http/single-service)
  - [Virtual Hosting](/products/voyager/v12.0.0-rc.1/guides/ingress/http/virtual-hosting)
  - [Supports Loadbalancer Source Range](/products/voyager/v12.0.0-rc.1/guides/ingress/http/source-range)
  - [URL and Request Header Re-writing](/products/voyager/v12.0.0-rc.1/guides/ingress/http/rewrite-rules)
  - [Enable CORS](/products/voyager/v12.0.0-rc.1/guides/ingress/http/cors)
  - [Custom HTTP Port](/products/voyager/v12.0.0-rc.1/guides/ingress/http/custom-http-port)
  - [Using External Service as Ingress Backend](/products/voyager/v12.0.0-rc.1/guides/ingress/http/external-svc)
  - [HSTS](/products/voyager/v12.0.0-rc.1/guides/ingress/http/hsts)
  - [Forward Traffic to StatefulSet Pods](/products/voyager/v12.0.0-rc.1/guides/ingress/http/statefulset-pod)
  - [Configure Sticky session to Backends](/products/voyager/v12.0.0-rc.1/guides/ingress/http/sticky-session)
  - [Blue Green Deployments using weighted Loadbalancing](/products/voyager/v12.0.0-rc.1/guides/ingress/http/blue-green-deployment)
- TLS/SSL
  - [TLS Termination](/products/voyager/v12.0.0-rc.1/guides/ingress/tls/overview)
  - [Multiple TLS Entries](/products/voyager/v12.0.0-rc.1/guides/ingress/tls/multiple-tls)
  - [Backend TLS](/products/voyager/v12.0.0-rc.1/guides/ingress/tls/backend-tls)
  - [Supports AWS certificate manager](/products/voyager/v12.0.0-rc.1/guides/ingress/tls/aws-cert-manager)
- TCP
  - [TCP LoadBalancing](/products/voyager/v12.0.0-rc.1/guides/ingress/tcp/overview)
  - [TCP SNI](/products/voyager/v12.0.0-rc.1/guides/ingress/tcp/tcp-sni)
- Configuration
  - [Customize generated HAProxy config via BackendRule](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/backend-rule) (can be used for [http rewriting](https://www.haproxy.com/doc/aloha/7.0/haproxy/http_rewriting.html), add [health checks](https://www.haproxy.com/doc/aloha/7.0/haproxy/healthchecks.html), etc.)
  - [Apply Frontend Rules](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/frontend-rule)
  - [Supported Annotations](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/annotations)
  - [Specify NodePort](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/node-port)
  - [Configure global options](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/default-options)
  - [Configure Custom Timeouts for HAProxy](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/default-timeouts)
  - [Configure Load balancing algorithm](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/loadbalance-algorithm)
  - [Using Custom HAProxy Templates](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/custom-templates)
  - [Using Additional Configuration Files](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/config-volumes)
  - [Using HTTP/2 and gRPC](/products/voyager/v12.0.0-rc.1/guides/ingress/configuration/http-2)
- Security
  - [Configure Basic Auth for HTTP Backends](/products/voyager/v12.0.0-rc.1/guides/ingress/security/basic-auth)
  - [Configure External Auth for HTTP Backends](/products/voyager/v12.0.0-rc.1/guides/ingress/security/oauth)
  - [TLS Authentication](/products/voyager/v12.0.0-rc.1/guides/ingress/security/tls-auth)
- Monitoring
  - [Exposing HAProxy Stats](/products/voyager/v12.0.0-rc.1/guides/ingress/monitoring/haproxy-stats)
- [Scaling Ingress](/products/voyager/v12.0.0-rc.1/guides/ingress/scaling)
- [Placement of Ingress Pods](/products/voyager/v12.0.0-rc.1/guides/ingress/pod-placement)
- [Avoid 503 with Graceful Server Shutdown](/products/voyager/v12.0.0-rc.1/guides/ingress/graceful-reload)