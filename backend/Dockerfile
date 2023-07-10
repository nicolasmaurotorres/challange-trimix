FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app/backend
COPY ./backend/.mvn .
COPY ./backend/mvnw .
COPY ./backend/mvnw.cmd .
COPY ./backend/pom.xml .
COPY ./backend/ .
RUN mvn clean package 
COPY ./backend/target/challenge-0.0.1-SNAPSHOT.jar challenge-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/challenge-0.0.1-SNAPSHOT.jar"]