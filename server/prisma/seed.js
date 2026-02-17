import { disconnectDB, prisma } from "../db/dbConfig.js";

const products = [
  {
    title: "Wireless Bluetooth Headphones",
    description:
      "High-quality over-ear headphones with noise cancellation and 20 hours battery life.",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1518443895914-66b0d59b7b57",
  },
  {
    title: "Smart Fitness Band",
    description:
      "Track your heart rate, steps, sleep and workouts with this sleek fitness tracker.",
    price: 1799,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd1c5",
  },
  {
    title: "Gaming Mouse RGB",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and 6 programmable buttons.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1587202372775-989dc1b88f4d",
  },
  {
    title: "Mechanical Keyboard",
    description:
      "Compact mechanical keyboard with blue switches for satisfying typing experience.",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Portable Bluetooth Speaker",
    description:
      "Water-resistant portable speaker with deep bass and 12-hour playback.",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a41552231658",
  },
  {
    title: "USB-C Fast Charger",
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
    description: "Qi-certified wireless charging pad with fast charge support.",
    price: 1199,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    title: "4K HD Webcam",
    description:
      "Ultra HD webcam with built-in microphone for streaming and meetings.",
    price: 3999,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
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
