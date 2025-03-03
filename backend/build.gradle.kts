plugins {
    java
    alias(libs.plugins.spring.boot)
    alias(libs.plugins.spring.dependency)
}

group = "com.reringuy"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(23)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(libs.spring.boot.jpa)
    implementation(libs.spring.boot.security)
    implementation(libs.spring.boot.web)
    compileOnly(libs.lombok)
    annotationProcessor(libs.lombok)
    testImplementation(libs.spring.boot.test)
    testImplementation(libs.spring.boot.security.test)
    testRuntimeOnly(libs.junit)
    implementation(libs.portgresql)
}

tasks.withType<Test> {
    useJUnitPlatform()
}