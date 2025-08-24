# Use a small Node image and create a lean runtime image
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# install only prod deps; if you need dev deps for tests, install in CI
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
