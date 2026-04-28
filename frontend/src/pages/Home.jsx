import { Link } from "react-router-dom";
import "../stylingPages/Home.css";

export default function Home() {
    
  return (
    <div className="home-container">

        <section className="hero">
            <h1>A Peaceful Home Allows for a Peaceful Mind</h1>
            <p>
            The ideal belief that our home is meant to be a place where we often need to go to feel safe and at peace, but 
            how well do we understand what one goes through? You can admire a blossomed flower, but you can't ask it to understand you.
            We judge based on the emotions displayed during different social interactions, it is simply what we see.
            The surface level, that is often what we conclude.
            </p>
        </section>

      <section className="concept">
        <h2>PARENTING ROLES</h2>

        <div className="cards">
          
          <div className="card">
            <h3>THE Carpenter</h3>
            <p>
              A structured approach focused on shaping a child into a particular, desirable adult (ideal outcome).
              It emphasizes control, planning by getting the right skills, reading the right books, believing
              doing the right things. How children are rewarded if a carpenter role is applied. 
              It strips away the point of Childhood: bringing new ideas to the world, new ways of understanding the world.
            </p>

            <div className="features">
              <span>Envisions an ideal outcome</span>
              <span>Follows structured plans</span>
              <span>Focuses on results</span>
              <span>Limits creativity</span>
            </div>

          </div>

          <div className="card">
            <h3>A Gardener</h3>
            <p>
              A nurturing approach that supports growth and understand pace.
              It provides a space in which unexpected things can happen, but it encourages
              exploration, freedom, and creativity. 
              To perserve the youth and childhood, but understand the trauma that may follow.
            </p>
            <div className="features">
                <span>Adapts to change</span>
                <span>Encourages exploration</span>
                <span>Supports emotional growth</span>
                <span>Embraces unpredictability</span>
                <span>Own pace, own growth</span>
            </div>
          </div>

        </div>
      </section>

      <section className="navButtons">
        <Link to="/problem" className="btn primary">
          Explore the Problem
        </Link>

        <Link to="/research" className="btn secondary">
          View Research
        </Link>
      </section>

    </div>
  );
}