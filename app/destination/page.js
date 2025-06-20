"use client";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetCard } from "@/components/destination/PlanetCard";

const planets = [
  {
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [customWishlistItems, setCustomWishlistItems] = useState([]);
  let isPlanetSelected = false;
  let numberOfPlanets = 0;
  const totalWishlistItems =
    selectedPlanets.length + customWishlistItems.length;

  const onAddOrRemovePlanet = (name, index) => {
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    setSelectedPlanets((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((planet) => planet !== name);
      } else {
        return [...prevSelected, name];
      }
    });
    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  const onAddCustomWishlistItem = ({ name, thumbnail }) => {
    setCustomWishlistItems((prevCustomItems) => {
      // Optional: Prevent adding duplicates for custom items (by name and thumbnail)
      const isAlreadyAdded = prevCustomItems.some(
        (item) => item.name === name && item.thumbnail === thumbnail
      );
      if (isAlreadyAdded) {
        alert(
          `"${name}" with this thumbnail is already in your custom wishlist!`
        );
        return prevCustomItems;
      }
      return [...prevCustomItems, { name, thumbnail }];
    });
  };

  const removeFromWishlist = (nameToRemove, isCustom = false) => {
    if (isCustom) {
      // For custom items, we might need to filter by name AND thumbnail if names can be repeated
      // For simplicity here, we'll just filter by name. If names can be repeated with different images,
      // you'd need to pass a more unique identifier.
      setCustomWishlistItems((prevCustomItems) =>
        prevCustomItems.filter((item) => item.name !== nameToRemove)
      );
    } else {
      // For predefined planets, filter from selectedPlanets
      setSelectedPlanets((prevSelected) =>
        prevSelected.filter((name) => name !== nameToRemove)
      );
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          <p>
            {selectedPlanets.length === 0
              ? "No planets in wishlist :("
              : `You have ${selectedPlanets.length} planet(s) in your wishlist`}
          </p>

          {/* <b>List coming soon after lesson 3!</b> */}

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          <AddWishlistItem onAddWishlistItem={onAddCustomWishlistItem} />
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {totalWishlistItems > 0 && (
            <>
              <h3>Your current wishlist</h3>
              <div className={styles.wishlistList}>
                {/* Map over predefined selected planets */}
                {selectedPlanets.map((planetName) => {
                  const planetDetails = planets.find(
                    (planet) => planet.name === planetName
                  );
                  return (
                    <PlanetWishlistItem
                      key={planetName} // Key using planet name
                      name={planetDetails.name}
                      onRemove={() =>
                        removeFromWishlist(planetDetails.name, false)
                      } // Indicate it's not custom
                      thumbnail={planetDetails.thumbnail}
                    />
                  );
                })}

                {/* Map over custom wishlist items */}
                {customWishlistItems.map((item) => (
                  <PlanetWishlistItem
                    key={`custom-${item.name}-${item.thumbnail}`} // More unique key for custom items
                    name={item.name}
                    onRemove={() => removeFromWishlist(item.name, true)} // Indicate it's custom
                    thumbnail={item.thumbnail}
                  />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => {
            const isSelected = selectedPlanets.includes(planet.name);
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isSelected}
                onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
