# Manus prompt: tracking for the Shop / Free Estimate intake

Paste everything below the line into Manus (Chrome logged in to Google Ads for tag AW-18128296932, and Meta Events Manager for pixel 4472553883061795). Never enter passwords; stop and ask me at any login prompt. Do not touch billing, budgets or campaigns.

---

## Part 1: Google Ads, two new conversion actions
Goals -> Conversions -> + New conversion action -> Website -> set up manually (no URL scan).

A) Name `Shop Intake Text`, category **Submit lead form**, value 1 USD, count **One**, Primary, click window 30d.
B) Name `Estimate Intake Text`, category **Submit lead form** (or Book appointment), value 1 USD, count **One**, Primary, click window 30d.

For each, choose "Use Google tag -> Event snippet" and copy the label after `AW-18128296932/` in `send_to`. Install nothing.

Also: confirm auto-tagging is ON, and that existing `Phone Call Click` (label hTi1CLihlp0dEOS3n8RD) and `Booked Call (Calendly)` stay Primary.

Report exactly:
```
NEXT_PUBLIC_GADS_SHOP_LABEL=<label A>
NEXT_PUBLIC_GADS_ESTIMATE_LABEL=<label B>
NEXT_PUBLIC_GADS_BOOKING_LABEL=<label of Booked Call (Calendly) if it exists>
AUTO_TAGGING=<on/off>
```

## Part 2: Meta Events Manager check
Events Manager -> Dataset 4472553883061795 -> **Test events**. Open the live site (https://appliancekingrepair.com) in the test-events browser, then:
1. Tap **Shop Appliances** -> expect `InitiateCheckout` (content_name "Intake opened").
2. Pick Washer + Dryer, press Continue -> expect `AddToCart`.
3. Finish and tap "Text this to Appliance King" -> expect `Lead` and `Contact` (content_name "Shop intake text").
4. Repeat with **Free Estimate** -> `Lead` with lead_type `estimate_lead`.
5. For each, confirm Browser AND Server rows appear and show "Deduplicated". Report any event missing, with a screenshot description.

Then Datasets -> Settings -> Conversions API: confirm a token exists; if not, generate one and give it to me privately (I put it in Vercel as META_CAPI_ACCESS_TOKEN).
In Ads Manager -> campaign optimization event: recommend `Lead` for lead campaigns; do not change anything.

## Part 3: Google verification
Google Ads -> Goals -> Conversions: after the test taps above, confirm the two new actions move from "Inactive" to "Recording" (can take up to a few hours). In Tag Assistant / Tag Coverage confirm AW-18128296932 fires on /, /used-appliances and /book.

## Report back
List what passed, what failed, and every label/ID, in the format above.

## Part 4: Rank on Google (do these off-site steps; they matter more than anything on the site)
1. **Google Business Profile** (business.google.com): claim/verify "Appliance King", address 928 S Ponce De Leon Cir, Macon, GA 31206, phone 478-273-7539, website https://www.appliancekingrepair.com, categories: Used appliance store (primary), Appliance repair service, Appliance store. Set service area to Macon + cities within 40 miles. Add hours (ask me), 10+ real showroom photos, and the Facebook link. Create 3 Products (washers, dryers, refrigerators, ranges) and a weekly Update post. Report verification status.
2. **Reviews**: generate the profile's review link and give it to me so I can text it to customers. Goal: 15+ reviews with words like "used washer", "Macon".
3. **Search Console** (search.google.com/search-console): add property `https://www.appliancekingrepair.com` (URL prefix), verify via DNS or HTML tag (tell me the tag), submit `https://www.appliancekingrepair.com/sitemap.xml`, and request indexing for /, /used-appliances, /services, /delivery-pickup. Report any coverage errors.
4. **Citations**: make the name/address/phone identical (NAP) on Facebook page, Yelp, Bing Places, Apple Business Connect, Nextdoor, BBB, Yellow Pages. Report links.
5. **Facebook page**: https://www.facebook.com/p/Appliance-King-61592661480855/ : set the address, phone, website, and category to match exactly.
