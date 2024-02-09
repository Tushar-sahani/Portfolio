FROM node:alpine3.19 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
WORKDIR /usr/share/ngin/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]