import biohand from "./assets/biohand.svg"
import chip from "./assets/chip.svg"
import soul from "./assets/soul.svg"

function Market({ coinsCount }) {

    const arrMarketElem = [
        {
            title: 'Биорука',
            price: 7,
            img: biohand
        },
        {
            title: 'Микрочип',
            price: 5,
            img: chip
        },
        {
            title: 'Душа',
            price: 7,
            img: soul
        }
    ]
        
    const checkingForMoney = (coinsCount, index) => {
        return coinsCount < arrMarketElem[index].price && 'market__elem-btn--noMoney'
    }

    return (
        <div className="market">
            { arrMarketElem.map((elem, index) => 
                <div key={index} className="market__elem">
                    <div className="market__elem-img">
                        <img src={elem.img} alt="Биорука" />
                    </div>
                    <div className="market__elem-title">{elem.title}</div>
                    <div className="market__elem-price">Стоимость: <span>{elem.price}</span> монет</div>
                    <div className={`market__elem-btn ${checkingForMoney(coinsCount, index)}`}>Установить</div>
                </div>
            ) }
        </div>
    )
}

export default Market