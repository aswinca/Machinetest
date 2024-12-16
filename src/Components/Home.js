import React from 'react';
import '../assets/menuimg1.jpg';  

function Home() {
  return (
    <div className="home">
    
      <section className="hero">
        <div className="hero-content">
          <h1>Menu</h1>
          <p>
            Please take a look at our menu featuring food, drinks, and brunch. 
            If you'd like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </section>

      <section className="menu-categories">
        <div className="category-btn">
          <button className="menu-category">Food</button>
          <button className="menu-category">Drinks</button>
          <button className="menu-category">Brunch</button>
        </div>
      </section>
      <section className="menu-items">
        <div className="menu-item-content">
     
          <div className="menu-image">
            <img src={require('../assets/menu2.png')} alt="Menu" />
            
            <div className="menu-item-list">
              <div className="item">
            
                <div className="item-details">
                  <h4>Cinnamon Toast Crunch</h4>
                  <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
                  <span>$16</span>
                </div>
              </div>

              <div className="item">
      
                <div className="item-details">
                  <h4>Bar 42 Mary</h4>
                  <p>Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
                  <span>$14</span>
                </div>
              </div>

              <div className="item">
               
                <div className="item-details">
                  <h4>Moet Spritz</h4>
                  <p>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
                  <span>$20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
