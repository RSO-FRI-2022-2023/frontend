FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

EXPOSE 4200

FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html