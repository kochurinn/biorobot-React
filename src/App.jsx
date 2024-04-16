// import img from './assets/react.svg'
import { useState } from "react" 

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
      <h2>Кошелек криптовалют</h2>
      <div></div>
      <div className="coins">
        <span className="coins__count">{coinsCount}</span> 
        biorobo 
        <span className="coins__word">{coinsWord}</span>
      </div>
      <div className="addCoins">
        <div onClick={onAddCoins} className="addCoins__btn">Нациганить</div>
        <div className="addCoins__checkbox">
          <input onChange={changeFlagStatus} type="checkbox"/>
          <span>Циганить по 5 монет</span>
        </div>
      </div>
    </div>
  )
}

export default App
