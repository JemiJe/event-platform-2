# Use a lightweight Node.js 18 Alpine image
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package files first for caching and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Create a non-root user and adjust ownership for better security
RUN addgroup app && adduser -S -G app app && chown -R app:app /app
USER app

# Expose the necessary port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]