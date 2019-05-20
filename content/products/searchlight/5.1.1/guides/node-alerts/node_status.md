---
title: Node Status
menu:
  product_searchlight_5.1.1:
    identifier: node-status
    name: Node Status
    parent: node-alert
    weight: 25
product_name: searchlight
menu_name: product_searchlight_5.1.1
section_menu_id: guides
---

> New to Searchlight? Please start [here](/products/searchlight/5.1.1/concepts/README).

# Check node_status

Check command `node_status` is used to check status of Kubernetes Nodes. Returns OK if a node is `Ready`, otherwise, returns CRITICAL.

## Spec
`node_status` check command has no variables. Execution of this command can result in following states:

- OK
- CRITICAL
- UNKNOWN


## Tutorial

### Before You Begin
At first, you need to have a Kubernetes cluster, and the kubectl command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using [Minikube](https://github.com/kubernetes/minikube).

Now, install Searchlight operator in your cluster following the steps [here](/products/searchlight/5.1.1/setup/install).

To keep things isolated, this tutorial uses a separate namespace called `demo` throughout this tutorial. Run the following command to prepare your cluster for this tutorial:

```console
$ kubectl create namespace demo
namespace "demo" created

$ kubectl get namespaces
NAME          STATUS    AGE
default       Active    6h
kube-public   Active    6h
kube-system   Active    6h
demo          Active    4m
```

### Check status of all nodes
In this tutorial, we are going to create a NodeAlert to check status of all nodes.
```yaml
$ cat ./docs/examples/node-alerts/node_status/demo-0.yaml

apiVersion: monitoring.appscode.com/v1alpha1
kind: NodeAlert
metadata:
  name: node-status-demo-0
  namespace: demo
spec:
  check: node_status
  checkInterval: 30s
  alertInterval: 2m
  notifierSecretName: notifier-config
  receivers:
  - notifier: Mailgun
    state: CRITICAL
    to: ["ops@example.com"]
```
```console
$ kubectl apply -f ./docs/examples/node-alerts/node_status/demo-0.yaml
nodealert "node-status-demo-0" created

$ kubectl describe nodealert -n demo node-status-demo-0
Name:		node-status-demo-0
Namespace:	demo
Labels:		<none>
Events:
  FirstSeen	LastSeen	Count	From			SubObjectPath	Type		Reason		Message
  ---------	--------	-----	----			-------------	--------	------		-------
  6s		6s		1	Searchlight operator			Normal		SuccessfulSync	Applied NodeAlert: "node-status-demo-0"
```

Voila! `node_status` command has been synced to Icinga2. Please visit [here](/products/searchlight/5.1.1/guides/notifiers) to learn how to configure notifier secret. Now, open IcingaWeb2 in your browser. You should see a Icinga host `demo@node@minikube` and Icinga service `node-status-demo-0`.

![check-all-nodes](/products/searchlight/5.1.1/images/node-alerts/node_status/demo-0.png)


### Check status of nodes with matching labels
In this tutorial, a NodeAlert will be used check status of nodes with matching labels by setting `spec.selector` field.

```yaml
$ cat ./docs/examples/node-alerts/node_status/demo-1.yaml

apiVersion: monitoring.appscode.com/v1alpha1
kind: NodeAlert
metadata:
  name: node-status-demo-1
  namespace: demo
spec:
  check: node_status
  selector:
    beta.kubernetes.io/os: linux
  checkInterval: 30s
  alertInterval: 2m
  notifierSecretName: notifier-config
  receivers:
  - notifier: Mailgun
    state: CRITICAL
    to: ["ops@example.com"]
```
```console
$ kubectl apply -f ./docs/examples/node-alerts/node_status/demo-1.yaml
nodealert "node-status-demo-1" created

$ kubectl describe nodealert -n demo node-status-demo-1
Name:		node-status-demo-1
Namespace:	demo
Labels:		<none>
Events:
  FirstSeen	LastSeen	Count	From			SubObjectPath	Type		Reason		Message
  ---------	--------	-----	----			-------------	--------	------		-------
  33s		33s		1	Searchlight operator			Normal		SuccessfulSync	Applied NodeAlert: "node-status-demo-1"
```
![check-by-node-label](/products/searchlight/5.1.1/images/node-alerts/node_status/demo-1.png)


### Check status of a specific node
In this tutorial, a NodeAlert will be used check status of a node by name by setting `spec.nodeName` field.

```yaml
$ cat ./docs/examples/node-alerts/node_status/demo-2.yaml

apiVersion: monitoring.appscode.com/v1alpha1
kind: NodeAlert
metadata:
  name: node-status-demo-2
  namespace: demo
spec:
  check: node_status
  nodeName: minikube
  checkInterval: 30s
  alertInterval: 2m
  notifierSecretName: notifier-config
  receivers:
  - notifier: Mailgun
    state: CRITICAL
    to: ["ops@example.com"]
```

```console
$ kubectl apply -f ./docs/examples/node-alerts/node_status/demo-2.yaml
nodealert "node-status-demo-2" created

$ kubectl describe nodealert -n demo node-status-demo-2
Name:		node-status-demo-2
Namespace:	demo
Labels:		<none>
Events:
  FirstSeen	LastSeen	Count	From			SubObjectPath	Type		Reason		Message
  ---------	--------	-----	----			-------------	--------	------		-------
  22s		22s		1	Searchlight operator			Normal		SuccessfulSync	Applied NodeAlert: "node-status-demo-2"
```
![check-by-node-name](/products/searchlight/5.1.1/images/node-alerts/node_status/demo-2.png)


### Cleaning up
To cleanup the Kubernetes resources created by this tutorial, run:
```console
$ kubectl delete ns demo
```

If you would like to uninstall Searchlight operator, please follow the steps [here](/products/searchlight/5.1.1/setup/uninstall).


## Next Steps
 - To periodically run various checks on a Kubernetes cluster, use [ClusterAlerts](/products/searchlight/5.1.1/concepts/alert-types/cluster-alert).
 - To periodically run various checks on pods in a Kubernetes cluster, use [PodAlerts](/products/searchlight/5.1.1/concepts/alert-types/pod-alert).
 - See the list of supported notifiers [here](/products/searchlight/5.1.1/guides/notifiers).
 - Wondering what features are coming next? Please visit [here](/products/searchlight/5.1.1/roadmap).
 - Want to hack on Searchlight? Check our [contribution guidelines](/products/searchlight/5.1.1/CONTRIBUTING).
