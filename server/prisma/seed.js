import { disconnectDB, prisma } from "../db/dbConfig.js";

export const products = [
  {
    title: "Smart Fitness Band",
    description:
      "Track your heart rate, steps, sleep and workouts with this sleek fitness tracker.",
    price: 1799,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    title: "Gaming Mouse RGB",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and 6 programmable buttons.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Mechanical Keyboard",
    description:
      "Compact mechanical keyboard with satisfying tactile switches for typing and gaming.",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
  },
  {
    title: "Portable Bluetooth Speaker",
    description:
      "Water‑resistant portable speaker with deep bass and 12‑hour playback.",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "USB‑C Fast Charger",
    description:
      "65W fast charger compatible with laptops, smartphones and tablets.",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
  },
  {
    title: "Laptop Stand Adjustable",
    description:
      "Aluminum adjustable laptop stand for better posture and airflow.",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "Smartphone Tripod Stand",
    description:
      "Flexible tripod stand for smartphones, perfect for reels and videos.",
    price: 699,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    title: "Wireless Charging Pad",
    description: "Qi‑certified wireless charging pad with fast charge support.",
    price: 1199,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    title: "4K HD Webcam",
    description:
      "Ultra HD webcam with built‑in microphone for streaming and meetings.",
    price: 3999,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "Noise‑Cancelling Earbuds",
    description:
      "Compact true wireless earbuds with active noise cancellation and long battery life.",
    price: 2299,
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a41552231658",
  },
  {
    title: "Smart LED Desk Lamp",
    description:
      "Adjustable LED desk lamp with brightness control and sleek design.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1581091012184-b5b3c1971127",
  },
  {
    title: "Portable Power Bank",
    description:
      "High‑capacity power bank with dual USB ports for fast charging multiple devices.",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
  },
  {
    title: "Smartwatch",
    description:
      "Multifunctional smartwatch with notifications, health tracking, and long battery life.",
    price: 4999,
    imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    title: "Full‑Size Gaming Headset",
    description:
      "Surround‑sound gaming headset with microphone and cushioned ear cups.",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "Wireless Ergonomic Mouse",
    description:
      "Comfortable ergonomic mouse with adjustable DPI and silent clicks.",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Professional Microphone",
    description:
      "Studio‑quality microphone for vocals, podcasting and streaming.",
    price: 4499,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "Gaming Mouse Pad",
    description:
      "Large anti‑slip mouse pad with stitched edges and smooth surface.",
    price: 699,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    title: "Laptop Cooling Pad",
    description: "Dual‑fan cooling pad to keep laptops cool during heavy use.",
    price: 2699,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "USB‑C Hub Adapter",
    description: "Multi‑port USB‑C hub with HDMI, USB‑A and SD card slots.",
    price: 1199,
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
  },
  {
    title: "Mobile Camera Lens Kit",
    description:
      "Clip‑on lens kit for smartphone photography with macro and wide‑angle lenses.",
    price: 2399,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    title: "Bluetooth Car Adapter",
    description:
      "Bluetooth car adapter for hands‑free calls and audio streaming on the go.",
    price: 1599,
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
  },
];

const main = async () => {
  await prisma.product.createMany({
    data: products,
  });
  console.log("Products seeded successfully");
};

main()
  .catch((e) => console.error(e))
  .finally(() => disconnectDB());
