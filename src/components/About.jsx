import React from "react";
import styles from "../styles/Home.module.css"
import cliff from "../images/cliff.png"
import photo from "../images/photo.jpg"

function About() {
  return (
    <div className="about">
      <div class={styles.top}>
    <h2 class={styles.infodescription}>ABOUT</h2>
  </div>
          <div className={styles.major}>
          <div className={styles.left}>
          <img
              class={styles.photo}
              src={photo}
              alt=""
            />
            <p class={styles.infodescription3}>
            I am a Sophomore at the University of California, Berkeley, intending Computer Science. I am originally from Vancouver!
            </p>
      </div>
      <div className={styles.right}>
          <img
              class={styles.cliff}
              src={cliff}
              alt=""
            />
            <p class={styles.infodescription3}>
            I enjoy going outdoors, painting, <br/>
exploring cafes, traveling, doing <br/>
calligraphy, dancing, and hiking.

            </p>
      </div>
        </div>
     </div>
    // </div>
  );
}

export default About;