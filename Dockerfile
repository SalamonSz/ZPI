# -------------------------
# ETAP 1: budowanie Angulara
# -------------------------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production


FROM nginx:stable-alpine

COPY --from=build /app/dist/zpi/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
