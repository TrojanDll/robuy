export function modalsBinding() {
    const header = document.querySelector(".header");
    const buyCoins = document.querySelector(".buy-coins");

    const addReviewBtns = document.querySelectorAll(
        ".latest-buy-ui__review__link"
    );
    const purchaseAmountBtns = document.querySelectorAll(
        ".modal__purchase-amount__swicher-item"
    );

    const email = document.querySelector(
        ".modal__dashboard__profile-info__text-email"
    );

    const overlay = document.querySelector(".overlay");
    const allModals = document.querySelectorAll(".modal");
    const allHeaderBtns = document.querySelectorAll(".header__btn");
    const headerLoginBtn = document.querySelector(".header__login-btn");
    const paymentMethodBtns = document.querySelectorAll(
        ".modal__payment-methods__list-item"
    );

    // const myPurchasesBtn = document.querySelector(
    //     ".modal__dashboard__my-purchases__list"
    // );

    const modalSignin = document.querySelector(".modal__signin");
    const modalPromocode = document.querySelector(".modal__promocode");
    const modalRegistration = document.querySelector(".modal__registration");
    const modalAddReview = document.querySelector(".modal__review");
    const modalDashboard = document.querySelector(".modal__dashboard");
    const modalPurchaseAmount = document.querySelector(
        ".modal__purchase-amount"
    );
    const modalUserData = document.querySelector(".modal__user-data");
    const modalPaymentMethods = document.querySelector(
        ".modal__payment-methods"
    );
    const modalCurrentPurchase = document.querySelector(
        ".modal__current-purchase"
    );

    const headerMainBtn = document.querySelector("#header-main");
    const headerReviewsBtn = document.querySelector("#header-reviews");
    const headerSupportBtn = document.querySelector("#header-support");
    const headerPromocodeBtn = document.querySelector("#header-promocode");
    const headerMyPurchasesBtn = document.querySelector("#header-myPurchases");

    const modalClose = document.querySelector(".modal__close");
    // console.log(headerLoginBtn);

    if (window.innerWidth <= 500) {
        if (email.innerHTML.trim().length >= 25) {
            email.innerHTML = email.innerHTML.trim().substr(0, 25) + "...";
        }
    }

    if (window.innerWidth <= 445) {
        if (email.innerHTML.trim().length >= 20) {
            email.innerHTML = email.innerHTML.trim().substr(0, 20) + "...";
        }
    }

    if (window.innerWidth <= 393) {
        if (email.innerHTML.trim().length >= 17) {
            email.innerHTML = email.innerHTML.trim().substr(0, 17) + "...";
        }
    }

    if (window.innerWidth <= 340) {
        if (email.innerHTML.trim().length >= 15) {
            email.innerHTML = email.innerHTML.trim().substr(0, 15) + "...";
        }
    }

    function closeAllModals() {
        allModals.forEach((item) => {
            item.style.display = "none";
        });
        overlay.style.display = "none";
        setTimeout(() => {
            overlay.style.opacity = "0";
        }, 4);
    }

    closeAllModals();

    header.addEventListener("click", (e) => {
        if (e.target.classList.contains("header__links_logged")) {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalDashboard.style.display = "block";
        }
    });

    function toggleVisibilityFromNav(dataName) {
        closeAllModals();

        // allHeaderBtns.forEach((item) => {
        //     item.classList.remove("header__btn_active");
        // });

        if (dataName == "main") {
            allHeaderBtns.forEach((item) => {
                item.classList.remove("header__btn_active");
                headerMainBtn.classList.add("header__btn_active");
            });
            overlay.style.display = "none";
            setTimeout(() => {
                overlay.style.opacity = "0";
            }, 4);
        }

        if (dataName == "myPurchases") {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalDashboard.style.display = "block";
            // headerMyPurchasesBtn.classList.add("header__btn_active");
            // headerMainBtn.classList.add("header__btn_active");
        }

        if (dataName == "promocode") {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalPromocode.style.display = "block";
            // headerPromocodeBtn.classList.add("header__btn_active");
            // headerMainBtn.classList.add("header__btn_active");
        }

        if (dataName == "reviews") {
            allHeaderBtns.forEach((item) => {
                item.classList.remove("header__btn_active");
                headerReviewsBtn.classList.add("header__btn_active");
            });
            overlay.style.display = "none";
            setTimeout(() => {
                overlay.style.opacity = "0";
            }, 4);
        }

        // if (dataName == "support") {
        //     headerSupportBtn.classList.add("header__btn_active");
        // }
    }

    allHeaderBtns.forEach((item) => {
        item.addEventListener("click", (e) => {
            const dataName = e.currentTarget.dataset.headerbtn;

            toggleVisibilityFromNav(dataName);
        });
    });

    overlay.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal__close") ||
            e.target.classList.contains("overlay")
        ) {
            closeAllModals();
        }
    });

    header.addEventListener("click", (e) => {
        if (e.target.classList.contains("header__login-btn")) {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalSignin.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
        }
    });

    modalSignin.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__signin__next-link")) {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalSignin.style.display = "none";
            modalRegistration.style.display = "block";
        }
    });

    modalRegistration.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__registration__next-link")) {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalRegistration.style.display = "none";
            modalSignin.style.display = "block";
        }
    });

    addReviewBtns.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalAddReview.style.display = "block";
        });
    });

    function toggleAmount() {
        document
            .querySelectorAll(".modal__purchase-amount__swicher-item")
            .forEach((item) => {
                item.classList.toggle(
                    "modal__purchase-amount__swicher-item_cheked"
                );
            });
    }

    if (buyCoins) {
        buyCoins.addEventListener("click", (e) => {
            if (
                e.target.classList.contains(
                    "modal__purchase-amount__swicher-item"
                )
            ) {
                toggleAmount();
            }

            if (e.target.classList.contains("discount-ui-btn")) {
                overlay.style.display = "block";
                setTimeout(() => {
                    overlay.style.opacity = "1";
                }, 4);
                modalSignin.style.display = "block";
            }

            if (
                e.target.classList.contains("platform-ui__next-block__button")
            ) {
                overlay.style.display = "block";
                setTimeout(() => {
                    overlay.style.opacity = "1";
                }, 4);
                modalPurchaseAmount.style.display = "block";
            }
        });

        function togglePlan(e) {
            purchaseAmountBtns.forEach((item) => {
                item.classList.toggle(
                    "modal__purchase-amount__swicher-item_cheked"
                );
            });
        }
    }

    modalPurchaseAmount.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal__purchase-amount__swicher-item")
        ) {
            togglePlan(e);
        }

        if (
            e.target.classList.contains(
                "modal__purchase-amount__continued-promo"
            )
        ) {
            overlay.style.display = "block";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 4);
            modalPurchaseAmount.style.display = "none";
            modalPromocode.style.display = "block";
        }

        if (
            e.target.classList.contains(
                "modal__purchase-amount__continued__btn"
            )
        ) {
            modalPurchaseAmount.style.display = "none";
            modalUserData.style.display = "block";
        }
    });

    modalUserData.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__user-data__next-button")) {
            modalUserData.style.display = "none";
            modalPaymentMethods.style.display = "block";
        }
    });

    function togglePaymentMethod() {}

    modalPaymentMethods.addEventListener("click", (e) => {
        paymentMethodBtns.forEach((item) => {
            item.classList.remove("modal__payment-methods__list-item_cheked");

            if (
                item.getAttribute("data-paymentMethod") ==
                e.target.getAttribute("data-paymentMethod")
            ) {
                item.classList.add("modal__payment-methods__list-item_cheked");
            }
        });

        if (
            e.target.classList.contains("modal__payment-methods__next-button")
        ) {
            modalPaymentMethods.style.display = "none";
            modalCurrentPurchase.style.display = "block";
        }
    });

    modalDashboard.addEventListener("click", (e) => {
        if (
            e.target.classList.contains(
                "modal__dashboard__my-purchases__list__item"
            )
        ) {
            modalDashboard.style.display = "none";
            modalCurrentPurchase.style.display = "block";
        }
    });
}
