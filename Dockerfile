FROM node

RUN mkdir -p /andre/dh/avanade/src/app

WORKDIR /andre/dh/avanade/src/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node", "index.js"]