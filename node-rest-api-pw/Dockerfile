FROM node:8.11.3
LABEL author="Javier ROsales"

# Copy Files
WORKDIR /app
COPY package*.json ./


# Install Packages
#RUN npm install pm2 -g && npm i
RUN npm install 

COPY . .
EXPOSE 3001
# Start Service
CMD ["npm", "start"]