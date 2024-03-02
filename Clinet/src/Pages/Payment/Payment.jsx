import { FaApple, FaGoogle, FaPaypal } from "react-icons/fa";
import pay_img from "../../assets/payment.jpg";
import "./Payment.css";
export default function Payment() {
  return (
    <div className="relative">
      <img className="w-full h-[880px] object-cover " src={pay_img} />
      <div className="w-full px-3 mx-auto pt-44 md:flex-0 shrink-0 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40">
        <div>
        <div className="modal mx-auto">
          <form className="form">
            <div className="payment--options">
              <button name="paypal" type="button">
                <FaPaypal /> Paypal
              </button>
              <button name="apple-pay" type="button">
                <FaApple />
              </button>
              <button name="google-pay" type="button">
                <FaGoogle />
              </button>
            </div>
            <div className="separator">
              <hr className="line" />
              <p>or pay using credit card</p>
              <hr className="line" />
            </div>
            <div className="credit-card-info--form">
              <div className="input_container">
                <label htmlFor="name_field" className="input_label">
                  Card holder full name
                </label>
                <input
                  id="name_field"
                  className="input_field"
                  type="text"
                  name="input-name"
                  title="Input title"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="input_container">
                <label htmlFor="card_number_field" className="input_label">
                  Card Number
                </label>
                <input
                  id="card_number_field"
                  className="input_field"
                  type="number"
                  name="input-name"
                  title="Input title"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="input_container">
                <label htmlFor="expiry_cvv_field" className="input_label">
                  Expiry Date / CVV
                </label>
                <div className="split">
                  <input
                    id="expiry_date_field"
                    className="input_field"
                    type="text"
                    name="expiry-date"
                    title="Expiry Date"
                    placeholder="01/23"
                  />
                  <input
                    id="cvv_field"
                    className="input_field"
                    type="number"
                    name="cvv"
                    title="CVV"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <button className="purchase--btn">Checkout</button>
          </form>
        </div>
       
        
        </div>
      </div>
    </div>
  );
}
