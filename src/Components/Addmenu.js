import React, { useState } from 'react';
import axios from 'axios';

function AddMenu() {
  const [menu, setMenu] = useState({
    name: '',
    description: '',
    items: []
  });

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setMenu(prevMenu => ({
      ...prevMenu,
      [name]: value
    }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const addItemToMenu = () => {
    if (newItem.name && newItem.description && newItem.price) {
      setMenu(prevMenu => ({
        ...prevMenu,
        items: [...prevMenu.items, newItem]
      }));
      setNewItem({ name: '', description: '', price: '' });
    }
  };

  const handleMenuSubmit = async (e) => {
    e.preventDefault();
    if (menu.name && menu.description) {
      try {
        const response = await axios.post('http://localhost:4000/menu', menu);
        console.log('Menu Created:', response.data);
        alert('Menu Created Successfully!');
        setMenu({ name: '', description: '', items: [] });
      } catch (error) {
        console.error('There was an error creating the menu:', error);
        alert('Please try again later.');
      }
    }
  };

  return (
    <div className="add-menu">
      <h1>Create a New Menu</h1>
      <form onSubmit={handleMenuSubmit}>
        <div className="form-group">
          <label>Menu Name</label>
          <select
            name="name"
            value={menu.name}
            onChange={handleMenuChange}
            required
          >
            <option value="">Select Menu</option>
            <option value="Drinks">Drinks</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>
        <div className="form-group">
          <label>Menu Description</label>
          <textarea
            name="description"
            value={menu.description}
            onChange={handleMenuChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <h3>Add Items to {menu.name}</h3>
          <div className="item-form">
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleItemChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Item Description"
              value={newItem.description}
              onChange={handleItemChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleItemChange}
            />
            <button type="button" onClick={addItemToMenu}>
              Add Item
            </button>
          </div>
        </div>
        <div className="added-items">
          <h4>Items Added:</h4>
          {menu.items.length > 0 ? (
            <ul>
              {menu.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}</strong> - {item.description} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items added yet.</p>
          )}
        </div>

        <button type="submit">Create Menu</button>
      </form>
    </div>
  );
}

export default AddMenu;
