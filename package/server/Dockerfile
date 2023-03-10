# base image
FROM node:14-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# production image
FROM base as production
ENV NODE_ENV=production
CMD ["npm", "start"]

# development image
FROM base as development
ENV NODE_ENV=development
CMD ["npm", "run","start", ]
