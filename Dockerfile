# Stage 1: Build the React app
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Express
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the build files and server file
COPY --from=build /app/build /app/build
COPY server.js .

# Install production dependencies
RUN npm install express

# Expose port 80
EXPOSE 80

# Start the application
CMD ["node", "server.js"]

