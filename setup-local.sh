#!/bin/sh

set -e
set -x

D="docker"
DC="docker compose"
$DC down

# Spin up conatiners
$DC build --no-cache
$DC run --rm products-be npm install
$DC up -d

# Run migration and seeders
$DC exec products-be npm run typeorm:migration:generate --name=Init
$DC exec products-be npm run typeorm:migration:run
$DC exec products-be npm run typeorm:seed

# show logs
$DC logs -f
