import { sh } from "@tmpl/core";

const kubeconfigPath = "/etc/kubernetes/admin.conf";

export default sh`
#!/bin/bash

NODE_NAME=$(hostname)
EXTERNAL_IP=$(hostname -I | tr ' ' '\n' | head -1)

// # 3. Patch node status (run as cluster-admin)
sudo kubectl --kubeconfig ${kubeconfigPath} patch node \${NODE_NAME} \
  --subresource=status \
  --type=json \
  -p="[{'op':'add','path':'/status/addresses/-','value':{'type':'ExternalIP','address':'\${EXTERNAL_IP}'}}]"

# 4. Remove cloud provider taint
sudo kubectl --kubeconfig ${kubeconfigPath} taint node \${NODE_NAME} node.cloudprovider.kubernetes.io/uninitialized-
`;