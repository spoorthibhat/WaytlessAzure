// use waitlistsample database 
db = db.getSiblingDB('waitlistSample')

// create a table 'restaurant'
db.createCollection('restaurants')
restCollection = db.getCollection("restaurants")
restCollection.remove({})
restCollection.insert({
    restaurantID: 1,
    name: "Din Tai Fung",
    cuisine: "Chinese",
    address: {
        "street": "Bellevue Way E",
        "number": "700",
        "zip": "98004",
        "city": "Bellevue"
    },
    phoneNumber: 4256981095,
    email: "admin@dintaifung.com",
    owner: "uschohk@gmail.com",
    rating: 5,
    reviews: 679,
    booked: 989,
    url: "../assets/images/dinthaifung.png"
})
restCollection.insert({
    restaurantID: 2,
    name: "Ruchi Indian Restaurant",
    cuisine: "Indian",
    address: {
        "street": "156th Ave NE",
        "number": "1360",
        "zip": "98007",
        "city": "Bellevue"
    },
    phoneNumber: 4257462144,
    email: "admin@ruchi.com",
    owner: "spoorthicbhat@gmail.com",
    rating: 5,
    reviews: 900,
    booked: 432,
    url: "../assets/images/imagetwo.jpg"
})
restCollection.insert({
    restaurantID: 3,
    name: "Olive Garden",
    cuisine: "Italian",
    address: {
        "street": "NE 124th St",
        "number": "11325",
        "zip": "98034",
        "city": "Kirkland"
    },
    phoneNumber: 4258207740,
    email: "admin@olivegarden.com",
    owner: "sowmya9029@gmail.com",
    rating: 4,
    reviews: 879,
    booked: 100,
    url: "../assets/images/image3.jpg"



})
restCollection.insert({
    restaurantID: 4,
    name: "Southern Spice",
    cuisine: "Indian",
    address: {
        "street": "E Lake Sammamish Pkwy NE",
        "number": "6536",
        "zip": "98052",
        "city": "Redmond"
    },
    phoneNumber: 4257029192,
    email: "admin@southernspicewa.com",
    owner: "capybarajenkinstest@gmail.com",
    rating: 3,
    reviews: 768,
    booked: 301,
    url: "../assets/images/image4.jpg"
})

restCollection.insert({
    restaurantID: 5,
    name: "Mediterranean Kitchen",
    cuisine: "Mediterranean",
    address: {
        "street": "33rd Ave W",
        "number": "18415",
        "zip": "98009",
        "city": "Lynwood"
    },
    phoneNumber: 4252457551,
    email: "admin@mediterraneankitchens.net",
    owner: "someowner@gmail.com",
    rating: 4,
    reviews: 980,
    url: "../assets/images/image5.jpg"
})

// create a table 'itemCategory'
db.createCollection('menucategory')
itemCategoryCollection = db.getCollection("menucategory")
itemCategoryCollection.remove({})

itemCategoryCollection.insert({
    categoryId: 1,
    categoryName: "Appetizer",
    description: "Perfect nibble, bite and nosh"
})

itemCategoryCollection.insert({
    categoryId: 2,
    categoryName: "Entree",
    description: "Main Course from our best kitchen staff"
})

itemCategoryCollection.insert({
    categoryId: 3,
    categoryName: "Dessert",
    description: "Can't leave without trying out award winning desserts"
})


// create a table 'menu' items

db.createCollection('menuitems')
menuitemsCollection = db.getCollection("menuitems")
menuitemsCollection.remove({})

menuitemsCollection.insert({
    itemID: 1,
    itemName: "Cucumber Salad",
    price: 5.99,
    description: "Cucumbers marinated in sauce",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2014/05/DTF_MenuIcons_cucumber.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 2,
    itemName: "Soy Noodle Salad",
    price: 7.99,
    description: "Vegetarian cold salad",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2014/05/DTF_MenuIcons_soynoodlesalad.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 3,
    itemName: "Fried Pork Chop",
    price: 10.99,
    description: "Fried pork chop with a side of rice",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2014/05/DTF_MenuIcons_porkchop.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 104,
    itemName: "8 Treasure Rice Cake",
    price: 8.99,
    description: "Sticky rice with eight-treatures",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2019/01/Eight-Treasure-Sticky-Rice.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Dessert",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 105,
    itemName: "Red Bean Rice Cake",
    price: 10.99,
    description: "Red Bean Rice Cake",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2019/01/RedBeanRiceCake_frame.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Dessert",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 106,
    itemName: "Pork XiaoLongBao",
    price: 10.99,
    description: "Pork xiaolongbao",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2015/01/pork-soup-dumpling.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 107,
    itemName: "Crab & Pork Bao",
    price: 10.99,
    description: "Crab & Pork xiaolongbao",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2015/01/pork-crab-soup-dumpling.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 4,
    itemName: "Spring Rolls",
    price: 5.99,
    description: "Cucumbers marinated in sauce",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2014/05/DTF_MenuIcons_spareribs.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})

menuitemsCollection.insert({
    itemID: 100,
    itemName: "Sweet Taro Bao",
    price: 3.99,
    description: "Tasty buns",
    restaurantID: 1,
    url: "https://dintaifungusa.com/wp-content/uploads/2019/01/SweetTaroXLB_frame.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Dessert",
        description: 'description here'
    }

})
menuitemsCollection.insert({
    itemID: 201,
    itemName: "Chicken Biryani",
    price: 21.99,
    description: "Hyderabadi Dum Biryani",
    restaurantID: 2,
    url: "https://ruchiindianrestaurant.com/images/blog/hyderabaddumbiriyani.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 202,
    itemName: "Tandoori Chicken",
    price: 8.49,
    description: "4 Pieces",
    restaurantID: 2,
    url: "https://ruchiindianrestaurant.com/images/blog/tandoor.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 203,
    itemName: "Poori (Chole & Bhaji)",
    price: 7.99,
    description: "Chole & Bhaji",
    restaurantID: 2,
    url: "https://ruchiindianrestaurant.com/images/blog/tiffins.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 204,
    itemName: "Naan",
    price: 2.49,
    description: "Plain/Butter/Garlic/Chili",
    restaurantID: 2,
    url: "https://ruchiindianrestaurant.com/images/blog/naans.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 205,
    itemName: "Dessert",
    price: 3.99,
    description: "Sweet",
    restaurantID: 2,
    url: "https://ruchiindianrestaurant.com/images/blog/sides.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Dessert",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 102,
    itemName: "Black Tie Mousse Cake",
    price: 7.99,
    description: "Chocolate dark cake",
    restaurantID: 3,
    url: "http://media.olivegarden.com/en_us/images/product/black-tie-mousse-cake-gv-300x187.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Dessert",
        description: 'description here'
    }
})


