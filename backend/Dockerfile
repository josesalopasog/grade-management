FROM openjdk:21-jdk-slim

WORKDIR /app

COPY pom.xml .
COPY src src/

RUN mvn dependency:go-offline -B

RUN mvn clean install -DskipTests -B

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "target/*.jar"]