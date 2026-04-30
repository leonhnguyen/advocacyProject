import "../stylingPages/Solutions.css";

export default function Solutions() {
  return(
    <div className="solutions-page">

      <section className="solutions-hero">
        <h1>Convergence</h1>
        <h4>Approaching a Finite Solution</h4>
      </section>

      <section className="section purpose">
        <div className="content">
          <h2>ADJECTIVE</h2>
          <p>
            Mental health assessments are often avoided due to fear of being
            seen as an unfit parent or being responsible for a child's negative development.
            These solutions aim to reduce that fear by normalizing awareness and
            creating systems of support that recognizes parents as an individual, pushing
            for a gardener approach; creating a safe space for children to blossom. 
          </p>

        </div>
      </section>

      <section className="section alt">
        <div className="content">
          <h2>Mental Health Education in Schools</h2>

          <p>
            Courses relating to physical health and human anatomy is taught in public K-12 education systems.
            Introducing mental health education in K-12 systems allows students to understand and regulate emotions early, making
            sense of their own confusion. Mental health is a shared experience, so allow students to connect on that level.
          </p>

          <div className="ideas">
            <div className="idea-row">
              <span className="idea-label">01</span>
              <p>Teach awareness and regulation</p>
            </div>

            <div className="idea-row">
              <span className="idea-label">02</span>
              <p>Normalizing conversations about mental/emotional health</p>
            </div>

            <div className="idea-row">
              <span className="idea-label">03</span>
              <p>Healthy outlets for stress and confusion</p>
            </div>
          </div>

          <p className="impact">
            This can reduce bullying by helping students
            understand their emotions and act on them in a healthy manner
          </p>

        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2>Mental Health Screenings for Households</h2>

          <p>
            Parents often prioritize their families over themselves, ignoring
            their own mental health. Regular mental health screenings can give parents a voice
            and provide support, let their own humanity be expressed. 
            Parents must be given an informative session about what a mental health screening
            is all about. The idea is both parties are fully on board and understanding.
          </p>
          
          <div className="ideas">
            <div className="idea-row">
              <span className="idea-label">01</span>
              <p>Lack of understanding is the root of the problem!</p>
            </div>

            <div className="idea-row">
              <span className="idea-label">02</span>
              <p>Annual mental health screenings for registered households</p>
            </div>

            <div className="idea-row">
              <span className="idea-label">03</span>
              <p>Screenings during hospital visits (independent of patient)</p>
            </div>

            <div className="idea-row">
              <span className="idea-label">04</span>
              <p>Increased awareness of parent stress</p>
            </div>
          </div>

          <p className="impact">
            Supporting parents directly improves the emotional environment at home,
            reducing the trauma that the passing generation inherits.
          </p>
        </div>
      </section>

      <section className="section quote">
        <blockquote>
          Be a gardener: nurture growth, allow development, and allow each flower to blossom at their own pace, in their own way.
        </blockquote>
      </section>

    </div>
  );
}