# VAULT DRAGON TEST SUBMISSION FROM KATE LE

## PREREQUISITE
1. NodeJS (v4.4.7) 
2. Docker Engine (>=1.9) and Docker Compose (>=1.8)

### Currently, we have 2 environments: DEVELOPMENT & DEPLOYMENT

## RUN THE DEVELOPMENT ENVIRONMENT

0. Go to backend directory and follow the instruction to install the app first

1. In your terminal, run the proxy:
```
$ cd /path/to/vault-dragon && ./develop.sh
```

2. Put in your /etc/hosts:
```
127.0.0.1 db
```

3. Open a new tab in your terminal to run the backend:
```
$ cd /path/to/vault-dragon/backend
$ npm run compile && npm start
```

The application should be running on port 5555 of your localhost

# RUN THE DEPLOYMENT ENVIRONMENT

0. Please make sure that you don't have any process running on port 80 and 5000

1. Create a local docker registry
```
$ docker run -d --name local_registry -p 5000:5000 registry:2
```

2. Run
```
$ ./deploy.sh
```

# ACCESSING MONGODB INSIDE DOCKER (DEVELOPMENT ENVIRONMENT ONLY)

1. In the dev ENVIRONMENT
```
$ mongo
```

2. In production ENVIRONMENT
```
$ docker exec -it vault_dragon-development_db_1 bash # this will bring you to the db's docker container
$ mongo # then, inside the container you just need to do this to access the db
```
