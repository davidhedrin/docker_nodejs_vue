# Use the official Node.js image with a specified version as the base image
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
EXPOSE 5172

# Run the build script during container build
RUN npm run build

# Expose the port that the application will run on
# EXPOSE 5172

# Run the preview command after the build
# CMD /bin/sh -c "npm run preview"
CMD ["npm", "run", "preview"]