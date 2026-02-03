FROM node:22.15.0

COPY . /home/app
WORKDIR /home/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]