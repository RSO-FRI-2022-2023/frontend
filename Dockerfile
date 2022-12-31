FROM node:18.12-alpine as node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

EXPOSE 4200

FROM --platform=linux/arm64 arm64v8/nginx:alpine as stage-arm64
FROM --platform=linux/amd64 nginx:alpine as stage-amd64

ARG TARGETARCH
# Select final stage based on TARGETARCH ARG
FROM stage-${TARGETARCH} as final
COPY --from=node ./app/dist/frontend /usr/share/nginx/html