minikube start
docker build back-end/mss_gerenciamento_usuarios/. -t lparq-mss_gerenciamento_usuarios
minikube image load lparq-mss_gerenciamento_usuarios
kubectl apply -f mss_gerenciamento_usuarios.yaml

docker build back-end/mss_busca/. -t lparq-mss_busca
minikube image load lparq-mss_busca
kubectl apply -f mss_busca.yaml

