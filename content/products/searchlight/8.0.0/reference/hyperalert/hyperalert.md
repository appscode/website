---
title: Hyperalert
menu:
  product_searchlight_8.0.0:
    identifier: hyperalert
    name: Hyperalert
    parent: hyperalert-cli
    weight: 0
product_name: searchlight
section_menu_id: reference
menu_name: product_searchlight_8.0.0
url: /products/searchlight/8.0.0/reference/hyperalert/
aliases:
- /products/searchlight/8.0.0/reference/hyperalert/hyperalert/
info:
  version: 8.0.0
---

## hyperalert

AppsCode Icinga2 plugin

### Synopsis

AppsCode Icinga2 plugin

```
hyperalert [flags]
```

### Options

```
      --alsologtostderr                  log to standard error as well as files
      --bypass-validating-webhook-xray   if true, bypasses validating webhook xray checks
      --context string                   Use the context in kubeconfig
  -h, --help                             help for hyperalert
      --icinga.checkInterval int         Icinga check_interval in second. [Format: 30, 300] (default 30)
      --kubeconfig string                Path to kubeconfig file with authorization information (the master location is set by the master flag).
      --log-flush-frequency duration     Maximum number of seconds between log flushes (default 5s)
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files
      --stderrthreshold severity         logs at or above this threshold go to stderr
      --use-kubeapiserver-fqdn-for-aks   if true, uses kube-apiserver FQDN for AKS cluster to workaround https://github.com/Azure/AKS/issues/522 (default true)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging
```

### SEE ALSO

* [hyperalert analytics_id](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_analytics_id)	 - 
* [hyperalert check_ca_cert](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_ca_cert)	 - Check Certificate expire date
* [hyperalert check_cert](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_cert)	 - Check Certificate expire date
* [hyperalert check_component_status](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_component_status)	 - Check Kubernetes Component Status
* [hyperalert check_env](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_env)	 - 
* [hyperalert check_event](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_event)	 - Check kubernetes events for all namespaces
* [hyperalert check_json_path](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_json_path)	 - Check Json Object
* [hyperalert check_node_exists](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_node_exists)	 - Count Kubernetes Nodes
* [hyperalert check_node_status](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_node_status)	 - Check Kubernetes Node
* [hyperalert check_pod_exec](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_pod_exec)	 - Check exit code of exec command on Kubernetes container
* [hyperalert check_pod_exists](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_pod_exists)	 - Check Kubernetes Pod(s)
* [hyperalert check_pod_status](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_pod_status)	 - Check Kubernetes Pod(s) status
* [hyperalert check_volume](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_volume)	 - Check kubernetes volume
* [hyperalert check_webhook](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_check_webhook)	 - Check webhook result
* [hyperalert notifier](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_notifier)	 - AppsCode Icinga2 Notifier
* [hyperalert version](/products/searchlight/8.0.0/reference/hyperalert/hyperalert_version)	 - Prints binary version number.


