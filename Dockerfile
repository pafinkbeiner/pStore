FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# building your code for production
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 5000

# Start Service
CMD [ "node", "build/index.js" ]

# docker build . -t <your username>/node-web-app
# docker images
# docker run -p 49160:5000 -d <your username>/node-web-app