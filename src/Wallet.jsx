import coin from "./assets/coin.svg"

function Wallet({ coinsCount, onAddCoins, changeFlagStatus }) {
    const getCoinsWord = () => {
        const remain = coinsCount % 10
        if (coinsCount >= 5 && coinsCount <= 20) return 'монет'
        if (remain === 0 || remain >= 5) return 'монет'
        if (remain === 1) return 'монета'
        if (remain >= 2 && remain <= 4) return 'монеты'
    }
    const coinsWord = getCoinsWord()

    return (
        <>
            <div className="coinImgBlock">
                {Array.from({ length: coinsCount }, (_, index) => 
                    <img className="coinImg" key={index} src={coin} />
                )}
            </div>
            <div className="coins">
                <span className="coins__count">{coinsCount}</span>
                biorobo
                <span className="coins__word">{coinsWord}</span>
            </div>
            <div className="addCoins">
                <div
                    className="addCoins__btn"
                    onClick={onAddCoins}
                >
                    Нациганить
                </div>
                <div className="addCoins__checkbox">
                    <input onChange={changeFlagStatus} type="checkbox" />
                    <span>Циганить по 5 монет</span>
                </div>
            </div>
        </>
    )
}

export default Wallet