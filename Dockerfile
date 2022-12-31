FROM node:latest as node

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

EXPOSE 4200

FROM --platform=linux/arm64 arm64v8/nginx:latest as nginx-arm64
FROM --platform=linux/amd64 nginx:latest as nginx-amd64

ARG TARGETARCH
# Select final stage based on TARGETARCH ARG
FROM nginx-${TARGETARCH} as nginx
COPY --from=node /app/dist/frontend /usr/share/nginx/html