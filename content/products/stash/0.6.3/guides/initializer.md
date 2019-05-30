---
title: Workload Initializer | Stash
description: Workload Initializer
menu:
  product_stash_0.6.3:
    identifier: initializer-stash
    name: Workload Initializer
    parent: guides
    weight: 35
product_name: stash
menu_name: product_stash_0.6.3
section_menu_id: guides
---

> New to Stash? Please start [here](/products/stash/0.6.3/concepts/README).

# Workload Initializer

Stash operator can be used as a workload [initializer](https://kubernetes.io/docs/admin/extensible-admission-controllers/#initializers). For this you need to create a `InitializerConfiguration` with initializer named `stash.appscode.com`. _Please note that, this uses an alpha feature of Kubernetes_.

```console
$ kubectl apply -f ./hack/deploy/initializer.yaml
initializerconfiguration "stash-initializer-config" created
```

```yaml
apiVersion: admissionregistration.k8s.io/v1alpha1
kind: InitializerConfiguration
metadata:
  labels:
    app: stash
  name: stash-initializer
initializers:
- name: stash.appscode.com
  rules:
  - apiGroups:
    - "*"
    apiVersions:
    - "*"
    resources:
    - daemonsets
    - deployments
    - replicasets
    - replicationcontrollers
    - statefulsets
```

This is helpful when you create `Restic` before creating workload objects. This allows stash operator to initialize the target workloads by adding sidecar or, init-container before workload-pods are created. Thus stash operator does not need to delete workload pods for applying changes.

This is particularly helpful for workload kind `StatefulSet`, since kubernetes does not adding sidecar / init containers to StatefulSets after they are created.

## Next Steps

- Learn how to use Stash to backup a Kubernetes deployment [here](/products/stash/0.6.3/guides/backup).
- Learn about the details of Restic CRD [here](/products/stash/0.6.3/concepts/crds/restic).
- To restore a backup see [here](/products/stash/0.6.3/guides/restore).
- Learn about the details of Recovery CRD [here](/products/stash/0.6.3/concepts/crds/recovery).
- To run backup in offline mode see [here](/products/stash/0.6.3/guides/offline_backup)
- See the list of supported backends and how to configure them [here](/products/stash/0.6.3/guides/backends).
- See working examples for supported workload types [here](/products/stash/0.6.3/guides/workloads).
- Thinking about monitoring your backup operations? Stash works [out-of-the-box with Prometheus](/products/stash/0.6.3/guides/monitoring).
- Learn about how to configure [RBAC roles](/products/stash/0.6.3/guides/rbac).
- Want to hack on Stash? Check our [contribution guidelines](/products/stash/0.6.3/CONTRIBUTING).