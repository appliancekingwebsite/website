# Appliance King Google Search: audit and optimization plan (Oct 27, 2026)

Campaign: **Appliance King Max Leads and Calls** (account 724-984-1766). Search only, Maximize conversions, 40 mi around Macon, all days 8 AM to 9 PM, started Oct 18.

## Applied in Google Ads (Oct 27, 2026)

The budget is unchanged at **$10/day**.

- **Conversions:** Shop Intake Text and Estimate Intake Text are now **Primary**.
- **Ad groups:** 7 new themed ad groups are live with 178 keywords. "used appliance store near me" was rejected twice by a Google policy check, so it was skipped; close variants of the other used-appliance keywords cover it. Old "Ad group 1" is **paused**.
- **Ads:** 7 new ads are live. The first version used a "Call 478-273-7539" headline, which Google flags as a phone number in ad text, so those ads were replaced and the originals paused. The call button carries the number instead.
- **Negative keywords:** all 71 added at campaign level.
- **Sitelinks:** 8 new sitelinks at campaign level. 6 old ones with unsupported claims are paused. "Oven & Stove Repair" is kept.
- **Callouts:** 10 new callouts at account level. The 9 old campaign callouts, which overrode them and included "Washers/Dryers From $200" and "Fast In-Home Estimates", are paused.
- **Structured snippet:** Service catalog snippet added.
- **Not done (needs the owner):**
  - fix the business name disapproval in Billing / Advertiser verification
  - link the Google Business Profile for a location asset

## What the audit found

| # | Problem | Impact | Status |
|---|---|---|---|
| 1 | Shop Intake Text and Estimate Intake Text conversion labels were blank on the website | Every text lead from the main Shop / Free Estimate buttons was invisible to Google. Both actions said "never received data" | **Fixed in code, live** (`ad7baef`) |
| 2 | Calendly iframe had no `embed_type`/`embed_domain` | Calendly never told the page a booking happened, so Booked Call (Calendly) could never fire | **Fixed in code, live** (`ad7baef`) |
| 3 | Shop and Estimate conversion actions are set to **Secondary** | Even when they fire, Maximize conversions ignores them | Needs change in Google Ads |
| 4 | Budget is **$10/day** at $3.24 avg CPC | About 3 clicks a day. That caps you at roughly 8 to 10 conversions a month | Needs your decision |
| 5 | Only **15 keywords** in one ad group; status "Missing enough relevant keywords" | Google is limiting delivery; almost no city or appliance-specific coverage | Plan below |
| 6 | **Zero negative keywords** | $8.69 already went to a competitor search ("mr appliance macon ga") | Plan below |
| 7 | One ad, **Ad strength: Poor**, "Appliance Repair Macon GA" pinned to headline 1 | Used-appliance searchers (your best-converting keywords) always see a repair headline | Plan below |
| 8 | Business name "Appliance King" **Disapproved: Business name irrelevant** | Your logo can't show without an approved business name (logo has 0 impressions) | Needs a fix in Billing / verification |
| 9 | No callouts, no structured snippets, no location asset | Smaller ad, lower CTR | Plan below |
| 10 | Sitelinks use claims the site doesn't support ("Save hundreds vs store prices", "Fast service", "Tested units") | Policy and trust risk | Replace |

## Keyword plan

90 keywords in 7 themed ad groups, each in both Exact and Phrase match (180 rows), with each ad group pointing at its matching page. Full list: `keywords.csv`.

| Ad group | Landing page | Examples |
|---|---|---|
| Used Appliances | /used-appliances | used appliances macon ga, used appliance store near me, used appliances warner robins / perry / milledgeville / forsyth / gray |
| Used Washers Dryers Fridges Stoves | /used-appliances/washers | used washer and dryer macon, used refrigerator macon ga, used stove near me |
| Appliance Repair Cities | /services/appliance-repair | appliance repair + Macon, Warner Robins, Perry, Milledgeville, Forsyth, Byron, Gray, Fort Valley, Centerville, Barnesville |
| Refrigerator Repair | /services/refrigerator-freezer-repair | fridge repair near me, refrigerator not cooling, ice maker repair near me |
| Washer Dryer Repair | /services/washer-repair | washer not draining, dryer not heating repair, dryer vent cleaning macon ga |
| Oven Stove Dishwasher Repair | /services/range-oven-stove-repair | oven repair near me, gas stove repair near me, dishwasher repair macon ga |
| Brand | / | appliance king macon, appliance king repair |

