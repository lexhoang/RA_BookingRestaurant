function renderFooter() {
        let renderFooter = `
        <footer class="bg-danger text-center text-white mt-5">
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                        <p>Copyright © 2022 <a class="link-footer" href="index.html">King BBQ</a> All right reserved.
                        <a class="link-footer" href="tel:0822103199">Hotline: 0822103199 - King BBQ</a>
                        thành viên thuộc Công ty Cổ Phần Ẩm Thực Mặt Trời Vàng
                        </p>
                        <p>
                        Địa chỉ: Số 1 đường 4, KTT F361, ngõ 32 phố An Dương, Phường Yên Phụ, Quận Tây Hồ, Thành phố Hà Nội,
                        Việt Nam
                        </p>
                        <p>MST: 0108951120</p>
                        <p>
                        <a class="link-footer" href="tel:0822103199">Phone: 0822103199</a>
                        </p>
                        <p>Chính sách bảo mật</p>
                </div>

                <div class="container p-2">
                        <section>
                                <a class="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button"><i
                                        class="fab fa-facebook-f"></i></a>

                                <a class="btn text-white btn-floating m-1" style="background-color: #55acee;" href="#!" role="button"><i
                                        class="fab fa-twitter"></i></a>

                                <a class="btn text-white btn-floating m-1" style="background-color: #dd4b39;" href="#!" role="button"><i
                                        class="fab fa-google"></i></a>

                                <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;" href="#!" role="button"><i
                                        class="fab fa-instagram"></i></a>

                                <a class="btn text-white btn-floating m-1" style="background-color: #0082ca;" href="#!" role="button"><i
                                        class="fab fa-linkedin-in"></i></a>

                                <a class="btn text-white btn-floating m-1" style="background-color: #333333;" href="#!" role="button"><i
                                        class="fab fa-github"></i>
                                </a>
                        </section>
                </div>
        </footer>
    `

        document.getElementById("footer").innerHTML = renderFooter;
}
renderFooter();