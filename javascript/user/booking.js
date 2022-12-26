const inpFullName = document.getElementById("inp-fullName");

const inpEmail = document.getElementById("inp-email");
var listUserLogin = JSON.parse(localStorage.getItem("userLogin"));
if (listUserLogin != null) {
    for (let i = 0; i < listUserLogin.length; i++) {
        inpEmail.value = listUserLogin[i].email;
    }
}

const inpPhone = document.getElementById("inp-phone");
const inpDate = document.getElementById("inp-date");
const selectTime = document.getElementById("select-time");
const selectMinutes = document.getElementById("select-minutes");
const inpPeople = document.getElementById("inp-people");
const inpNote = document.getElementById("inp-note");

document.addEventListener("keydown", function (e) {
    if (e.keyCode == "13") {
        bookingClick();
    }
});

function bookingClick() {
    if (listUserLogin != null) {
        if (checkForm() == true) {
            let getListBooking = JSON.parse(localStorage.getItem("listBooking"));
            let createDateTime = new Date().getHours() + ":" + new Date().getMinutes() + " -- " + new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

            let objectBooking = {
                id: (new Date()).getTime(),
                createDateTime: createDateTime,
                name: inpFullName.value,
                email: inpEmail.value,
                phone: inpPhone.value,
                date: inpDate.value,
                time: selectTime.value,
                minutes: selectMinutes.value,
                people: inpPeople.value,
                note: inpNote.value,
            }
            if (getListBooking == null) {
                getListBooking = [];
                getListBooking.push(objectBooking);
                localStorage.setItem("listBooking", JSON.stringify(getListBooking));
                swal("Bạn đặt bàn thành công", "Chúc bạn có một ngày tốt lành!", "success");
                resetForm();
            } else {
                getListBooking.push(objectBooking);
                localStorage.setItem("listBooking", JSON.stringify(getListBooking));
                swal("Bạn đặt bàn thành công", "Chúc bạn có một ngày tốt lành!", "success");
                resetForm();
            }
        }
    } else {
        window.location.href = "loginForm.html"
    }
}


function checkForm() {
    if (inpFullName.value.trim() == "" || inpEmail.value.trim() == "" || inpPhone.value.trim() == "" || inpDate.value.trim() == ""
        || selectTime.value == "NOT" || selectMinutes.value == "NOT"
        || inpPeople.value.trim() == "") {
        swal("Bạn chưa nhập đủ thông tin", "", "error");
        return false;
    }
    return true;
}


function renderDate() {
    let valueInputDate = document.getElementById("inp-date");
    // curDate sẽ lưu trữ thời gian hiện tại
    var curDate = new Date();

    // Lấy ngày hiện tại
    var curDay = curDate.getDate();

    // Lấy tháng hiện tại
    var curMonth = curDate.getMonth() + 1;

    // Lấy năm hiện tại
    var curYear = curDate.getFullYear();
    let date = `${curYear}-${curMonth}-${curDay}`;
    valueInputDate.setAttribute("min", date)
}
renderDate();


function resetForm() {
    inpFullName.value = "";
    inpPhone.value = "";
    inpDate.value = "";
    selectTime.value = "";
    selectMinutes.value = "";
    inpPeople.value = "";
    inpNote.value = "";
}

function checkNumberPeople() {
    if (inpPeople.value > 50 || inpPeople.value <= 0) {
        swal("Số lượng người không hợp lệ", "", "error")
    }
}