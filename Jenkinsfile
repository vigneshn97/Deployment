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
        // stage('Sonarqube') {
        //     environment {
        //         scannerHome = tool 'sonar_scanner'
        //     }
        //     steps {
        //         echo 'SONAR-QUBE SCANNING AND ANALYSIS'
        //         withSonarQubeEnv('Sonarqube') {
        //             sh "${scannerHome}/bin/sonar-scanner"
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                echo 'Build'
                sh 'npm run build'
            }
        }
//         stage('Publishing artifacts'){
//             steps {
//                 sshPublisher(publishers: [sshPublisherDesc(configName: 'deployAssignment', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''killall node 
// npm i
// npm run start-prod &''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist, public, config, package.json, package-lock.json')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
//             }
//         }
    }
}

