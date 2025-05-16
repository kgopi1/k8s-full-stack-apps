# K8s Full stack Apps Demo

This repo is for building 3 tier - ToDo Application 
* Frontend using node.js
* Backend using python flask 
* Database using MongoDB Community server 

# Local Development
To test this application locally , run 
```
cd infra
docker compose up -d
```
Access Frontend UI using http://localhost:3000

Access Backend URL using http://localhost:5000/todos 

## Database Persistant Volume 
```
1. Create data directory in infra directory 
2. chmod -R 777 data # RW permissions for everyone local testing only . 
3. This data directory will be mounted in database container. 

```

