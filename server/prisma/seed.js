import { disconnectDB, prisma } from "../db/dbConfig.js";

export const products = [
  {
    title: "Zenith X1 Smart Fitness Band",
    description: "Advanced SpO2 tracking and heart rate monitoring with a 1.4-inch AMOLED display.",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
  },
  {
    title: "Viper RGB Gaming Mouse",
    description: "Ultra-lightweight honeycomb shell with 16,000 DPI and customizable RGB zones.",
    price: 4299,
    imageUrl: "https://images.unsplash.com/photo-1527814732934-7658ed4ad192",
  },
  {
    title: "KeyChron K2 Mechanical Keyboard",
    description: "Wireless 75% layout with Gateron Brown tactile switches and Mac/Windows compatibility.",
    price: 8999,
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    title: "SonicBoom G2 Portable Speaker",
    description: "360-degree spatial audio with IP67 waterproof rating and 20-hour battery life.",
    price: 5499,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  },
  {
    title: "Titan 100W GaN Fast Charger",
    description: "Next-gen Gallium Nitride technology with triple USB-C ports for laptops and phones.",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9",
  },
  {
    title: "AeroLift Aluminum Laptop Stand",
    description: "Ergonomic sandblasted aluminum frame with 7 adjustable height levels for better posture.",
    price: 1899,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0cd4b3ffc6b0",
  },
  {
    title: "Apex Pro Smartphone Tripod",
    description: "Reinforced carbon fiber legs with a 360-degree ball head for professional vlogging.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
  },
  {
    title: "VoltCharge Qi Wireless Pad",
    description: "15W fast-charging pad with premium fabric finish and foreign object detection.",
    price: 1599,
    imageUrl: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34",
  },
  {
    title: "Lumina 4K Ultra HD Webcam",
    description: "AI-powered auto-framing and dual noise-canceling microphones for crystal clear calls.",
    price: 11499,
    imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da",
  },
  {
    title: "QuietComfort Pro ANC Earbuds",
    description: "Hybrid active noise cancellation with 40 hours of playtime and transparency mode.",
    price: 7999,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    title: "Halo Smart LED Desk Lamp",
    description: "Flicker-free lighting with adjustable color temperature and built-in USB charging port.",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1534073828943-f801091bb18c",
  },
  {
    title: "PowerBank Max 20,000mAh",
    description: "High-capacity power bank with PD 3.0 support and digital percentage display.",
    price: 3299,
    imageUrl: "https://images.unsplash.com/photo-1609592424089-9806596136f4",
  },
  {
    title: "Horizon Series Smartwatch",
    description: "Sapphire glass display with GPS, heart rate, and 5ATM water resistance.",
    price: 14999,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Kraken V3 Gaming Headset",
    description: "THX Spatial Audio with 50mm drivers and ultra-soft memory foam ear cushions.",
    price: 6499,
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
  {
    title: "MasterFocus Ergonomic Mouse",
    description: "Vertical design to reduce wrist strain with silent clicks and dual-mode Bluetooth.",
    price: 2799,
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
  },
  {
    title: "StudioStream Condenser Mic",
    description: "Cardioid pickup pattern with zero-latency monitoring for podcasting and gaming.",
    price: 8299,
    imageUrl: "https://images.unsplash.com/photo-1590602846989-e99296a1a8e7",
  },
  {
    title: "Goliath Extended Mouse Pad",
    description: "Micro-textured cloth surface with anti-fray stitching and non-slip rubber base.",
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1616627561839-074385244ff7",
  },
  {
    title: "FrostByte Laptop Cooling Pad",
    description: "Six high-speed quiet fans with blue LED lighting and adjustable tilt angles.",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    title: "Nexus 7-in-1 USB-C Hub",
    description: "Aluminum hub with 4K HDMI, SD/TF card slots, and 85W Power Delivery pass-through.",
    price: 3699,
    imageUrl: "https://images.unsplash.com/photo-1562975079-6fa629611c08",
  },
  {
    title: "OpticLens Mobile Kit",
    description: "Professional grade 120° wide-angle and 15x macro lenses for smartphone photography.",
    price: 2199,
    imageUrl: "https://images.unsplash.com/photo-1616423642151-6927958679f2",
  },
  {
    title: "DriveSync Bluetooth Car Kit",
    description: "Noise-cancelling microphone for clear calls and FM transmitter for music streaming.",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
  {
    title: "Shield Pro Privacy Screen",
    description: "Anti-glare and blue light filter screen protector for 15.6-inch laptops.",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "NanoDrive 512GB External SSD",
    description: "Ultra-compact NVMe SSD with up to 1050MB/s read speeds and rugged casing.",
    price: 7499,
    imageUrl: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e",
  },
  {
    title: "CableTidy Magnetic Clips",
    description: "Set of 5 magnetic cable organizers to keep your desk clutter-free and organized.",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1585338673995-4fd984600d7f",
  },
  {
    title: "Aura RGB LED Light Strip",
    description: "5-meter smart LED strip with voice control and music synchronization modes.",
    price: 1799,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
  },
  {
    title: "TravelSafe Hard Shell Case",
    description: "Waterproof carrying case for headphones and small electronics with mesh pockets.",
    price: 1199,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    title: "Breeze Mini USB Desk Fan",
    description: "Quiet brushless motor with 3 speed settings and 360-degree rotation.",
    price: 799,
    imageUrl: "https://images.unsplash.com/photo-1619234140238-23746c00d45d",
  },
  {
    title: "SmartTag Pro Item Finder",
    description: "Bluetooth tracker with 120m range and replaceable battery for keys and wallets.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1586033779166-f12f4b230210",
  },
  {
    title: "ClearView Monitor Light Bar",
    description: "Space-saving asymmetrical lighting to reduce screen glare and eye strain.",
    price: 4599,
    imageUrl: "https://images.unsplash.com/photo-1593642702749-b7d2a5482bb3",
  },
  {
    title: "SoundBar Compact S2",
    description: "2.0 channel desktop soundbar with dual subwoofers and Bluetooth 5.1.",
    price: 5299,
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
  }
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
