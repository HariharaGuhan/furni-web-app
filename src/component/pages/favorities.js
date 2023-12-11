import React from "react";

const Favorites = ({ favorites, productData }) => {
  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="row">
        {favorites.map((favoriteId) => {
          const favoriteItem = productData.find(
            (item) => item.id === favoriteId
          );

          if (favoriteItem) {
            return (
              <div
                key={favoriteItem.id}
                className="col-12 col-md-4 col-lg-3 mb-5"
              >
                <div className="card">
                  <img
                    src={favoriteItem.image}
                    alt={favoriteItem.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{favoriteItem.title}</h5>
                    <p className="card-text">Price: ${favoriteItem.price}</p>
                  </div>
                </div>
              </div>
            );
          }

          return null; // Handle cases where the favorite item is not found in productData
        })}
      </div>
    </div>
  );
};

export default Favorites;
