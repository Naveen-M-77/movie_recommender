# Multi-stage Dockerfile for React application

# 1. Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
# Using npm install to avoid lockfile mismatch errors
RUN npm install

# Copy source code
COPY . .

# Set Node options for legacy OpenSSL provider to support Webpack hash
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build

# 2. Production stage
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
