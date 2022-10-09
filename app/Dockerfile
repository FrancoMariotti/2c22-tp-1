FROM node:18

#create app workdir
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

#Bundle app source
COPY ./src . 

EXPOSE 5000

CMD ["node","app.js"]
