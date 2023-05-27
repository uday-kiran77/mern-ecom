import React from "react";
function CheckoutSteps(props) {
  const Check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  return (
    <div className="flex justify-between max-w-md mx-auto items-end p-4">
      <div
        className={
          props.step1
            ? "font-bold flex flex-col items-center justify-center"
            : ""
        }
      >
        {props.step1 && Check} Signin
      </div>
      <div
        className={
          props.step2
            ? "font-bold flex flex-col items-center justify-center"
            : ""
        }
      >
        {props.step2 && Check}Shipping
      </div>
      <div
        className={
          props.step3
            ? "font-bold flex flex-col items-center justify-center"
            : ""
        }
      >
        {props.step3 && Check} Payment
      </div>
      <div
        className={
          props.step4
            ? "font-bold flex flex-col items-center justify-center"
            : ""
        }
      >
        {props.step4 && Check}Place Order
      </div>
    </div>
  );
}

export default CheckoutSteps;