menuitemsCollection.insert({
    itemID: 9,
    itemName: "Toasted Ravioli",
    price: 7.99,
    description: "Toasted Ravioli with marinara sauce",
    restaurantID: 3,
    url: "http://www.recipe4living.com/assets/itemimages/400/400/3/default_d5c92c3be773d1f740038ac5be9458a5_dreamstimesmall_46237259.jpg",
    itemCategory: {
        categoryId: "3",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 10,
    itemName: "Spaghetti Pasta",
    price: 7.99,
    description: "Eggplant, pork and cheese",
    restaurantID: 3,
    url: "https://thekrazycouponlady.com/wp-content/uploads/2017/07/Olive-Garden-large-750x781.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 18,
    itemName: "Lasagna Fritta",
    price: 10.99,
    description: "Fried parmesan-breaded lasagna",
    restaurantID: 3,
    url: "https://s3-media2.fl.yelpcdn.com/bphoto/7Bxmw989pX_y_vLCpZpIJg/348s.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 11,
    itemName: "Pork Rice",
    price: 10.99,
    description: "Fried pork chop with a side of rice",
    restaurantID: 3,
    url: "http://baansalinsuites.com/wp-content/uploads/2017/12/olive-garden-midland-mi-herb-cheese-with-sauteed-chicken-olive-garden-mi-olive-garden-lunch-menu-midland-mi.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 17,
    itemName: "Spicy Alfredo Chicken",
    price: 10.29,
    description: "Lighty bread and fried chicken",
    restaurantID: 3,
    url: "https://media.olivegarden.com/en_us/images/product/spicy-alfredo-chicken-gv-300x187.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 12,
    itemName: "Shrimp Scampi",
    price: 5.99,
    description: "New Pasta bowl",
    restaurantID: 3,
    url: "https://media.olivegarden.com/images/site/ext/pages/_promotions/specials/lunch-duos-combos/lunch-duos-combos-04-052819-sdd.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})

menuitemsCollection.insert({
    itemID: 13,
    itemName: "Samosa",
    price: 5.99,
    description: "Samosa",
    restaurantID: 4,
    url: "https://copykat.com/wp-content/uploads/2010/10/samosa.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 14,
    itemName: "Onion Pakoras",
    price: 7.99,
    description: "Onion vegetable pakoras",
    restaurantID: 4,
    url: "https://i.pinimg.com/236x/67/9c/b5/679cb5b6e489024c23ea02e97704ed3e.jpg",
    itemCategory: {
        categoryId: "1",
        categoryName: "Appetizer",
        description: 'description here'
    }
})
menuitemsCollection.insert({
    itemID: 15,
    itemName: "Immaculate Bites",
    price: 10.99,
    description: "Spicy chicken, peas",
    restaurantID: 4,
    url: "https://www.africanbites.com/wp-content/uploads/2018/10/IMG_9223.jpg",
    itemCategory: {
        categoryId: "2",
        categoryName: "Entree",
        description: 'description here'
    }
})
menuitemsCollection.insert({
        itemID: 16,
        itemName: "Chicken curry ",
        price: 5.99,
        description: "Chicken curry with ric",
        restaurantID: 4,
        url: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1024/landscape-1501791674-delish-chicken-curry-horizontal.jpg?resize=480:*",
        itemCategory: {
            categoryId: "2",
            categoryName: "Entree",
            description: 'description here'
        }
    })
    // create a table for waitlist

db.createCollection('waitlist')
waitlistCollection = db.getCollection("waitlist")
waitlistCollection.remove({})

waitlistCollection.insert({
    queueID: 1,
    customerName: "Mary Johnson",
    restaurantID: 1,
    groupSize: 3,
    joinTime: new Date("February 4, 2019 17:00:00"),
    quotedtime: new Date("February 4, 2019 17:10:00"),
    email: "maryk@yahoo.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: true
})

waitlistCollection.insert({
    queueID: 2,
    customerName: "John Jones",
    restaurantID: 1,
    groupSize: 3,
    joinTime: new Date("February 4, 2019 17:04:00"),
    quotedtime: new Date("February 4, 2019 17:20:00"),
    email: "john@yahoo.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})

waitlistCollection.insert({
    queueID: 3,
    customerName: "Peter Andrews",
    restaurantID: 1,
    groupSize: 3,
    joinTime: new Date("February 4, 2019 17:09:00"),
    quotedtime: new Date("February 4, 2019 17:25:00"),
    email: "john@yahoo.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})

waitlistCollection.insert({
    queueID: 1,
    customerName: "Ken",
    restaurantID: 2,
    groupSize: 2,
    joinTime: new Date("February 4, 2019 16:10:00"),
    quotedtime: new Date("February 4, 2019 16:10:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: true,
    confirmed: true,
    completed: false
})


waitlistCollection.insert({
    queueID: 2,
    customerName: "Doug",
    restaurantID: 2,
    groupSize: 5,
    joinTime: new Date("February 4, 2019 16:15:00"),
    quotedtime: new Date("February 4, 2019 16:10:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})

waitlistCollection.insert({
    queueID: 3,
    customerName: "Darren",
    restaurantID: 2,
    groupSize: 3,
    joinTime: new Date("February 4, 2019 16:00:00"),
    quotedtime: new Date("February 4, 2019 16:10:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: true,
    confirmed: true,
    completed: false
})

waitlistCollection.insert({
    queueID: 4,
    customerName: "Lisa",
    restaurantID: 2,
    groupSize: 2,
    joinTime: new Date("February 4, 2019 16:10:00"),
    quotedtime: new Date("February 4, 2019 16:10:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})


waitlistCollection.insert({
    queueID: 1,
    customerName: "Nico",
    restaurantID: 3,
    groupSize: 5,
    joinTime: new Date("February 4, 2019 16:15:00"),
    quotedtime: new Date("February 4, 2019 16:10:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: true,
    confirmed: true,
    completed: false
})

waitlistCollection.insert({
    queueID: 2,
    customerName: "Sam",
    restaurantID: 3,
    groupSize: 3,
    joinTime: new Date("February 4, 2019 13:55:00"),
    quotedtime: new Date("February 4, 2019 16:15:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})

waitlistCollection.insert({
    queueID: 3,
    customerName: "Tony",
    restaurantID: 3,
    groupSize: 2,
    joinTime: new Date("February 4, 2019 16:12:00"),
    quotedtime: new Date("February 4, 2019 16:30:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})


waitlistCollection.insert({
    queueID: 4,
    customerName: "May",
    restaurantID: 3,
    groupSize: 5,
    joinTime: new Date("February 4, 2019 16:15:00"),
    quotedtime: new Date("February 4, 2019 16:30:00"),
    email: "abc@abc.com",
    phone: "2062112222",
    notified: false,
    confirmed: false,
    completed: false
})

// create a table for customers

db.createCollection('customer')
customerCollection = db.getCollection("customer")
customerCollection.remove({})

customerCollection.insert({
    customerId: 1,
    firstName: "John",
    lastName: "Doe",
    address: {
        "street": "Bellevue Way E",
        "number": "100",
        "zip": "98005",
        "city": "Bellevue"
    },
    phone: "2062112222",
    email: "abc@abc.com",
    username: "sowmya90",
    password: "test123"

})

customerCollection.insert({
    customerId: 2,
    firstName: "Peter",
    lastName: "Johnson",
    address: {
        "street": "Bellevue Way E",
        "number": "100",
        "zip": "98005",
        "city": "Bellevue"
    },
    phone: "2062112222",
    email: "abc@abc.com",
    username: "sowmya390",
    password: "test123"
})

customerCollection.insert({
    customerId: 3,
    firstName: "Mary",
    lastName: "Gates",
    address: {
        "street": "Bellevue Way E",
        "number": "100",
        "zip": "98005",
        "city": "Bellevue"
    },
    phone: "2062112222",
    email: "abc@abc.com",
    username: "sowmya190",
    password: "test123"
})

customerCollection.insert({
    customerId: 4,
    firstName: "John",
    lastName: "Doe",
    address: {
        "street": "Bellevue Way E",
        "number": "628",
        "zip": "98025",
        "city": "Bellevue"
    },
    phone: "2062112222",
    email: "abc@abc.com",
    username: "sowmya290",
    password: "test123"
})

customerCollection.insert({
    customerId: 5,
    firstName: "Bill",
    lastName: "Gates",
    address: {
        "street": "Bellevue Way E",
        "number": "100",
        "zip": "98005",
        "city": "Bellevue"
    },
    phone: "2062112222",
    email: "abc@abc.com",
    username: "sowmya3490",
    password: "test123"
})

// create a table for orders

db.createCollection('orders')
orderCollection = db.getCollection("orders")
orderCollection.remove({})

orderCollection.insert({
    "orderId": 1,
    "menuItemId": 1,
    "quantity": 1,
    "orderTime": "2019-02-05T12:15:00.000Z",
    "customerId": 1,
    "restaurantID": 2
})

orderCollection.insert({
    "orderId": 1,
    "menuItemId": 2,
    "quantity": 1,
    "orderTime": "2019-02-05T12:15:00.000Z",
    "customerId": 1,
    "restaurantID": 2
})

orderCollection.insert({
    "orderId": 1,
    "menuItemId": 3,
    "quantity": 1,
    "orderTime": "2019-02-05T12:15:00.000Z",
    "customerId": 1,
    "restaurantID": 2
})