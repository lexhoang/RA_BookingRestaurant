var getListBooking = JSON.parse(localStorage.getItem('listBooking'));

const orderDetailId = document.getElementById('orderDetailId');
const orderDetailName = document.getElementById('orderDetailName');
const orderDetailEmail = document.getElementById('orderDetailEmail');
const orderDetailPhone = document.getElementById('orderDetailPhone');
const orderDetailDate = document.getElementById('orderDetailDate');
const orderDetailTime = document.getElementById('orderDetailTime');
const orderDetailPeople = document.getElementById('orderDetailPeople');
const orderDetailCreateDate = document.getElementById('orderDetailCreateDate');
const orderDetailNote = document.getElementById('orderDetailNote');


function renderTableOrder(getListBooking) {
    let renderTableOrder = "";

    if (getListBooking == null) {
        renderTableOrder = ""
    } else {
        for (let i = 0; i < getListBooking.length; i++) {
            renderTableOrder += `
                <tr>
                    <td>${getListBooking[i].name}</td>
                    <td>${getListBooking[i].email}</td>
                    <td>${getListBooking[i].phone}</td>
                    <td>${new Date(getListBooking[i].date).toLocaleDateString()}</td>
                    <td>${getListBooking[i].time}:${getListBooking[i].minutes}</td>
                    <td>${getListBooking[i].people} người</td>
                    <td>
                        <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#modalDetailOrder" onclick="detailOrder(${getListBooking[i].id})">Chi Tiết</button>
                    </td>
                    <td>
                        <button class="btn btn-danger w-100" onclick="deleteOrder(${getListBooking[i].id})"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
             `
        }
    }
    document.querySelector("tbody").innerHTML = renderTableOrder;
}
renderTableOrder(getListBooking);


function detailOrder(paramId) {
    for (let i = 0; i < getListBooking.length; i++) {
        if (getListBooking[i].id == paramId) {
            orderDetailId.innerHTML = getListBooking[i].id;
            orderDetailCreateDate.innerHTML = getListBooking[i].createDateTime;
            orderDetailName.innerHTML = getListBooking[i].name;
            orderDetailEmail.innerHTML = getListBooking[i].email;
            orderDetailPhone.innerHTML = getListBooking[i].phone;
            orderDetailDate.innerHTML = new Date(getListBooking[i].date).toLocaleDateString();
            orderDetailTime.innerHTML = getListBooking[i].time + ":" + getListBooking[i].minutes;
            orderDetailPeople.innerHTML = getListBooking[i].people + " người";
            orderDetailNote.innerHTML = getListBooking[i].note;
        }
    }
}


function deleteOrder(paramId) {
    for (let i = 0; i < getListBooking.length; i++) {
        if (getListBooking[i].id == paramId) {
            getListBooking.splice(i, 1);
            localStorage.setItem("listBooking", JSON.stringify(getListBooking));
            renderTableOrder(getListBooking);
        }
    }
}

// TÌM KIẾM
function searchEmailOrder() {
    let searchOrder = []
    let inpSearchOrder = document.getElementById("searchOrder").value;
    for (let i = 0; i < getListBooking.length; i++) {
        if ((getListBooking[i].email).toLowerCase().includes(inpSearchOrder.toLowerCase()) == true) {
            searchOrder.push(getListBooking[i])
        }
    }
    renderTableOrder(searchOrder);
}