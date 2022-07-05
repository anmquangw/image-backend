$ heroku git:remote -a img-anm
$ git add .
$ git commit -am "make it better"
$ git push heroku master
$ heroku git:remote -a img-anm

https://elements.heroku.com/buildpacks/unfold/heroku-buildpack-pnpm
heroku buildpacks:set https://github.com/unfold/heroku-buildpack-pnpm

NPM_CONFIG_PRODUCTION=false
NPM_CONFIG_LOGLEVEL=error
NODE_VERBOSE=false
NODE_ENV=production
NODE_MODULES_CACHE=true

pnpm i @nestjs/mongoose mongoose
pnpm i @nestjs/config
pnpm i class-validator class-transformer
