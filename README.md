# Simple Hiring Pipeline

Repo: `simple-hiring-pipeline`

## One-line pitch
A lightweight pipeline for open roles that non-recruiters can actually use.

## Buyer
startups under 50 people, agencies, local businesses

## Pain
Hiring becomes a mess of spreadsheets, email, and calendar links.

## Monetization
Subscription per active job or seat.

## Differentiator
Less ATS bloat, faster coordination, and cleaner candidate notes.

## What ships in v1
- Create job
- Move candidates through stages
- Leave notes and scores
- Schedule interviews
- Send reminders
- Mobile-optimized review flow

## Screens
- Job board
- Candidate pipeline
- Scorecard form
- Interview scheduling
- Role dashboard
- Candidate detail

## Routes
- `/`
- `/login`
- `/app`
- `/app/jobs`
- `/app/jobs/[id]`
- `/app/candidates`
- `/app/settings`

## Deployment
Vercel app, Postgres, email/calendar integrations, Stripe billing.

## Launch checklist
- Target teams that hate enterprise ATS tools
- Make import from spreadsheet painless
- Keep the visual design crisp and calm

## v2
- Email parsing
- Offer letter templates
- Candidate portal
- Recruiter analytics

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
