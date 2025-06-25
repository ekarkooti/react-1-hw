"use client"; 

import React from 'react';
import styles from './nasaCollaboration.module.css'; 

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <img src={src} alt={`${roverName} - ${date}`} className={styles.roverImage} />
      <p className={styles.roverDetails}>
        **Rover:** {roverName} <br />
        **Date:** {date}
      </p>
    </div>
  );
};

export default RoverPhoto;