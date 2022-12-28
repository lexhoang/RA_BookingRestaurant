var getListProducts = JSON.parse(localStorage.getItem('listProducts'));

const addImgFood = document.getElementById('addImgFood');
const renderImgAdd = document.getElementById("renderImgAdd")
const addNameFood = document.getElementById('addNameFood');
const addDescriptionFood = document.getElementById('addDescriptionFood');
const addPriceFood = document.getElementById('addPriceFood');

const imgFoodBefore = document.getElementById('imgFoodBefore');
const editImgFood = document.getElementById('editImgFood');
const editNameFood = document.getElementById('editNameFood');
const editDescriptionFood = document.getElementById('editDescriptionFood');
const editPriceFood = document.getElementById('editPriceFood');


function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function renderTableMenu(getListProducts) {
    let renderTableMenu = "";
    if (getListProducts == null) {
        renderTableMenu = ""
    } else {
        for (let i = 0; i < getListProducts.length; i++) {
            renderTableMenu += `
            <tr>
                <td>${getListProducts[i].id}</td>
                <td>
                    <img src="${getListProducts[i].image}" style="width:100px; height:100px"/>
                </td>
                <td>${getListProducts[i].name}</td>
                <td>${numberWithCommas(getListProducts[i].price)} VNĐ</td>

                <td>
                    <button class="btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#modalDetail" onclick="detailMenu(${getListProducts[i].id})">Chi tiết</button>
                </td>
                <td class="btn-group w-100">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditFood" onclick="editMenu(${getListProducts[i].id})"><i class="fa-solid fa-pen-to-square"></i></button>

                    <button class="btn btn-danger" onclick="deleteMenu(${getListProducts[i].id})"><i class="fa-solid fa-trash"></i></button>
                 </td>
            </tr>
        `
        }
    }
    document.querySelector("tbody").innerHTML = renderTableMenu;
}
renderTableMenu(getListProducts);



// THÊM FILE ẢNH MỚI
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // console.log("111", e.target.result);
            localStorage.setItem("image", e.target.result)
        }
        reader.readAsDataURL(input.files[0]);
    }
}


///////////     THÊM MỚI   ___  CREATE     ///////////

function changeImgAdd() {
    setTimeout(() => {
        renderImgAdd.src = localStorage.getItem("image");
    }, 300)
}

function addNewProduct() {
    let objectProduct = {
        id: getListProducts[getListProducts.length - 1].id + 1,
        image: localStorage.getItem("image"),
        name: addNameFood.value,
        description: addDescriptionFood.value,
        price: addPriceFood.value,
    }
    getListProducts.push(objectProduct);
    localStorage.setItem("listProducts", JSON.stringify(getListProducts));
    renderTableMenu(getListProducts);
    swal("Thêm món ăn thành công", "", "success")

    addImgFood.value = "";
    renderImgAdd.src = "";
    addNameFood.value = "";
    addDescriptionFood.value = "";
    addPriceFood.value = "";
    localStorage.removeItem("image");
}



///////////      CHI TIẾT  ___ READ      ///////////
function detailMenu(paramId) {
    const detailName = document.getElementById("detail-name");
    const detailImg = document.getElementById("detail-img");
    const detailDescription = document.getElementById("detail-description");
    const detailPrice = document.getElementById("detail-price");

    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            detailName.innerHTML = getListProducts[i].name;
            detailImg.src = getListProducts[i].image;
            detailDescription.innerHTML = getListProducts[i].description;
            detailPrice.innerHTML = numberWithCommas(getListProducts[i].price) + " VNĐ";
        }
    }
}


///////////      SỬA  ___ EDIT      ///////////
var indexEdit = "";
//  Thêm dữ liệu vào modal
function editMenu(paramId) {
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            imgFoodBefore.src = getListProducts[i].image;
            // editImgFood.src = localStorage.getItem("image");
            editNameFood.value = getListProducts[i].name;
            editDescriptionFood.value = getListProducts[i].description;
            editPriceFood.value = getListProducts[i].price;
        }
    }
    indexEdit = paramId
}

function changeImgEdit() {
    setTimeout(() => {
        imgFoodBefore.src = localStorage.getItem("image");
    }, 500)
}

//  Lưu dữ liệu lên localStorage và hiển thị lại bảng
function saveEditProduct() {
    console.log(indexEdit);
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == indexEdit) {
            getListProducts[i].image = localStorage.getItem("image");
            // editImgFood.value =
            getListProducts[i].name = editNameFood.value;
            getListProducts[i].description = editDescriptionFood.value;
            getListProducts[i].price = editPriceFood.value;
            localStorage.setItem("listProducts", JSON.stringify(getListProducts));
            renderTableMenu(getListProducts);

            swal("Sửa món ăn thành công", "", "success")
        }
    }
    //localStorage.removeItem("image");
}


///////////      XÓA  ___ DELETE        /////////////
function deleteMenu(paramId) {
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            getListProducts.splice(i, 1);
            localStorage.setItem("listProducts", JSON.stringify(getListProducts));
            renderTableMenu(getListProducts);
            swal("Xóa món ăn thành công", "", "success")
        }
    }
}

// TÌM KIẾM
function searchNameFood() {
    let searchProduct = []
    let inpSearchProduct = document.getElementById("searchProduct").value;
    for (let i = 0; i < getListProducts.length; i++) {
        if ((getListProducts[i].name).toLowerCase().includes(inpSearchProduct.toLowerCase()) == true) {
            searchProduct.push(getListProducts[i])
        }
    }
    renderTableMenu(searchProduct);
}


function checkPriceAdd() {
    if (addPriceFood.value < 100 || isNaN(addPriceFood.value)) {
        swal("Giá tiền không hợp lệ", "", "error");
    }
}

function checkPriceEdit() {
    if (editPriceFood.value < 100 || isNaN(editPriceFood.value)) {
        swal("Giá tiền không hợp lệ", "", "error");
    }
}