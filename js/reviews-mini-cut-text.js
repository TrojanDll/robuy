export function reviewsMiniCutText() {
    document
        .querySelectorAll(".reviews-mini-ui__slider__descr")
        .forEach((item) => {
            // console.log(item.innerText);
            if (item.innerText.length >= 85) {
                item.innerText = item.innerText.substr(0, 85) + "...";
            }
        });
}
