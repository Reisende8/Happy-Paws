pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/Reisende8/Happy-Paws.git'
        GIT_BRANCH = 'main' // Specify the branch you want to build
        GIT_CREDENTIALS_ID = 'github' // Replace with your actual credentials ID
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
