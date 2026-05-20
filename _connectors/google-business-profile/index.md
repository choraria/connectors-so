---
layout: connector
title: Overview
sub: A connector that syncs Google Business Profile data into your Superhuman docs.
description: A connector that syncs Google Business Profile data into your Superhuman docs.
permalink: /google-business-profile/
---

Built and maintained by [Sourabh Choraria](https://coda.io/@choraria). The connector reads from the Google Business Profile APIs but never writes back, never modifies your business listings, never posts, never replies to reviews, and never edits your verification or media.

## What it ships

### Sync tables

- **Accounts** — lists every account you can manage.
- **Locations** — uses `readMask` so only the fields you sync are fetched.
- **Reviews** — star ratings normalised 1–5.
- **Posts** — local posts; incremental sync.
- **LocationMetrics** — one row per (location, date, metric).
- **Verifications**.
- **PlaceActionLinks**.

### Formulas

- Lookups: `LocationByName`, `LocationByPlaceId`, `MapsUrl`, `NewReviewUrl`, `ReviewLink`.
- Agent skills: `ListReviewsForLocation`, `ListLowRatedReviews`, `GetWeeklyPerformance`.
- Column formats: GBP resource name & Google Maps URL.
- Cards: Location card and Review card.

<p class="note">No mutating actions: nothing is written back to Google Business Profile.</p>

## Pages

- [Setup &amp; Usage](/google-business-profile/setup-and-usage/) — install, connect, add sync tables.
- [Privacy Policy](/google-business-profile/privacy-policy/) — what data is read &amp; how it's handled.
- [Terms of Service](/google-business-profile/terms-of-service/).

## Contact

Email [sourabh@connectors.so](mailto:sourabh@connectors.so) or [@choraria](https://coda.io/@choraria).
