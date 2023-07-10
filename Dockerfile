#Stage 1
FROM node:17-alpine as builder
WORKDIR /app/frontend
RUN npm i --location=global @ionic/cli
COPY ./frontend/package.json .
RUN npm i
COPY ./frontend/ .
EXPOSE 8100
CMD ["npm", "start"]   