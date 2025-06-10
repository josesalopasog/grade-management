FROM openjdk:21-jdk-slim
RUN apt-get update && apt-get install -y maven --no-install-recommends && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY pom.xml .
COPY src src/
RUN mvn dependency:go-offline -B
RUN mvn clean install -DskipTests -B
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/*.jar"]