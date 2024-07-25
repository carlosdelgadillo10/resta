pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'carlosdelgadillo/resta'
        DOCKER_IMAGE_TAG = 'latest'
        KUBECTL_CONFIG = '/home/carlosd/.kube/config' // Ajusta según tu configuración
    }

    stages {

        stage('Deploy to Minikube') {
            steps {
                script {
                    // Configurar kubectl
                    sh 'kubectl config use-context minikube'
                    
                    // Aplicar el archivo de namespace
                    //sh 'kubectl apply -f /home/carlosd/Desktop/p_python/microservices/resta/k8s/namespace.yaml'
                    
                    // Aplicar los archivos de Kubernetes
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                    sh 'kubectl apply -f ingress.yaml'
                }
            }
        }
    }

    post {
        success {
            echo 'Despliegue exitoso.'
        }
        failure {
            echo 'Despliegue fallido.'
        }
    }
}
