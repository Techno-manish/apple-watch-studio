"use client";

export const collections = [
  {
    id: "Series 10",
    name: "Apple Watch Series 10",
    sizes: [
      { id: "41mm", size: "41mm", price: 399 },
      { id: "45mm", size: "45mm", price: 429 },
    ],
    cases: [
      {
        id: "aluminum",
        name: "Aluminum",
        variations: [
          {
            id: "aluminum_silver",
            name: "Silver Aluminum Case",
            price: 329,
            image: "/cases/aluminum-silver-case.png",
          },
          {
            id: "aluminum_gold",
            name: "Gold Aluminum Case",
            price: 349,
            image: "/cases/Rose-gold-aluminum.png",
          },
          {
            id: "aluminum_black",
            name: "Jet Black Aluminum Case",
            price: 359,
            image: "/cases/aluminum-silver-case.png",
          },
        ],
      },
      {
        id: "titanium",
        name: "Titanium",
        variations: [
          {
            id: "titanium_natural",
            name: "Natural Titanium Case",
            price: 499,
            image: "/cases/natural-titanium-case.png",
          },
          {
            id: "titanium_gold",
            name: "Gold Titanium Case",
            price: 519,
            image: "/cases/natural-titanium-case.png",
          },
          {
            id: "titanium_slate",
            name: "Slate Titanium Case",
            price: 539,
            image: "/cases/natural-titanium-case.png",
          },
        ],
      },
    ],
    bands: [
      {
        id: "stainless_steel",
        name: "Stainless Steel",
        variations: [
          {
            id: "natural_milanese",
            name: "Natural Milanese Loop",
            price: 129,
            image: "bands/slate-link-bracelet.jpg",
          },
          {
            id: "gold_milanese",
            name: "Gold Milanese Loop",
            price: 139,
            image: "bands/slate-link-bracelet.jpg",
          },
          {
            id: "slate_milanese",
            name: "Slate Milanese Loop",
            price: 149,
            image: "bands/slate-link-bracelet.jpg",
          },
        ],
      },
      {
        id: "sport_loop",
        name: "Sport Loop",
        variations: [
          {
            id: "ultramarine_sport",
            name: "Ultramarine Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
          {
            id: "lake_green_sport",
            name: "Lake Green Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
          {
            id: "blue_cloud_sport",
            name: "Blue Cloud Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
        ],
      },
      {
        id: "solo_loop",
        name: "Solo Loop",
        variations: [
          {
            id: "star_fruit_solo",
            name: "Star Fruit Solo Loop",
            price: 79,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "ultramarine_solo",
            name: "Ultramarine Solo Loop",
            price: 79,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "lake_green_solo",
            name: "Lake Green Solo Loop",
            price: 79,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "black_solo",
            name: "Black Solo Loop",
            price: 79,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "light_blush_solo",
            name: "Light Blush Solo Loop",
            price: 79,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "Hermès",
    name: "Apple Watch Hermès Series 10",
    sizes: [
      { id: "42mm", size: "42mm", price: 20 },
      { id: "46mm", size: "46mm", price: 40 },
    ],
    cases: [
      {
        id: "titanium",
        name: "Titanium",
        variations: [
          {
            id: "titanium_silver",
            name: "Silver Titanium Case",
            price: 250,
            image: "/cases/Hermes-titanium-case.png",
          },
        ],
      },
    ],
    bands: [
      {
        id: "hermes_toile_h",
        name: "Hermès Toile H",
        variations: [
          {
            id: "toile_hermes",
            name: "Gold/Écru Toile H Single Tour",
            price: 149,
            image: "/bands/Hermes-Toile.jpg",
          },
        ],
      },
      {
        id: "hermes_torsade",
        name: "Hermès Torsade",
        variations: [
          {
            id: "navy_hermes",
            name: "Navy Torsade Single Tour",
            price: 550,
            image: "/bands/Hermes-Torsade.jpg",
          },
          {
            id: "rouge_hermes",
            name: "Rouge Grenat Torsade Single Tour",
            price: 550,
            image: "/bands/Hermes-grand.jpg",
          },
        ],
      },
      {
        id: "hermes_grand_h",
        name: "Hermès Grand H",
        variations: [
          {
            id: "satine_hermes",
            name: "Satiné Grand H",
            price: 650,
            image: "/bands/Hermes-grand.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "SE",
    name: "Apple Watch SE",
    sizes: [
      { id: "40mm", size: "40mm", price: 10 },
      { id: "44mm", size: "44mm", price: 30 },
    ],
    cases: [
      {
        id: "aluminum",
        name: "Aluminum",
        variations: [
          {
            id: "aluminum_midnight",
            name: "Midnight Aluminum Case",
            price: 150,
            image: "/cases/aluminum-silver-case.png",
          },
          {
            id: "aluminum_starlight",
            name: "Starlight Aluminum Case",
            price: 150,
            image: "/cases/Rose-gold-aluminum.png",
          },
          {
            id: "aluminum_silver",
            name: "Silver Aluminum Case",
            price: 150,
            image: "/cases/aluminum-silver-case.png",
          },
        ],
      },
    ],
    bands: [
      {
        id: "stainless_steel",
        name: "Stainless Steel",
        variations: [
          {
            id: "natural_milanese",
            name: "Natural Milanese Loop",
            price: 129,
            image: "/bands/slate-link-bracelet.jpg",
          },
          {
            id: "gold_milanese",
            name: "Gold Milanese Loop",
            price: 139,
            image: "/bands/slate-link-bracelet.jpg",
          },
          {
            id: "slate_milanese",
            name: "Slate Milanese Loop",
            price: 149,
            image: "/bands/slate-link-bracelet.jpg",
          },
        ],
      },
      {
        id: "sport_loop",
        name: "Sport Loop",
        variations: [
          {
            id: "ultramarine_sport",
            name: "Ultramarine Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
          {
            id: "lake_green_sport",
            name: "Lake Green Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
          {
            id: "blue_cloud_sport",
            name: "Blue Cloud Sport Loop",
            price: 49,
            image: "/bands/ultramarine-sport-loop.jpg",
          },
        ],
      },
      {
        id: "solo_loop",
        name: "Solo Loop",
        variations: [
          {
            id: "star_fruit_solo",
            name: "Star Fruit Solo Loop",
            price: 69,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "ultramarine_solo",
            name: "Ultramarine Solo Loop",
            price: 69,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "lake_green_solo",
            name: "Lake Green Solo Loop",
            price: 69,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "black_solo",
            name: "Black Solo Loop",
            price: 69,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
          {
            id: "ligh_blush_solo",
            name: "Light Blush Solo Loop",
            price: 69,
            image: "/bands/ultramarine-solo-loop.jpg",
          },
        ],
      },
    ],
  },
];

export const watchImageSize = (size) => {
  if (size === "41mm") {
    return "w-[41vh] h-[41vh]";
  } else if (size === "45mm") {
    return "w-[45vh] h-[45vh]";
  } else if (size === "42mm") {
    return "w-[42vh] h-[42vh]";
  } else if (size === "46mm") {
    return "w-[46vh] h-[46vh]";
  } else if (size === "40mm") {
    return "w-[40vh] h-[40vh]";
  } else if (size === "44mm") {
    return "w-[44vh] h-[44vh]";
  }
  return "w-[41vh] h-[41vh]";
};
