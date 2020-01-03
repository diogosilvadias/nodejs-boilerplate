FROM node:12.13.0

WORKDIR /var/app

COPY package.json .

RUN npm install --only=production

COPY . .

CMD ["npm", "start"]