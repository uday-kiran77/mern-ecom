import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listOrders, deleteOrder } from "../actions/orderActions";

function OrdersScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = orderDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  };
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Orders</h3>
      </div>
      <hr />
      <div className="order-list">
        {orders.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>TOTAL</th>
                <th>USER</th>
                <th>DELIVERED</th>
                <th>DELIVERED AT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.user.name}</td>
                  <td>{order.isDelivered.toString()}</td>
                  <td>{order.deliveredAt}</td>
                  <td className="flex gap-1">
                    <Link
                      to={"/order/" + order._id}
                      className="button secondary"
                    >
                      Details
                    </Link>{" "}
                    <button
                      type="button"
                      onClick={() => deleteHandler(order)}
                      className="button secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h4>No Orders Found</h4>
          </div>
        )}
      </div>
    </div>
  );
}
export default OrdersScreen;
