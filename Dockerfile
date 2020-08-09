FROM scratch
WORKDIR /app
COPY release/ .
EXPOSE 8090
CMD ["./dashboard"]
