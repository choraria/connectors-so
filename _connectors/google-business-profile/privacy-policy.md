---
layout: connector-page
title: Privacy Policy
description: How the Google Business Profile connector handles your data.
dates: Effective May 19, 2026 · Last updated May 19, 2026
permalink: /google-business-profile/privacy-policy/
---

This Privacy Policy describes how the **Google Business Profile** connector ("the Connector", "we", "our") handles data accessed through the Google Business Profile APIs. The Connector is published on the Superhuman connector platform (formerly Coda Packs); Pack ID `51958`.

## 1. What data the Connector reads

When you install the Connector and authorise it via Google OAuth, it reads the following from your Google Business Profile, only for the purpose of populating your Superhuman doc:

- **Accounts you can manage** — account name, type, role, verification state.
- **Locations under those accounts** — title, address, phone, hours, website, categories, descriptions, place ID, Maps URL.
- **Customer reviews on those locations** — rating, comment, reviewer display name, owner replies, timestamps.
- **Local posts on those locations** — title, summary, media, event/offer details.
- **Performance metrics** — daily impressions, calls, website clicks, direction requests.
- **Verifications and Place Action Links** for those locations.

It also reads your **email address** (via the `openid` and `email` scopes) so the platform can label which Google account is connected.

## 2. What the Connector does NOT do

- **No write-back.** The Connector never writes to your Google Business Profile.
- **No third-party storage.** The Connector does not transmit your GBP data to any third party other than the Superhuman platform that runs it.
- **No analytics or telemetry.** No analytics service, ad network, or external logging system.
- **No advertising.** Your data is not used or transferred for advertising.
- **No human reading.** Except as required for security, debugging an issue you've explicitly reported, or compliance with law.

## 3. Where the data goes

Data flows from Google's APIs through Superhuman's connector runtime and into the doc you've installed the Connector in. Specifically:

1. The Connector code runs inside [Superhuman's connector runtime sandbox](https://coda.io/packs/build/latest/), operated by Superhuman (part of Grammarly, Inc.).
2. The runtime sends authenticated HTTPS requests to `*.googleapis.com` on your behalf, using the OAuth access token Superhuman stores for your account.
3. Responses are passed back to the runtime, transformed by the Connector code, and written into your doc as sync table rows or formula results.
4. Once the data is in your doc it is governed by [Superhuman's Privacy Policy](https://coda.io/policies/privacy-policy) and the access controls you set on the doc.

The Connector itself runs no servers and stores nothing outside of the Superhuman runtime.

## 4. Limited Use disclosure

The use of information received from Google APIs by the Google Business Profile connector adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the [Limited Use](https://developers.google.com/terms/api-services-user-data-policy#limited-use) requirements:

- The Connector's use of Google user data is limited to the user-facing features described in this document — populating your doc with your own GBP data.
- The Connector does not transfer Google user data to others, except as necessary to provide or improve those user-facing features, comply with applicable law, or as part of a merger, acquisition, or sale of assets with the user's explicit consent.
- The Connector does not use or transfer Google user data for serving advertisements, including personalised or retargeted advertisements.
- The Connector does not allow humans to read Google user data unless the user has given affirmative agreement, it is necessary for security purposes (for example, investigating abuse), required to comply with applicable law, or for the Connector's internal operations and only when the data has been aggregated and anonymised.

## 5. Data retention and deletion

- **In your doc.** GBP data lives in the sync tables, formula results, and cards in the docs you install the Connector in. You delete it the same way you delete any data in a doc.
- **Outside your doc.** The Connector stores nothing outside of Superhuman's runtime. There is no maker-side database.
- **OAuth tokens.** Access and refresh tokens are stored by Superhuman (not by the maker) on Superhuman's infrastructure. You can revoke them at any time — see section 6.

## 6. How to revoke access and delete data

1. **From Google.** Visit [myaccount.google.com/connections](https://myaccount.google.com/connections), find the Google Business Profile entry, and click Remove access.
2. **From Superhuman.** Open any doc with the Connector installed, click the connector tile in the right-side panel, and click Disconnect account.

To delete the data the Connector has already pulled into a doc: delete the rows, the sync table, or the doc itself. There is no maker-side data to delete.

## 7. Security

- All requests to Google APIs use HTTPS.
- OAuth tokens are stored by the Superhuman connector runtime, never logged by the Connector code, and never exposed in formula results.
- Source code is available for review by request — contact the maker.

## 8. Changes to this policy

We may update this Privacy Policy from time to time. The Effective date at the top reflects the most recent change. Material changes will be reflected here; if you have the Connector installed, you should re-review this page periodically.

## 9. Contact

**Sourabh Choraria**  
[sourabh@connectors.so](mailto:sourabh@connectors.so)  
[@choraria](https://coda.io/@choraria)
