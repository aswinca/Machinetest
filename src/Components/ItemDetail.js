import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';  

const ItemDetail = () => {
  const { menuId, itemId } = useParams();  
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchItemDetails = async () => {
      if (!menuId || !itemId) {
        setError("Menu ID or Item ID is missing in the URL");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:4000/api/menusdetail/${menuId}/item/${itemId}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setError('Failed to load item details.');
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [menuId, itemId]);  

  if (loading) {
    return <p>Loading item details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="item-detail">
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p className="item-description">{item.description}</p>
          <div className="item-info">
            <h4>Price: ${item.price}</h4>
            <h4>Category: {item.category}</h4>
          </div>
        </>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default ItemDetail;
