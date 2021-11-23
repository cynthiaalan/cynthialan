import React from "react";
import styles from "../styles/Home.module.css"

function Home() {
  return (
    <div className="home">
      <div className={styles.major}>
      <div className={styles.right}>
            <img
              class={styles.linkedin}
              src="images/linkedin.jpg"
              alt=""
              width="70%"
              height ="100%"
            />
          </div>
            <div className={styles.left}>
            <h1 class={styles.infodescription}>CYNTHIA LAN</h1>
            <p class = {styles.infodescription2}>
              University of California, Berkeley <br/> Computer Science
              </p>
          </div>
        </div>
        </div>
  );
}

export default Home;