pipeline {
    agent any

    stages {
        stage('install dependencies') {
            steps {
                echo 'Building..'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Sonarqube') {
            environment {
                scannerHome = tool 'sonar_scanner'
            }
            steps {
                echo 'SONAR-QUBE SCANNING AND ANALYSIS'
                withSonarQubeEnv('Sonarqube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Build'
                sh 'CI=true npm run start-prod'
            }
        }
        stage('Build') {
            steps {
                echo 'Build'
                // sh 'CI=true npm run start-prod'
            }
        }
    }
}

