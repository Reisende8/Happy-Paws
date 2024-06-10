pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/Reisende8/Happy-Paws.git'
        GIT_BRANCH = 'main'
        GIT_CREDENTIALS_ID = 'github'
        DOCKER_CREDENTIALS_ID = 'dockerhub'
        KUBECONFIG_CREDENTIALS_ID = 'kube'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPO_URL}"
            }
        }

        stage('Verify Workspace') {
            steps {
                sh 'pwd'
                sh 'ls -R $(pwd)'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                   export NVM_DIR="$HOME/.nvm"
                   [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                   npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                   export NVM_DIR="$HOME/.nvm"
                   [ -s "$NV
