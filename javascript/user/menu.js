const allListProducts = [
    {
        id: 1,
        image: "./images/product1.png",
        name: "BÒ BÍT TẾT",
        description: "Bò Bít tết là món ăn được đông đảo thực Khách thưởng thức khi tới nhà nghé Phú Viên. Đây là món ăn giàu dinh dưỡng, dễ ăn và không bị ngán ăn kèm cùng các loại rau củ và khoai tây chiên.Món ăn này trẻ em hay người lớn đều ưa thích bởi hương vị hấp dẫn kích thích vị giác.",
        price: 220000
    },
    {
        id: 2,
        image: "./images/product2.png",
        name: "BÒ CHIÊN BƠ TỎI",
        description: "Rất nhiều thực khách đã “phải lòng” rồi say như điếu đổ với món nghé chiên vị tỏi của nhà hàng Nghé Phú Viên. Vị ngọt mềm, độ giòn, pha lẫn vị bùi bùi của tỏi đã trở thành đặc trưng hút hồn thực khách của món ăn này.",
        price: 220000
    },
    {
        id: 3,
        image: "./images/product3.png",
        name: "BÒ LÚC LẮC",
        description: "Giữa tiết trời se lạnh khi được thưởng thức món nghé lúc lắc ngọt, mềm thơm kết hợp cùng ớt chuông xanh Đà Lạt được rưới nước sốt xì dầu đậm đà chắc hẳn bạn sẽ cảm thấy vô cùng tuyệt vời.",
        price: 220000
    },
    {
        id: 4,
        image: "./images/product4.png",
        name: "LÕI RÙA TRẦN",
        description: "Gắp một gắp lõi rùa, chấm tí mắm gừng mằn mặn cho vào miệng, vị giòn, ngọt, sừn sựt rồi mùi thơm nồng của sả, gừng lan tỏa khiến món ăn trở nên tuyệt hảo không ngờ, ăn hoài không ngán.",
        price: 250000
    }
]
var setListProducts = localStorage.setItem("listProducts", JSON.stringify(allListProducts));

var getListProducts = JSON.parse(localStorage.getItem("listProducts"));
var getReview = JSON.parse(localStorage.getItem("listReview"));

const productName = document.getElementById("product-name");
const productImg = document.getElementById("product-img");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");


function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function renderProduct() {
    let renderProduct = "";
    for (let i = 0; i < getListProducts.length; i++) {
        renderProduct += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card card-product" style="width: 100%;">
                    <img src="${getListProducts[i].image}" class="card-img-top" alt="..." width="100%">

                    <div class="card-body card-product_body text-center">
                        <p class="card-text card-name">${getListProducts[i].name}</p>
                    </div>
                    <div class="card-detail text-center p-1" data-bs-toggle="modal" data-bs-target="#productModal"
                            onclick="detailProduct(${getListProducts[i].id})">CHI TIẾT
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("menu").innerHTML = renderProduct
}
renderProduct();

function detailProduct(paramId) {
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            productName.innerHTML = getListProducts[i].name;
            productImg.src = getListProducts[i].image;
            productDescription.innerHTML = getListProducts[i].description;
            productPrice.innerHTML = numberWithCommas(getListProducts[i].price) + " VNĐ";
        }
    }
}

/////////////////////       REVIEW         ////////////////////
function renderReview(getReview) {
    let renderReview = "";
    for (let i = 0; i < getReview.length; i++) {
        renderReview += `
            <div class="m-3 mt-5">
                <div>
                    <img src="./images/avtUser.png" alt="" width="30px">
                    <span>${getReview[i].user}</span>
                </div>
                <div class="mt-2">
                    <div class="card bg-light mx-4 my-1">
                        <div class="card-body">${getReview[i].review}</div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("card-review").innerHTML = renderReview
}
renderReview(getReview);

function sendReview() {
    let noteReview = document.getElementById("noteReview");
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let objectReview = {
        user: userLogin[0].email,
        review: noteReview.value
    }

    if (getReview == null) {
        getReview = [];
        getReview.push(objectReview);
        localStorage.setItem("listReview", JSON.stringify(getReview));
        renderReview(getReview);
        noteReview.value = "";
    } else {
        getReview.push(objectReview);
        localStorage.setItem("listReview", JSON.stringify(getReview));
        renderReview(getReview);
        noteReview.value = "";
    }
}

