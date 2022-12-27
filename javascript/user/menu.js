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
var userLogin = JSON.parse(localStorage.getItem("userLogin"));
if (userLogin == null) {
    document.getElementById("formNote-feedback").style.display = "none";
}
const productName = document.getElementById("product-name");
const productImg = document.getElementById("product-img");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");

// document.addEventListener("keydown", function (e) {
//     if (e.keyCode == "13") {
//         sendReview();
//     }
// });

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
function renderCardReview(getReview) {
    let renderCardReview = "";
    if (getReview == null) {
        renderCardReview = "";
    } else {
        for (let i = 0; i < getReview.length; i++) {
            if (getReview[i].type == "review") {
                renderCardReview += `
                <div class="col-lg-3 col-md-6 my-5 px-2">
                    <div class="card card-review">
                        <div class="card-review_img">
                            <img src="${getReview[i].image}" alt="..." width="100%" height="100%">
                        </div>
                        <div class="card-body mt-3">
                            <p class="card-title">${getReview[i].user}</p>
                            <h5 class="mt-3 card-text">${getReview[i].review}</h5>
                        </div>
                    </div>
                </div>
            `
            }
        }
    }
    document.getElementById("card-review").innerHTML = renderCardReview
}
renderCardReview(getReview);


function renderFormReview(getReview) {
    let renderFormReview = "";

    if (getReview == null) {
        renderFormReview = "";
    } else {
        for (let i = 0; i < getReview.length; i++) {
            if (getReview[i].type == "review") {
                renderFormReview += `
                <div class="bg-light p-3" style="margin-top:120px">
                    <div class="row">
                        <div class="col-10">
                            <img src="${getReview[i].image}" class="renderImgUser" alt="">
                            <span>${getReview[i].user}</span>
                        </div>
                        ${(userLogin != null) ?
                        `${(userLogin[0].role != "User") ?
                            `<div class="col-2 text-center">
                                <button class="btn btn-danger" onclick="deleteReview(${getReview[i].id})">Xóa</button>
                            </div>`
                            : ""
                        }`
                        : ""
                    }

                    </div>
                    <div class="mt-2">
                            <div class="card mx-4 my-1 form-review">
                                <div class="card-body">${getReview[i].review}</div>
                            </div>
                    </div>
                    <div class="mt-2">
                    ${(userLogin != null) ?
                        ` ${(userLogin[0].role != "User") ?
                            `<div class="row">
                                <div class="col-9"></div>
                                <div class="col-3">
                                    <div class="my-1">
                                        <p class="btn-feedback"onclick="btnFeedback(${getReview[i].id})">Phản hồi</p>
                                    </div>
                                </div>
                            </div>`
                            : ""
                        }`
                        : ""
                    }
                        <div class="mt-3" id="feedbackReview-${getReview[i].id}"> </div>
                    </div>
                </div>
                    `
            } else {
                renderFormReview += `
                <div class="bg-light" style="margin-left:100px">
                    <div class="row">
                        <div class="col-10">
                            <img src="${getReview[i].image}" class="renderImgUser" alt="">
                            <span>${getReview[i].user}</span>
                        </div>
                        ${(userLogin != null) ?
                        `${(userLogin[0].role != "User") ?
                            `<div class="col-2 text-center">
                                    <button class="btn btn-danger" onclick="deleteReview(${getReview[i].id})">Xóa</button>
                                </div>`
                            : ""
                        }`
                        : ""
                    }
                    </div>
                    <div class="mt-2">
                            <div class="card mx-4 my-1 form-review">
                                <div class="card-body">${getReview[i].review}</div>
                            </div>
                    </div>
                    <div class="mt-2">
                    ${(userLogin != null) ?
                        ` ${(userLogin[0].role != "User") ?
                            `<div class="row">
                                <div class="col-9"></div>
                                <div class="col-3">
                                    <div class="my-1">
                                        <p class="btn-feedback"onclick="btnFeedback(${getReview[i].id})">Phản hồi</p>
                                    </div>
                                </div>
                            </div>`
                            : ""
                        }`
                        : ""
                    }
                        <div class="mt-3" id="feedbackReview-${getReview[i].id}"> </div>
                    </div>
                </div>
                    `
            }
        }
    }
    document.getElementById("form-review").innerHTML = renderFormReview
}
renderFormReview(getReview);

function sendReview() {
    let noteReview = document.getElementById("noteReview");
    let objectReview = {
        id: (new Date()).getTime(),
        user: userLogin[0].email,
        image: userLogin[0].image,
        role: userLogin[0].role,
        review: noteReview.value,
        type: "review",
    }

    if (getReview == null) {
        getReview = [];
        getReview.push(objectReview);
        localStorage.setItem("listReview", JSON.stringify(getReview));
        renderFormReview(getReview);
        noteReview.value = "";
    } else {
        getReview.push(objectReview);
        localStorage.setItem("listReview", JSON.stringify(getReview));
        renderFormReview(getReview);
        noteReview.value = "";
    }
}

