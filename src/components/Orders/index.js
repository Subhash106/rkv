import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Button from '../shared/Button';
import { DB, isOffline } from '../shared/utilities';
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
    setOnlineOrders(data);

    const offOrders = await getOfflineOrders();
    setOfflineOrders(offOrders);
  }, []);

  const syncOfflineOrders = async () => {
    const transactionDB = DB.getTransactionDB();
    const offlineOrders = [];
    await transactionDB.iterate((order, key) => {
      offlineOrders.push([key, order]);
    });

    const syncResults = await Promise.all(
      offlineOrders.map(async ([key, order]) => {
        return await fetch('https://basic-react-a8d88-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            ...order
          })
        })
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            console.log(data);
            transactionDB.removeItem(key);
          });
      })
    );

    console.log('syncResults', syncResults);
    const offOrders = await getOfflineOrders();
    setOfflineOrders(offOrders);

    const data = await getOnlineOrders();
    setOnlineOrders(data);
  };

  const offlineTableHeader = () => {
    return (
      <header className="table-header">
        <h2 className="heading-secondary">Offline Orders</h2>
        {!isOffline() && <Button onClick={syncOfflineOrders}>Sync</Button>}
      </header>
    );
  };

  const onlineTableHeader = () => {
    return (
      <header className="table-header">
        <h2 className="heading-secondary">Online Orders</h2>
      </header>
    );
  };

  return (
    <>
      <Header />
      <div className="container orders bg-gray">
        <div className="bg-white" style={{ padding: '2rem', borderRadius: '1.2rem' }}>
          <h1 className="heading-primary">Orders</h1>
          <OrdersTable title={offlineTableHeader()} orders={offlineOrders} />
          <OrdersTable title={onlineTableHeader()} orders={onlineOrders} />
        </div>
      </div>
    </>
  );
};

export default Orders;
