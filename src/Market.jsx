import { elements } from "./constants"

function Market({ coinsCount, onCoinsChange, quantity, setQuantity }) { 
    const checkingForMoney = (marketElem) => {
        return coinsCount < marketElem.buyPrice ? 'market__elem-btn--noMoney' : ''
    }

    const onClickInstall = (marketElem, index) => {
        if (coinsCount >= marketElem.buyPrice) {
            const newQuantity = [...quantity]
            newQuantity[index]++
            setQuantity(newQuantity)
            onCoinsChange(marketElem.buyPrice)
        }
    }

    return (
        <div className="market">
            {elements.map((elem, index) => 
                <div key={index} className="market__elem">
                    <div className="market__elem-img">
                        <img src={elem.img} alt="Биорука" />
                    </div>
                    <div className="market__elem-title">
                        {elem.title}
                    </div>
                    <div className="market__elem-price">
                        Стоимость: <span>{elem.buyPrice}</span> монет
                    </div>
                    <div
                        className={`market__elem-btn ${checkingForMoney(elem)}`}
                        onClick={() => onClickInstall(elem, index)}
                    >
                        Установить
                    </div>
                </div>
            )}
        </div>
    )
}

export default Market