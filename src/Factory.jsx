import biohand from "./assets/biohand-mini.svg"
import chip from "./assets/chip-mini.svg"
import soul from "./assets/soul-mini.svg"
import frontendMale3 from "./assets/frontend_male_3.svg"
import frontendMale2 from "./assets/frontend_male_2.svg"
import frontendMale1 from "./assets/frontend_male_1.svg"
import frontendFemale3 from "./assets/frontend_female_3.svg"
import frontendFemale2 from "./assets/frontend_female_2.svg"
import frontendFemale1 from "./assets/frontend_female_1.svg"
import designFemale3 from "./assets/design_female_3.svg"
import designFemale2 from "./assets/design_female_2.svg"
import designFemale1 from "./assets/design_female_1.svg"
import designMale3 from "./assets/design_male_3.svg"
import designMale2 from "./assets/design_male_2.svg"
import designMale1 from "./assets/design_male_1.svg"
import { useState } from "react"
import c from "clsx"

function Factory({ quantity, setQuantity, coinsCount, onCoinsChange }) {

    const [active, setActive] = useState([0, 0, 0])
    const [robotKind, setRobotKind] = useState('frontend')
    const [robotGender, setRobotGender] = useState('male')
    const [robotDone, setRobotDone] = useState(false)

    const details = {
        biohand: {
            active: active[0],
            isStock: quantity[0],
            count: 4,
            idx: 0,
            img: biohand
        },
        chip: {
            active: active[1],
            isStock: quantity[1],
            count: 4,
            idx: 1,
            img: chip
        },
        soul: {
            active: active[2],
            isStock: quantity[2],
            count: 1,
            idx: 2,
            img: soul
        },
    }

    const robotImages = {
        frontend: {
            male: {
                notReady: frontendMale1,
                ready: frontendMale2,
                finished: frontendMale3
            },
            female: {
                notReady: frontendFemale1,
                ready: frontendFemale2,
                finished: frontendFemale3
            }
        },
        design: {
            male: {
                notReady: designMale1,
                ready: designMale2,
                finished: designMale3
            },
            female: {
                notReady: designFemale1,
                ready: designFemale2,
                finished: designFemale3
            }
        }
    }

    // const chekingStatus = (name) => {
    //     for (const elem of arrDetails) {
    //         if (elem.title === name) {
    //             while (elem.active) {
    //                 elem.active--
    //                 return `${elem.title}__elem--active`
    //             }
    //             while (elem.isStock) {
    //                 elem.isStock--
    //                 return `${elem.title}__elem--isStock`
    //             }
    //         }
    //     }
    // }

    const changeActiveDetails = (name, cellIndex) => {
        const index = details[name].idx
        const newQuantity = [...quantity]
        const newActive = [...active]
        if (cellIndex < details[name].active) {
            newActive[index]--
            newQuantity[index]++
        } else if (newQuantity[index]) {
            newActive[index]++
            newQuantity[index]--
        }
        setQuantity(newQuantity)
        setActive(newActive)
    }

    const robotStatus = robotDone ? 'finished' :
        Object.values(details).every(d => d.active === d.count) ? 'ready' : 'notReady'

    const changeMissing = () => {
        const remainsBiohand = details.biohand.count - details.biohand.active
        const remainsChip = details.chip.count - details.chip.active
        const remainsSoul = details.soul.count - details.soul.active
        
    }

    return (
        <div className="factory">
            <div className="factory__menu">
                <div className="factory__menu-title">Тип биоробота:</div>
                <div className="factory__menu-checkbox">
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked={robotKind === 'frontend'} onChange={() => setRobotKind('frontend')} />
                        <span>FrontEnd</span>
                    </div>
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked={robotKind === 'design'} onChange={() => setRobotKind('design')} />
                        <span>Design</span>
                    </div>
                </div>
                <div className="factory__menu-title">Стабилизатор:</div>
                <div className="factory__menu-checkbox">
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked={robotGender === 'male'} onChange={() => setRobotGender('male')} />
                        <span>Male</span>
                    </div>
                    <div className="factory__menu-checkbox__elem">
                        <input type="checkbox" checked={robotGender === 'female'} onChange={() => setRobotGender('female')} />
                        <span>Female</span>
                    </div>
                </div>
                <div className="factory__menu-btn">Произвести за 10 монет</div>
            </div>
            <div className="factory__details">
                {['biohand', 'chip', 'soul'].map(key => (
                    <div className="factory__details-elem" key={key}>
                        {Array.from({ length: details[key].count }, (_, index) => (
                            <div
                                key={index}
                                className={c(
                                    `${key}__elem`,
                                    {
                                        [`${key}__elem--active`]: index < details[key].active,
                                        [`${key}__elem--isStock`]: index >= details[key].active && index < details[key].active + details[key].isStock,
                                    }
                                )}
                                onClick={() => changeActiveDetails(key, index)}
                            >
                                <img src={details[key].img} alt="" />
                            </div>
                        ))}
                    </div>
                ))}
                <div className="factory__details-missing">{changeMissing}Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</div>
            </div>
            <div className="factory__biorobot">
                <img src={robotImages[robotKind][robotGender][robotStatus]} alt="" />
            </div>
        </div>
    )
}

export default Factory