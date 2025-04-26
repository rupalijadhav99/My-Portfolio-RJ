import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h2 className="role">UI DEVELOPER</h2>
        <h1 className="intro-title">
          Hello, my name<br />is Rupali Jadhav
        </h1>
        <p className="intro-desc">
        Highly motivated and detail-oriented UI Developer with 2+ years of
            experience in web development and ReactJS. Proven track record of
            delivering high-quality solutions, with expertise in designing and
            developing responsive, scalable, and maintainable applications.
        </p>
        <div className="buttons">
          <button className="btn-primary">Projects</button>
          <button className="btn-secondary">LinkedIn</button>
        </div>
      </div>
      <div className="home-right">
  <div className="yellow-bg"></div>
  <img src="src/assets/rupaliJ.jpg" alt="Rupali Jadhav" className="profile-img" />
</div>

    </div>
  );
}
