export function trustpilotScoreStars() {
    document.querySelectorAll(".trustpilot__score__stars").forEach((item) => {
        item.innerHTML += `
        <img
        src="../../icons/score-star.svg"
        alt="score-star"
        class="trustpilot__score__star"
    />
    <img
        src="../../icons/score-star.svg"
        alt="score-star"
        class="trustpilot__score__star"
    />
    <img
        src="../../icons/score-star.svg"
        alt="score-star"
        class="trustpilot__score__star"
    />
    <img
        src="../../icons/score-star.svg"
        alt="score-star"
        class="trustpilot__score__star"
    />
    <img
        src="../../icons/score-star.svg"
        alt="score-star"
        class="trustpilot__score__star"
    />
        `;
    });
}
