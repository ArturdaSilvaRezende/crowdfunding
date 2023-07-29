import IconCheck from "../../../assets/images/main/icon-check.svg";

const ModalCheckout = () => {
  return (
    <div className="modal-checkout fadeIn">
      <div className="modal-checkout__container">
        <figure className="modal-checkout__check">
          <img src={IconCheck} alt="icon-check" />
        </figure>
        <div className="modal-checkout__description">
          <h1>Thanks for your support!</h1>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button>
            <a href="/">Got it!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCheckout;
