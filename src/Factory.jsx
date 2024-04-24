import biohand from "./assets/biohand-mini.svg"
import chip from "./assets/chip-mini.svg"
import soul from "./assets/soul-mini.svg"
import biorobot1 from "./assets/biorobot_1.svg"
import { useState } from "react"

function Factory({ quantity }) {

    const [active, setActive] = useState([2, 0, 0])

    const arrDetails = [
        {
            title: 'biohand',
            active: active[0],
            selected: quantity[0],
        },
        {
            title: 'chip',
            active: active[1],
            selected: quantity[1],
        },
        {
            title: 'soul',
            active: active[2],
            selected: quantity[2],
        },
    ]

    const chekingBiohand = (index) => {
        if (!quantity[0]) {
            return 'hand__elem--outOfStock'
        }
        if (arrDetails[0].active >= index) {
            return 'hand__elem--active'
        }
        return 'hand__elem--selected'
    }

    return (
        <div className="factory">
            <div className="factory__menu">
                <div className="factory__menu-title">Тип биоробота:</div>
                <div className="factory__menu-checkbox">
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked/>
                        <span>FrontEnd</span>
                    </div>
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" />
                        <span>Design</span>
                    </div>
                </div>
                <div className="factory__menu-title">Стабилизатор:</div>
                <div className="factory__menu-checkbox">
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked/>
                        <span>Male</span>
                    </div>
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" />
                        <span>Famale</span>
                    </div>
                </div>
                <div className="factory__menu-btn">Произвести за 10 монет</div>
            </div>
            <div className="factory__details">
                <div className="factory__details-elem hand">
                    {Array.from({length: 4}, (_, index) => (
                        <div key={index} className={`hand__elem ${() => chekingBiohand(index)}`}>
                            <img src={biohand} alt="" />
                        </div>
                    ))}
                </div>
                <div className="factory__details-elem chip">
                    {Array.from({length: 4}, (_, index) => (
                        <div key={index} className="chip__elem chip__elem--outOfStock">
                            <img src={chip} alt="" />
                        </div>
                    ))}
                </div>
                <div className="factory__details-elem soul">
                    {Array.from({length: 1}, (_, index) => (
                        <div key={index} className="soul__elem soul__elem--outOfStock">
                            <img src={soul} alt="" />
                        </div>
                    ))}
                </div>
                <div className="factory__details-missing">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</div>
            </div>
            <div className="factory__biorobot">
                <img src={biorobot1} alt="" />
            </div>
        </div>
    )
}

export default Factory