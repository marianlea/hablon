const products = [
  {
    id: 1,
    name: "Sibuyas Ilocos",
    price: 49,
    unit: "kg",
    img: [
      "https://i.imgur.com/Q5dWR8P.jpeg",
      "https://i.imgur.com/U5pFPQd.jpeg",
      "https://i.imgur.com/QDWZEx3.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 1,
  },
  {
    id: 2,
    name: "Kamatis Batangas",
    price: 35,
    unit: "kg",
    img: [
      "https://i.imgur.com/XTlvbTc.jpeg",
      "https://i.imgur.com/sfR3fOx.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 2,
  },
  {
    id: 3,
    name: "Banig Samar",
    price: 450,
    unit: "pc",
    img: [
      "https://i.imgur.com/OGX25P4.jpeg",
      "https://i.imgur.com/NumqDOJ.jpeg",
      "https://i.imgur.com/E3xQWWf.jpeg",
    ],
    category: "Home & Living",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 3,
  },
  {
    id: 4,
    name: "Walis Tingting",
    price: 120,
    unit: "pc",
    img: [
      "https://i.imgur.com/RjxyA4A.jpeg",
      "https://i.imgur.com/0JNq1Pt.jpeg",
    ],
    category: "Home & Living",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 4,
  },
  {
    id: 5,
    name: "Inabel Blanket",
    price: 950,
    unit: "pc",
    img: [
      "https://i.imgur.com/cCqHdka.jpeg",
      "https://i.imgur.com/FkoBWsQ.jpeg",
    ],
    category: "Fabrics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 5,
  },
  {
    id: 6,
    name: "Handwoven Bayong Bag",
    price: 350,
    unit: "pc",
    img: [
      "https://i.imgur.com/V3uzhvc.jpeg",
      "https://i.imgur.com/L21Tn2z.jpeg",
    ],
    category: "Bags & Accessories",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 6,
  },
  {
    id: 7,
    name: "Sukang Paombong",
    price: 80,
    unit: "bottle",
    img: [
      "https://i.imgur.com/krTk20i.jpeg",
      "https://i.imgur.com/7kp0t29.jpeg",
    ],
    category: "Specialty / Limited Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 7,
  },
  {
    id: 8,
    name: "Handmade Beaded Bracelet",
    price: 199,
    unit: "pc",
    img: ["https://i.imgur.com/3uFnTrt.jpeg"],
    category: "Gifts & Souvenirs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 8,
  },
  {
    id: 9,
    name: "Kamatis",
    price: 30,
    unit: "kg",
    img: [
      "https://i.imgur.com/CdlNSLJ.jpeg",
      "https://i.imgur.com/sfR3fOx.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 1,
  },
  {
    id: 10,
    name: "Repolyo",
    price: 39,
    unit: "kg",
    img: [
      "https://i.imgur.com/k1uwG5A.jpeg",
      "https://i.imgur.com/kJdZUaU.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 2,
  },
  {
    id: 11,
    name: "Bawang",
    price: 55,
    unit: "kg",
    img: [
      "https://i.imgur.com/b2LJXIn.jpeg",
      "https://i.imgur.com/Pl8UvvQ.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 1,
  },
  {
    id: 12,
    name: "Talong",
    price: 39,
    unit: "kg",
    img: [
      "https://i.imgur.com/L7tbGfg.jpeg",
      "https://i.imgur.com/Z4Qx2NM.jpeg",
    ],
    category: "Farmer's Produce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 1,
  },
  {
    id: 13,
    name: "Longganisang Bulacan",
    price: 110,
    unit: "kg",
    img: [
      "https://i.imgur.com/QOmBGWr.jpeg",
      "https://i.imgur.com/xanBsbq.jpeg",
    ],
    category: "Specialty / Limited Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 7,
  },
  {
    id: 14,
    name: "Kapeng Barako",
    price: 455,
    unit: "kg",
    img: [
      "https://i.imgur.com/fCmJ6Xv.jpeg",
      "https://i.imgur.com/1oVtBR8.jpeg",
    ],
    category: "Specialty / Limited Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 2,
  },
  {
    id: 15,
    name: "Handwoven Basket",
    price: 250,
    unit: "pc",
    img: [
      "https://i.imgur.com/xQZlqwd.jpeg",
      "https://i.imgur.com/FF1xvaX.jpeg",
    ],
    category: "Bags & Accessories",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 6,
  },
  {
    id: 16,
    name: "Handwoven Duyan / Hammock",
    price: 1420,
    unit: "pc",
    img: [
      "https://i.imgur.com/UkHYJNz.jpeg",
      "https://i.imgur.com/Mh9x17c.jpeg",
    ],
    category: "Home & Living",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus laborum sit iste deleniti illo ipsum nulla odio, reiciendis expedita. Minima, possimus vero doloribus dolorum pariatur voluptate ipsam iusto dignissimos",
    availability: "available",
    vendor_id: 4,
  },
];

export default products;
