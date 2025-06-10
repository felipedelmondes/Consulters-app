# Dockerfile para React (produção)
FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile || npm install
COPY . .
RUN npm run build

# Servir app estático com nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


