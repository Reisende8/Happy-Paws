pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/Reisende8/Happy-Paws.git'
        GIT_BRANCH = 'main' // Specify the branch you want to build
        GIT_CREDENTIALS_ID = 'github' // Use the credentials ID 'github'
        DOCKER_CREDENTIALS_ID = 'dockerhub' // Docker credentials ID
        KUBECONFIG_CREDENTIALS_ID = 'kube' // Kubeconfig credentials ID
        ANSIBLE_CONFIG = 'ansible/ansible.cfg' // Ansible configuration file
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPO_URL}"
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
                   [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                   npm test
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("happy-paws-frontend:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("happy-paws-frontend:${env.BUILD_ID}").push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withCredentials([file(credentialsId: "${KUBECONFIG_CREDENTIALS_ID}", variable: 'KUBECONFIG')]) {
                        ansiblePlaybook(
                            playbook: 'ansible/deploy.yml',
                            inventory: 'ansible/inventory',
                            colorized: true
                        )
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
