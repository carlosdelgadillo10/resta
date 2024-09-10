@Library('gitcheck') _

pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "carlosdelgadillo/resta"
        DOCKER_TAG = "latest"
        DOCKERHUB_CREDENTIALS_ID = "docker-hub-credentials"
        DOCKERHUB_REPO = "carlosdelgadillo/resta"
    }
    stages {
        stage('Greeting') {
            steps {
                gitcheck('World') // Usando la función de saludo
            }
        }
        stage('Push image') {
            steps {
                pushDockerImage(DOCKERHUB_CREDENTIALS_ID, DOCKER_IMAGE, DOCKER_TAG, DOCKERHUB_REPO)
            }
        }
    }
}
