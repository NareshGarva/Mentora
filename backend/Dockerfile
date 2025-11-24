FROM node:22-alpine

WORKDIR /MentoraBackend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]