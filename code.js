export default defineComponent({
  async run({ steps, $ }) {

    const order = steps.trigger.event.body;

    const orderTags = order.tags || "";
    const customerTags = order.customer?.tags || "";
    const amount = Number(order.total_price || 0);

    if (
      !orderTags.includes("MakeOrder") ||
      !customerTags.includes("ColdCustomer") ||
      amount <= 2500
    ) {
      $.flow.exit("Conditions not met");
    }

    return {
      email: order.email,
      firstName: order.customer?.first_name || "Customer"
    };
  }
});
