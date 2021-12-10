export class Product {
    name: string;
    price: number;
    users: string;
    img: string;
    details: string;
    id: number;
  
    constructor(
        name: string,
        price: number,
        users: string,
        img: string,
        details: string,
        id: number,
    ) {
      this.name = name;
      this.price = price;
      this.users = users;
      this.img = img;
      this.details = details;
      this.id = id;
    }
  }

export const productcatalog: Product[] = [
    {
        name: "Sov i skogen",
        price: 5999,
        users: "1-2",
        img: "https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum. Lorem lorem.",
        id: 101
    },

    {
        name: "Öl med en vy",
        price: 1999,
        users: "1-2",
        img: "https://images.unsplash.com/photo-1560761069-ce1ebcc652a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum lorem. Lorem Lorem.",
        id: 102
    },

    {
        name: "Rymdresa",
        price: 3999000,
        users: "1",
        img: "https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.",
        id: 103
    },

    {
        name: "Hyr Richard Bransons ö",
        price: 790000,
        users: "1-20",
        img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum. Lorem.",
        id: 104
    },

    {
        name: "Naturvandring i Jason Voorhees fotspår",
        price: 5599,
        users: "1-5",
        img: "https://images.unsplash.com/photo-1588168053036-b51f9152f2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        details: "Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum",
        id: 105
    },

    {
        name: "Wingsuit (för dig med dödslängtan)",
        price: 7599,
        users: "1-2",
        img: "https://images.unsplash.com/photo-1533652475678-12f52b4fdd53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsumipsum. Lorem ipsum lorem ipsum lorem ipsum",
        id: 106
    },

    {
        name: "Simma med fiskarna",
        price: 19999,
        users: "1-2",
        img: "https://images.unsplash.com/photo-1566812201627-d2ebc5b056f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum",
        id: 107
    },

    {
        name: "Golden-mys",
        price: 599,
        users: "1",
        img: "https://images.unsplash.com/photo-1548439739-0cf616cef1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        details: "Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum",
        id: 108
    }
];