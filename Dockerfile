FROM node:14
WORKDIR /app/otwoapi
COPY package*.json .
RUN npm install
COPY tsconfig.json .
COPY src/ ./src/
RUN npm run compile
EXPOSE 3000
CMD node ./build/otwo