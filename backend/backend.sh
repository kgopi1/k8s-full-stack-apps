docker build . --tag kgopi1/backend
docker run -p 3002:5000 -e MONGODBHOST=172.17.0.3 kgopi1/backend