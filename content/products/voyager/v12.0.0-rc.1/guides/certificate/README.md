---
title: Certificate | Voyager
menu:
  product_voyager_v12.0.0-rc.1:
    identifier: readme-certificate
    name: Readme
    parent: certificate-guides
    weight: -1
product_name: voyager
menu_name: product_voyager_v12.0.0-rc.1
section_menu_id: guides
url: /products/voyager/v12.0.0-rc.1/guides/certificate/
aliases:
- /products/voyager/v12.0.0-rc.1/guides/certificate/README/
info:
  version: v12.0.0-rc.1
---

# Guides

Guides show you how to use Voyager's built-in certificate manager to issue free TLS/SSL certificates from Let's Encrypt.

## Features
- Provision free TLS certificates (including wildcard certificates) from Let's Encrypt.
- Manage certificates declaratively using a Kubernetes Custom Resource Definition (CRD).
- Domain validation using ACME http-01 and dns-01 challenges.
- Support for many popular [DNS providers](/products/voyager/v12.0.0-rc.1/guides/certificate/dns/providers).
- Auto Renew certificates.
- Use issued certificates with Ingress to secure communications.

## Next Steps
- [Issue Let's Encrypt certificate using HTTP-01 challenge](/products/voyager/v12.0.0-rc.1/guides/certificate/http/overview)
- DNS-01 challenge providers
  - [Issue Let's Encrypt certificate using AWS Route53](/products/voyager/v12.0.0-rc.1/guides/certificate/dns/route53)
  - [Issue Let's Encrypt certificate using Google Cloud DNS](/products/voyager/v12.0.0-rc.1/guides/certificate/dns/google-cloud)
  - [Supported DNS Challenge Providers](/products/voyager/v12.0.0-rc.1/guides/certificate/dns/providers)
- [Deleting Certificate](/products/voyager/v12.0.0-rc.1/guides/certificate/delete)
- [Frequently Asked Questions](/products/voyager/v12.0.0-rc.1/guides/certificate/faq)