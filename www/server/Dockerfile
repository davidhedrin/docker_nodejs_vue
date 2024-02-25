# Use the official Node.js image as base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]