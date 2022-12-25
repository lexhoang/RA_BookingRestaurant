var getListBooking = JSON.parse(localStorage.getItem('listBooking'));

function renderTableOrder(getListBooking) {
    let renderTableOrder = "";

    for (let i = 0; i < getListBooking.length; i++) {
        renderTableOrder += `
                <tr>
                    <td>${getListBooking[i].id}</td>
                    <td>${getListBooking[i].createDate}</td>
                    <td>${getListBooking[i].name}</td>
                    <td>${getListBooking[i].email}</td>
                    <td>${getListBooking[i].phone}</td>
                    <td>${new Date(getListBooking[i].date).toLocaleDateString()}</td>
                    <td>${getListBooking[i].time}:${getListBooking[i].minutes}</td>
                    <td>${getListBooking[i].people}</td>
                    <td>${getListBooking[i].note}</td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteOrder(${getListBooking[i].id})">Xóa</button>
                    </td>
                </tr>
             `
    }
    document.querySelector("tbody").innerHTML = renderTableOrder;
}
renderTableOrder(getListBooking);

function deleteOrder(paramId) {
    for (let i = 0; i < getListBooking.length; i++) {
        if (getListBooking[i].id == paramId) {
            getListBooking.splice(i, 1);
            localStorage.setItem("listBooking", JSON.stringify(getListBooking));
            renderTableOrder(getListBooking);
        }
    }
}