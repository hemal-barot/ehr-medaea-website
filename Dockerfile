# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Build-time env vars (baked into the JS bundle)
ARG VITE_APP_URL=http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com
ARG VITE_APP_NAME="Medaea EHR"
ENV VITE_APP_URL=$VITE_APP_URL
ENV VITE_APP_NAME=$VITE_APP_NAME

# Install dependencies (cached layer unless package.json changes)
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --prefer-offline

# Build static site
COPY . .
RUN npm run build

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
