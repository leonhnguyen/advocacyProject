import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylingPages/Research.css";

export default function Research() {
    const [active, setActive] = useState(null);

    return (
        <div className="research-page">

            <section className="hero">
                <h1>Research</h1>
                <p>An equation difficult to solve.</p>

            </section>

            <section className="research-section">
                <h2>Why wouldn't it be ethical?</h2>

                <div className="block">
                    <h4>Challenge</h4>
                    <p>
                        Handing mental health requires a lot of willingness from all parties involved.
                        Finding appropriate assessment procedures for parents can be difficult.
                        Confidentiality and autonomy are also factors to consider.
                    </p>
                </div>

                <div className="block">
                    <h4>Evidence</h4>

                    <p>
                        Parents of children with mental health disorders are at higher risk
                        for dealing with their own mental health challenges.
                    </p>

                    <div
                        className="evidence-btn"
                        onClick={() => setActive(active === "parents" ? null : "parents")}
                    >
                        [ Parent Mental Health Risk ]
                    </div>

                    {active === "parents" && (
                        <div className="explanation">
                            According to Stephen J. Molitor and Melissa R. Dvorsky in,
                            “Ethical Considerations for Assessing Parent Mental Health during Child Assessment Services”,
                            one study found that 19% of fathers and 18% of mothers exhibited
                            elevated internalizing symptoms. This suggests that parent mental
                            health is directly connected to child outcomes.
                        </div>
                    )}
                </div>

                <div className="block">
                    <h4>Implication</h4>
                    <p>
                        With a link between parent mental health and children development, the evaluation
                        of parent psychopathology is not a common practice in clinical care.
                    </p>

                     <p>
                        Implications that comes with facing mental health in households.
                        Stigma relating to mental health and the fear of being an unfit parent
                        or blamed for the child's difficulties. Lacking accountability and responsibility, 
                        even if unintentional.
                    </p>

                    <p>
                        This leads to the question: should a child psychological evaluation include an assessment
                        of parent psychopathology?
                    </p>

                    <p>
                        An ethical approach consists of parent's psychopathology being assessed only when there is
                        prior evidence that the screening affects child treatment outcomes. What is being assessed
                        should be specifically related to the development of their children.
                    </p>    
                </div>
            </section>

            <section className="research-section alt">
                <h2>Societal Weight</h2>

                <div className="block">
                    <h4>Reality</h4>
                        <p>
                            With the rise of financial struggles, it leads to an approach in how much parents must work.
                            How their schedule is split and what their focus is on. The idea is to
                            constantly work and work, as if one is running away from something.
                        </p>
                </div>

                <div className="block">
                    <h4>Evidence</h4>

                    <p>
                        “Throughout their lifespan, parents and caregivers often face heightened stressors,
                        including financial strain and economic instability, time demands, concerns over children's
                        health and safety, parental isolation and loneliness”
                    </p>

                    <p>
                        To be in a situation of a parent, is to look beyond oneself. Often times, we get too
                        caught up living and providing for others that the caregivers forget their own health matters too.
                    </p>

                    <div className="evidence-group">
                        <div
                            className="evidence-btn"
                            onClick={() => setActive(active === "money" ? null : "money")}
                        >
                            [ Financial Stress ]
                        </div>

                        <div
                            className="evidence-btn"
                            onClick={() => setActive(active === "cost" ? null : "cost")}
                        >
                            [ Childcare ]
                        </div>

                        <div
                            className="evidence-btn"
                            onClick={() => setActive(active === "hours" ? null : "hours")}
                        >
                            [ Work Hours ]
                        </div>
                    </div>

                    {active === "money" && (
                        <div className="explanation">
                            66% of parents report feeling consumed by financial stress,
                            compared to 39% of other adults.
                        </div>
                    )}

                    {active === "cost" && (
                        <div className="explanation">
                            Child care prices have grown by approximately 26% in the U.S.
                        </div>
                    )}

                    {active === "hours" && (
                        <div className="explanation">
                            Mothers: 20.9 to 26.7 hours/week | Fathers: 39.8 to 41.2 hours/week
                        </div>
                    )}
                </div>

                <div className="block">
                    <h4>Impact</h4>
                    <p>
                        This leads to work-family conflicts, burnout, and guilt. The focus becomes survival,
                        and nurturing becomes secondary. Balance between home and work life becomes increasingly
                        difficult, exposing the mental health of parents and affecting the development of children.
                    </p>
                </div>
            </section>

            <section className="research-section">
                <h2>Inheritance</h2>

                <div className="block">
                    <h4>Cycle</h4>
                    <p>
                        Correlation between parents' mental health and children's development is clear,
                        but the stigma behind it is often overlooked across families, backgrounds, and cultures.
                    </p>
                </div>

                <div className="block">
                    <h4>Evidence</h4>
                    
                    <p>
                        The way behaviors and secrets are kept maintaining order cannot be spoken about or can be
                        seen as disrespect. This takes away a voice and a sense of control.
                    </p>
                    <div
                        className="evidence-btn"
                        onClick={() => setActive(active === "stigma" ? null : "stigma")}
                    >
                        [ Stigma ]
                    </div>

                    {active === "stigma" && (
                        <div className="explanation">
                            “families may strive to keep behaviours or events secret as a way of protecting the family from courtesy stigma”
                        </div>
                    )}

                    <p>
                        This carries on from generation to generation, leaving the next generation to deal with the
                        secrets and maintaining the stigma.
                    </p>
                    <div
                        className="evidence-btn"
                        onClick={() => setActive(active === "generation" ? null : "generation")}
                    >
                        [ Long Lasting ]
                    </div>

                    {active === "generation" && (
                        <div className="explanation">
                            “the fear of sanctions arising from a stigmatised characteristic or act pressures families 
                            into silencing or excluding members deemed responsible for such stigma, 
                            which in turn leaves successive generations to cope with this legacy of secrets about forgotten or hidden family members…”
                        </div>
                    )}


                    <p>
                    The family secret, the shame, and the feeling of necessity to maintain it becomes the issue
                    across generations. The family secret passes down just like the family name.
                    </p>
                    <div
                        className="evidence-btn"
                        onClick={() => setActive(active === "secrets" ? null : "secrets")}
                    >
                        [ Shhhhh ]
                    </div>

                    {active === "secrets" && (
                        <div className="explanation">
                             “the management of family secrets by older generations is a means of 
                             controlling the passage of shameful emotions through the family”
                        </div>
                    )}


                    
                    <p>
                        Pattern of familial mental health across generations.
                    </p>
                    <div
                        className="evidence-btn"
                        onClick={() => setActive(active === "links" ? null : "links")}
                    >
                        [ Correlation? ]
                    </div>

                    {active === "links" && (
                        <div className="explanation">
                             “a grandparent with an anxiety disorder might influence the way their own child views the world. 
                             When that child grows up and becomes a parent, at greater risk of anxiety disorder themselves, 
                             the parent in turn influences the emotional wellbeing of the grandchild"
                        </div>
                    )}

                </div>

                
                <div className="block">
                    <h4>Impact</h4>
                        <p>
                            The mental health struggles of older generations, combined with stigma and secrecy,
                            pass down emotional weight that is not
                            recognized. Development of children is at risk and
                            family relations are fractured. No one wants to feel responsible.
                            
                        </p>
                </div>
            </section>



            <section className="final-cta">

                <div className="equation-build">
                    <span>Ethical</span>
                    <span> + </span>
                    <span>Political</span>
                    <span> + </span>
                    <span>Historical</span>
                </div>

                <br></br>

                <p className="soln-text">
                    Do real solutions exist? 
                </p>

                <Link to="/solution" className="soln-button">
                    Potential Solutions
                </Link>
                </section>

        </div>
    );
}