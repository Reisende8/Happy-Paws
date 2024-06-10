# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Ensure we move the index.html to the expected public folder
RUN mkdir -p public && cp pages/home/index.html public/

RUN npm run build

# Stage 2: Serve the app with Express
FROM node:14

WORKDIR /app

COPY --from=build /app/build /app/build
COPY --from=build /app/server.js .
COPY --from=build /app/package*.json ./

RUN npm install --only=prod

EXPOSE 80

CMD ["node", "server.js"]
