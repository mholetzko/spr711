# syntax=docker/dockerfile:1

FROM node:15.14.0
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g typescript
RUN npm install --production
COPY . .
COPY ./src/season.json .
RUN tsc -p tsconfig.json

CMD [ "npm","start"]