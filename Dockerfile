FROM node:22-alpine AS build

WORKDIR /root/app

COPY . .

RUN npm i -g pnpm \
    && pnpm i \
    && pnpm build

FROM node:22-alpine AS production

EXPOSE 3000

WORKDIR /root/app

COPY --from=build /root/app/build ./build

CMD ["node", "build/index.js"]