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

  const { name, description } = stores;

  return (
    <div id="yomama">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

Store.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string,
};
