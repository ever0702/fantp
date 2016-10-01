FROM node:6-onbuild
EXPOSE 3500


COPY . /var/www

WORKDIR /var/www

RUN npm install --production

ENV NODE_ENV=production

CMD ["npm", "run", "start:production"]

# ENTRYPOINT ["npm", "start"]