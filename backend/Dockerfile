FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app/backend
COPY ./.mvn .
COPY ./mvnw .
COPY ./mvnw.cmd .
COPY ./pom.xml .
RUN mvn clean install
COPY ./src .
RUN mvn clean package 

FROM amazoncorretto:17-alpine-jdk as start
WORKDIR /app/backend
COPY ./target/challenge-0.0.1-SNAPSHOT.jar challenge-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/challenge-0.0.1-SNAPSHOT.jar"]