import { Link } from "react-router-dom";

export default function Problem() {
  return (
    <div>
        <section className="problem-hero">
            <p className="subtitle">
                Harm within families is often unintentional, but it is inherented.
            </p>
        </section>

        <section className="problem-core">
            <blockquote>
                “One doesn't intend harm to cause it.”
            </blockquote>
        </section>

        <section className="problem-section">
        <h2>The Equation:</h2>
        <p>
            Mental health is often shaped within the home, between caregiver and the youth. In many families, from different
            backgrounds, it is not openly discussed or even acknowledged. Patterns of behavior, emotional
            responses, coping strategies, strategies of nurturing, and most importantly,
            trauma can pass from one generation to the next, holding on to stigmas and burden.
            Choosing to ignore it does not mean it is not there, individuals, over time,
            suppress their emotions, making it difficult to recognize, process, or regulate emotions in a healthy manner.
        </p>
        </section>

        <section className="problem-section">
        <h2>Easy to Understand?</h2>
        <p>
            Through their relationships with strangers, friends, loved ones, their behaviors is reflected through their
            upbringing. How they were nurtured, how they were disciplined, how they were supported, and how they were loved 
            or potentially the lack of any of these things, 
            can reflect how they interact with the world and nurture the next generation if they so choose to. But what is
            the difficult aspect is acknowledging that there is trauma, there was harm done, there was accountability and 
            responsibility that needs to be addressed. That is the struggle between human connection. Especially parent and child,
            no one wants to admit they harm their child and no child wants to believe their caregiver harmed them.
        </p>
        </section>

        <div>
            <Link to="/cause">
                <button>The Variables</button>
            </Link>

            <Link to="/home">
                <button>Back Home</button>
            </Link>
        
        </div>

    </div>
  );
}