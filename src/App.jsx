import { useState } from "react"
import Wallet from "./Wallet"
import Market from "./Market"
import Warehouse from "./Warehouse"

function App() {

  const [coinsCount, setCoinsCount] = useState(0)
  const [flagStatus, setFlagStatus] = useState(false)
  const [coinsWord, setCoinsWord] = useState('монет')

  const onAddCoins = () => {
    if (flagStatus === true && coinsCount >= 96 || coinsCount === 100) {
      alert('Ошибка. Монет не может быть больше 100')
      return
    }
    if (coinsCount < 100) {
      flagStatus ? setCoinsCount(coinsCount + 5) : setCoinsCount(coinsCount + 1)
      flagStatus ? changeCoinsWord(coinsCount + 5) : changeCoinsWord(coinsCount + 1)
    }
  }

  const changeFlagStatus = () => {
    flagStatus ? setFlagStatus(false) : setFlagStatus(true)
  }

  const changeCoinsWord = (coinsCount) => {
    const remain = coinsCount % 10
    if (coinsCount >= 5 && coinsCount <= 20) return setCoinsWord('монет')
    if (remain === 0 || remain >= 5) return setCoinsWord('монет')
    if (remain === 1) return setCoinsWord('монета')
    if (remain >= 2 && remain <= 4) return setCoinsWord('монеты')
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">

          <h2>Кошелёк криптовалют</h2>
          <Wallet
            onAddCoins={onAddCoins}
            changeFlagStatus={changeFlagStatus}
            coinsWord={coinsWord}
            coinsCount={coinsCount}
          />

          <h2>Рынок комплектующих</h2>
          <Market 
            coinsCount={coinsCount}
          />

          <h2>Склад</h2>
          <Warehouse />
        </div>
      </div>
    </div>
  )
}

export default App
