import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import './Style.css';

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [showItems, setShowItems] = useState({});

  useEffect(() => {
    const fetchMenus = async () => {
      try {
    
        const response = await axios.get('http://localhost:4000/menus');  
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
        
      }
    };

    fetchMenus();
  }, []);

  const toggleItems = (menuId) => {
    setShowItems((prevShowItems) => ({
      ...prevShowItems,
      [menuId]: !prevShowItems[menuId],
    }));
  };

  return (
    <div className="menu-list">
      <h1>Menu List</h1>
      <div className="menu-categories">
        {menus.map((menu) => (
          <div key={menu.id} className="menu-category">
            <h2 onClick={() => toggleItems(menu.id)}>{menu.name}</h2>
            <p>{menu.description}</p>
            {showItems[menu.id] && (
              <div className="menu-items">
                {menu.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <h4>
                      <Link to={`/menudetail/${menu.id}/items/${item.id}`}>{item.name}</Link>  
                    </h4>
                    <p>{item.description}</p>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
