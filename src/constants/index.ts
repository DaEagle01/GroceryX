import { Product } from "@/types";

export const bgColors = [
  "bg-orange-100 dark:bg-orange-400",
  "bg-teal-100 dark:bg-teal-400",
  "bg-cyan-100 dark:bg-cyan-400",
  "bg-fuchsia-100 dark:bg-fuchsia-400",
  "bg-violet-100 dark:bg-violet-400",
  "bg-amber-100 dark:bg-amber-400",
];

export const borderColors = [
  "border-orange-600",
  "border-teal-600",
  "border-cyan-600",
  "border-fuchsia-600",
  "border-violet-600",
  "border-amber-600",
];

export const borderSide = ["l", "t", "r", "b"];

export const publicRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/fishes",
    name: "Fishes",
  },
  {
    path: "/flash-sale",
    name: "Flash Sale",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
];

export const categories = [
  {
    category: "Freshwater Fish",
    image:
      "https://chaldn.com/_mpimage/chaldal-premium-pangas-fish-headless-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151604&q=best&v=1",
    path: "freshwater-fish",
  },
  {
    category: "Sport Fish",
    image:
      "https://chaldn.com/_mpimage/chaldal-premium-rui-fish-headless-curry-cut-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151603&q=best&v=1",
    path: "sport-fish",
  },
  {
    category: "Coldwater Fish",
    image:
      "https://chaldn.com/_mpimage/chaldal-premium-koi-fish-medium-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151602&q=best&v=1",
    path: "coldwater-fish",
  },
  {
    category: "Tropical Fish",
    image:
      "https://chaldn.com/_mpimage/horina-chingri-shrimp-60-70-pcs-15-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103440&q=best&v=1",
    path: "tropical-fish",
  },
  {
    category: "Saltwater Fish",
    image:
      "https://chaldn.com/_mpimage/bagda-chingri-shrimp-35-40-pcs-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103452&q=best&v=1",
    path: "saltwater-fish",
  },
  {
    category: "Frozen Fish",
    image:
      "https://chaldn.com/_mpimage/pabda-fish-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103441&q=best&v=1",
    path: "frozen-fish",
  },
];

export const priceRanges = [
  { start: 0, end: 300 },
  { start: 300, end: 500 },
  { start: 500, end: 700 },
  { start: 700, end: 1000 },
];

export const ratings = [1, 2, 3, 4, 5];
