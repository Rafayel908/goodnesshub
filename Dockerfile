#stage 1
FROM node:latest as node
WORKDIR /app
COPY app .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/goodnesshub /usr/share/nginx/html