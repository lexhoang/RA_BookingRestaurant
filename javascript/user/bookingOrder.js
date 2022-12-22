var getListBooking = JSON.parse(localStorage.getItem("listBooking"));

// HIỆN THỊ DANH SÁCH ĐẶT BÀN
function renderOrder(getListBooking) {
    let listUserLogin = JSON.parse(localStorage.getItem("userLogin"))
    let renderOrder = "";
    if (listUserLogin !== null) {
        for (let i = 0; i < listUserLogin.length; i++) {
            for (let j = 0; j < getListBooking.length; j++) {
                if (listUserLogin[i].email == getListBooking[j].email) {
                    renderOrder += `
                        <div class="card col-12 mx-auto bg-white p-4 mb-5">
                            <div class="card-body cardOrder">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <label>Mã đặt bàn: </label> <span>${getListBooking[j].id}</span>
                                        <hr>
                                        <label>Người đặt bàn:</label> <span>${getListBooking[j].name}</span>
                                        <hr>
                                        <label>Địa chỉ Email:</label> <span>${getListBooking[j].email} </span>
                                        <hr>
                                        <label>Số điện thoại:</label> <span>${getListBooking[j].phone} </span>
                                        <hr>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <label>Ngày đặt bàn:</label> <span>${new Date(getListBooking[j].date).toLocaleDateString()}</span>
                                        <hr>
                                        <label>Giờ đặt bàn:</label> <span>${getListBooking[j].time} giờ - ${getListBooking[j].minutes} phút</span>
                                        <hr>
                                        <label>Số lượng người:</label> <span>${getListBooking[j].people}</span>
                                        <hr>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 col-md-12 mb-3">
                                        <label>Ghi chú:</label> <span>${getListBooking[j].note}</span>
                                        <hr>
                                    </div>

                                    <div class="col-lg-4 col-md-12 mt-4">
                                        <button class="btn w-100 btn-css" onclick="deleteBooking(${getListBooking[j].id})" style="background-color:#898989; color:#fff">
                                        HỦY BÀN ĐÃ ĐẶT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                    document.getElementById("bookingOrder").innerHTML = renderOrder;
                } else {
                    document.getElementById("bookingOrder").innerHTML = "";
                }
            }
        }
    }
}
renderOrder(getListBooking);


// XÓA BÀN ĐÃ ĐẶT
function deleteBooking(paramId) {
    let getListBooking = JSON.parse(localStorage.getItem("listBooking"));
    swal({
        title: "Bạn chắc chắn muốn hủy bàn đã đặt?",
        text: "Nếu hủy bàn đã đặt, bạn có thể bạn đặt lại!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                for (let i = 0; i < getListBooking.length; i++) {
                    if (getListBooking[i].id === paramId) {
                        getListBooking.splice(i, 1);
                        localStorage.setItem("listBooking", JSON.stringify(getListBooking));
                        console.log("Xóa bàn có ID:", paramId);
                        renderOrder(getListBooking);
                    }
                }
                swal("Bạn đã hủy bàn thành công!", "", "success");
            } else {
                swal("Bàn của bạn vẫn còn, hãy qua nhà hàng sớm nha!");
            }
        });

    // swal("Bạn chắc chắn muốn hủy đơn hàng đã đặt", "", "error")
    //     .then(() => {
    //         for (let i = 0; i < getListBooking.length; i++) {
    //             if (getListBooking[i].id === paramId) {
    //                 getListBooking.splice(i, 1);
    //                 localStorage.setItem("listBooking", JSON.stringify(getListBooking));
    //                 console.log("Xóa đơn hàng có ID:", paramId);
    //             }
    //             renderOrder(getListBooking);
    //         }
    //     })
}