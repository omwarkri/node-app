pipeline {
    agent any

    stages {
        stage('Go To App Folder') {
            steps {
                dir('/home/om_warkri/DevOps-Task/Nodejs-project/my-nodejs/my-node-app') {
                    sh '''
                        echo "Installing dependencies..."
                        npm install

                        echo "Starting app in background..."
                        nohup npm start > app.log 2>&1 &
                    '''
                }
            }
        }
    }
}
