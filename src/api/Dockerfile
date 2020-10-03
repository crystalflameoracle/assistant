FROM node:11-alpine

WORKDIR /api

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g nodemon
EXPOSE 4000

CMD [ "nodemon", "server.js" ]
