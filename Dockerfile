FROM node:12.7-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/b8it148-frontend/b8it148-frontend /usr/share/nginx/html