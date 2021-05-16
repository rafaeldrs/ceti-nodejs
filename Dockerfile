FROM node:latest

# Creamos una carpeta para la aplicación
WORKDIR /usr/src/app

# Instalamos las dependencias
COPY package*.json ./

RUN npm install

# Copiamos todo el código a la carpeta de la aplicación
COPY . .

# Exponemos el puerto de la aplicación
EXPOSE 5000


CMD [ "npm", "start" ]
