const products = {
    notes: [
      // Add note product objects here
      {
        id: 1,
        name: 'Notebook 1',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 2,
        name: 'Notebook 2',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 3,
        name: 'Notebook 3',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 4,
        name: 'Notebook 4',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 5,
        name: 'Notebook 5',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 6,
        name: 'Notebook 6',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      },
      {
        id: 7,
        name: 'Notebook 7',
        description: 'A high-quality notebook for all your writing needs.',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pQtr0rpBL.jpg', // Replace with a real image URL
        weight: '1.2 lbs',
        price: 9.99,
        availability: 'In stock',
      }
    ],
    books: [
      // Add book product objects here
      {
        id: 8,
        name: 'Thirukural',
        description: 'classic Tamil language text consisting of 1,330 short couplets, or kuralss.',
        image: 'https://routemybook.com/uploads/productImage/product1641542404.jpg',
        weight: '1.2 lbs',
        price: 3,
        availability: 'In stock',
      }
    ],
    notebooks: [
      // Add notebook product objects here
      {
        id: 100,
        name: 'Account notebook',
        description: '120 page long size accountancy notebook',
        image: 'https://gayatrinotebooks.com/images/longsize/account.jpg',
        weight: '100 grams',
        price: 2,
        availability: 'In stock',
      },
      {
        id: 101,
        name: 'Drawing notebook',
        description: '80 page Drawing - Long Size Notebook        ',
        image: 'https://gayatrinotebooks.com/images/longsize/drawing.jpg',
        weight: '90 grams',
        price: 1.5,
        availability: 'In stock',
      },
      {
        id: 102,
        name: 'Graph Notebook',
        description: '80 page Graph Notebook - Long Size Notebook',
        image: 'https://gayatrinotebooks.com/images/longsize/graph.jpg',
        weight: '100 grams',
        price: 1.5,
        availability: 'In stock',
      },
      {
        id: 103,
        name: 'Composition notebook',
        description: '80 page Composision Notebook',
        image: 'https://gayatrinotebooks.com/images/longsize/composition.jpg',
        weight: '80 grams',
        price: 1.5,
        availability: 'In stock',
      },
      {
        id: 104,
        name: 'Five subject notebook',
        description: '240 page  43cm /69cm five subject Notebook',
        image: 'https://gayatrinotebooks.com/images/longsize/fivesubject.jpg',
        weight: '200 grams',
        price: 3,
        availability: 'In stock',
      }
    ],
    others: [
      {
        id: 9,
        "name": "Dell Laptop",
        "description": "A high-quality laptop for all your computing needs.",
        "image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
        "weight": "4.2 lbs",
        "price": 799.99,
        "availability": "In stock"
      },
      {
        id: 10,
        "name": "Sceahffer Pen",
        "description": "A sleek and stylish pen for all your writing needs.",
        "image": "https://cdn.shopify.com/s/files/1/0657/7923/7091/products/WP08110_1_1200x1200_crop_center.webp?v=1664270222",
        "weight": "0.2 lbs",
        "price": 2.99,
        "availability": "In stock"
      },
      {
        id: 11,
        "name": "Samsonite Backpack",
        "description": "A durable and spacious backpack for all your storage needs.",
        "image": "https://www.samsonite.in/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Samsonite/default/dw1591e9f8/images/ikonn-eco-laptop-backpack-iii-in/hi-res/145931_1041_hi-res_FRONT34_1.jpg?sw=500&sh=750",
        "weight": "2.8 lbs",
        "price": 49.99,
        "availability": "In stock"
      },
      {
        id: 12,
        "name": "Skullcandy Headphones",
        "description": "High-quality headphones for an immersive audio experience.",
        "image": "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/Hesh-ANC_True-Black_S6HHW-N740_Hero_v001.jpg",
        "weight": "0.5 lbs",
        "price": 99.99,
        "availability": "In stock"
      },
      {
        id: 13,
        "name": "Kids Umbrella",
        "description": "A reliable umbrella to keep you dry on rainy days.",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715NYjrzi9L._UL1500_.jpg",
        "weight": "0.8 lbs",
        "price": 19.99,
        "availability": "In stock"
      },
      {
        id: 14,
        "name": "school Water bottle",
        "description": "A sturdy and reusable water bottle for all your hydration needs.",
        "image": "https://cdn.shopify.com/s/files/1/0594/7251/1153/products/drinkbottles_4280a392-f802-461e-b1d2-7f03bcdadef8.jpg?v=1668591526",
        "weight": "0.4 lbs",
        "price": 9.99,
        "availability": "In stock"
      },
      {
        id: 15,
        "name": "Gainix Sunglasses",
        "description": "Stylish sunglasses to protect your eyes from the sun.",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61i+V-KGnBS._UL1500_.jpg",
        "weight": "0.2 lbs",
        "price": 29.99,
        "availability": "In stock"
      },
      {
        id: 16,
        "name": "Redmi Smartphone",
        "description": "A feature-packed smartphone to keep you connected on the go.",
        "image": "https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg",
        "weight": "0.4 lbs",
        "price": 699.99,
        "availability": "In stock"
      }
    ],
    phones: [
      // Add book product objects here
      {
        id: 17,
        "name": "Redmi Smartphone",
        "description": "A feature-packed smartphone to keep you connected on the go.",
        "image": "https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg",
        "weight": "0.4 lbs",
        "price": 699.99,
        "availability": "In stock"
      }
    ],
    computers: [
      // Add book product objects here
      {
        id: 230,
        "name": "Dell Laptop",
        "description": "A high-quality laptop for all your computing needs.",
        "image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
        "weight": "4.2 lbs",
        "price": 799.99,
        "availability": "In stock"
      }
    ],
    tvs: [
      // Add book product objects here
      {
        id: 240,
        "name": "Sony BRavia",
        "description": "KD-43X80K - Sony Bravia 108 cm (43) 4K Ultra HD Smart LED Google TV (Black) (2022 Model) | with Dolby Vision Atmos & Alexa Compatibility",
        "image": "https://www.sony.co.in/image/ccbe548efa94995a9c034d96a4a6acbb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        "weight": "4.2 lbs",
        "price": 799.99,
        "availability": "In stock"
      }
    ],
    // Add more categories as needed
  };
  
  export default products;
  