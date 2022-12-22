function renderFooter() {
    let renderFooter = `
    <footer class="bg-light text-center text-white mt-5">
            <div class="container p-4 pb-0">
                <section class="mb-4">
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
                            class="fab fa-github"></i></a>
                </section>
            </div>

            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2022 RESTAURANTS web:
                <a href="https://kingbbq.vn/"
                    style="text-decoration:underline; color:#0082ca; font-weight: bold;">kingbbq.vn</a>
            </div>
    </footer>
    `

    document.getElementById("footer").innerHTML = renderFooter;
}
renderFooter();