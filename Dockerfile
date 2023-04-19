FROM node:14-alpine
WORKDIR /app
COPY task.js package*.json ./
Run npm install
COPY . .
EXPOSE 5000
CMD node task.js