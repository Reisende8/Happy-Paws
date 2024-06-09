pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/Reisende8/Happy-Paws.git'
        GIT_BRANCH = 'main' // Specify the branch you want to build
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO_URL}"
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
