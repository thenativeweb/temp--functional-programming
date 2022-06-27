FROM mysql:debian

RUN apt update && apt install --yes git wget unzip
RUN mkdir /import && cd import && wget https://www.mysqltutorial.org/wp-content/uploads/2018/03/mysqlsampledatabase.zip && unzip mysqlsampledatabase.zip && cp mysqlsampledatabase.sql /docker-entrypoint-initdb.d/999-sample-data.sql
