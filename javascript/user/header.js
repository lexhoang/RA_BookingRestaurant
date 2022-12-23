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
            <div style="margin-bottom:71px">
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
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="index.html">Trang chủ</a>
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
            </div>
        `

    document.getElementById("header").innerHTML = header;
}
renderHeader();

function renderLogin() {
    let change = document.getElementById("login")
    let getUser = localStorage.getItem("userLogin");
    if (getUser == null) {
        let renderUser = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active btn btn-css" href="loginForm.html">LOGIN</a>
            </li>
        </ul>
        `
        change.innerHTML = renderUser;
    } else {
        let user = JSON.parse(getUser);
        let renderUser = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user" style="font-size:28px;"> &nbsp;<span style="font-size:12px;">User</span></i>
                </a>
                <ul class="dropdown-menu">
                    <li><p class="dropdown-item">${user[user.length - 1].email}</p></li>
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
            </li>
        </ul>
            `
        change.innerHTML = renderUser;
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