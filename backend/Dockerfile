FROM openjdk:21-jdk-slim

WORKDIR /app

COPY backend/pom.xml .
RUN mvn dependency:go-offline -B

COPY backend/src src/

RUN mvn clean install -DskipTests -B

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "target/*.jar"]