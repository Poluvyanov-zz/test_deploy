FROM node:14-alpine as builder

ENV NODE_ENV build

USER root
WORKDIR /home/node

COPY . /home/node

RUN npm ci \
    && npm run build


FROM node:14-alpine

ENV NODE_ENV production

USER root
WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/

RUN npm ci

EXPOSE 3000

CMD ["node", "dist/main"]
