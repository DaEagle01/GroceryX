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
    path: "/products",
    name: "Products",
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

export const staticProducts: Product[] = [
  {
    bengaliName:
      "প্রিমিয়াম পাঙ্গাস মাছ মাথাবিহীন এবং দেশি রসুন (কম্বো) ৫০০ গ্রাম",
    objectID: 152,
    name: "Premium Pangas Fish Headless and Deshi Roshun (Combo) 500 gm",
    nameWithoutSubText: "Premium Pangas Fish Headless and Deshi Roshun (Combo)",
    subText: "500 gm",
    rating: "5",
    category: "Freshwater Fish",
    flashSale: true,
    mrp: 299,
    corpPrice: 229,
    price: 229,
    shortDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Pangas Fish Headless ±30 gm 500 gm\r\n\r\nPangas is a less bony fish, it has pink flesh and a mild smell which makes it popular. Pangas flesh is tender and has a moist & sweet flavor. When cooked the flesh turns white and flaky.\r\n\r\nPangas Curry Cut each pack contains 500gm which has 7 to 11 pics fish steak. \r\n\r\nPangas is a versatile fish that can be cooked in a variety of ways, including baking, grilling, frying, and steaming. It is a low-fat, low-calorie protein source that is rich in essential nutrients like Omega-3 fatty acids, vitamins B12 and D, and minerals such as phosphorus and selenium. Whether you are a professional chef or a home cook, Pangas fish is a great option for those who want to include more seafood in their diet. Order Pangas fish today and add a healthy, delicious, and easy-to-cook option to your menu!\r\n\r\n\r\n45-50\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.",
    longDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Pangas Fish Headless ±30 gm 500 gm\r\n\r\nPangas is a less bony fish, it has pink flesh and a mild smell which makes it popular. Pangas flesh is tender and has a moist & sweet flavor. When cooked the flesh turns white and flaky.\r\n\r\nPangas Curry Cut each pack contains 500gm which has 7 to 11 pics fish steak. \r\n\r\nPangas is a versatile fish that can be cooked in a variety of ways, including baking, grilling, frying, and steaming. It is a low-fat, low-calorie protein source that is rich in essential nutrients like Omega-3 fatty acids, vitamins B12 and D, and minerals such as phosphorus and selenium. Whether you are a professional chef or a home cook, Pangas fish is a great option for those who want to include more seafood in their diet. Order Pangas fish today and add a healthy, delicious, and easy-to-cook option to your menu!\r\n\r\n\r\n45-50\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.",
    slug: "chaldal-premium-pangas-fish-headless-and-deshi-roshun-combo-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/chaldal-premium-pangas-fish-headless-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151604&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [12, 7, 2, 1235, 23, 2, 1725, 23, 2],
    categories: [12, 1235, 1725],
    manufacturers: [],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "VirtualBundle",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 6,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711422000000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711467000000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 540,
        AvailabilityCutOffTimeOfDay: 1350,
      },
    ],
  },
  {
    bengaliName:
      "প্রিমিয়াম রুই মাছ মাথাবিহীন কারি কাট এবং দেশি রসুন (কম্বো) ৫০০ গ্রাম",
    objectID: 151,
    name: "Premium Rui Fish Headless Curry Cut and Deshi Roshun (Combo) 500 gm",
    nameWithoutSubText:
      "Premium Rui Fish Headless Curry Cut and Deshi Roshun (Combo)",
    subText: "500 gm",
    rating: "4.5",
    category: "Sport Fish",
    flashSale: false,
    mrp: 480,
    corpPrice: 369,
    price: 369,
    shortDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Rui Fish Headless Curry Cut (7-11 pcs) ±30 gm 500 gm\r\n\r\nWe are offering Premium Rui With means This fishes are 100% dish bread and specially collected from Rajshahi.\r\n\r\nOur RUI fish are mentioned as Medium size with means each of the live fish will have to be between 1.8 KG to 2.5 KG. \r\n\r\nBengali cut pieces of Freshwater Rui that's caught fresh, cut, cleaned.\r\n\r\nThese are Medium pieces of Bengali Cuts of freshwater Rui, that are perfect for curries or fish fry. Rui is a soft-textured bony fish with a subtle flavour.\r\n\r\nfish & seafood is sourced from approved local fishermen Regularly, they contain no added chemicals.\r\n\r\nFeatures of our premium Rui fish:\r\n\r\n1. 100% native cotton fish.\r\n2. Our fishes are sourced from selected fish farms in Rajshahi where systematic fish farming is ensured.\r\n3. Our premium fish are processed under our own supervision by skilled artisans.\r\n4. Clean water is used when poaching premium fish.\r\n5. Safe packing is done in compliance with complete hygiene rules.\r\n6. Fish are caught and processed on the same day.\r\n\r\n45-50\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.",
    longDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Rui Fish Headless Curry Cut (7-11 pcs) ±30 gm 500 gm\r\n\r\nWe are offering Premium Rui With means This fishes are 100% dish bread and specially collected from Rajshahi.\r\n\r\nOur RUI fish are mentioned as Medium size with means each of the live fish will have to be between 1.8 KG to 2.5 KG. \r\n\r\nBengali cut pieces of Freshwater Rui that's caught fresh, cut, cleaned.\r\n\r\nThese are Medium pieces of Bengali Cuts of freshwater Rui, that are perfect for curries or fish fry. Rui is a soft-textured bony fish with a subtle flavour.\r\n\r\nfish & seafood is sourced from approved local fishermen Regularly, they contain no added chemicals.\r\n\r\nFeatures of our premium Rui fish:\r\n\r\n1. 100% native cotton fish.\r\n2. Our fishes are sourced from selected fish farms in Rajshahi where systematic fish farming is ensured.\r\n3. Our premium fish are processed under our own supervision by skilled artisans.\r\n4. Clean water is used when poaching premium fish.\r\n5. Safe packing is done in compliance with complete hygiene rules.\r\n6. Fish are caught and processed on the same day.\r\n\r\n45-50\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.",
    slug: "chaldal-premium-rui-fish-headless-curry-cut-and-deshi-roshun-combo-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/chaldal-premium-rui-fish-headless-curry-cut-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151603&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [12, 7, 2, 1235, 23, 2, 1725, 23, 2],
    categories: [12, 1235, 1725],
    manufacturers: [],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "VirtualBundle",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 1,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711422000000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711467000000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 540,
        AvailabilityCutOffTimeOfDay: 1350,
      },
    ],
  },
  {
    bengaliName: "প্রিমিয়াম কই মাছ মাঝারি এবং দেশি রসুন (কম্বো) ৫০০ গ্রাম",
    objectID: 150,
    name: "Premium Koi Fish Medium and Deshi Roshun (Combo) 500 gm",
    nameWithoutSubText: "Premium Koi Fish Medium and Deshi Roshun (Combo)",
    subText: "500 gm",
    rating: "4.8",
    category: "Coldwater Fish",
    flashSale: true,
    mrp: 330,
    corpPrice: 269,
    price: 269,
    shortDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Koi Fish Medium (7-9 pcs) ±30 gm 500 gm\r\n\r\nKoi are freshwater fish that belong to the family of carp fish.\r\nKoi has a single centre bone and multiple small bones, that can be removed after cooking. It has firm skin and texture and an oily flavor. This cut consists of medium-sized, whole, cleaned & gutted koi fish, with head, for your convenience. Koi fish can be enjoyed steamed, grilled, fried or in curries. They are widely enjoyed in Bengali cuisine, Tel Koi being a popular dish.\r\n\r\n45-50\r\n\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.\r\n",
    longDesc:
      "Deshi Roshun (Garlic Local) ±25 gm 500 gm\r\n\r\nPremium Koi Fish Medium (7-9 pcs) ±30 gm 500 gm\r\n\r\nKoi are freshwater fish that belong to the family of carp fish.\r\nKoi has a single centre bone and multiple small bones, that can be removed after cooking. It has firm skin and texture and an oily flavor. This cut consists of medium-sized, whole, cleaned & gutted koi fish, with head, for your convenience. Koi fish can be enjoyed steamed, grilled, fried or in curries. They are widely enjoyed in Bengali cuisine, Tel Koi being a popular dish.\r\n\r\n45-50\r\n\r\nGarlic is an excellent source of minerals and vitamins that are essential for optimum health. The bulbs are one of the richest sources of potassium, iron, calcium, magnesium, manganese, zinc, and selenium. Selenium is a heart-healthy mineral, and is an important cofactor for antioxidant enzymes within the body.\r\n",
    slug: "chaldal-premium-koi-fish-medium-and-deshi-roshun-combo-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/chaldal-premium-koi-fish-medium-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151602&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [12, 7, 2, 1235, 23, 2, 1725, 23, 2],
    categories: [12, 1235, 1725],
    manufacturers: [],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "VirtualBundle",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 5,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711422000000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711467000000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 540,
        AvailabilityCutOffTimeOfDay: 1350,
      },
    ],
  },
  {
    bengaliName: "হরিণা চিংড়ি মাঝারি ৬০-৭০ টি ±১৫ গ্রাম ২৫০ গ্রাম",
    objectID: 24478,
    name: "Horina Chingri (Shrimp) 60-70 pcs ±15 gm 250 gm",
    nameWithoutSubText: "Horina Chingri (Shrimp) 60-70 pcs ±15 gm",
    subText: "250 gm",
    rating: "5",
    category: "Tropical Fish",
    flashSale: false,
    mrp: 269,
    corpPrice: 229,
    price: 229,
    shortDesc: null,
    longDesc:
      "Before Processing this product live weight was 270 gm and the product quantity around 60-70 pcs.\r\n\r\nSource: CULTURED /GHER\r\n\r\nHorina Chingri Shiny, moist, and even slippery skin.In Khulna & Shatkhira area best quality Horina Chingri is available.\r\n",
    slug: "horina-chingri-shrimp-60-70-pcs-15-gm-250-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/horina-chingri-shrimp-60-70-pcs-15-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103440&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [1235, 23, 2],
    categories: [1235],
    manufacturers: [534, 257, 472, 474],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "Grocery",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711427400000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711461600000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 630,
        AvailabilityCutOffTimeOfDay: 1260,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 420,
        AvailabilityCutOffTimeOfDay: null,
      },
    ],
  },
  {
    bengaliName: "বাগদা চিংড়ি ৩৫-৪০ টি ±৩০ গ্রাম ৫00 গ্রাম",
    objectID: 13670,
    name: "Bagda Chingri (Shrimp) 35-40 pcs ±30 gm 500 gm",
    nameWithoutSubText: "Bagda Chingri (Shrimp) 35-40 pcs ±30 gm",
    subText: "500 gm",
    rating: "4.2",
    category: "Saltwater Fish",
    flashSale: true,
    mrp: 575,
    corpPrice: 479,
    price: 479,
    shortDesc: null,
    longDesc:
      "Before Processing this product live weight was 520 gm and the product quantity around 35-40 pcs.\r\n\r\nSource:CULTURED /GHER\r\n\r\nEnglish Name: Tiger Prawn. Bengali Name: Bagda Chingri.Tiger prawns are large-bodied . Tiger prawns get their common name from the stripes that cover their shell..In Khulna & Satkhira area best quality Tiger Prawn fish available.\r\n",
    slug: "bagda-chingri-shrimp-35-40-pcs-30-gm-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/bagda-chingri-shrimp-35-40-pcs-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103452&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [1235, 23, 2],
    categories: [1235],
    manufacturers: [534, 257, 277, 278, 471, 472],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "Grocery",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 3,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 420,
        AvailabilityCutOffTimeOfDay: null,
      },
    ],
  },
  {
    bengaliName: "বাগদা চিংড়ি ১৮-২২ টি ±৩০ গ্রাম ৫০০ গ্রাম",
    objectID: 39718,
    name: "Bagda Chingri (Shrimp) 18-22 pcs ±30 gm 500 gm",
    nameWithoutSubText: "Bagda Chingri (Shrimp) 18-22 pcs ±30 gm",
    subText: "500 gm",
    rating: "5",
    category: "Freshwater Fish",
    flashSale: false,
    mrp: 599,
    corpPrice: 569,
    price: 569,
    shortDesc: null,
    longDesc:
      "Source:CULTURED /GHER\r\n\r\n18-22 pieces\r\n\r\nEnglish Name: Tiger Prawn. Bengali Name: Bagda Chingri.Tiger prawns are large-bodied . Tiger prawns get their common name from the stripes that cover their shell..In Khulna & Satkhira area best quality Tiger Prawn fish available.\r\n",
    slug: "bagda-chingri-shrimp-18-22-pcs-30-gm-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/bagda-chingri-shrimp-18-22-pcs-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D139150&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [1235, 23, 2],
    categories: [1235],
    manufacturers: [534],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "Grocery",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 420,
        AvailabilityCutOffTimeOfDay: null,
      },
    ],
  },
  {
    bengaliName: "প্রিমিয়াম পাংগাস ফিশ হেডলেস ±৩০ গ্রাম ৫০০ গ্রাম",
    objectID: 38541,
    name: "Premium Pangas Fish Headless ±30 gm  500 gm",
    nameWithoutSubText: "Premium Pangas Fish Headless ±30 gm",
    subText: "500 gm",
    rating: "4.5",
    category: "Sport Fish",
    flashSale: true,
    mrp: 219,
    corpPrice: 199,
    price: 199,
    shortDesc: null,
    longDesc:
      "Pangas is a less bony fish, it has pink flesh and a mild smell which makes it popular. Pangas flesh is tender and has a moist & sweet flavor. When cooked the flesh turns white and flaky.\r\n\r\nChaldal Pangas Curry Cut each pack contains 500gm which has 7 to 11 pics fish steak. \r\n\r\nPangas is a versatile fish that can be cooked in a variety of ways, including baking, grilling, frying, and steaming. It is a low-fat, low-calorie protein source that is rich in essential nutrients like Omega-3 fatty acids, vitamins B12 and D, and minerals such as phosphorus and selenium. Whether you are a professional chef or a home cook, Pangas fish is a great option for those who want to include more seafood in their diet. Order Pangas fish today and add a healthy, delicious, and easy-to-cook option to your menu!",
    slug: "chaldal-premium-pangas-fish-headless-30-gm-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/chaldal-premium-pangas-fish-headless-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127504&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [1235, 23, 2, 1725, 23, 2],
    categories: [1235, 1725],
    manufacturers: [534, 257],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "Grocery",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 11,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
    ],
  },
  {
    bengaliName: "পাবদা মাছ  ±৩০ গ্রাম ৫০০ গ্রাম",
    objectID: 13686,
    name: "Pabda Fish ±30 gm 500 gm",
    nameWithoutSubText: "Pabda Fish ±30 gm",
    subText: "500 gm",
    rating: "4.8",
    category: "Coldwater Fish",
    flashSale: false,
    mrp: 249,
    corpPrice: 239,
    price: 239,
    shortDesc: null,
    longDesc:
      "Before processing this product live weight was 520 gm and the product quantity around 15-18 pcs.\r\nSource: CULTURED\r\n\r\nButterfish or pabda fish is a type of catfish. It is a freshwater fish that can be found primarily in India and Bangladesh. It has a flavorful taste and a definite texture.In Khulna & Jessore area best quality Pabda fish is available.\r\n",
    slug: "pabda-fish-30-gm-500-gm",
    doNotApplyDiscounts: 0,
    picturesUrls: [
      "https://chaldn.com/_mpimage/pabda-fish-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103441&q=best&v=1",
    ],
    offerPicturesUrls: [],
    recursiveCategories: [1235, 23, 2],
    categories: [1235],
    manufacturers: [534, 257, 278, 472, 474],
    blockSale: 0,
    derivedProductVariant: [],
    unitQuantity: 1,
    _highlightResult: {},
    catalogItemType: "Grocery",
    productAvailabilityForSelectedWarehouse: [
      {
        Quantity: 2,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711398524925,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: null,
        AvailabilityCutOffTimeOfDay: null,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711425600000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711461600000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 600,
        AvailabilityCutOffTimeOfDay: 1260,
      },
      {
        Quantity: 50,
        EarliestAvailableTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        AvailabilityExpiryTime: {
          UnixTimeMilliseconds: 1711414800000,
          Offset: 360,
        },
        EarliestAvailableTimeOfDay: 420,
        AvailabilityCutOffTimeOfDay: null,
      },
    ],
  },
];
