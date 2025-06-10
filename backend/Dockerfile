FROM openjdk:21-jdk-slim AS build
RUN apt-get update && apt-get install -y maven --no-install-recommends && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY pom.xml .
COPY src src/
RUN mvn clean package -DskipTests -B
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/grade-management-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]