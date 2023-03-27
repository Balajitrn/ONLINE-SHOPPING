import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ConsolidatedSales.css';

const ConsolidatedSales = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchConsolidatedSales();
  }, []);

  const fetchConsolidatedSales = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/classified-products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching consolidated sales:', error);
    }
  };

  return (
    <div className="report-container">
      <h1 className="report-title">Consolidated Sales</h1>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Aggregated Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>${item.aggregatedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsolidatedSales;
