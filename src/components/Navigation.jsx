import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav>
        <div class="container">
          <Link class="navbar-brand" to="/">
            Cynthia Lan
          </Link>
      
          <div class={styles.navbar}>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/projects">
                  Projects
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/resume" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/resume">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);