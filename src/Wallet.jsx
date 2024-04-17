function Wallet({ coinsCount, coinsWord, onAddCoins, changeFlagStatus }) {
    return (
        <>
            <div></div>
            <div className="coins">
                <span className="coins__count">{coinsCount}</span>
                biorobo
                <span className="coins__word">{coinsWord}</span>
            </div>
            <div className="addCoins">
                <div onClick={onAddCoins} className="addCoins__btn">Нациганить</div>
                <div className="addCoins__checkbox">
                    <input onChange={changeFlagStatus} type="checkbox" />
                    <span>Циганить по 5 монет</span>
                </div>
            </div>
        </>
    )
}

export default Wallet