# Zoe-Tales

ZoeTales is a responsive React landing page for a Bible-storytelling brand for
children and families.

## Run locally

```sh
npm install
npm run dev
```

## Build for production

```sh
npm run build
npm run preview
```

The home page at `/` presents the Bible story collection. The separate
activities page is available at `/activities`. Both pages use responsive
navigation and local visual assets, with no external image service.

## Deploy with Docker Compose on a VPS

The production image builds the site with Node.js and serves the static output
with Nginx. Caddy reverse-proxies the site and automatically provisions and
renews HTTPS certificates for `zoetales.uk`.

Before deploying, point the domain's DNS `A` record to the VPS IPv4 address and
allow inbound TCP ports `80` and `443` in the VPS firewall and Hostinger
firewall. Then connect to the VPS, install Docker Engine with the Compose
plugin, clone this repository, and start the services:

```sh
git clone https://github.com/udehmiracle700-svg/Zoe-Tales.git
cd Zoe-Tales
docker compose up -d --build
```

After DNS has propagated, the site will be available at
`https://zoetales.uk`. To deploy later changes, pull the latest code and run
`docker compose up -d --build` again. Use `docker compose logs -f` to view logs
or `docker compose down` to stop the services.
