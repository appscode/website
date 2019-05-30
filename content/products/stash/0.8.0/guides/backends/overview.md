---
title: Backend Overview | Stash
description: An overview of backends used by Stash to store snapshot data.
menu:
  product_stash_0.8.0:
    identifier: backend-overview
    name: What is Backend?
    parent: backend
    weight: 10
product_name: stash
menu_name: product_stash_0.8.0
section_menu_id: guides
---

> New to Stash? Please start [here](/products/stash/0.8.0/concepts/README).

# Stash Backends

Backend is where Stash stores backup snapshots. It can be a cloud storage like GCS bucket, AWS S3, Azure Blob Storage etc. or a Kubernetes persistent volume like [HostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath), [PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim), [NFS](https://kubernetes.io/docs/concepts/storage/volumes/#nfs) etc. Below diagram show how Stash sidecar container access and store backup data into a backend storage.

<p align="center">
  <img alt="Stash Backup Overview" height="350px", src="/products/stash/0.8.0/images/backup-overview.png">
</p>

Stash sidecar container receive backend information from `spec.backend` field of [Restic](/products/stash/0.8.0/concepts/crds/restic) crd. It obtains necessary credentials to access the backend from the secret specified in `spec.backend.storageSecretName` field of Restic crd. Then on first backup schedule, Stash initialize a repository in the backend.

Below, a screenshot that show a repository created at AWS S3 bucket named `stash-qa` for a Deployment named `stash-demo`.

<p align="center">
  <img alt="Repository in AWS S3 Backend", src="/products/stash/0.8.0/images/platforms/eks/s3-backup-repository.png">
</p>

You will see all snapshots taken by Stash at `/snapshot` directory of this repository.

> Note: Stash keeps all backup data encrypted. So, snapshot files in the bucket will not contain any meaningful data until they are decrypted.

Stash creates a [Repository](/products/stash/0.8.0/concepts/crds/repository) crd that represents original repository in backend in Kubernetes native way. It holds information like number of backup snapshot taken, time when last backup was taken etc.

In order to use a backend, you have to configure `Restic` crd and create a `Secret` with necessary credentials.

## Next Steps

- Learn how to configure `local` backend from [here](/products/stash/0.8.0/guides/backends/local).
- Learn how to configure `AWS S3` backend from [here](/products/stash/0.8.0/guides/backends/s3).
- Learn how to configure `Google Cloud Storage (GCS)` backend from [here](/products/stash/0.8.0/guides/backends/gcs).
- Learn how to configure `Microsoft Azure Storage` backend from [here](/products/stash/0.8.0/guides/backends/azure).
- Learn how to configure `OpenStack Swift` backend from [here](/products/stash/0.8.0/guides/backends/swift).
- Learn how to configure `Backblaze B2` backend from [here](/products/stash/0.8.0/guides/backends/b2).