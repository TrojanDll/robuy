export function questionAccordeon() {
    const chapters = document.querySelectorAll(".questions-ui__faq__chapter");

    chapters.forEach((item) => {
        item.addEventListener("click", (e) => {
            const elemPos = +e.target.dataset.chapternumber;

            chapters[elemPos].classList.toggle(
                "questions-ui__faq__chapter_opened"
            );
        });
    });
}
