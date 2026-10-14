# Prompt for Manus / Chrome agent: Google Ads conversion setup for Appliance King

Paste everything below the line into Manus (with Chrome logged in to the Google Ads account that owns tag AW-18128296932).

---

You are setting up Google Ads conversion tracking for Appliance King (Macon, GA used-appliance and repair business). Work only inside the Google Ads account that owns Google tag **AW-18128296932**. Do NOT change billing, create campaigns, edit budgets, or enter any passwords. If you hit a login or 2-step prompt, stop and ask me.

The website already has the Google tag installed and already fires a `conversion` event with `send_to: "AW-18128296932/<LABEL>"` when (a) a Calendly booking completes and (b) someone taps the phone number. I only need the two conversion actions created and their labels reported back.

## Task 1 - Create conversion action "Booked Call (Calendly)"
1. Google Ads -> Goals -> Conversions -> Summary -> **+ New conversion action** -> **Website**.
2. Choose **Set up manually** (skip URL scan). If asked, choose "Add a conversion action manually using a tag".
3. Settings:
   - Goal and action optimization: **Book appointment**
   - Conversion name: `Booked Call (Calendly)`
   - Value: **Use the same value for each conversion**, value `1` USD (or "Don't use a value" if only that is offered)
   - Count: **One**
   - Click-through window: 30 days. View-through window: 1 day. Attribution: Data-driven (or default).
   - Include in "Conversions": **Yes** (Primary action)
4. Click Done -> Save and continue -> choose **Use Google tag / Install the tag yourself** -> **Event snippet**.
5. Copy the label from the snippet. It is the text after `AW-18128296932/` inside `'send_to': 'AW-18128296932/XXXXXXXX'`. Do not install anything.

## Task 2 - Create conversion action "Phone Call Click"
Repeat Task 1 with:
- Category: **Contact** (or "Phone call lead")
- Name: `Phone Call Click`
- Value: same value, `1` USD
- Count: **One** (or Every if you prefer to count each tap; use One)
- Primary action: **Yes**
Copy its label the same way.

## Task 3 - "Calls from ads" (only if available, no spend)
Goals -> Conversions -> + New -> **Phone calls** -> **Calls from ads using a call asset or call-only ads**. Name `Calls from Ads`, call length **30 seconds**, count **One**, Primary. Save. If this requires creating a campaign or asset, skip it and tell me.

## Task 4 - Settings check
- Account Settings -> Auto-tagging: **ON**.
- Goals -> Conversions: confirm both new actions show status "Inactive / No recent conversions" (normal until the live site sends data).

## Report back to me (exact format)
```
GADS_BOOKING_LABEL=<label from Task 1>
GADS_CALL_LABEL=<label from Task 2>
CALLS_FROM_ADS_CREATED=<yes/no>
AUTO_TAGGING=<on/off>
```
Also list anything you could not complete and why. Do not guess labels.

## Optional: Microsoft Advertising (only if I ask)
ads.microsoft.com -> Tools -> Conversion tracking -> UET tag -> Create tag -> report the numeric Tag ID. Then Conversion goals -> Create -> **Event**: category "Book appointment", Event action equals `schedule`; second goal category "Other", Event action equals `call`.
