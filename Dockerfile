FROM node:latest
WORKDIR /randomDog
COPY package.json /randomDog/
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 3000
CMD ["npm","start", "ng", "serve", "--host", "0.0.0.0"]

