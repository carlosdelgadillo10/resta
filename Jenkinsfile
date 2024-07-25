pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'carlosdelgadillo/resta'
        DOCKER_IMAGE_TAG = 'latest'
        KUBECTL_CONFIG = '/home/carlosd/.kube/config' // Ajusta según tu configuración
    }

    stages {

        stage('Apply Kubernetes Files') {
            steps {
                withKubeConfig([credentialsId: 'mykubeconfig']) {
                //sh 'cat deployment.yaml | sed "s/{{BUILD_NUMBER}}/$BUILD_NUMBER/g" | kubectl apply -f -'
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f ../k8s/service.yaml'
                sh 'kubectl apply -f ../k8s/ingress.yaml'
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
