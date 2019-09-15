---
title: Ingress | Voyager
menu:
  product_voyager_6.0.0-rc.2:
    identifier: readme-ingress
    name: Readme
    parent: ingress-guides
    weight: -1
product_name: voyager
menu_name: product_voyager_6.0.0-rc.2
section_menu_id: guides
url: /products/voyager/6.0.0-rc.2/guides/ingress/
aliases:
- /products/voyager/6.0.0-rc.2/guides/ingress/README/
info:
  version: 6.0.0-rc.2
---

# Guides

Guides show you how to use Voyager as a Kubernetes Ingress controller.

- HTTP
  - [Exposing Service via Ingress](/products/voyager/6.0.0-rc.2/guides/ingress/http/single-service)
  - [Virtual Hosting](/products/voyager/6.0.0-rc.2/guides/ingress/http/virtual-hosting)
  - [Supports Loadbalancer Source Range](/products/voyager/6.0.0-rc.2/guides/ingress/http/source-range)
  - [URL and Request Header Re-writing](/products/voyager/6.0.0-rc.2/guides/ingress/http/rewrite-rules)
  - [Enable CORS](/products/voyager/6.0.0-rc.2/guides/ingress/http/cors)
  - [Custom HTTP Port](/products/voyager/6.0.0-rc.2/guides/ingress/http/custom-http-port)
  - [Using External Service as Ingress Backend](/products/voyager/6.0.0-rc.2/guides/ingress/http/external-svc)
  - [HSTS](/products/voyager/6.0.0-rc.2/guides/ingress/http/hsts)
  - [Forward Traffic to StatefulSet Pods](/products/voyager/6.0.0-rc.2/guides/ingress/http/statefulset-pod)
  - [Configure Sticky session to Backends](/products/voyager/6.0.0-rc.2/guides/ingress/http/sticky-session)
  - [Blue Green Deployments using weighted Loadbalancing](/products/voyager/6.0.0-rc.2/guides/ingress/http/blue-green-deployment)
- TLS/SSL
  - [TLS Termination](/products/voyager/6.0.0-rc.2/guides/ingress/tls/overview)
  - [Backend TLS](/products/voyager/6.0.0-rc.2/guides/ingress/tls/backend-tls)
  - [Supports AWS certificate manager](/products/voyager/6.0.0-rc.2/guides/ingress/tls/aws-cert-manager)
- TCP
  - [TCP LoadBalancing](/products/voyager/6.0.0-rc.2/guides/ingress/tcp/overview)
- Configuration
  - [Customize generated HAProxy config via BackendRule](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/backend-rule) (can be used for [http rewriting](https://www.haproxy.com/doc/aloha/7.0/haproxy/http_rewriting.html), add [health checks](https://www.haproxy.com/doc/aloha/7.0/haproxy/healthchecks.html), etc.)
  - [Apply Frontend Rules](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/frontend-rule)
  - [Supported Annotations](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/annotations)
  - [Specify NodePort](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/node-port)
  - [Configure global options](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/default-options)
  - [Configure Custom Timeouts for HAProxy](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/default-timeouts)
  - [Using Custom HAProxy Templates](/products/voyager/6.0.0-rc.2/guides/ingress/configuration/custom-templates)
- Security
  - [Configure Basic Auth for HTTP Backends](/products/voyager/6.0.0-rc.2/guides/ingress/security/basic-auth)
  - [TLS Authentication](/products/voyager/6.0.0-rc.2/guides/ingress/security/tls-auth)
- Monitoring
  - [Exposing HAProxy Stats](/products/voyager/6.0.0-rc.2/guides/ingress/monitoring/stats)
- [Scaling Ingress](/products/voyager/6.0.0-rc.2/guides/ingress/scaling)
- [Placement of Ingress Pods](/products/voyager/6.0.0-rc.2/guides/ingress/pod-placement)
