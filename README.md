heroku git:remote -a img-anm
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a img-anm