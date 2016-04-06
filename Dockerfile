FROM jsanda/nodejs:v4.1.0
MAINTAINER jfsanda@gmail.com

RUN wget https://raw.githubusercontent.com/JoseSanda/docker-image/master/webservice.js --no-check-certificate

EXPOSE 8888

CMD ["/node/bin/node", "webservice.js"]