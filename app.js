let products = {
    data: [{
            name: "Sữa bột Bellamy's Organic",
            price: "1.100.000đ",
            image: "image/pd12.jpg"
        },

        {
            name: "Sữa NAN SUPREME PRO số 2 800g (6-24 tháng)",
            price: "555.000đ",
            image: "image/pd2.png"
        },

        {
            name: "Tã quần Molfix thiên nhiên (XL, 12-17kg, 62 miếng)",
            price: "350.000đ",
            image: "image/pd3.png"
        },

        {
            name: "Tã dán Nhật Bản Takato siêu mềm mại (M, 76 miếng)",
            price: "250.000đ",
            image: "image/pd4.png"
        },

        {
            name: "Sữa chua Nha Đam TH true Yogurt 100g (vỉ 4 hộp)",
            price: "25.000đ",
            image: "image/pd5.jpg"
        },

        {
            name: "Sữa Abbott Grow Gold hương vani 110ML - Lốc 4 (Từ 1 tuổi)",
            price: "50.000đ",
            image: "image/pd6.jpg"
        },

        {
            name: "Áo thun cho trẻ em ",
            price: "150.000đ",
            image: "image/pd7.jpg"
        },

        {
            name: "Áo thun cho trẻ em",
            price: "150.000đ",
            image: "image/pd8.jpg"
        },

        {
            name: "Đồ chơi chú vịt vàng vui nhộn có nhạc và đèn",
            price: "200.000đ",
            image: "image/pd9.png"
        },

        {
            name: "Bộ đập thú hình gấu kèm chức năng phát nhạc, kể chuyện",
            price: "180.000đ",
            image: "image/pd10.png"
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = item["name"].toUpperCase();
    card.appendChild(name)

    let price = document.createElement("h6")
    price.classList.add("price")
    price.innerText = "$" + item["price"]
    card.appendChild(price)

    document.getElementById("products").appendChild(card)
}


document.getElementById("search-input").addEventListener('input', () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let cards = document.querySelectorAll(".card");
    let productsName = document.querySelectorAll(".product-name");
    let prices = document.querySelectorAll(".price");

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)) {
            cards[index].classList.remove("hidden");
        } else {
            cards[index].classList.add("hidden");
        }
    });
})