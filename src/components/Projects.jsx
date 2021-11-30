import React from "react";
import styles from "../styles/Home.module.css"
import ants from "../images/Ants.jpg"
import buildabear from "../images/BuildABear.jpg"
import jump61 from "../images/Jump61.jpg"
import scheme from "../images/Scheme.png"
import seawarden from "../images/Sea Warden.jpg"
import stonks from "../images/Stonks.jpg"

function Projects() {
  return (
    <div className="projects">
      <div class={styles.top}>
            <h2 class={styles.infodescription}>PROJECTS</h2>
          </div>
      <div className="row1">
          <div className="column">
          <img
              class={styles.seawarden}
              src={seawarden}
              alt=""
            />
            <p class={styles.infodescription3}>
            Merging the Map and File Manager into a single login, connecting the merged platform to the S3 file storage.
            </p>
      </div>
      <div className="column">
          <img
              class={styles.buildabear}
              src={buildabear}
              alt=""
            />
            <p class={styles.infodescription3}>
            Learning design principles and front-end web development to build a personal website.
            </p>
      </div>
      <div className="column">
          <img
              class={styles.jump61}
              src={jump61}
              alt=""
            />
            <p class={styles.infodescription3}>
            Created an AI that utilizes game trees and alpha-beta pruning to make the best moves. Made a GUI shown above for the game.
            </p>
      </div>
      </div>
      <div className="row2">
      <div className="column">
          <img
              class={styles.ants}
              src={ants}
              alt=""
            />
            <p class={styles.infodescription3}>
            Used object-oriented programming to generate a game that models Plants vs. Zombies.
            </p>
      </div>
      <div className="column">
          <img
              class={styles.stonks}
              src={stonks}
              alt=""
            />
            <p class={styles.infodescription3}>
            Launched a serverless web application that extracts stocks data from Yahoo utilizing the Amazon Web Services toolset.
            </p>
      </div>
      <div className="column">
          <img
              class={styles.scheme}
              src={scheme}
              alt=""
            />
            <p class={styles.infodescription3}>
            Built a Scheme interpreter with Python that takes in code written in Scheme.
            </p>
      </div>
      </div>
        </div>
  );
}

export default Projects;