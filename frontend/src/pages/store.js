import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Store({ match }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const store = await axios(
        `http://localhost:7777/store/${match.params.id}`
      );
      setStores(store.data);
    };
    fetchStores();
  }, [match.params.id]);

  const { name, description, rating, tags } = stores;

  return (
    <div className="container">
      <h2 className="store-name">{name}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <p>{tags}</p>
    </div>
  );
}

Store.propTypes = {
  match: PropTypes.object
};
