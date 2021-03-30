FROM node:10-alpine

# Sets the working dir for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions. 
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
