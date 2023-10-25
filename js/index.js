import { boxWithCorners } from "./box-with-corners.js";
import { reviewsMiniCutText } from "./reviews-mini-cut-text.js";
import { reviewsMiniStars } from "./reviews-mini-stars.js";
import { trustpilotScoreStars } from "./trustpilot-score-stars.js";
import { modalsBinding } from "./modals-binding.js";
import { questionAccordeon } from "./questions-accordeon.js";
import { buttonEffect } from "./button-effect.js";

window.addEventListener("DOMContentLoaded", () => {
    boxWithCorners();
    reviewsMiniCutText();
    reviewsMiniStars();
    trustpilotScoreStars();
    questionAccordeon();
    buttonEffect();

    modalsBinding();
});
