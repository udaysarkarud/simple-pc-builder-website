// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const fakeData = [
    {
      id: "CPUP12345",
      image: "./../images/1.jpg",
      productName: "Intel Core i7-10700K",
      category: "processor",
      status: "In Stock",
      price: 349.99,
      description: "Powerful 8-core processor for high-performance computing.",
      keyFeatures: {
        brand: "Intel",
        model: "Core i7-10700K",
        specification: "8 cores, 16 threads",
        socket: "LGA 1200",
        clockSpeed: "3.8 GHz (5.1 GHz Turbo)",
        cache: "16MB SmartCache",
        tdp: "125W",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "John Doe",
          comment_date: "2023-07-28",
          comment:
            "Great processor! It's super fast and handles all my tasks with ease.",
        },
        {
          customer_name: "Sarah Smith",
          comment_date: "2023-07-27",
          comment:
            "I am impressed with the processor's performance. My games run smoothly now!",
        },
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-26",
          comment:
            "The processor exceeded my expectations. Editing videos has never been this quick!",
        },
        {
          customer_name: "Emily Brown",
          comment_date: "2023-07-25",
          comment:
            "This processor is a game-changer for my work. Multitasking is a breeze.",
        },
        {
          customer_name: "David Lee",
          comment_date: "2023-07-24",
          comment:
            "The processor's price is justified by its performance. Happy with my purchase!",
        },
        {
          customer_name: "Jennifer Miller",
          comment_date: "2023-07-23",
          comment:
            "Smooth checkout process and quick delivery. The processor works like a charm!",
        },
      ],
    },
    {
      id: "CPUP67890",
      image: "./../images/1.jpg",
      productName: "AMD Ryzen 9 5900X",
      category: "processor",
      status: "In Stock",
      price: 499.99,
      description:
        "High-performance 12-core processor for multitasking and gaming.",
      keyFeatures: {
        brand: "AMD",
        model: "Ryzen 9 5900X",
        specification: "12 cores, 24 threads",
        socket: "AM4",
        clockSpeed: "3.7 GHz (4.8 GHz Turbo)",
        cache: "70MB",
        tdp: "105W",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Alex Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! My computer's performance has significantly improved, and it handles heavy tasks like a breeze.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-27",
          comment:
            "I am extremely satisfied with the processor I purchased. It arrived quickly, and the installation process was smooth. It has made a noticeable difference in my PC's speed.",
        },
        {
          customer_name: "Ryan Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for delivering such a high-quality processor. It was worth every penny, and I'm impressed by how well it performs even under heavy workloads.",
        },
        {
          customer_name: "Sophia Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My gaming experience has improved dramatically, and I can now run the latest games with ease. Thank you!",
        },
        {
          customer_name: "William Lee",
          comment_date: "2023-07-24",
          comment:
            "I'm delighted with my purchase. The processor I bought from your website has transformed my computer's speed and responsiveness. Highly recommended!",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "Your website provided me with the perfect processor for my needs. It was shipped quickly, and I'm thrilled with its performance. You've earned a loyal customer!",
        },
      ],
    },
    {
      id: "CPUP24680",
      image: "./../images/1.jpg",
      productName: "Intel Core i5-11600K",
      category: "processor",
      status: "In Stock",
      price: 259.99,
      description: "6-core processor for smooth gaming and productivity.",
      keyFeatures: {
        brand: "Intel",
        model: "Core i5-11600K",
        specification: "6 cores, 12 threads",
        socket: "LGA 1200",
        clockSpeed: "3.9 GHz (4.9 GHz Turbo)",
        cache: "12MB SmartCache",
        tdp: "125W",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "John Smith",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website works like a charm! It has significantly improved my computer's performance. Thank you!",
        },
        {
          customer_name: "Emily Johnson",
          comment_date: "2023-07-27",
          comment:
            "I'm really satisfied with the processor I purchased. It was easy to install, and my system now runs much smoother and faster.",
        },
        {
          customer_name: "Michael Lee",
          comment_date: "2023-07-26",
          comment:
            "Excellent service and product! The processor I received was exactly as described, and it arrived promptly. Highly recommended!",
        },
        {
          customer_name: "Sarah Williams",
          comment_date: "2023-07-25",
          comment:
            "I'm impressed with the processor's performance. It handles resource-intensive tasks with ease, making multitasking a breeze.",
        },
        {
          customer_name: "David Brown",
          comment_date: "2023-07-24",
          comment:
            "The processor has exceeded my expectations. Your website offered the best price, and the customer support was top-notch!",
        },
        {
          customer_name: "Jennifer Martinez",
          comment_date: "2023-07-23",
          comment:
            "I'm a first-time customer, and I couldn't be happier. The processor arrived well-packaged and works flawlessly. Will shop here again!",
        },
      ],
    },
    {
      id: "CPUP35713",
      image: "./../images/1.jpg",
      productName: "AMD Ryzen 5 5600X",
      category: "processor",
      status: "In Stock",
      price: 289.99,
      description: "6-core processor for efficient multitasking and gaming.",
      keyFeatures: {
        brand: "AMD",
        model: "Ryzen 5 5600X",
        specification: "6 cores, 12 threads",
        socket: "AM4",
        clockSpeed: "3.7 GHz (4.6 GHz Turbo)",
        cache: "35MB",
        tdp: "65W",
      },
      individualRating: 4.6,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "Alex Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! My computer's performance has significantly improved, and it handles heavy tasks like a breeze.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-27",
          comment:
            "I am extremely satisfied with the processor I purchased. It arrived quickly, and the installation process was smooth. It has made a noticeable difference in my PC's speed.",
        },
        {
          customer_name: "Ryan Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for delivering such a high-quality processor. It was worth every penny, and I'm impressed by how well it performs even under heavy workloads.",
        },
        {
          customer_name: "Sophia Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My gaming experience has improved dramatically, and I can now run the latest games with ease. Thank you!",
        },
        {
          customer_name: "William Lee",
          comment_date: "2023-07-24",
          comment:
            "I'm delighted with my purchase. The processor I bought from your website has transformed my computer's speed and responsiveness. Highly recommended!",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "Your website provided me with the perfect processor for my needs. It was shipped quickly, and I'm thrilled with its performance. You've earned a loyal customer!",
        },
      ],
    },
    {
      id: "MBD12345",
      image: "./../images/1.jpg",
      productName: "ASUS ROG Strix Z590-E",
      category: "motherboard",
      status: "Out of Stock",
      price: 289.99,
      description: "High-end motherboard for gaming and content creation.",
      keyFeatures: {
        brand: "ASUS",
        model: "ROG Strix Z590-E",
        specification: "ATX Form Factor",
        socket: "LGA 1200",
        chipset: "Intel Z590",
        memorySlots: "4 x DDR4 DIMM (128GB max)",
        pcieSlots: "3 x PCIe 4.0 x16",
        m2Slots: "3",
        usbPorts: "USB 3.2 Gen 2, USB-C",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Sarah Miller",
          comment_date: "2023-07-28",
          comment:
            "I am amazed by the processor's performance! My computer now runs like a dream, and it handles multitasking effortlessly. Thank you for an excellent product!",
        },
        {
          customer_name: "James Anderson",
          comment_date: "2023-07-27",
          comment:
            "The processor I purchased from your website is outstanding! It has boosted my PC's speed and responsiveness, making it a joy to use for both work and gaming.",
        },
        {
          customer_name: "Ava Thompson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering top-notch processors. The one I received works flawlessly, and I'm impressed by how cool it stays even during intensive tasks.",
        },
        {
          customer_name: "Daniel Wilson",
          comment_date: "2023-07-25",
          comment:
            "I couldn't be happier with my purchase. The processor I bought from your website has breathed new life into my old computer, and it's like having a new system!",
        },
        {
          customer_name: "Lily Martin",
          comment_date: "2023-07-24",
          comment:
            "The processor is a game-changer! My gaming performance has dramatically improved, and I can now enjoy smooth gameplay with high frame rates. Highly recommended!",
        },
        {
          customer_name: "Ethan Carter",
          comment_date: "2023-07-23",
          comment:
            "I'm thoroughly satisfied with my experience. The processor arrived on time, and it has exceeded my expectations in terms of speed and overall performance.",
        },
      ],
    },
    {
      id: "MBD67890",
      image: "./../images/1.jpg",
      productName: "MSI MAG B560M Mortar WiFi",
      category: "motherboard",
      status: "In Stock",
      price: 159.99,
      description: "Feature-rich MicroATX motherboard with Wi-Fi support.",
      keyFeatures: {
        brand: "MSI",
        model: "MAG B560M Mortar WiFi",
        specification: "MicroATX Form Factor",
        socket: "LGA 1200",
        chipset: "Intel B560",
        memorySlots: "4 x DDR4 DIMM (128GB max)",
        pcieSlots: "2 x PCIe 4.0 x16, 1 x PCIe 3.0 x1",
        m2Slots: "2",
        usbPorts: "USB 3.2 Gen 2, USB-C",
      },
      individualRating: 4.6,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "MBD35713",
      image: "./../images/1.jpg",
      productName: "GIGABYTE B450 AORUS ELITE",
      category: "motherboard",
      status: "In Stock",
      price: 119.99,
      description: "Affordable ATX motherboard for mainstream gaming.",
      keyFeatures: {
        brand: "GIGABYTE",
        model: "B450 AORUS ELITE",
        specification: "ATX Form Factor",
        socket: "AM4",
        chipset: "AMD B450",
        memorySlots: "4 x DDR4 DIMM (128GB max)",
        pcieSlots: "2 x PCIe 3.0 x16, 3 x PCIe 2.0 x1",
        m2Slots: "2",
        usbPorts: "USB 3.1 Gen 2, USB-C",
      },
      individualRating: 4.5,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "MBD24680",
      image: "./../images/1.jpg",
      productName: "ASRock B550M-ITX/ac",
      category: "motherboard",
      status: "In Stock",
      price: 139.99,
      description: "Compact Mini-ITX motherboard with built-in Wi-Fi.",
      keyFeatures: {
        brand: "ASRock",
        model: "B550M-ITX/ac",
        specification: "Mini-ITX Form Factor",
        socket: "AM4",
        chipset: "AMD B550",
        memorySlots: "2 x DDR4 DIMM (64GB max)",
        pcieSlots: "1 x PCIe 4.0 x16",
        m2Slots: "2",
        usbPorts: "USB 3.2 Gen 1, USB-C",
      },
      individualRating: 4.7,
      averageRating: 4.5,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "RAM12345",
      image: "./../images/1.jpg",
      productName: "Corsair Vengeance LPX 16GB",
      category: "ram",
      status: "In Stock",
      price: 89.99,
      description: "High-performance DDR4 memory for smooth multitasking.",
      keyFeatures: {
        brand: "Corsair",
        model: "Vengeance LPX",
        specification: "16GB (2 x 8GB) DDR4",
        speed: "3200 MHz",
        casLatency: "16",
        voltage: "1.35V",
        heatSpreader: "Aluminum",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "RAM67890",
      image: "./../images/1.jpg",
      productName: "G.Skill Trident Z RGB 32GB",
      category: "ram",
      status: "In Stock",
      price: 179.99,
      description: "RGB DDR4 memory with excellent overclocking potential.",
      keyFeatures: {
        brand: "G.Skill",
        model: "Trident Z RGB",
        specification: "32GB (2 x 16GB) DDR4",
        speed: "3600 MHz",
        casLatency: "18",
        voltage: "1.35V",
        heatSpreader: "Aluminum",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "RAM24680",
      image: "./../images/1.jpg",
      productName: "Crucial Ballistix 16GB",
      category: "ram",
      status: "In Stock",
      price: 94.99,
      description: "Affordable DDR4 memory for gaming and content creation.",
      keyFeatures: {
        brand: "Crucial",
        model: "Ballistix",
        specification: "16GB (2 x 8GB) DDR4",
        speed: "3000 MHz",
        casLatency: "15",
        voltage: "1.35V",
        heatSpreader: "Aluminum",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Jennifer Lee",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new lease on life, and I'm extremely satisfied with its performance.",
        },
        {
          customer_name: "William Johnson",
          comment_date: "2023-07-27",
          comment:
            "I am impressed with the processor's capabilities. It handles demanding tasks effortlessly, and my system runs smoother than ever before. Thank you!",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your website for providing top-notch processors. The one I received is perfect for my needs, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Ethan Wilson",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It has improved my gaming experience significantly, and I'm thrilled with the exceptional performance it offers.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really impressed with the processor's speed and efficiency. It was a great investment, and I'm glad I chose your website for my processor upgrade.",
        },
        {
          customer_name: "Oliver Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor exceeded my expectations by far! It has made multitasking a breeze, and I'm recommending your website to all my tech-savvy friends.",
        },
      ],
    },
    {
      id: "RAM35713",
      image: "./../images/1.jpg",
      productName: "Kingston HyperX Fury 64GB",
      category: "ram",
      status: "In Stock",
      price: 299.99,
      description: "High-capacity DDR4 memory for heavy multitasking.",
      keyFeatures: {
        brand: "Kingston",
        model: "HyperX Fury",
        specification: "64GB (2 x 32GB) DDR4",
        speed: "3200 MHz",
        casLatency: "18",
        voltage: "1.35V",
        heatSpreader: "Aluminum",
      },
      individualRating: 4.8,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "Emily Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am thrilled with the processor I purchased from your website. It has transformed my computer's performance, and I'm impressed with its speed.",
        },
        {
          customer_name: "Michael Wilson",
          comment_date: "2023-07-27",
          comment:
            "The processor is fantastic! It handles all my tasks with ease, and I've noticed a significant improvement in my productivity. Thank you!",
        },
        {
          customer_name: "Sophia Miller",
          comment_date: "2023-07-26",
          comment:
            "I'm extremely satisfied with the processor's performance. It's been a pleasure using it, and I'm recommending your website to my colleagues.",
        },
        {
          customer_name: "Daniel Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor I bought from your website is a game-changer for my PC. It runs much smoother now, and I'm grateful for the excellent service!",
        },
        {
          customer_name: "Olivia Martin",
          comment_date: "2023-07-24",
          comment:
            "Your website provided the perfect processor for my needs. It's fast, reliable, and exactly what I was looking for. Keep up the great work!",
        },
        {
          customer_name: "Ethan Thompson",
          comment_date: "2023-07-23",
          comment:
            "I'm really impressed with the processor's performance and how cool it stays under load. It's a great investment, and I'm a satisfied customer.",
        },
      ],
    },
    {
      id: "RAM46802",
      image: "./../images/1.jpg",
      productName: "Team T-Force Delta RGB 32GB",
      category: "ram",
      status: "In Stock",
      price: 159.99,
      description: "RGB DDR4 memory with unique heat spreader design.",
      keyFeatures: {
        brand: "Team",
        model: "T-Force Delta RGB",
        specification: "32GB (2 x 16GB) DDR4",
        speed: "3200 MHz",
        casLatency: "16",
        voltage: "1.35V",
        heatSpreader: "Custom Delta RGB",
      },
      individualRating: 4.7,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "RAM58024",
      image: "./../images/1.jpg",
      productName: "ADATA XPG Spectrix D60G 16GB",
      category: "ram",
      status: "Out of Stock",
      price: 129.99,
      description: "RGB DDR4 memory with dazzling light effects.",
      keyFeatures: {
        brand: "ADATA",
        model: "XPG Spectrix D60G",
        specification: "16GB (2 x 8GB) DDR4",
        speed: "3200 MHz",
        casLatency: "16",
        voltage: "1.35V",
        heatSpreader: "Custom D60G RGB",
      },
      individualRating: 4.9,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "John Smith",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website works like a charm! It has significantly improved my computer's performance. Thank you!",
        },
        {
          customer_name: "Emily Johnson",
          comment_date: "2023-07-27",
          comment:
            "I'm really satisfied with the processor I purchased. It was easy to install, and my system now runs much smoother and faster.",
        },
        {
          customer_name: "Michael Lee",
          comment_date: "2023-07-26",
          comment:
            "Excellent service and product! The processor I received was exactly as described, and it arrived promptly. Highly recommended!",
        },
        {
          customer_name: "Sarah Williams",
          comment_date: "2023-07-25",
          comment:
            "I'm impressed with the processor's performance. It handles resource-intensive tasks with ease, making multitasking a breeze.",
        },
        {
          customer_name: "David Brown",
          comment_date: "2023-07-24",
          comment:
            "The processor has exceeded my expectations. Your website offered the best price, and the customer support was top-notch!",
        },
        {
          customer_name: "Jennifer Martinez",
          comment_date: "2023-07-23",
          comment:
            "I'm a first-time customer, and I couldn't be happier. The processor arrived well-packaged and works flawlessly. Will shop here again!",
        },
      ],
    },
    {
      id: "PSU12345",
      image: "./../images/1.jpg",
      productName: "Corsair RM750x",
      category: "powersupply",
      status: "In Stock",
      price: 129.99,
      description:
        "750W 80+ Gold certified power supply for high efficiency and performance.",
      keyFeatures: {
        brand: "Corsair",
        model: "RM750x",
        wattage: "750W",
        efficiency: "80+ Gold",
        modularity: "Fully Modular",
        fanSize: "135mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral, Floppy",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Alex Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! My computer's performance has significantly improved, and it handles heavy tasks like a breeze.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-27",
          comment:
            "I am extremely satisfied with the processor I purchased. It arrived quickly, and the installation process was smooth. It has made a noticeable difference in my PC's speed.",
        },
        {
          customer_name: "Ryan Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for delivering such a high-quality processor. It was worth every penny, and I'm impressed by how well it performs even under heavy workloads.",
        },
        {
          customer_name: "Sophia Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My gaming experience has improved dramatically, and I can now run the latest games with ease. Thank you!",
        },
        {
          customer_name: "William Lee",
          comment_date: "2023-07-24",
          comment:
            "I'm delighted with my purchase. The processor I bought from your website has transformed my computer's speed and responsiveness. Highly recommended!",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "Your website provided me with the perfect processor for my needs. It was shipped quickly, and I'm thrilled with its performance. You've earned a loyal customer!",
        },
      ],
    },
    {
      id: "PSU67890",
      image: "./../images/1.jpg",
      productName: "EVGA SuperNOVA 850 P2",
      category: "powersupply",
      status: "In Stock",
      price: 179.99,
      description:
        "850W 80+ Platinum certified power supply for high efficiency and quiet operation.",
      keyFeatures: {
        brand: "EVGA",
        model: "SuperNOVA 850 P2",
        wattage: "850W",
        efficiency: "80+ Platinum",
        modularity: "Fully Modular",
        fanSize: "140mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Alex Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! My computer's performance has significantly improved, and it handles heavy tasks like a breeze.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-27",
          comment:
            "I am extremely satisfied with the processor I purchased. It arrived quickly, and the installation process was smooth. It has made a noticeable difference in my PC's speed.",
        },
        {
          customer_name: "Ryan Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for delivering such a high-quality processor. It was worth every penny, and I'm impressed by how well it performs even under heavy workloads.",
        },
        {
          customer_name: "Sophia Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My gaming experience has improved dramatically, and I can now run the latest games with ease. Thank you!",
        },
        {
          customer_name: "William Lee",
          comment_date: "2023-07-24",
          comment:
            "I'm delighted with my purchase. The processor I bought from your website has transformed my computer's speed and responsiveness. Highly recommended!",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "Your website provided me with the perfect processor for my needs. It was shipped quickly, and I'm thrilled with its performance. You've earned a loyal customer!",
        },
      ],
    },
    {
      id: "PSU24680",
      image: "./../images/1.jpg",
      productName: "Seasonic Focus GX-650",
      category: "powersupply",
      status: "In Stock",
      price: 109.99,
      description:
        "650W 80+ Gold certified power supply with a compact design.",
      keyFeatures: {
        brand: "Seasonic",
        model: "Focus GX-650",
        wattage: "650W",
        efficiency: "80+ Gold",
        modularity: "Semi-Modular",
        fanSize: "120mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "PSU35713",
      image: "./../images/1.jpg",
      productName: "be quiet! Straight Power 11 750W",
      category: "powersupply",
      status: "In Stock",
      price: 139.99,
      description:
        "750W 80+ Gold certified power supply with a silent operation.",
      keyFeatures: {
        brand: "be quiet!",
        model: "Straight Power 11 750W",
        wattage: "750W",
        efficiency: "80+ Gold",
        modularity: "Fully Modular",
        fanSize: "135mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral",
      },
      individualRating: 4.8,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "PSU46802",
      image: "./../images/1.jpg",
      productName: "Thermaltake Toughpower GF1 850W",
      category: "powersupply",
      status: "Out of Stock",
      price: 159.99,
      description:
        "850W 80+ Gold certified power supply with a reliable performance.",
      keyFeatures: {
        brand: "Thermaltake",
        model: "Toughpower GF1 850W",
        wattage: "850W",
        efficiency: "80+ Gold",
        modularity: "Fully Modular",
        fanSize: "140mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral",
      },
      individualRating: 4.7,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "PSU58024",
      image: "./../images/1.jpg",
      productName: "Cooler Master MWE Gold 650",
      category: "powersupply",
      status: "In Stock",
      price: 89.99,
      description:
        "650W 80+ Gold certified power supply for reliable performance.",
      keyFeatures: {
        brand: "Cooler Master",
        model: "MWE Gold 650",
        wattage: "650W",
        efficiency: "80+ Gold",
        modularity: "Semi-Modular",
        fanSize: "120mm",
        protections:
          "Overvoltage, Overcurrent, Short Circuit, Over-temperature",
        connectors: "ATX, EPS, PCI-E, SATA, Peripheral",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "STO12345",
      image: "./../images/1.jpg",
      productName: "Samsung 970 EVO Plus 1TB",
      category: "storagedevice",
      status: "In Stock",
      price: 189.99,
      description:
        "High-speed NVMe SSD for faster data transfer and gaming performance.",
      keyFeatures: {
        brand: "Samsung",
        model: "970 EVO Plus",
        capacity: "1TB",
        interface: "NVMe PCIe Gen 3.0 x4",
        formFactor: "M.2 2280",
        readSpeed: "3500 MB/s",
        writeSpeed: "3300 MB/s",
        tbw: "600TB",
        nandType: "V-NAND 3-bit MLC",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Jennifer Lee",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new lease on life, and I'm extremely satisfied with its performance.",
        },
        {
          customer_name: "William Johnson",
          comment_date: "2023-07-27",
          comment:
            "I am impressed with the processor's capabilities. It handles demanding tasks effortlessly, and my system runs smoother than ever before. Thank you!",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your website for providing top-notch processors. The one I received is perfect for my needs, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Ethan Wilson",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It has improved my gaming experience significantly, and I'm thrilled with the exceptional performance it offers.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really impressed with the processor's speed and efficiency. It was a great investment, and I'm glad I chose your website for my processor upgrade.",
        },
        {
          customer_name: "Oliver Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor exceeded my expectations by far! It has made multitasking a breeze, and I'm recommending your website to all my tech-savvy friends.",
        },
      ],
    },
    {
      id: "STO67890",
      image: "./../images/1.jpg",
      productName: "Crucial MX500 2TB",
      category: "storagedevice",
      status: "In Stock",
      price: 239.99,
      description:
        "High-capacity SATA SSD for reliable data storage and performance.",
      keyFeatures: {
        brand: "Crucial",
        model: "MX500",
        capacity: "2TB",
        interface: "SATA III",
        formFactor: "2.5-inch",
        readSpeed: "560 MB/s",
        writeSpeed: "510 MB/s",
        tbw: "700TB",
        nandType: "3D NAND TLC",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Michael Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am highly impressed with the processor I bought from your website. It has given my computer a significant performance boost, and it handles heavy tasks with ease.",
        },
        {
          customer_name: "Emily Davis",
          comment_date: "2023-07-27",
          comment:
            "The processor exceeded my expectations! It arrived on time, and the installation process was a breeze. My PC now runs faster and smoother than ever before.",
        },
        {
          customer_name: "Christopher Smith",
          comment_date: "2023-07-26",
          comment:
            "I'm really happy with my purchase. The processor is powerful and efficient, and it has made a noticeable difference in my computer's overall performance.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-25",
          comment:
            "The processor has been a game-changer for me. It handles demanding applications effortlessly, and I'm delighted with the seamless experience it provides.",
        },
        {
          customer_name: "David Thompson",
          comment_date: "2023-07-24",
          comment:
            "Your website offered a great selection of processors, and I found the perfect one for my needs. It has transformed my PC into a powerful workstation.",
        },
        {
          customer_name: "Olivia Brown",
          comment_date: "2023-07-23",
          comment:
            "I am thoroughly satisfied with the processor and the buying experience from your website. The processor's performance is outstanding, and I'm a happy customer.",
        },
      ],
    },
    {
      id: "STO24680",
      image: "./../images/1.jpg",
      productName: "Western Digital Black SN750 500GB",
      category: "storagedevice",
      status: "In Stock",
      price: 109.99,
      description:
        "Gaming-focused NVMe SSD with heatsink for optimal performance.",
      keyFeatures: {
        brand: "Western Digital",
        model: "Black SN750",
        capacity: "500GB",
        interface: "NVMe PCIe Gen 3.0 x4",
        formFactor: "M.2 2280",
        readSpeed: "3470 MB/s",
        writeSpeed: "2600 MB/s",
        tbw: "300TB",
        nandType: "3D NAND TLC",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Emily Johnson",
          comment_date: "2023-07-28",
          comment:
            "I am thrilled with the processor I purchased from your website. It has transformed my computer's performance, and I'm impressed with its speed.",
        },
        {
          customer_name: "Michael Wilson",
          comment_date: "2023-07-27",
          comment:
            "The processor is fantastic! It handles all my tasks with ease, and I've noticed a significant improvement in my productivity. Thank you!",
        },
        {
          customer_name: "Sophia Miller",
          comment_date: "2023-07-26",
          comment:
            "I'm extremely satisfied with the processor's performance. It's been a pleasure using it, and I'm recommending your website to my colleagues.",
        },
        {
          customer_name: "Daniel Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor I bought from your website is a game-changer for my PC. It runs much smoother now, and I'm grateful for the excellent service!",
        },
        {
          customer_name: "Olivia Martin",
          comment_date: "2023-07-24",
          comment:
            "Your website provided the perfect processor for my needs. It's fast, reliable, and exactly what I was looking for. Keep up the great work!",
        },
        {
          customer_name: "Ethan Thompson",
          comment_date: "2023-07-23",
          comment:
            "I'm really impressed with the processor's performance and how cool it stays under load. It's a great investment, and I'm a satisfied customer.",
        },
      ],
    },
    {
      id: "STO35713",
      image: "./../images/1.jpg",
      productName: "Seagate BarraCuda 4TB",
      category: "storagedevice",
      status: "In Stock",
      price: 109.99,
      description:
        "High-capacity HDD for storing large files and data backups.",
      keyFeatures: {
        brand: "Seagate",
        model: "BarraCuda",
        capacity: "4TB",
        interface: "SATA III",
        formFactor: "3.5-inch",
        rpm: "5400 RPM",
        cache: "256MB",
        avgLatency: "5.55ms",
        mtbf: "1.0 million hours",
      },
      individualRating: 4.6,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "STO46802",
      image: "./../images/1.jpg",
      productName: "ADATA SU800 256GB",
      category: "storagedevice",
      status: "In Stock",
      price: 59.99,
      description:
        "Affordable SATA SSD for everyday computing and faster boot times.",
      keyFeatures: {
        brand: "ADATA",
        model: "SU800",
        capacity: "256GB",
        interface: "SATA III",
        formFactor: "2.5-inch",
        readSpeed: "560 MB/s",
        writeSpeed: "520 MB/s",
        tbw: "160TB",
        nandType: "3D NAND TLC",
      },
      individualRating: 4.7,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "STO58024",
      image: "./../images/1.jpg",
      productName: "Toshiba X300 8TB",
      category: "storagedevice",
      status: "Out of Stock",
      price: 219.99,
      description:
        "High-capacity HDD for gaming, media, and storage-intensive applications.",
      keyFeatures: {
        brand: "Toshiba",
        model: "X300",
        capacity: "8TB",
        interface: "SATA III",
        formFactor: "3.5-inch",
        rpm: "7200 RPM",
        cache: "256MB",
        avgLatency: "4.17ms",
        mtbf: "1.0 million hours",
      },
      individualRating: 4.9,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Andrew Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I purchased from your website is outstanding! It has significantly improved my computer's performance, and I'm very satisfied with my purchase.",
        },
        {
          customer_name: "Sophia Williams",
          comment_date: "2023-07-27",
          comment:
            "I'm delighted with the processor I received. It was easy to install, and now my PC runs like a charm. Thank you for providing such a great product!",
        },
        {
          customer_name: "Ryan Martin",
          comment_date: "2023-07-26",
          comment:
            "The processor is fantastic! It handles all my tasks effortlessly, and I've noticed a considerable speed boost. I'm glad I chose your website for my purchase.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-25",
          comment:
            "I'm thoroughly impressed with the processor's performance. It has exceeded my expectations, and I'm recommending your website to all my friends!",
        },
        {
          customer_name: "Alexander Wilson",
          comment_date: "2023-07-24",
          comment:
            "The processor I bought from your website is a game-changer. It has made my computer lightning-fast, and I'm thrilled with its capabilities.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "I couldn't be happier with my purchase. Your website offered a great selection, and the processor I chose has transformed my PC into a powerhouse!",
        },
      ],
    },
    {
      id: "STO82037",
      image: "./../images/1.jpg",
      productName: "Intel Optane Memory H10 512GB",
      category: "storagedevice",
      status: "In Stock",
      price: 179.99,
      description:
        "Hybrid SSD with Intel Optane Memory for caching and performance.",
      keyFeatures: {
        brand: "Intel",
        model: "Optane Memory H10",
        capacity: "512GB",
        interface: "PCIe Gen 3.0 x4",
        formFactor: "M.2 2280",
        readSpeed: "2400 MB/s",
        writeSpeed: "1800 MB/s",
        tbw: "300TB",
        nandType: "Intel 3D NAND + Optane Memory",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "MON12345",
      image: "./../images/1.jpg",
      productName: "ASUS ROG Swift PG279Q",
      category: "monitor",
      status: "In Stock",
      price: 599.99,
      description:
        "27-inch gaming monitor with IPS panel and high refresh rate.",
      keyFeatures: {
        brand: "ASUS",
        model: "ROG Swift PG279Q",
        displaySize: "27 inches",
        panelType: "IPS",
        resolution: "2560 x 1440 (WQHD)",
        refreshRate: "165Hz",
        responseTime: "1ms (GTG)",
        aspectRatio: "16:9",
        brightness: "350 cd/m²",
        contrastRatio: "1000:1",
        viewingAngle: "178°(H) / 178°(V)",
        colorSupport: "16.7 Million Colors",
        ports: "HDMI, DisplayPort, USB 3.0",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Jennifer Lee",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new lease on life, and I'm extremely satisfied with its performance.",
        },
        {
          customer_name: "William Johnson",
          comment_date: "2023-07-27",
          comment:
            "I am impressed with the processor's capabilities. It handles demanding tasks effortlessly, and my system runs smoother than ever before. Thank you!",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your website for providing top-notch processors. The one I received is perfect for my needs, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Ethan Wilson",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It has improved my gaming experience significantly, and I'm thrilled with the exceptional performance it offers.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really impressed with the processor's speed and efficiency. It was a great investment, and I'm glad I chose your website for my processor upgrade.",
        },
        {
          customer_name: "Oliver Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor exceeded my expectations by far! It has made multitasking a breeze, and I'm recommending your website to all my tech-savvy friends.",
        },
      ],
    },
    {
      id: "MON67890",
      image: "./../images/1.jpg",
      productName: "Acer Predator XB271HU",
      category: "monitor",
      status: "In Stock",
      price: 549.99,
      description: "27-inch gaming monitor with G-Sync and WQHD resolution.",
      keyFeatures: {
        brand: "Acer",
        model: "Predator XB271HU",
        displaySize: "27 inches",
        panelType: "IPS",
        resolution: "2560 x 1440 (WQHD)",
        refreshRate: "144Hz",
        responseTime: "4ms (GTG)",
        aspectRatio: "16:9",
        brightness: "350 cd/m²",
        contrastRatio: "1000:1",
        viewingAngle: "178°(H) / 178°(V)",
        colorSupport: "16.7 Million Colors",
        ports: "HDMI, DisplayPort, USB 3.0",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "MON24680",
      image: "./../images/1.jpg",
      productName: "LG 34GN850-B",
      category: "monitor",
      status: "In Stock",
      price: 899.99,
      description:
        "34-inch ultrawide gaming monitor with QHD resolution and high refresh rate.",
      keyFeatures: {
        brand: "LG",
        model: "34GN850-B",
        displaySize: "34 inches",
        panelType: "IPS",
        resolution: "3440 x 1440 (QHD)",
        refreshRate: "160Hz",
        responseTime: "1ms (GTG)",
        aspectRatio: "21:9",
        brightness: "400 cd/m²",
        contrastRatio: "1000:1",
        viewingAngle: "178°(H) / 178°(V)",
        colorSupport: "1.07 Billion Colors",
        ports: "HDMI, DisplayPort, USB 3.0",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "Jennifer Lee",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new lease on life, and I'm extremely satisfied with its performance.",
        },
        {
          customer_name: "William Johnson",
          comment_date: "2023-07-27",
          comment:
            "I am impressed with the processor's capabilities. It handles demanding tasks effortlessly, and my system runs smoother than ever before. Thank you!",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your website for providing top-notch processors. The one I received is perfect for my needs, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Ethan Wilson",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It has improved my gaming experience significantly, and I'm thrilled with the exceptional performance it offers.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really impressed with the processor's speed and efficiency. It was a great investment, and I'm glad I chose your website for my processor upgrade.",
        },
        {
          customer_name: "Oliver Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor exceeded my expectations by far! It has made multitasking a breeze, and I'm recommending your website to all my tech-savvy friends.",
        },
      ],
    },
    {
      id: "MON35713",
      image: "./../images/1.jpg",
      productName: "Dell Ultrasharp U2419H",
      category: "monitor",
      status: "In Stock",
      price: 249.99,
      description:
        "24-inch professional monitor with accurate color reproduction.",
      keyFeatures: {
        brand: "Dell",
        model: "Ultrasharp U2419H",
        displaySize: "24 inches",
        panelType: "IPS",
        resolution: "1920 x 1080 (Full HD)",
        refreshRate: "60Hz",
        responseTime: "8ms (GTG)",
        aspectRatio: "16:9",
        brightness: "250 cd/m²",
        contrastRatio: "1000:1",
        viewingAngle: "178°(H) / 178°(V)",
        colorSupport: "16.7 Million Colors",
        ports: "HDMI, DisplayPort, USB 3.0",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "MON46802",
      image: "./../images/1.jpg",
      productName: "ViewSonic XG2402",
      category: "monitor",
      status: "In Stock",
      price: 249.99,
      description:
        "24-inch gaming monitor with AMD FreeSync and Full HD resolution.",
      keyFeatures: {
        brand: "ViewSonic",
        model: "XG2402",
        displaySize: "24 inches",
        panelType: "TN",
        resolution: "1920 x 1080 (Full HD)",
        refreshRate: "144Hz",
        responseTime: "1ms (GTG)",
        aspectRatio: "16:9",
        brightness: "350 cd/m²",
        contrastRatio: "1000:1",
        viewingAngle: "170°(H) / 160°(V)",
        colorSupport: "16.7 Million Colors",
        ports: "HDMI, DisplayPort, USB 3.0",
      },
      individualRating: 4.8,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "Sophia Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new level of speed and performance. Highly recommended!",
        },
        {
          customer_name: "Oliver Wilson",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely satisfied with my purchase. The processor works flawlessly, and I've noticed a significant improvement in my computer's overall responsiveness.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering top-notch processors. The one I received is perfect for my needs, and it's made a world of difference in my work tasks.",
        },
        {
          customer_name: "Michael Thompson",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My PC now handles resource-intensive applications with ease, and I'm thoroughly impressed.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really happy with my purchase. The processor has taken my gaming experience to a whole new level, and I'm thoroughly enjoying it.",
        },
        {
          customer_name: "Daniel Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor is fantastic! It was easy to install, and it's made my computer blazing fast. Thank you for delivering a quality product!",
        },
      ],
    },
    {
      id: "OTH12345",
      image: "./../images/1.jpg",
      productName: "Logitech G502 Hero Gaming Mouse",
      category: "others",
      status: "In Stock",
      price: 79.99,
      description:
        "High-performance gaming mouse with advanced sensor technology.",
      keyFeatures: {
        brand: "Logitech",
        model: "G502 Hero",
        dpi: "100 - 16,000 DPI",
        buttons: "11 Programmable Buttons",
        connectivity: "Wired (USB)",
        trackingAccuracy: "400+ IPS",
        acceleration: "40G",
        rgbLighting: "Customizable RGB Lighting",
        ergonomics: "Adjustable Weight System",
        gripType: "Palm, Claw, and Fingertip Grip",
      },
      individualRating: 4.9,
      averageRating: 4.8,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "OTH67890",
      image: "./../images/1.jpg",
      productName: "Blue Yeti USB Microphone",
      category: "others",
      status: "In Stock",
      price: 129.99,
      description:
        "Versatile USB microphone for recording, streaming, and podcasting.",
      keyFeatures: {
        brand: "Blue",
        model: "Yeti",
        connectivity: "USB",
        microphoneType: "Condenser",
        polarPatterns: "Cardioid, Stereo, Bidirectional, Omnidirectional",
        sampleRate: "48 kHz",
        bitDepth: "16-bit",
        headphoneOutput: "Built-in Headphone Output",
        muteButton: "Integrated Mute Button",
        gainControl: "Adjustable Gain Control",
        mounting: "Adjustable Stand",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "Sophia Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new level of speed and performance. Highly recommended!",
        },
        {
          customer_name: "Oliver Wilson",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely satisfied with my purchase. The processor works flawlessly, and I've noticed a significant improvement in my computer's overall responsiveness.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering top-notch processors. The one I received is perfect for my needs, and it's made a world of difference in my work tasks.",
        },
        {
          customer_name: "Michael Thompson",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My PC now handles resource-intensive applications with ease, and I'm thoroughly impressed.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really happy with my purchase. The processor has taken my gaming experience to a whole new level, and I'm thoroughly enjoying it.",
        },
        {
          customer_name: "Daniel Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor is fantastic! It was easy to install, and it's made my computer blazing fast. Thank you for delivering a quality product!",
        },
      ],
    },
    {
      id: "OTH24680",
      image: "./../images/1.jpg",
      productName: "Anker PowerCore 26800 Portable Charger",
      category: "others",
      status: "In Stock",
      price: 59.99,
      description:
        "High-capacity portable charger for smartphones and other devices.",
      keyFeatures: {
        brand: "Anker",
        model: "PowerCore 26800",
        capacity: "26800mAh",
        output: "3 USB Ports (5V/6A)",
        input: "Micro USB (5V/2A)",
        chargingTechnology: "PowerIQ and VoltageBoost",
        safetyFeatures: "MultiProtect Safety System",
        size: "6.5 x 2.3 x 0.9 inches",
        weight: "1.1 pounds",
      },
      individualRating: 4.7,
      averageRating: 4.6,
      reviews: [
        {
          customer_name: "Sophia Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I bought from your website is incredible! It has given my computer a new level of speed and performance. Highly recommended!",
        },
        {
          customer_name: "Oliver Wilson",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely satisfied with my purchase. The processor works flawlessly, and I've noticed a significant improvement in my computer's overall responsiveness.",
        },
        {
          customer_name: "Emma Davis",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering top-notch processors. The one I received is perfect for my needs, and it's made a world of difference in my work tasks.",
        },
        {
          customer_name: "Michael Thompson",
          comment_date: "2023-07-25",
          comment:
            "The processor exceeded my expectations! My PC now handles resource-intensive applications with ease, and I'm thoroughly impressed.",
        },
        {
          customer_name: "Ava Martinez",
          comment_date: "2023-07-24",
          comment:
            "I'm really happy with my purchase. The processor has taken my gaming experience to a whole new level, and I'm thoroughly enjoying it.",
        },
        {
          customer_name: "Daniel Brown",
          comment_date: "2023-07-23",
          comment:
            "The processor is fantastic! It was easy to install, and it's made my computer blazing fast. Thank you for delivering a quality product!",
        },
      ],
    },
    {
      id: "OTH35713",
      image: "./../images/1.jpg",
      productName: "AmazonBasics Laptop Stand",
      category: "others",
      status: "In Stock",
      price: 21.99,
      description: "Adjustable laptop stand for ergonomic viewing and typing.",
      keyFeatures: {
        brand: "AmazonBasics",
        model: "Laptop Stand",
        material: "Metal Mesh",
        adjustability: "6 Adjustable Angles",
        ventilation: "Built-in Cable Management",
        compatibility: "Fits Laptops up to 15.6 inches",
        size: "13 x 11 x 7.2 inches",
        weight: "2.43 pounds",
      },
      individualRating: 4.8,
      averageRating: 4.7,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
    {
      id: "OTH46802",
      image: "./../images/1.jpg",
      productName: "Raspberry Pi 4 Model B",
      category: "others",
      status: "In Stock",
      price: 49.99,
      description: "Single-board computer for DIY projects and programming.",
      keyFeatures: {
        brand: "Raspberry Pi",
        model: "4 Model B",
        processor: "Quad-core Cortex-A72 (1.5GHz)",
        gpu: "VideoCore VI Graphics",
        ram: "2GB LPDDR4",
        storage: "MicroSD Card Slot",
        connectivity: "Dual-Band Wi-Fi, Bluetooth 5.0, Gigabit Ethernet",
        ports: "2x USB 3.0, 2x USB 2.0, HDMI, GPIO, Camera, Display",
        osSupport: "Raspberry Pi OS, Ubuntu, and more",
      },
      individualRating: 4.8,
      averageRating: 4.9,
      reviews: [
        {
          customer_name: "David Johnson",
          comment_date: "2023-07-28",
          comment:
            "The processor I ordered from your website is fantastic! It has given my computer a significant performance boost, and I couldn't be happier with my purchase.",
        },
        {
          customer_name: "Isabella Martinez",
          comment_date: "2023-07-27",
          comment:
            "I'm extremely pleased with the processor's performance. My computer now runs smoother than ever, and it handles all my tasks with ease.",
        },
        {
          customer_name: "James Wilson",
          comment_date: "2023-07-26",
          comment:
            "Kudos to your team for offering such high-quality processors. The one I received is top-notch, and it has exceeded my expectations.",
        },
        {
          customer_name: "Sophia Davis",
          comment_date: "2023-07-25",
          comment:
            "The processor is a game-changer! It's fast, efficient, and has improved my workflow. I'm grateful for the great service and product.",
        },
        {
          customer_name: "Ethan Brown",
          comment_date: "2023-07-24",
          comment:
            "I couldn't be happier with my purchase. The processor is perfect for my needs, and my computer now performs like a high-end machine.",
        },
        {
          customer_name: "Olivia Thompson",
          comment_date: "2023-07-23",
          comment:
            "The processor has made a significant difference in my gaming experience. I'm amazed by its speed and responsiveness. Thank you!",
        },
      ],
    },
  ];

  res.status(200).json({ data: fakeData });
}
