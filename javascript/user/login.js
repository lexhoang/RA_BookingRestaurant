function onloadForm() {
    let renderForm = "";
    renderForm += `
        <div class="animate__animated animate__fadeInDown" >
            <div class="bg-form col-lg-4 col-md-6 col-sm-10 mx-auto p-5">
                <div class="btn-group w-100">
                    <a href="registerForm.html" class="btn btn-dark">SIGN UP</a>
                    <a href="loginForm.html" class="btn btn-danger">LOGIN</a>
                </div>
                <h3 class="text-center text-light mt-5">FORM LOGIN</h3>
                <hr>
                <div class="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="text" class="form-control" id="inp-email" placeholder="Enter Email" name="email" required>
                    <div id="noteEmail"></div>
                </div>

                <div class="form-group mt-4">
                    <label for="password"><b>Password</b></label>
                    <input type="password" class="form-control" id="inp-password" placeholder="Enter Password"
                        name="password" required>
                    <i class="fa-solid fa-eye-slash" id="btn-password"></i>
                    <div id="notePassword"></div>
                </div>
                <p id="errorCheck"></p>
                <button id="btn-submit" class="mt-4 btn-css w-100">LOGIN</button>

                <div class="text-center">
                    <div class="text-white mt-3 btn" data-bs-toggle="modal"
                        data-bs-target="#forgotPassword">Quên mật khẩu
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="forgotPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">QUÊN MẬT KHẨU</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body form-group">
                        <label class="text-dark">Email của bạn:</label>
                        <input type="text" id="inp-forgot" class="mt-2 form-control" placeholder="Nhập Email của bạn"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="forgotPassword()">Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
    `
    document.getElementById("login-form").innerHTML = renderForm;
}

onloadForm();


const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const btnSubmit = document.getElementById("btn-submit");
const errorCheck = document.getElementById("errorCheck");

// FORGOT PASSWORD
function forgotPassword() {
    let inpForgot = document.getElementById("inp-forgot");
    let listUsers = JSON.parse(localStorage.getItem("listUserRegister"));
    if (listUsers != null) {
        for (let i = 0; i < listUsers.length; i++) {
            if (listUsers[i].email == inpForgot.value) {
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "haitqrikkei@gmail.com",
                    Password: "C25575E4F3C7BBDE2F82765E0C4CC804C88D",
                    To: `${listUsers[i].email}`,
                    From: "haitqrikkei@gmail.com",
                    Subject: "This is the subject",
                    Body: `Mật khẩu của bạn là: ${listUsers[i].password}`
                }).then((message) => {
                    swal(message, "Chúng tôi đã gửi mật khẩu đến gmail của bạn", "success");
                })
                console.log("Chúng tôi đã gửi mật khẩu đến gmail của bạn");
            } else {
                console.error("Tài khoản chưa tồn tại");
                swal("Tài khoản chưa tồn tại", "", "error");
            }
        }
    }
}

//NÚT SUBMIT
let signIn = document.getElementById("btn-submit");
signIn.addEventListener("click", function () {
    let listUserLogin = JSON.parse(localStorage.getItem("userLogin"))
    let objectUser = {
        email: inpEmail.value,
        password: inpPassword.value,
    }
    if (checkForm()) {
        if (listUserLogin == null) {
            listUserLogin = []
            listUserLogin.push(objectUser)
            localStorage.setItem("userLogin", JSON.stringify(listUserLogin));
            window.location.href = "index.html";
        } else {
            listUserLogin.push(objectUser)
            localStorage.setItem("userLogin", JSON.stringify(listUserLogin));
            window.location.href = "index.html";
        }
    } else {
        errorCheck.innerHTML = "Email hoặc mật khẩu không đúng";
        errorCheck.style.color = "red";
        console.error("Email hoặc mật khẩu không đúng");
        swal("Email hoặc mật khẩu không đúng", "", "error");
    }
})


////////////        CHECK FORM        //////////////
// function checkForm() {
//     if (checkLocalStorage() == true) {
//         console.log("Tài khoản hợp lệ");
//         return true;
//     } else {
//         console.log("Tài khoản không hợp lệ");
//         return false;
//     }
// }

//       KIỂM TRA XEM TÀI KHOẢN ĐÃ ĐƯƠC ĐĂNG KÝ CHƯA
function checkForm() {
    let getUserRegister = localStorage.getItem("listUserRegister");
    let listUserRegister = JSON.parse(getUserRegister)
    for (const index in listUserRegister) {
        console.log(listUserRegister[index]);
        if (listUserRegister[index].email == inpEmail.value && listUserRegister[index].password == inpPassword.value
            && listUserRegister[index].status == "availability") {
            console.log("Tài khoản hợp lệ");
            return true;
        } else {
            console.log("Tài khoản không hợp lệ");
        }
    }
}


//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})