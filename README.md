# Shopify Email Automation

## Project Overview

This automation receives order data through a webhook and validates the following conditions:

- Order tag = MakeOrder
- Customer tag = ColdCustomer
- Order amount > ₹2500

If all conditions are satisfied:

1. Send Welcome Email
2. Wait 5 Minutes
3. Send Discount Email

If any condition fails, the workflow stops immediately.

---

## Workflow Steps

Webhook Trigger
↓
Check Order Tag = MakeOrder
↓
Check Customer Tag = ColdCustomer
↓
Check Amount > ₹2500
↓
Send Welcome Email
↓
Delay 5 Minutes
↓
Send Discount Email

---

## Technologies Used

- Pipedream
- JavaScript (Node.js)
- Gmail Integration
- Webhooks

---

## Assignment Requirements

✔ Receives Webhook

✔ Checks MakeOrder Tag

✔ Checks ColdCustomer Tag

✔ Checks Amount > ₹2500

✔ Sends First Email

✔ Waits 5 Minutes

✔ Sends Second Email

✔ Stops Flow Otherwise

---

## Author

Shanvi Kumari
Samsung Research Institute India (Intern)