function deleteReview(paramId) {
    for (let i = 0; i < getReview.length; i++) {
        if (getReview[i].id == paramId) {
            getReview.splice(i, 1);
            localStorage.setItem("listReview", JSON.stringify(getReview));
            renderFormReview(getReview);
        }
    }
}

// FEEDBACK
function btnFeedback(paramId) {
    console.log("click");
    let renderFeedBackInp = "";
    for (let i = 0; i < getReview.length; i++) {
        if (getReview[i].id == paramId) {
            renderFeedBackInp += `
            <div class="m-2 mt-5 d-flex justify-content-around align-items-end">
                <div style="width:85%">
                    <textarea class="form-control" id="noteFeedbackReview-${paramId}" rows="5"
                        placeholder="Hãy để lại cảm nhận của bạn về nhà hàng chúng tôi, cảm ơn bạn đã đến với nhà hàng!"></textarea>
                </div>
                <div style="width:10%">
                    <button class=" btn btn-danger" onclick="sendFeedbackReview(${paramId})">
                        <i class="fa-solid fa-paper-plane"></i> <span>Gửi</span>
                    </button>
                </div>
            </div> `
        }
        document.getElementById(`feedbackReview-${getReview[i].id}`).innerHTML = renderFeedBackInp
    }
}

function sendFeedbackReview(paramId) {
    for (let i = 0; i < getReview.length; i++) {
        if (getReview[i].id == paramId) {
            let noteFeedbackReview = document.getElementById(`noteFeedbackReview-${paramId}`);
            let objectReview = {
                id: (new Date()).getTime(),
                user: userLogin[0].email,
                image: userLogin[0].image,
                role: userLogin[0].role,
                review: noteFeedbackReview.value,
                type: "feedback",
            }
            console.log(paramId);
            console.log(getReview[i].id);

            getReview.splice(i + 1, 0, objectReview);
            localStorage.setItem("listReview", JSON.stringify(getReview));
            renderFormReview(getReview);
            // noteFeedbackReview.value = "";
            console.log("");
            console.log(paramId);
            console.log(getReview[i].id);

        }
    }
}



function renderFormReview(getReview) {
    let renderFormReview = "";

    if (getReview == null) {
        renderFormReview = "";
    } else {
        for (let i = 0; i < getReview.length; i++) {
            if (getReview[i].type == "review") {
                renderFormReview += `
                <div class="bg-light p-3" style="margin-top:120px">
                    <div class="row">
                        <div class="col-10">
                            <img src="${getReview[i].image}" class="renderImgUser" alt="">
                            <span>${getReview[i].user}</span>
                        </div>
                        ${(userLogin != null) ?
                        `${(userLogin[0].role != "User") ?
                            `<div class="col-2 text-center">
                                <button class="btn btn-danger" onclick="deleteReview(${getReview[i].id})">Xóa</button>
                            </div>`
                            : ""
                        }`
                        : ""
                    }

                    </div>
                    <div class="mt-2">
                            <div class="card mx-4 my-1 form-review">
                                <div class="card-body">${getReview[i].review}</div>
                            </div>
                    </div>
                    <div class="mt-2">
                    ${(userLogin != null) ?
                        ` ${(userLogin[0].role != "User") ?
                            `<div class="row">
                                <div class="col-9"></div>
                                <div class="col-3">
                                    <div class="my-1">
                                        <p class="btn-feedback"onclick="btnFeedback(${getReview[i].id})">Phản hồi</p>
                                    </div>
                                </div>
                            </div>`
                            : ""
                        }`
                        : ""
                    }
                        <div class="mt-3" id="feedbackReview-${getReview[i].id}"> </div>
                    </div>
                </div>
                    `
            } else {
                renderFormReview += `
                <div class="bg-light" style="margin-left:100px">
                    <div class="row">
                        <div class="col-10">
                            <img src="${getReview[i].image}" class="renderImgUser" alt="">
                            <span>${getReview[i].user}</span>
                        </div>
                        ${(userLogin != null) ?
                        `${(userLogin[0].role != "User") ?
                            `<div class="col-2 text-center">
                                    <button class="btn btn-danger" onclick="deleteReview(${getReview[i].id})">Xóa</button>
                                </div>`
                            : ""
                        }`
                        : ""
                    }
                    </div>
                    <div class="mt-2">
                            <div class="card mx-4 my-1 form-review">
                                <div class="card-body">${getReview[i].review}</div>
                            </div>
                    </div>
                    <div class="mt-2">
                    ${(userLogin != null) ?
                        ` ${(userLogin[0].role != "User") ?
                            `<div class="row">
                                <div class="col-9"></div>
                                <div class="col-3">
                                    <div class="my-1">
                                        <p class="btn-feedback"onclick="btnFeedback(${getReview[i].id})">Phản hồi</p>
                                    </div>
                                </div>
                            </div>`
                            : ""
                        }`
                        : ""
                    }
                        <div class="mt-3" id="feedbackReview-${getReview[i].id}"> </div>
                    </div>
                </div>
                    `
            }
        }
    }
    document.getElementById("form-review").innerHTML = renderFormReview
}
renderFormReview(getReview);