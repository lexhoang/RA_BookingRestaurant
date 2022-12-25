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
    let getUser = JSON.parse(localStorage.getItem("userLogin"));
    for (let i = 0; i < getUser.length; i++) {
        if (getUser[i].email == "lehoang999113@gmail.com") {
            header += `
            <div style="margin-bottom:71px">
                <nav id="header-navbar" class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark"
                    style="transition:calc(0.5s)">
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
                                        <a class="nav-link active" href="adminUser.html">Quản Lý Tài Khoản</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="adminMenu.html">Quản Lý Thực Đơn</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="adminOrder.html">Quản Lý Đặt Bàn</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-user" style="font-size:28px;"> &nbsp;<span style="font-size:12px; letter-spacing:5px">ADMIN</span></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><p class="dropdown-item">${getUser[getUser.length - 1].email}</p></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li class="dropdown-item">
                                                    <a href="adminOrder.html" style="color:#000">Admin Page</a>
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
                                </form>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        `
        }
    }
    document.getElementById("header").innerHTML = header;
}
renderHeader();


function logOut() {
    console.log("click");
    let listUser = localStorage.getItem("userLogin");
    if (listUser != null) {
        localStorage.removeItem("userLogin");
        window.location.href = "loginForm.html"
    }
}