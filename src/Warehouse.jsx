import { elements } from "./constants"

function Warehouse({ quantity, setQuantity, onCoinsChange }) {

    const checkingAvailability = (quantity) => {
        return quantity === 0 ? 'warehouse__elem-btn--outOfStock' : ''
    }
    
    const onClickSell = (elemWarehouse, index) => {
        const newQuantity = [...quantity]
        if (newQuantity[index] !== 0) {
            newQuantity[index]--
            setQuantity(newQuantity)
            onCoinsChange(elemWarehouse.sellPrice)
        }
    }

    return (
        <div className="warehouse">
            {elements.map((elem, index) => 
                <div key={index} className="warehouse__elem">
                    <div className="warehouse__elem-title">
                        {elem.title}
                    </div>
                    <div className="warehouse__elem-price">
                        Стоимость: {elem.sellPrice} монет
                    </div>
                    <div className="warehouse__elem-amount">
                        {quantity[index]} шт
                    </div>
                    <div
                        className={`warehouse__elem-btn ${checkingAvailability(quantity[index])}`}
                        onClick={() => onClickSell(elem, index)}
                    >
                        Продать
                    </div>
                </div>
            )}
        </div>
    )
}

export default Warehouse