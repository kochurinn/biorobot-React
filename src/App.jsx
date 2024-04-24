import { useState } from "react"
import Wallet from "./Wallet"
import Market from "./Market"
import Warehouse from "./Warehouse"
import Factory from "./Factory"

function App() {

  const [coinsCount, setCoinsCount] = useState(0)
  const [coinsX5, setCoinsX5] = useState(false)
  const [quantity, setQuantity] = useState([0, 0, 0])

  const onAddCoins = (count) => {
    const newCount = coinsCount + count
    if (newCount > 100) {
      alert('Ошибка. Монет не может быть больше 100')
      setCoinsCount(100)
    } else if (newCount < 0) {
      alert('Ошибка. Монет не может стать меньше 0')
      setCoinsCount(0)
    } else {
      setCoinsCount(newCount)
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">

          <h2>Кошелёк криптовалют</h2>
          <Wallet
            onAddCoins={() => onAddCoins(coinsX5 ? 5 : 1)}
            changeFlagStatus={() => setCoinsX5(!coinsX5)}
            coinsCount={coinsCount}
          />

          <h2>Рынок комплектующих</h2>
          <Market 
            coinsCount={coinsCount}
            onCoinsChange={(count) => onAddCoins(-count)}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <h2>Склад</h2>
          <Warehouse 
            quantity={quantity}
            setQuantity={setQuantity}
            onCoinsChange={(count) => onAddCoins(count)}
          />

          <h2>Производство</h2>
          <Factory 
            quantity={quantity}
          />
          
        </div>
      </div>
    </div>
  )
}

export default App
