FROM node:15-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

CMD ["npm", "run", "start"]