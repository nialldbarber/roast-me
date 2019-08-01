import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const store = await axios('http://localhost:7777/');
      setStores(store.data);
    };
    fetchStores();
  }, []);

  return (
    <div className="container">
      <h2>Store List</h2>
      <p>Most popular stores</p>
      <section className="cards">
        {stores.map(({ name, _id }) => (
          <div className="card" key={_id}>
            {name}
          </div>
        ))}
      </section>
    </div>
  );
}
