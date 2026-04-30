import "../stylingPages/Resources.css";

export default function Resources() {
  return (
    <div className="resources-page">

      <section className="hero">
        <h1>The Study</h1>
      </section>

      <section className="sources-list">

        <div className="source-card">
          <h3>Ethical Considerations for Assessing Parent Mental Health</h3>
          <p>Molitor, Stephen J., and Melissa R. Dvorsky (2019)</p>
          <a 
            href="https://doi.org/10.1080/10508422.2018.1482746" 
            target="_blank"
          >
            View Article
          </a>
        </div>

        <div className="source-card">
          <h3>Parents Under Pressure</h3>
          <p>U.S. Surgeon General (2024)</p>
          <a 
            href="#" 
            target="_blank"
          >
            View Report
          </a>
        </div>

        <div className="source-card">
          <h3>Stigma, Shame, and Family Secrets</h3>
          <p>Clark, Eileen et al. (2024)</p>
          <a 
            href="https://doi.org/10.1177/13634593221114751" 
            target="_blank"
          >
            View Article 
          </a>
        </div>

        <div className="source-card">
          <h3>Three Generation Mental Health Study</h3>
          <p>Hancock et al. (2013)</p>
          <a 
            href="https://doi.org/10.1186/1471-244X-13-299" 
            target="_blank"
          >
            View Article 
          </a>
        </div>

        <div className="source-card">
          <h3>The Carpenter vs The Gardener</h3>
          <p>NPR Article</p>
          <a 
            href="https://www.npr.org/2017/12/11/569907638/the-carpenter-vs-the-gardener-two-models-of-modern-parenting" 
            target="_blank"
          >
            View Interview
          </a>
        </div>

      </section>

    </div>
  );
}