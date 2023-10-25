export function buttonEffect() {
    const btns = document.querySelectorAll(".button");
    const purpleBtn = document.querySelectorAll(".latest-buy-ui__review__link");

    btns.forEach((el) => {
        el.addEventListener("click", function (e) {
            let size = Math.max(this.offsetWidth, this.offsetHeight),
                // x = e.offsetX - size / 2,
                // y = e.offsetY - size / 2,
                x = e.offsetX - size / 2,
                y = e.offsetY - size / 2,
                wave = this.querySelector(".wave");

            // Create an element if it doesn't exist
            if (!wave) {
                wave = document.createElement("span");
                wave.className = "wave";
            }
            wave.style.cssText = `width:${size}px; height:${size}px; top:${y}px; left:${x}px`;
            this.appendChild(wave);
        });
    });

    purpleBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
            let size = Math.max(this.offsetWidth, this.offsetHeight),
                // x = e.offsetX - size / 2,
                // y = e.offsetY - size / 2,
                x = e.offsetX - size / 2,
                y = e.offsetY - size / 2,
                wave = this.querySelector(".wave_purple");

            // Create an element if it doesn't exist
            if (!wave) {
                wave = document.createElement("span");
                wave.className = "wave_purple";
            }
            wave.style.cssText = `width:${size}px; height:${size}px; top:${y}px; left:${x}px`;
            this.appendChild(wave);
        });
    });
}
