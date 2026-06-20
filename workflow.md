# Workflow Logic

The workflow receives Shopify order data via webhook.

Conditions checked:

1. Order tag contains MakeOrder
2. Customer tag contains ColdCustomer
3. Order amount is greater than ₹2500

If conditions are met:
- Send Welcome Email
- Wait 5 Minutes
- Send Discount Email

Else:
- Stop Workflow
