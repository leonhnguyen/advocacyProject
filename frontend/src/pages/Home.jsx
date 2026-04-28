import { Link } from "react-router-dom";
import "./App.css";

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
        <h2>Parenting Roles</h2>

        <div className="cards">
          
          <div className="card">
            <h3>Carpenter</h3>
            <p>
              A structured approach focused on shaping a child into a particular, desirable adult(ideal outcome).
              It emphasizes control, planning by getting the right skills, reading the right books, believing
              doing the right things. How children are rewarded if a carpenter role is applied. 
              It strips away the point of Childhood: bringing new ideas to the world, new ways of understanding the world.
            </p>
            <ul>
                <li>Envisions a an ideal creation.</li>
                <li>Follows strict plans</li>
                <li>Focuses on outcomes</li>
                <li>Limits creativity</li>
            </ul>
          </div>

          {/* Gardener */}
          <div className="card">
            <h3>Gardener</h3>
            <p>
              A nurturing approach that supports growth without forcing outcomes.
              It allows children to develop naturally in a safe environment.
            </p>
            <ul>
                <li>Adapts to change</li>
                <li>Encourages exploration</li>
                <li>Supports emotional growth</li>
                <li>Embraces unpredictability</li>
                <li>Own pace, own growth</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="navButtons">
        <Link to="/problem" className="btn">
          Explore the Problem
        </Link>

        <Link to="/research" className="btn secondary">
          View Research
        </Link>
      </section>

    </div>
  );
}