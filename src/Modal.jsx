import modalCoin from './assets/modal-coin.svg'

function Modal() {
    return (
        <div className="overlap">
            <div className="modal">
                <div>
                    <img src={modalCoin} alt="" />
                </div>
                <div className="modal__close"></div>
                <div className="modal__title">Количество монет ограничено</div>
                <div className="modal__subtitle">Вы не можете нациганить более 100 монет biorobo</div>
            </div>
        </div>
    )
}

export default Modal