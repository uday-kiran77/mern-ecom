import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form
        className="flex flex-col gap-3 max-w-sm border shadow p-4 mx-auto mt-5"
        onSubmit={submitHandler}
      >
        <div>
          <h2 className="text-2xl font-semibold">Shipping Details</h2>
        </div>
        <div>
          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            Shipping Address
          </label>

          <input
            type="text"
            name="address"
            id="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            class="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>

        <div>
          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            City
          </label>

          <input
            type="text"
            name="city"
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
            class="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>

        <div>
          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            Postal Code
          </label>

          <input
            type="text"
            name="postalCode"
            id="postalCode"
            required
            onChange={(e) => setPostalCode(e.target.value)}
            class="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>
        <div>
          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            Country
          </label>

          <input
            type="text"
            name="country"
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
            class="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>

        <button className="bg-gray-900 px-3 py-2 text-white rounded font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
export default ShippingScreen;
