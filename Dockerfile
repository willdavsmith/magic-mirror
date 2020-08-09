FROM alpine:latest
WORKDIR /app
COPY release/ .
EXPOSE 8080
CMD ["./dashboard"]
