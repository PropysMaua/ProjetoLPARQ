FROM node:16-alpine

WORKDIR /usr/src/app
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source


EXPOSE 3000
CMD [ "node", "index.js" ]
