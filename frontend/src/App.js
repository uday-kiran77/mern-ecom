import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "./App.css";
import { useSelector } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div>
        <header className="flex justify-between bg-gray-900 text-white p-4 items-center">
          <div className="font-mono font-medium text-2xl">Service store</div>
          <div className="flex gap-6 font-medium capitalize">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <div className="group">
                  <p className="cursor-pointer">Admin</p>
                  <ul className="hidden group-hover:block absolute r-10">
                    <li className="flex flex-col bg-gray-900 p-3 gap-3 -ml-8 mt-2">
                      <Link to="/orders">Orders</Link>
                      <Link to="/products">Products</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="min-h-[90vh]">
          <div className="max-w-screen-lg mx-auto p-4">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer aria-label="Site Footer" class="bg-gray-900 text-gray-100">
          <div class="w-full  mx-auto  px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2">
              <div class="py-8 lg:py-16 lg:pe-16">
                <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p class="font-medium text-gray-100">Services</p>

                    <nav aria-label="Footer Navigation - Services" class="mt-6">
                      <ul class="space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            1on1 Coaching
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            Company Review
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            Accounts Review
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            HR Consulting
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            SEO Optimisation
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div>
                    <p class="font-medium text-gray-100">Company</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                      <ul class="space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            About
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            Meet the Team
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            Accounts Review
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div>
                    <p class="font-medium text-gray-100">Helpful Links</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                      <ul class="space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            Contact
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100transition hover:opacity-75"
                          >
                            FAQs
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-100 transition hover:opacity-75"
                          >
                            Live Chat
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="mt-8 border-t border-gray-100 pt-8">
                  <nav aria-label="Footer Navigation - Support">
                    <ul class="flex flex-wrap gap-4 text-xs">
                      <li>
                        <a
                          href="#"
                          class="text-gray-100 transition hover:opacity-75"
                        >
                          Terms & Conditions
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          class="text-gray-100 transition hover:opacity-75"
                        >
                          Privacy Policy
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          class="text-gray-100 transition hover:opacity-75"
                        >
                          Cookies
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <p class="mt-8 text-xs text-gray-100">
                    &copy; 2022. Company Name. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
