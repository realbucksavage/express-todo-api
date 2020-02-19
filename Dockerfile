FROM node:13-alpine

WORKDIR /app

COPY . ./

RUN npm install && npm prune --production

ENV PORT 9000
ENV NODE_ENV production

EXPOSE $PORT

USER node

CMD ["node", "./bin/www"]