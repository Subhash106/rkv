import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { DB } from '../shared/utilities';
import OrdersTable from './ordersTable';

const Orders = () => {
  const [onlineOrders, setOnlineOrders] = useState([]);
  const [offlineOrders, setOfflineOrders] = useState([]);

  const getOnlineOrders = async () => {
    const orderResponse = await fetch('https://basic-react-a8d88-default-rtdb.firebaseio.com/orders.json');
    const orderData = await orderResponse.json();
    const formatedData = [];

    for (const data in orderData) {
      formatedData.push(orderData[data]);
    }

    return formatedData;
  };

  const getOfflineOrders = async () => {
    const transactionDB = DB.getTransactionDB();
    const offlineOrders = [];
    await transactionDB.iterate(order => {
      offlineOrders.push(order);
    });

    return offlineOrders;
  };

  useEffect(async () => {
    const data = await getOnlineOrders();
    console.log(data);
    setOnlineOrders(data);

    const offOrders = await getOfflineOrders();
    setOfflineOrders(offOrders);
  }, []);

  return (
    <>
      <Header />
      <div className="container orders bg-gray">
        <div className="bg-white" style={{ padding: '2rem', borderRadius: '1.2rem' }}>
          <h1 className="heading-primary">Orders</h1>
          <OrdersTable title="Offline Orders" orders={offlineOrders} />
          <OrdersTable title="Online Orders" orders={onlineOrders} />
        </div>
      </div>
    </>
  );
};

export default Orders;
