import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SERVER_BASE_URL } from "../utils/constants";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <header class="text-center">
              <h1 class="text-3xl font-bold text-gray-900 ">Your Cart</h1>
            </header>

            <div class="mt-8">
              <ul class="space-y-4">
                {cartItems.map((item) => (
                  <li class="flex items-center gap-4">
                    <img
                      src={`${SERVER_BASE_URL}${item.image}`}
                      alt=""
                      class="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 class="text- xl font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <dl class="mt-0.5 space-y-px text-md text-gray-600">
                        <div>
                          <dt class="inline">Price: </dt>
                          <dd class="inline">₹{item.price}</dd>
                        </div>
                      </dl>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-2">
                      <select
                        class="rounded border appearance-none border-gray-300 py-2  text-base pl-3 pr-10"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>

                      <button
                        class="text-gray-600 transition hover:text-red-600"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <span class="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div class="w-screen max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-lg text-gray-700">
                    <div class="flex justify-between text-md font-medium">
                      <dt>
                        Sub Total ( {cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                        items)
                      </dt>
                      <dd>
                        ₹ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                      </dd>
                    </div>
                  </dl>

                  <div class="flex justify-end">
                    <button
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                      class="block rounded bg-gray-900 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartScreen;