No broad match. The best-converting search terms so far ("used appliances near me", "used appliance store near me", "appliance repair near me") are all included.

## Negative keywords (71, phrase match, campaign level)

Full list: `negative-keywords.csv`. Groups:

- **DIY:** diy, how to, manual, youtube, reddit, parts, schematic
- **Jobs:** jobs, hiring, salary, training, certification
- **Competitors and big stores:** mr appliance, sears, lowes, home depot, best buy, walmart, aarons, rent a center, conns
- **Marketplaces and rentals:** craigslist, facebook marketplace, offerup, ebay, rent to own, rental
- **Out of area:** atlanta, savannah, augusta, columbus, athens, albany, dublin ga, valdosta
- **Wrong service:** hvac, ac repair, furnace, water heater, tv repair, commercial refrigeration, ice machine

Left out on purpose because they would block buyers: "free" (blocks "free estimate appliance repair"), "service center", and "reviews".

## Ads

One responsive search ad per ad group: 15 headlines and 4 descriptions, all within Google's limits, with no pinning. The text uses only what the site supports: insured, Free Estimate, book online, delivery and pickup, serving Macon plus about 40 miles. It makes no same-day, warranty, price, or brand claims. Full text: `ads.csv`.

## Assets

- **Sitelinks (8):** Book An Estimate, Shop Used Appliances, Used Washers & Dryers, Used Refrigerators, Refrigerator Repair, Washer & Dryer Repair, Delivery & Pickup, Sell Your Appliance
- **Callouts (10):** Free Estimates, Book Online, Delivery & Pickup, Used Units In Stock, Insured Local Business, Serving Macon + 40 Miles, Call Or Text Us, We Buy Used Appliances, Repair Or Replace Help, Verified Google Profile
- **Structured snippet:** Services: Washer Repair, Dryer Repair, Fridge Repair, Oven & Stove Repair, Dishwasher Repair, Used Appliances, Delivery & Pickup
- **Location asset:** link the verified Google Business Profile
- **Business name and logo:** fix the disapproval (below), then the existing logo will start showing

Text: `assets.csv`.

## Conversion goals

- Set **Shop Intake Text** and **Estimate Intake Text** to **Primary** (they will start receiving data now that the site fix is live).
- Keep Booked Call (Calendly), Calls from ads, and Phone Call Click as Primary.
- Leave Page views and Get directions out of bidding.

## Logo / business name fix

Google rejects the business name when it doesn't match the verified advertiser or payments profile name. Check **Billing → Settings → Payments profile name** and **Admin → Advertiser verification**. If either says something other than "Appliance King" (a personal name, or Stackmode Network LLC), either:

- update it to the legal name of the business that owns Appliance King, or
- appeal the asset in Policy manager, citing the domain appliancekingrepair.com, the site header, and the Google Business Profile.

## Budget

At $3.24 avg CPC and a 10% conversion rate, every $10/day buys about 9 conversions a month. **Recommended: $25/day**, which is roughly 20 to 25 conversions a month at current rates. Revisit after 30 conversions (then try a Target CPA).

## After launch checklist

- **Days 1 to 3:** read Search terms. Add any junk as negatives. Confirm Shop/Estimate/Booked Call show "Recording conversions".
- **Day 7:** pause keywords with 20+ clicks and 0 conversions. Move budget to the ad groups that produce calls and texts.
- **Day 30:** with 30+ conversions, test Target CPA near the actual cost per conversion.
- **Never** turn on Search Partners, Display, AI Max, or broad match on this budget.
