import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <form
        className="flex flex-col gap-3 max-w-sm border shadow p-4 mx-auto mt-5"
        onSubmit={submitHandler}
      >
        <div>
          <h2 className="text-2xl font-semibold">Payment Details</h2>
        </div>

        <div className="flex gap-3 text-lgs my-3">
          <input
            type="radio"
            name="paymentMethod"
            id="paymentMethod"
            value="paypal"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label for="paymentMethod">Paypal</label>
        </div>

        <button className="bg-gray-900 px-3 py-2 text-white rounded font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
export default PaymentScreen;
