"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");

  // const [thumbnail, onThumbnailChange] = useState(
  //   "/destination/image-europa.png"
  // );
  // TASK - React 1 week 3

  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  const [customPlanetName, setCustomPlanetName] = useState("");

  // 2. Connect the onThumbnailChange to the <select>
  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const handleNameChange = (event) => {
    setCustomPlanetName(event.target.value);
  };

  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
    if (customPlanetName.trim() === "") {
      alert("Please enter a name for your custom planet!");
      return;
    }

    // Call the function passed from the parent (Destinations)
    onAddWishlistItem({
      name: customPlanetName,
      thumbnail: thumbnail,
    });

    // Clear the <input/> field on button press
    setCustomPlanetName("");
    // Optionally reset thumbnail to default or leave as is
    setThumbnail("/destination/image-europa.png");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={customPlanetName}
        onChange={handleNameChange}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={handleThumbnailChange}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
