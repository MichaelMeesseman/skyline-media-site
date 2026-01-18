# Skyline Media Website (Next.js + Vercel)

This is a fast, SEO-first website you can deploy on Vercel in under an hour.

## What’s included
- Home, Services, Locations (US coverage map), Portfolio (stub), Blog (stub), Contact (HubSpot embed placeholder)
- **Easy coverage updates** via `data/locations.json`
- “Book” button that links out to your **public** Aryeo order page (not the admin dashboard)

## Quick start (local)
```bash
npm install
npm run dev
```
Open `http://localhost:3000`

## Launch on Vercel (fast)
1. Push this repo to GitHub
2. Vercel → **New Project** → Import the repo
3. Deploy
4. Add your domain in Vercel: `skylinemediapro.com`

## Connect your domain (DNS)
In your domain registrar:
- **A record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

## Update your service coverage
Edit:
- `data/locations.json`

Change the served states:
```json
"servedStates": ["MI", "AZ"]
```
Add more cities/metros under the state.

## Set your Aryeo public order link
Edit:
- `src/app/book/page.tsx`

Replace `ARYEO_PUBLIC_ORDER_URL` with the **public** booking/order link.
Tip: open your link in incognito. If it asks you to sign in as admin, it’s not the right link.

## Add your HubSpot form (free)
Edit:
- `src/app/contact/page.tsx`

Paste your HubSpot form embed snippet into that page.

## Notes on API keys
Never paste API keys into chat or commit them into the repo.
If you later build an integration:
- store keys in **Vercel Environment Variables**
- read them from `process.env.*`
