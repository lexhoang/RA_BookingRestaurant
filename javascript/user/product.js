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
        name: "BÒ LÚC LẮC",
        description: "Gắp một gắp lõi rùa, chấm tí mắm gừng mằn mặn cho vào miệng, vị giòn, ngọt, sừn sựt rồi mùi thơm nồng của sả, gừng lan tỏa khiến món ăn trở nên tuyệt hảo không ngờ, ăn hoài không ngán.",
        price: 250000
    }
]
let setListProduct = localStorage.setItem("listProducts", JSON.stringify(allListProducts));

function renderProduct() {
    let getListProduct = JSON.parse(localStorage.getItem("listProducts"));
    let renderProduct = "";
    for (let i = 0; i < getListProduct.length; i++) {
        renderProduct += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card card-product" style="width: 100%;">
                    <img src="${getListProduct[i].image}" class="card-img-top" alt="..." width="100%">

                    <div class="card-body card-product_body text-center">
                        <p class="card-text card-name">${getListProduct[i].name}</p>
                    </div>
                    <div class="card-detail text-center p-1" data-bs-toggle="modal" data-bs-target="#exampleModal-${getListProduct[i].id}"
                            onclick="detailProduct()">CHI TIẾT</div>
                </div>
            </div>

            <div class="modal modal-lg fade" id="exampleModal-${getListProduct[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="card-name" style="flex:9; text-align:center">${getListProduct[i].name}</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <img src="${getListProduct[i].image}" class="card-img-top" alt="..." width="100%">
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <p>${getListProduct[i].description}</p>
                                    <hr>
                                    <h3 class="text-center text-danger mt-5 fw-bold">220.000đ</h3>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn w-25 btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="booking.html" class="btn w-50 btn-css" style="background-color:#c59d5f; color:#fff">
                            ĐẶT BÀN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    `
    }
    document.getElementById("menu").innerHTML = renderProduct
}
renderProduct();