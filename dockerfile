# Build Stage 1
# This build created a staging docker image
#
FROM node:15.5.0 AS appbuild

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

COPY .babelrc ./

RUN npm install

COPY . .

RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#

FROM node:15.5.0

WORKDIR /usr/src/app

COPY --from=appbuild /usr/src/app/dist ./dist
COPY --from=appbuild /usr/src/app/config ./config
COPY --from=appbuild /usr/src/app/node_modules ./node_modules
COPY --from=appbuild /usr/src/app/package.json ./
COPY --from=appbuild /usr/src/app/.babelrc ./

EXPOSE 8000

CMD ["npm","start"]