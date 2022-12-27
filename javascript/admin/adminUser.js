var listUserRegister = JSON.parse(localStorage.getItem('listUserRegister'));

function renderTableUser(listUserRegister) {
    let renderTableUser = "";
    if (listUserRegister == null) {
        renderTableUser = ""
    } else {
        for (let i = 0; i < listUserRegister.length; i++) {
            if (listUserRegister[i].role == "Admin") {
                renderTableUser += `
                        <tr>
                            <td>${listUserRegister[i].id}</td>
                            <td>${listUserRegister[i].email}</td>
                            <td>${listUserRegister[i].role}</td>
                            <td>${listUserRegister[i].status}</td>
                            <td id="btn-disableUser${i}">
                            </td>
                            <td id="btn-available${i}" style="display:none">
                            </td>
                        </tr>
                    `
            } else {
                var userLogin = JSON.parse(localStorage.getItem('userLogin'));
                if (userLogin[0].role == "Admin") {
                    renderTableUser += `
                        <tr>
                            <td>${listUserRegister[i].id}</td>
                            <td>${listUserRegister[i].email}</td>
                            <td>${listUserRegister[i].role}</td>
                            <td>${listUserRegister[i].status}</td>
                            ${(listUserRegister[i].status != "Vô hiệu hóa") ?
                            `<td>
                                <button id="btn-disableUser${i}" class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>
                                <button style="display:none" id="btn-available${i}" class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                            </td>`
                            :
                            `<td>
                                <button style="display:none" id="btn-disableUser${i}" class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>

                                <button id="btn-available${i}" class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                            </td>`
                        }
                            ${(listUserRegister[i].role == "User") ?
                            `<td>
                                <button id="btn-addPermission${i}" class="btn btn-success" onclick="addPermissionUser(${listUserRegister[i].id})">Cấp quyền</button>
                                <button style="display:none" id="btn-deletePermission${i}" class="btn btn-danger" onclick="deletePermissionUser(${listUserRegister[i].id})">Hủy quyền</button>
                            </td>`
                            :
                            `<td>
                                <button style="display:none" id="btn-addPermission${i}" class="btn btn-success" onclick="addPermissionUser(${listUserRegister[i].id})">Cấp quyền</button>
                                <button id="btn-deletePermission${i}" class="btn btn-danger" onclick="deletePermissionUser(${listUserRegister[i].id})">Hủy quyền</button>
                            </td>`
                        }
                        </tr>
                    `
                } else {
                    renderTableUser += `
                        <tr>
                            <td>${listUserRegister[i].id}</td>
                            <td>${listUserRegister[i].email}</td>
                            <td>${listUserRegister[i].role}</td>
                            <td>${listUserRegister[i].status}</td>

                            ${listUserRegister[i].role == "User" ?
                            `${(listUserRegister[i].status != "Vô hiệu hóa") ?
                                `<td>
                                    <button id="btn-disableUser${i}" class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>
                                    <button style="display:none" id="btn-available${i}" class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                                </td>`
                                :
                                `<td>
                                    <button style="display:none" id="btn-disableUser${i}" class="btn btn-danger" onclick="disableUser(${listUserRegister[i].id})">Vô hiệu hóa</button>
                                    <button id="btn-available${i}" class="btn btn-success" onclick="availableUser(${listUserRegister[i].id})">Kích hoạt</button>
                                </td>`
                            }`
                            : ""
                        }
                        </tr>
                    `
                }
            }
        }
    }
    document.querySelector("tbody").innerHTML = renderTableUser;
}
renderTableUser(listUserRegister);

// VÔ HIỆU HÓA
function disableUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].status = "Vô hiệu hóa"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableUser(listUserRegister);

            document.getElementById(`btn-disableUser${i}`).style.display = "none";
            document.getElementById(`btn-available${i}`).style.display = "block";
        } else {
        }
    }
}
// MỞ TÀI KHOẢN
function availableUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].status = "Đang hoạt động"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableUser(listUserRegister);

            document.getElementById(`btn-disableUser${i}`).style.display = "block";
            document.getElementById(`btn-available${i}`).style.display = "none";
        } else {
        }
    }
}


// CẤP QUYỀN
function addPermissionUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].role = "Censor"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableUser(listUserRegister);

            document.getElementById(`btn-addPermission${i}`).style.display = "none";
            document.getElementById(`btn-deletePermission${i}`).style.display = "block";
        } else {
        }
    }
}
// HỦY QUYỀN
function deletePermissionUser(paramId) {
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].id == paramId) {
            listUserRegister[i].role = "User"
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            renderTableUser(listUserRegister);

            document.getElementById(`btn-addPermission${i}`).style.display = "block";
            document.getElementById(`btn-deletePermission${i}`).style.display = "none";
        } else {
        }
    }
}

// TÌM KIẾM
function searchEmailUser() {
    let searchUser = []
    let inpSearchUser = document.getElementById("searchUser").value;
    for (let i = 0; i < listUserRegister.length; i++) {
        if ((listUserRegister[i].email).toLowerCase().includes(inpSearchUser.toLowerCase()) == true) {
            searchUser.push(listUserRegister[i])
        }
    }
    renderTableUser(searchUser);
}