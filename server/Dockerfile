# Setup and build the client

FROM node:18.6.0 as client

WORKDIR /Users/jonathan.friedberg/Desktop/weather-yt/client/
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Setup the server

FROM node:18.6.0

WORKDIR /Users/jonathan.friedberg/Desktop/weather-yt/
COPY --from=client /Users/jonathan.friedberg/Desktop/weather-yt/client/build/ ./client/build

WORKDIR /Users/jonathan.friedberg/Desktop/weather-yt/server/
COPY server/package*.json /Users/jonathan.friedberg/Desktop/weather-yt/
RUN npm
COPY server/ ./

EXPOSE 5000
CMD ["npm", "start"]