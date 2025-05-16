FROM node:18

WORKDIR /app
COPY ./src .
ENV API_IP='127.0.0.1'
ENV API_PORT='5000'
RUN npm install
CMD ["node", "server.js"]
LABEL REPO=k8s-full-stack-apps
