import { useState } from 'react'
import modalCoin from './assets/modal-coin.svg'

function Modal({ modalActive, setModalActive }) {

    const textInModal = [
        {
            coinImg: modalCoin,
            title: 'Количество монет ограничено',
            subtitle: 'Вы не можете нациганить более 100 монет biorobo'
        },
        {
            coinImg: modalCoin,
            title: 'Количество монет ограничено',
            subtitle: 'На вашем счету не может быть монет меньше 0'
        },
        {
            coinImg: '',
            title: `Биоробот произведён`,
            subtitle: `Поздравляем! Вы произвели биоробота`
        }
    ]

    const closeModal = () => {
        setModalActive([false, 0])
    }

    const changeModal = () => {
        if (modalActive[0] === true) {
            if (modalActive[1] === 0) return textInModal[0]
            if (modalActive[1] === 1) return textInModal[1]
            if (modalActive[1] === 2) return textInModal[2]
        }
    }

    const amount = changeModal()

    return (
        <div className={`overlap ${modalActive[0] ? '' : 'overlap--off'}`}>
            <div className="modal">
                <div>
                    <img src={amount ? amount.coinImg : ''} alt="" />
                </div>
                <div
                    className="modal__close"
                    onClick={closeModal}
                ></div>
                <div>
                    <div className="modal__title">{amount ? amount.title : ''}</div>
                    <div className="modal__subtitle">{amount ? amount.subtitle : ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal