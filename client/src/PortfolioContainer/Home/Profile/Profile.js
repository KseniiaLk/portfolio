import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/kseniia-lukanina/">
                <i className=" fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/KseniiaLk">
                <i className=" fa fa-github-square"></i>
              </a>
              <a href="https://instagram.com/kseny_lk?igshid=MTIyMzRjYmRlZg==">
                <i className=" fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, my name is{" "}
              <span className="highlighted-text">Kseniia Lukanina</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer",
                    1000,
                    "Junior Developer💻",
                    1000,
                    "React, Vue, Typescript💭",
                    1000,
                  ]}
                />
              </h2>
              <span className="profile-role-tagline">
                I am a curious and enthusiastic junior JavaScript developer from
                Stockholm.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="KseniiaLk.pdf" download="KseniiaLk.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
