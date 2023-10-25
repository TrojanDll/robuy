export function reviewsMiniStars() {
    document
        .querySelectorAll(".reviews-mini__slider__stars")
        .forEach((item) => {
            item.innerHTML += `
        <img
        src="../../icons/reviews-mini-star.svg"
        alt="mini-star"
        class="reviews-mini__slider__star"
    />
    <img
        src="../../icons/reviews-mini-star.svg"
        alt="mini-star"
        class="reviews-mini__slider__star"
    />
    <img
        src="../../icons/reviews-mini-star.svg"
        alt="mini-star"
        class="reviews-mini__slider__star"
    />
    <img
        src="../../icons/reviews-mini-star.svg"
        alt="mini-star"
        class="reviews-mini__slider__star"
    />
    <img
        src="../../icons/reviews-mini-star.svg"
        alt="mini-star"
        class="reviews-mini__slider__star"
    />
        `;
        });
}
