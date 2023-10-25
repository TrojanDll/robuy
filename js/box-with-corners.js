//добавляет уголки там где необходимо

export function boxWithCorners() {
    document.querySelectorAll(".box-with-corners").forEach((item) => {
        item.innerHTML += `
        <img
        src="../../img/pieces/corner_bottom-left.svg"
        alt="bottom-left"
        class="box-with-corners__svg box-with-corners__svg__bottom-left"
    />
    <img
        src="../../img/pieces/corner_bottom-right.svg"
        alt="bottom-right"
        class="box-with-corners__svg box-with-corners__svg__bottom-right"
    />
    <img
        src="../../img/pieces/corner_top-left.svg"
        alt="top-left"
        class="box-with-corners__svg box-with-corners__svg__top-left"
    />
    <img
        src="../../img/pieces/corner_top-right.svg"
        alt="top-right"
        class="box-with-corners__svg box-with-corners__svg__top-right"
    />
        `;
    });
}
