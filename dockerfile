FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package* .

RUN npm install ionic --loglevel verbose

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

COPY . .

RUN npm run build
 

CMD ["npm", "run", "start"]