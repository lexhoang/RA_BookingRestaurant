function onloadForm() {
    let contentForm = document.getElementById("register-form");
    let renderForm = `
        <div class="bg-form col-lg-4 col-md-6 col-sm-10 mx-auto p-5">
            <div class="btn-group w-100">
            <a href="registerForm.html" class="btn btn-danger">SIGN UP</a>

            <a href="loginForm.html" class="btn btn-dark">LOGIN</a>
            </div>
            <h3 class="text-center text-light mt-5">FORM REGISTER</h3>
            <hr>
            <div class="form-group">
                <label for="email"><b>Email</b></label>
                <div id="noteEmail"></div>
                <input type="text" class="form-control" id="inp-email" placeholder="Enter Email" name="email"
                    onchange="checkEmail()" required>
            </div>

            <div class="form-group mt-4">
                <label for="password"><b>Password</b></label>
                <div id="notePassword"></div>
                <input type="password" class="form-control" id="inp-password" placeholder="Enter Password"
                    name="password" required onchange="checkPassword()">
                <i class="fa-solid fa-eye-slash" id="btn-password"></i>
            </div>

            <div class="form-group">
                <label for="confirmPassword"><b>Repeat Password</b></label>
                <div id="noteConfirmPassword"></div>
                <input type="password" id="inp-confirmPassword" class="form-control" placeholder="Confirm Password"
                    name="confirmPassword" onchange="checkConfirmPassword()" required>
                <i class="fa-solid fa-eye-slash" id="btn-confirmPassword"></i>
            </div>
            <button id="btn-submit" class="mt-4 btn-css w-100">Register</button>
        </div>
    `
    contentForm.innerHTML += renderForm;
}
onloadForm();


const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const inpConfirmPassword = document.getElementById("inp-confirmPassword");
const btnConfirmPassword = document.getElementById("btn-confirmPassword");
const btnSubmit = document.getElementById("btn-submit");
const noteEmail = document.getElementById("noteEmail");
const notePassword = document.getElementById("notePassword");
const noteConfirmPassword = document.getElementById("noteConfirmPassword");


//NÚT SUBMIT
let signUp = document.getElementById("btn-submit");
signUp.addEventListener("click", function () {
    if (checkForm()) {
        let objectUser = {
            id: (new Date()).getTime(),
            email: inpEmail.value,
            password: inpPassword.value,
            status: "Đang hoạt động"
        }
        let check = false;
        let listUserRegister = localStorage.getItem("listUserRegister");

        if (listUserRegister == null) {
            listUserRegister = [];
            listUserRegister.push(objectUser);
            // console.log(listUserRegister);
            // console.log(JSON.stringify(listUserRegister));
            localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
            console.log("Đăng ký thành công");
            swal("Tạo tài khoản thành công", "Hãy đăng nhập để sử dụng dịch vụ của chúng tôi", "success")
                .then(() => {
                    window.location.href = "loginForm.html"
                })
        } else {
            listUserRegister = JSON.parse(listUserRegister);
            for (let i = 0; i < listUserRegister.length; i++) {
                if (listUserRegister[i].email == inpEmail.value) {
                    check = false;
                    break;
                } else {
                    check = true;
                }
            } if (check == true) {
                listUserRegister.push(objectUser);
                localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
                console.log("Đăng ký thành công");
                swal("Tạo tài khoản thành công", "Hãy đăng nhập để sử dụng dịch vụ của chúng tôi", "success")
                    .then(() => {
                        window.location.href = "loginForm.html"
                    })
            } else {
                console.log("Trùng email");
                swal("Tạo tài khoản đã tồn tại", "", "error");
            }
        }
    }

})


////////////        CHECK FORM        //////////////
function checkForm() {
    if (checkEmail() == true && checkPassword() == true && checkConfirmPassword() == true) {
        return true;
    } else {
        return false;
    }
}

//       KIỂM TRA EMAIL
function checkEmail() {
    const FormatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(FormatEmail.test(String(inpEmail.value).toLowerCase()))) {
        noteEmail.innerHTML = "Email không định dạng";
        noteEmail.style.color = "red";
        console.log("Email không định dạng");
        return false;
    } else {
        noteEmail.innerHTML = "Địa chỉ email hợp lệ";
        noteEmail.style.color = "rgb(0, 255, 0)";
    }
    return true
}

//       KIỂM TRA PASSWORD
function checkPassword() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!(inpPassword.value.match(decimal))) {
        console.log("Password không hợp lệ");
        notePassword.innerHTML = "Password không hợp lệ";
        notePassword.style.color = "red"
        return false;
    } else {
        notePassword.innerHTML = "Password hợp lệ";
        notePassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}

//       KIỂM TRA CONFIRM PASSWORD
function checkConfirmPassword() {
    if (inpConfirmPassword.value !== inpPassword.value) {
        console.log("Confirm Password không hợp lệ");
        noteConfirmPassword.innerHTML = "Confirm Password không hợp lệ";
        noteConfirmPassword.style.color = "red"
        return false;
    } else {
        noteConfirmPassword.innerHTML = "Confirm Password hợp lệ";
        noteConfirmPassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}



//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})

btnConfirmPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpConfirmPassword.setAttribute('type',
        inpConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})