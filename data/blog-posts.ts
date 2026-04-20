export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-reduce-stockouts-in-retail",
    title: "How to Reduce Stockouts in Indian Retail",
    excerpt:
      "Stockouts cost Indian retailers an estimated ₹2.5 lakh crore annually. Here's a practical guide to preventing them using modern inventory management.",
    date: "2026-04-10",
    category: "Inventory Tips",
    readTime: 5,
    content: `
## Why Stockouts Happen

Stockouts are rarely random. They happen because of three root causes: poor demand forecasting, slow supplier response, and no early-warning system.

## 1. Set Reorder Points Based on Lead Time

A reorder point is the stock level that triggers a new purchase order. Calculate it as:

**Reorder Point = Average Daily Sales × Supplier Lead Time (days) + Safety Stock**

For example, if you sell 20 units/day and your supplier takes 5 days to deliver, set your reorder point at 120 units (20 × 5 + 20 safety stock).

## 2. Use Historical Data to Forecast Demand

Manual guesswork is the enemy. Pull your last 90 days of sales data and look for patterns — day of week, festivals, seasonal spikes. Kubee's AI forecasting does this automatically.

## 3. Set Up Automatic Reorder Alerts

Don't wait until stock hits zero. Set up alerts at 30% of your average stock level. Kubee sends WhatsApp and email alerts when stock crosses your defined threshold.

## 4. Track Vendor Lead Times

Not all suppliers deliver on time. Track actual delivery dates versus promised dates. With Kubee, every GRN records the delivery date so you can calculate real lead time per vendor.

## Summary

The fastest path to zero stockouts: real-time stock visibility + automated reorder triggers + reliable supplier data. Kubee handles all three out of the box.
    `.trim(),
  },
  {
    slug: "gst-inventory-management-india",
    title: "GST & Inventory Management: What Indian Businesses Must Know",
    excerpt:
      "GST compliance is mandatory, but most inventory tools make it harder than it needs to be. Here's what to look for in a GST-ready inventory system.",
    date: "2026-04-01",
    category: "Compliance",
    readTime: 6,
    content: `
## GST and Your Inventory Records

Under GST, you must maintain accurate records of stock movement, purchase invoices, and sales invoices for at least 6 years. Any inventory system you use must support this.

## What a GST-Ready Inventory System Must Do

1. **Record HSN/SAC codes** on every item in your catalog
2. **Generate GST-compliant purchase orders** with GSTIN, place of supply, and tax breakdowns
3. **Track ITC (Input Tax Credit)** — every GRN should record the GST amount for ITC claims
4. **Produce GSTR-1 ready sales data** exportable per period

## Common GST Mistakes in Inventory Management

- Not linking purchase orders to GRNs (breaks ITC trail)
- Missing place-of-supply data on inter-state stock transfers
- Not recording purchase returns (PR) against the original GRN

## How Kubee Handles GST

Kubee's purchase and sales modules are built around GST workflows. Every PO, GRN, Invoice, and return document captures the required tax fields. Reports export in formats ready for filing.
    `.trim(),
  },
  {
    slug: "ai-inventory-forecasting-small-business",
    title: "AI Forecasting for Small Business Inventory: A Plain-English Guide",
    excerpt:
      "AI forecasting sounds complex, but for inventory management it comes down to one thing: predicting how much stock you'll need before you need it.",
    date: "2026-03-22",
    category: "AI & Technology",
    readTime: 4,
    content: `
## What AI Forecasting Actually Does

AI inventory forecasting uses your past sales data to predict future demand. It's not magic — it's pattern recognition applied to your numbers.

A good forecasting model looks at:
- Historical sales per SKU per time period
- Day-of-week and seasonal effects
- Trends (growing vs declining items)
- External signals (if available)

## Why Spreadsheets Fail at Forecasting

Spreadsheets require you to manually update formulas every month. They can't automatically detect that SKU-123 always spikes 3x during Diwali. They don't update in real time as sales come in.

## What to Expect from Kubee AI Forecasting

Kubee's forecasting module analyzes your last 180 days of sales and generates a 30-day demand prediction per SKU. It automatically flags:
- Items where stock will run out in under 14 days
- Items that are overstocked (holding cost waste)
- New seasonal patterns detected in current data

## Is It Accurate?

Accuracy depends on data quality. If your stock records and sales data are clean, Kubee's forecasts achieve 85–92% accuracy for established SKUs. For new items with less than 30 days of history, it falls back to category averages.
    `.trim(),
  },
];
