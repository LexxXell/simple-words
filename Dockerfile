# Use Node.js image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy other project files
COPY . .

# Specify port to use
EXPOSE 5000

# Command to run application
CMD ["node", "src/app.js"]
