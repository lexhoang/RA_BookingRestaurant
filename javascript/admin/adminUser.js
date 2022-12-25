var listUserRegister = JSON.parse(localStorage.getItem('listUserRegister'));

function renderTableOrder(listUserRegister) {
    let renderTableOrder = "";

    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].email == "lehoang999113@gmail.com") {
            renderTableOrder += `
            <tr>
                <td>${listUserRegister[i].email}</td>
                <td>${listUserRegister[i].status}</td>
                <td id="btn-disableUser${i}">
                </td>
                <td id="btn-available${i}" style="display:none">
                </td>
            </tr>
    `

        } else if (listUserRegister[i].status == "Vô hiệu hóa") {
            renderTableOrder += `
            <tr>
                <td>${listUserRegister[i].email}</td>
                <td>${listUserRegister[i].status}</td>
                <td id="btn-disableUser${i}" style="display:none">
                    <button class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>
                </td>

                <td id="btn-available${i}">
                <button class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                </td>
            </tr>
        `
        }
        else {
            renderTableOrder += `
            <tr>
                <td>${listUserRegister[i].email}</td>
                <td>${listUserRegister[i].status}</td>
                <td id="btn-disableUser${i}">
                    <button class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>
                </td>

                <td id="btn-available${i}" style="display:none">
                <button class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                </td>
            </tr>
        `
        }
    }
    document.querySelector("tbody").innerHTML = renderTableOrder;
}
renderTableOrder(listUserRegister);

function disableUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].status = "Vô hiệu hóa"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableOrder(listUserRegister);

            document.getElementById(`btn-disableUser${i}`).style.display = "none";
            document.getElementById(`btn-available${i}`).style.display = "block";
        } else {
        }
    }
}

function availableUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].status = "Đang hoạt động"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableOrder(listUserRegister);

            document.getElementById(`btn-disableUser${i}`).style.display = "block";
            document.getElementById(`btn-available${i}`).style.display = "none";
        } else {
        }
    }
}