---
layout: connector-page
title: Setup & Usage
sub: Install the connector and start using its main features.
description: How to install and use the Google Business Profile connector.
permalink: /google-business-profile/setup-and-usage/
---

## 1. Install the connector

1. Open the Superhuman doc you want to add the connector to.
2. In the toolbar, click **Insert** → **Packs**.
3. Search for **Google Business Profile** and click **Add to doc**.
4. The connector tile appears in the right-side panel.

<p class="note">If the connector isn't yet visible in the Gallery, email <a href="mailto:sourabh@connectors.so">sourabh@connectors.so</a> for a direct invite link.</p>

## 2. Connect your Google account

1. Click the **Google Business Profile** tile in the right-side panel.
2. Click **Connect account**.
3. Review the requested scopes on the Google consent screen:
   - Manage your Google Business Profile
   - See your primary email address
   - See your personal info, including any personal info you've made publicly available
4. Click **Allow**.
5. The browser returns to Superhuman; the connection is labelled with your Google account email.

If you manage multiple Google accounts, you can connect more than one and pick which account each sync table uses.

## 3. Add sync tables

From the right-side panel, click each table name and **Add to doc**:

- **Accounts** — no parameters.
- **Locations** — pick an account from the dropdown.
- **Reviews / Posts / Verifications / PlaceActionLinks** — pick an account, then all locations or a specific location.
- **LocationMetrics** — pick an account, location(s), and a date range.

Sync tables refresh on the normal sync cadence (or you can hit **Sync now**).

## 4. Use cards, formulas &amp; column formats

- **Location card** — `=LocationByName("accounts/<id>/locations/<id>")`. Hover for a card preview.
- **Review card** — `=ReviewByName("accounts/<id>/locations/<id>/reviews/<id>")`.
- **Column formats** — set a column's type to *Google Business Profile location* or *Google Maps location URL*, then paste matching URLs into cells.
- **Agent skills** — `ListReviewsForLocation`, `ListLowRatedReviews`, `GetWeeklyPerformance` are designed for Superhuman Go skill prompts.

## 5. Disconnect or remove

- **Disconnect the Google account** — right-side panel → connection name → **Disconnect account**.
- **Remove the connector from this doc** — right-side panel → ⋯ menu → **Remove from doc**.
- **Revoke from Google** — visit [myaccount.google.com/connections](https://myaccount.google.com/connections).

For a full data-deletion walkthrough, see the [Privacy Policy](/google-business-profile/privacy-policy/).
