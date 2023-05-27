import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import { SERVER_BASE_URL } from "../utils/constants";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}

      <div className="flex gap-6 items-center justify-center m-8 flex-wrap">
        <div className="">
          <form onSubmit={submitHandler} className="flex gap-3">
            <input
              placeholder="Search Product"
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="border border-gray-400 p-2 rounded-md"
            />
            <button
              type="submit"
              className="border border-gray-400 p-2 rounded-md"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-semibold">Sort By</span>
          <select
            name="sortOrder"
            onChange={sortHandler}
            className="border p-2 rounded-md"
          >
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {products.map((product) => (
            <Link
              to={"/product/" + product._id}
              class="group relative block overflow-hidden rounded-lg border shadow-sm"
              key={product._id}
            >
              <img
                src={`${SERVER_BASE_URL}${product.image}`}
                alt=""
                class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div class="relative border border-gray-100 bg-white p-6">
                <span class="whitespace-nowrap bg-gray-800 text-white px-3 py-1.5 text-xs font-medium">
                  {product.category}
                </span>

                <h3 class="mt-4 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>

                <p class="mt-1.5 text-sm text-gray-700">₹ {product.price}</p>

                <form class="mt-4">
                  <button class="block w-full rounded bg-gray-900 text-white p-4 text-sm font-medium  text-center">
                    View Product
                  </button>
                </form>
              </div>
            </Link>
            // <li key={product._id}>
            //   <div className="product">
            //     <Link to={"/product/" + product._id}>
            //       <img
            //         className="product-image"
            //         src={product.image}
            //         alt="product"
            //       />
            //     </Link>
            //     <div className="product-name">
            //       <Link to={"/product/" + product._id}>{product.name}</Link>
            //     </div>
            //     <div className="product-brand">{product.brand}</div>
            //     <div className="product-price">${product.price}</div>
            //     <div className="product-rating">
            //       <Rating
            //         value={product.rating}
            //         text={product.numReviews + " reviews"}
            //       />
            //     </div>
            //   </div>
            // </li>
          ))}
        </div>
      )}
    </>
  );
}
export default HomeScreen;
