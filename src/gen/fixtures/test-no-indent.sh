
sudo mkdir -p $(dirname /etc/kubernetes/encryption-config.yaml)
cat <<EOF | sudo tee /etc/kubernetes/encryption-config.yaml

apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: aescbc-key-20250508
      - secretbox:
          keys:
            - name: secretbox-key-20250508
      - identity: {}


EOF
