FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package* .

RUN npm install ionic --loglevel verbose

COPY . .

ARG VARIABLE= ${{ secrets.RESEND_API_KEY }}

RUN npm run build
 

CMD ["npm", "run", "start"]