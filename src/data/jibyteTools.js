import dashboard from "../assets/images/tools-image/dashboard.png";
import paymentGateways from "../assets/images/tools-image/payment-gateways.png";
import multilingual from "../assets/images/tools-image/multilingual.png";
import affiliate from "../assets/images/tools-image/affiliate.jpg";
import supportSystem from "../assets/images/tools-image/support-platform.png";
import easyExport from "../assets/images/tools-image/easy-export.png";
export const jibyteTools = [
  {
    id: crypto.randomUUID(),
    image: dashboard,
    title: "Advanced Dashboard",
    content: "Track a wide range of data points, including token spendings.",
  },
  {
    id: crypto.randomUUID(),
    image: paymentGateways,
    title: "Payment Gateways",
    content:
      "Securely process credit card or other electronic payment methods.",
  },
  {
    id: crypto.randomUUID(),
    image: multilingual,
    title: "Multilingual",
    content:
      "Ability to understand and generate content in different languages.",
  },
  {
    id: crypto.randomUUID(),
    image: affiliate,
    title: "Affiliate System",
    content:
      "Ability to invite friends, and earn commission from their first purchase.",
  },
  {
    id: crypto.randomUUID(),
    image: easyExport,
    title: "Easy Export",
    content:
      "Export generated content as plain text, PDF, Word or HTML easily.",
  },
  {
    id: crypto.randomUUID(),
    image: supportSystem,
    title: "Support Platform",
    content: "Submit support tickets from your dashboard.",
  },
];
