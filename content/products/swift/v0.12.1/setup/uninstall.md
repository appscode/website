---
title: Uninstall Swift
description: Swift Uninstall
menu:
  product_swift_v0.12.1:
    identifier: uninstall
    name: Uninstall
    parent: setup
    weight: 20
product_name: swift
menu_name: product_swift_v0.12.1
section_menu_id: setup
info:
  version: v0.12.1
---

# Uninstall Swift
Please follow the steps below to uninstall Swift:

- Delete the various objects created for Swift operator.

```console
$ curl -fsSL https://raw.githubusercontent.com/appscode/swift/{{< param "info.version" >}}/hack/deploy/swift.sh \
    | bash -s -- --uninstall [--namespace=NAMESPACE]

+ kubectl delete deployment -l app=swift -n kube-system
deployment "swift" deleted
+ kubectl delete service -l app=swift -n kube-system
service "swift" deleted
+ kubectl delete serviceaccount -l app=swift -n kube-system
No resources found
+ kubectl delete clusterrolebindings -l app=swift -n kube-system
No resources found
+ kubectl delete clusterrole -l app=swift -n kube-system
No resources found
```

- Now, wait several seconds for Swift to stop running. To confirm that Swift operator pod(s) have stopped running, run:

```console
$ kubectl get pods --all-namespaces -l app=swift
```