pipeline {
  agent { label 'slave' }
  tools {
    jdk 'Java17' 
    maven 'Maven3'
  }
  stages {
    stage("Cleanup Workspace"){
      steps {
        cleanWs()
      }
    }
    stage ('Checkout from SCM'){
      steps {
        git branch: 'main', credentialsId: 'github', url: 'https://github.com/Reisende8/Happy-Paws.git'
      }
    }
    stage('Build Aoplication'){
      steps {
        sh "mvn clean package"
      }
    }
    stage('Test Application'){
      steps {
        sh "mvn test"
      }
    }
    
  }
}
  
