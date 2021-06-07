FROM node:12

WORKDIR /auth0-yargs-issue

COPY . .

RUN npm install

CMD "node" "index.js" "--bark"