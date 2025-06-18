# Stage 1 - builder
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate clients using correct platform
RUN npx prisma generate --schema=prisma-fb/schema.prisma
RUN npx prisma generate --schema=prisma-ttk/schema.prisma

RUN npm run build

RUN npm run test

# Stage 2 - runtime
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

CMD ["node", "dist/main"]
