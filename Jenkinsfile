pipeline {
    agent any
    environment {
        KUBECONFIG_CREDENTIALS = credentials('k8s-jenkins-token') // ID de las credenciales que creaste en Jenkins
    }
    stages {
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([string(credentialsId: 'k8s-jenkins-token', variable: 'TOKEN')]) {
                    script {
                        // Configurar el contexto de Kubernetes con el token
                        sh '''
                        kubectl config set-credentials jenkins --token=$TOKEN
                        kubectl config set-context jenkins-context --cluster=minikube --user=jenkins --namespace=resta
                        kubectl config use-context jenkins-context
                        '''

                        // Aplicar los archivos YAML desde la carpeta k8s
                        sh '''
                        kubectl apply -f k8s/namespace.yaml
                        kubectl apply -f k8s/deployment.yaml
                        kubectl apply -f k8s/service.yaml
                        kubectl apply -f k8s/ingress.yaml
                        '''
                    }
                }
            }
        }
    }
}
