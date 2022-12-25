var getListProducts = JSON.parse(localStorage.getItem('listProducts'));

const addImgFood = document.getElementById('addImgFood');
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

function renderTableOrder(getListProducts) {
    let renderTableOrder = "";

    for (let i = 0; i < getListProducts.length; i++) {
        renderTableOrder += `
                <tr>
                    <td>${getListProducts[i].id}</td>
                    <td>
                        <img src="${getListProducts[i].image}" width=100px/>
                    </td>
                    <td>${getListProducts[i].name}</td>
                    <td>${numberWithCommas(getListProducts[i].price)} VNĐ</td>
                    <td>
                        <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#modalDetail" onclick="detailMenu(${getListProducts[i].id})">Chi tiết</button>
                    </td>
                    <td>
                        <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#modalEditFood" onclick="editMenu(${getListProducts[i].id})">Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-danger w-100" onclick="deleteMenu(${getListProducts[i].id})">Xóa</button>
                     </td>
                </tr>
             `
    }
    document.querySelector("tbody").innerHTML = renderTableOrder;
}
renderTableOrder(getListProducts);

function addNewProduct() {
    let objectProduct = {
        id: getListProducts.length + 1,
        image: addImgFood.value,
        name: addNameFood.value,
        description: addDescriptionFood.value,
        price: addPriceFood.value,
    }
    getListProducts.push(objectProduct);
    localStorage.setItem("listProducts", JSON.stringify(getListProducts));
    swal("Thêm món ăn thành công", "", "success")
        .then(() => {
            renderTableOrder(getListProducts);
        });
}

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


function deleteMenu(paramId) {
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            getListProducts.splice(i, 1);
            localStorage.setItem("listProducts", JSON.stringify(getListProducts));
            swal("Xóa món ăn thành công", "", "success")
                .then(() => {
                    renderTableOrder(getListProducts);
                });
        }
    }
}

let indexEdit = "";
function editMenu(paramId) {
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == paramId) {
            imgFoodBefore.src = getListProducts[i].image;
            // editImgFood.value =
            editNameFood.value = getListProducts[i].name;
            editDescriptionFood.value = getListProducts[i].description;
            editPriceFood.value = getListProducts[i].price;
        }
    }
    indexEdit = paramId
}

function saveEditProduct() {
    console.log(indexEdit);
    for (let i = 0; i < getListProducts.length; i++) {
        if (getListProducts[i].id == indexEdit) {
            getListProducts[i].image = imgFoodBefore.src;
            // editImgFood.value =
            getListProducts[i].name = editNameFood.value;
            getListProducts[i].description = editDescriptionFood.value;
            getListProducts[i].price = editPriceFood.value;
            localStorage.setItem("listProducts", JSON.stringify(getListProducts));
            swal("Sửa món ăn thành công", "", "success")
                .then(() => {
                    renderTableOrder(getListProducts);
                });
        }
    }
}