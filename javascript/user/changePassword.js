function onloadForm() {
    let renderForm = "";
    renderForm += `
        <div class="animate__animated animate__fadeInDown" >
            <div class="bg-form col-lg-4 col-md-6 col-sm-10 mx-auto p-5">
                <h3 class="text-center text-light mt-5">THAY ĐỔI MẬT KHẨU</h3>
                <hr>
                <div class="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="text" class="form-control" id="inp-email" placeholder="Enter Email" name="email" required>
                </div>

                <div class="form-group mt-4">
                    <label for="password"><b>Password</b></label>
                    <input type="password" class="form-control" id="inp-password" placeholder="Enter Password"
                        name="password" required>
                    <i class="fa-solid fa-eye-slash" id="btn-password"></i>
                </div>

                <div class="form-group mt-4">
                    <label for="password"><b>New Password</b></label>
                    <input type="password" class="form-control" id="inp-newPassword" placeholder="Enter New Password"
                        name="password" required>
                    <i class="fa-solid fa-eye-slash" id="btn-newPassword"></i>
                </div>
                <button onclick="changePassword()" class="mt-4 btn-css w-100" style="background-color: #c59d5f">Đổi mật khẩu</button>
            </div>
        </div>
    `
    document.getElementById("login-form").innerHTML = renderForm;
}
onloadForm();

const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const inpNewPassword = document.getElementById("inp-newPassword");
const btnNewPassword = document.getElementById("btn-newPassword");

document.addEventListener("keydown", function (e) {
    if (e.keyCode == "13") {
        changePassword();
    }
})

function changePassword() {
    let listUserRegister = JSON.parse(localStorage.getItem("listUserRegister"));
    for (let i = 0; i < listUserRegister.length; i++) {
        if (listUserRegister[i].email == inpEmail.value && listUserRegister[i].password == inpPassword.value) {
            listUserRegister[i].password = inpNewPassword.value;
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            console.log("oke");
            swal("Bạn đã thay đổi mật khẩu thành công!", "", "success")
                .then(() => {
                    window.location.href = "index.html";
                })
            break;
        } else {
            console.log("erorr");
            swal("Email hoặc mật khẩu bạn nhập không đúng!", "", "error");
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

btnNewPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpNewPassword.setAttribute('type',
        inpNewPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})