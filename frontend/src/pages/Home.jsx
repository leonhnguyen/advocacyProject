import { Link } from "react-router-dom";
import "../stylingPages/Home.css";

export default function Home() {
    
  return (
    <div className="home-container">

        <section className="hero">
            <h1></h1>
            <h2>Trauma carries on like the family name</h2>
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
              A structured approach focused on shaping a child into a particular, desirable adult (ideal outcome); envisioning
              one's creation and carrying it out.
              It requires planning, control, and putting success on a scale.
              How children can be rewarded if a carpenter role is applied.
              It strips away the point of childhood: bringing new ideas to the world, new ways of understanding the world.
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
              It provides a safe space in which unexpected things can happen; encouraging
              exploration, freedom, and creativity. 
              To perserve the youth and childhood, but allowing them to blossom
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