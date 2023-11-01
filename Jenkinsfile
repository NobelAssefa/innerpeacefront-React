pipeline {
  agent any
  stages {
    stage('checkOutcode') {
      steps {
        git(url: 'https://github.com/NobelAssefa/innerpeacefront-React', branch: 'new-branch', changelog: true)
      }
    }

  }
}