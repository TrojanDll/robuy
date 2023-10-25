export function latestBuyItems() {
    document.querySelectorAll(".latest-buy-ui__items").forEach((item) => {
        item.innerHTML += `
        <div class="latest-buy-ui__list__item">
        <img
            src="../../icons/buyer.svg"
            alt="buyer"
            class="latest-buy-ui__list__item-img"
        />
    
        <div class="latest-buy-ui__list__item-text">
            <div class="latest-buy-ui__list__item-name">
                Abs...te
            </div>
            <div class="latest-buy-ui__list__item-price">
                450 R$
            </div>
        </div>
    </div>
    
    <div class="latest-buy-ui__list__item">
        <img
            src="../../icons/buyer.svg"
            alt="buyer"
            class="latest-buy-ui__list__item-img"
        />
    
        <div class="latest-buy-ui__list__item-text">
            <div class="latest-buy-ui__list__item-name">
                Abs...te
            </div>
            <div class="latest-buy-ui__list__item-price">
                450 R$
            </div>
        </div>
    </div>
    
    <div class="latest-buy-ui__list__item">
        <img
            src="../../icons/buyer.svg"
            alt="buyer"
            class="latest-buy-ui__list__item-img"
        />
    
        <div class="latest-buy-ui__list__item-text">
            <div class="latest-buy-ui__list__item-name">
                Abs...te
            </div>
            <div class="latest-buy-ui__list__item-price">
                450 R$
            </div>
        </div>
    </div>
    
    <div class="latest-buy-ui__list__item">
        <img
            src="../../icons/buyer.svg"
            alt="buyer"
            class="latest-buy-ui__list__item-img"
        />
    
        <div class="latest-buy-ui__list__item-text">
            <div class="latest-buy-ui__list__item-name">
                Abs...te
            </div>
            <div class="latest-buy-ui__list__item-price">
                450 R$
            </div>
        </div>
    </div>
        `;
    });
}
