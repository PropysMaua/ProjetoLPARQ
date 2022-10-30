minikube start
docker build back-end/mss_gerenciamento_usuarios/. -t lparq-mss_gerenciamento_usuarios
minikube image load lparq-mss_gerenciamento_usuarios
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

