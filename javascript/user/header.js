function myScroll() {
    const navbar = document.getElementById("header-navbar");

    if (window.scrollY > 200) {
        navbar.classList.add("bg-light");
        navbar.classList.remove("navbar-dark");
        navbar.classList.remove("bg-dark");
    } else {
        navbar.classList.add("navbar-dark");
        navbar.classList.add("bg-dark");
        navbar.classList.remove("bg-light");
    }
}

function renderHeader() {
    let header = "";
    header += `
            <div id="margin-header">
                <nav id="header-navbar" class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark" style="transition:calc(0.5s)">
                    <div class="container-fluid">
                        <div class="col-3">
                            <a class="navbar-brand" href="index.html">
                                <img src="./images/logo.png" alt="" width="160px">
                            </a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="col-9">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="index.html">Trang Chủ</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="concept.html">Concept</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="menu.html">Thực Đơn</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="booking.html">Đặt Bàn</a>
                                    </li>

                                    <li class="nav-item">
                                    <a class="nav-link active" href="bookingOrder.html">Bàn Của Bạn</a>
                                </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <div id="login"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="modal fade" id="modalChangeImgUser" tabindex="-1" aria-labelledby="modalChangeImgUserLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalChangeImgUserLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3 row">
                                <div class="col-5" style="height: 180px;">
                                    <img  id="imgUserBefore" src="" alt="ảnh người dùng" width="100%" height="100%"
                                        style="object-fit:cover">
                                </div>
                                <div class="col-7">
                                    <label for="editImgUser" class="form-label">Ảnh mới:</label>
                                    <input type="file" class="form-control" id="editImgUser" onchange="readURL(this);"
                                        oninput="renderImgUserChange()">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="changeImgUser()">Lưu Thay Đổi</button>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        `
    document.getElementById("header").innerHTML = header;
}
renderHeader();


function renderLogin() {
    let getUser = JSON.parse(localStorage.getItem("userLogin"));
    let renderUser = "";
    if (getUser == null) {
        renderUser = `
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active btn btn-css" href="loginForm.html">LOGIN</a>
                </li>
            </ul>
        `
        document.getElementById("login").innerHTML = renderUser;
    } else {
        // for (let i = 0; i < getUser.length; i++) {
        if (getUser[0].role != "User") {
            renderUser = `
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img id="renderImgUser" class="renderImgUser" src="${getUser[0].image}"> &nbsp;
                                <span style="font-size:12px; letter-spacing:5px">
                                    ${(getUser[0].role == "Admin") ? "ADMIN" : "CENSOR"}
                                </span>
                            </img>
                        </a>
                        <ul class="dropdown-menu">
                            <li><p class="dropdown-item">${getUser[getUser.length - 1].email}</p></li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <button type="button" class="btn btn-css w-100" style="color:#000" data-bs-toggle="modal" data-bs-target="#modalChangeImgUser">Thay ảnh</button>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <a href="adminOrder.html" style="color:#000">Quản Lý</a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <a href="changePassword.html"  style="color:#000">Đổi mật khẩu</a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <i class="fa-solid fa-right-from-bracket" onclick="logOut()" style="font-size:28px;"></i>
                        </a>
                    </li>
                </ul>
            `
            document.getElementById("login").innerHTML = renderUser;
        }
        else {
            renderUser = `
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img id="renderImgUser" class="renderImgUser" src="${getUser[0].image}"> &nbsp;
                                <span style="font-size:12px; letter-spacing:5px">USER</span>
                            </img>
                        </a>
                        <ul class="dropdown-menu">
                            <li><p class="dropdown-item">${getUser[getUser.length - 1].email}</p></li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <button type="button" class="btn btn-css w-100" style="color:#000" data-bs-toggle="modal" data-bs-target="#modalChangeImgUser">Thay ảnh</button>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <a href="changePassword.html">Đổi mật khẩu</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <i class="fa-solid fa-right-from-bracket" onclick="logOut()" style="font-size:28px;"></i>
                        </a>
                    </li>
                </ul>
            `
            document.getElementById("login").innerHTML = renderUser;
        }
        // }
    }
}
renderLogin();


function logOut() {
    console.log("click");
    let listUser = localStorage.getItem("userLogin");
    if (listUser != null) {
        localStorage.removeItem("userLogin");
        window.location.reload();
    }
}

// THÊM FILE ẢNH MỚI
document.getElementById("imgUserBefore").src = localStorage.getItem("imageUser")

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // console.log("111", e.target.result);
            localStorage.setItem("imageUser", e.target.result)
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function renderImgUserChange() {
    setTimeout(() => {
        document.getElementById("imgUserBefore").src = localStorage.getItem("imageUser");
    }, 300)
}

// LƯU ẢNH THÂY ĐỔI
function changeImgUser() {
    let getUser = JSON.parse(localStorage.getItem("userLogin"));
    let listUserRegister = JSON.parse(localStorage.getItem("listUserRegister"));
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].email == getUser[0].email) {
            listUserRegister[i].image = localStorage.getItem("imageUser");
            getUser[0].image = localStorage.getItem("imageUser");
            localStorage.setItem("userLogin", JSON.stringify(getUser));
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            window.location.reload();
        }
    }

}

function checkHeader() {
    let headerNavbar = document.getElementById("header-navbar");
    let marginHeader = document.getElementById("margin-header");
    if (window.innerWidth <= 600) {
        headerNavbar.classList.remove("fixed-top");
        marginHeader.style.marginBottom = "0px";
    } else {
        headerNavbar.classList.add("fixed-top");
        marginHeader.style.marginBottom = "71px";
    }
}
checkHeader();