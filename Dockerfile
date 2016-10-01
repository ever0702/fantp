FROM node:6-onbuild
EXPOSE 3500

RUN npm install --production

ENV NODE_ENV=production

CMD ["npm", "run", "start:production"]

# ENTRYPOINT ["npm", "start"]