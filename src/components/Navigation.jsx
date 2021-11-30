import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
function Navigation(props) {
  return (
    <div className={styles.navigation}>
          <div class={styles.navbar}>
            <ul class={styles.navlinks}>
                <Link class={styles.navlink} to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              
                <Link class={styles.navlink} to="/about">
                  About
                </Link>
              
                <Link class={styles.navlink} to="/projects">
                  Projects
                </Link>
                <Link class={styles.navlink} to="/resume">
                  Resume
                </Link>
            </ul>
          </div>
        </div>
  );
}

export default withRouter(Navigation);