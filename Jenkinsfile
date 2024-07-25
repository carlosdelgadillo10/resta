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
                    //sh 'kubectl config use-context minikube'
                    
                    // Aplicar el archivo de namespace
                    //sh 'kubectl apply -f /home/carlosd/Desktop/p_python/microservices/resta/k8s/namespace.yaml'
                    
                    // Aplicar los archivos de Kubernetes
                    sh 'kubectl apply -f deployment.yaml'
                    //sh 'kubectl apply -f https://raw.githubusercontent.com/carlosdelgadillo10/resta/main/k8s/service.yaml'
                    //sh 'kubectl apply -f https://raw.githubusercontent.com/carlosdelgadillo10/resta/main/k8s/ingress.yaml'
                }
            }
        }
        stage('Stage1') {
            steps {
                    script {
                    def datas = readYaml file: 'deployment.yml'
                    echo "Got version as ${datas.version} "
                    }
                    echo "Deploying to ${params.DEPLOY_ENV} with debug=${params.DEBUG_BUILD}"
                }
            }
        stage('Stage 2') {
            steps {
                 sh 'kubectl apply -f deployment.yaml'
            //sh 'run.sh datas.version'
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
