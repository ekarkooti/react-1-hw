"use client";

import styles from '@/components/destination/destination.module.css';

export const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>{name.toUpperCase()} {isSelected ? "- SELECTED" : ""}</h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={onAddOrRemovePlanet}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};