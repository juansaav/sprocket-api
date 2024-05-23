#!/bin/bash
# Start Docker Compose in detached mode
docker-compose up -d
# Wait for the database to be ready
until docker exec sprocket-api-db-1 pg_isready -U user; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 2
done
>&2 echo "Postgres is up - executing command"
# Build and start the
npm run prisma-migrate --name init
npm run build
npm run dev
