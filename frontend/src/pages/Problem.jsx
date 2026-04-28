import { Link } from "react-router-dom";
import "../stylingPages/Problem.css";
import { useState } from "react";

export default function Problem() {
    //this is for pop up windows
    const [activeModal, setActiveModal] = useState(null);

    return (
        <div className="problem-page">

            <section className="problem-hero">
                <h1>Real Roots</h1>
                <p className="subtitle">
                    Harm within families is often unintentional, but
                </p>
            </section>

            <section className="problem-quote">
                <blockquote>“One need not intend harm to do it.”</blockquote>
            </section>

            <div className="problem-grid">
                <section className="problem-card">
                    <h2>The Equation</h2>
                    <p>
                        Mental health is often shaped within the home, between caregiver and the youth.
                        In many families, from different backgrounds, it is not openly discussed or even acknowledged.
                    </p>

                    <p>
                        Through their relationships with strangers, friends, loved ones, and family, 
                        their behaviors is reflected through their upbringing.
                    </p>

                    <p>
                        How they were nurtured, disciplined, supported, and loved or potentially the lack of it, can
                        reflect how they present themselves, how their character is built.
                    </p>

                    <p>
                        Patterns of behavior, emotional responses, and coping strategies are passed
                        down over time. This creates trauama that can be inherited across generations, holding 
                        on to stigma and burden. 
                    </p>

                </section>

                <section className="problem-card">
                    <h2>Easy to comprehend?</h2>
                    <p>
                        Ignoring it does not mean it is not there. Individuals, over time, subconsciously suppress emotions,
                        making it difficult to recognize or regulate emotions in a healthy manner. We see how this is reflected
                        in the way we interact with the world, but what happens once we become caregivers or nurturers of the next generation?
                    </p>
                    <p>
                        The difficult aspect is acknowledging that there is trauma; that harm was done. 
                        There is often lack of responsibility and accountability.
                    </p>

                    <p>
                        The true struggle between human connection is our lack to understand each other beyond the surface.
                        Neglecting emotions from our upbringing reflects how we often lack empathy and sympathy for others. Suppression in
                        ourselves, we feel uncomfortable when we notice it in others. 
                    </p>

                    <p>
                        Between parent and child, there is resistance:
                        no parent wants to admit there was harm being done, the overbearingness is reflect through
                        the child's (lack of) resilience/rebellious behavior.
                    </p>
                </section>
            </div>

            <div className="equation-section">

                <div className="equation-box-wrapper">

                    <div className="equation-line">
                    <span className="eq-pill" onClick={() => setActiveModal("upbringing")}>
                        Upbringing
                    </span>
                    <div className="eq-arrow">+</div>
                    <span className="eq-pill" onClick={() => setActiveModal("citizenship")}>
                        Citizenship
                    </span>
                    <div className="eq-arrow">+</div>               
                    <span className="eq-pill" onClick={() => setActiveModal("finance")}>
                        Financial Situation
                    </span>
                    </div>

                    <div className="eq-arrow">=</div>

                    <div className="equation-line">
                    <span className="eq-result">Parent / Adult Stress</span>
                    </div>

                </div>
            </div>

            {activeModal && (
                <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    
                    <button className="close-btn" onClick={() => setActiveModal(null)}>
                        ✕
                    </button>

                    {activeModal === "upbringing" && (
                        <>
                        <h2>Upbringing</h2>
                        <hr />
                            
                        <p className="modal-lead">
                            Upbringing shapes how we understand emotions, relationships, and ourselves.
                        </p>

                        <p className="modal-lead">
                            Children learn how to express (or suppress) feelings based on their experiences at home.
                            If emotions are  dismissed, or punished, the struggle of learning to regulate them,
                            these patterns often continue into adulthood without awareness.
                        </p>

                        <p className="modal-lead">
                            Adults become focus on what they are trying to become and often neglect their emotional wellbeing.
                        </p>
                        
                        <p className="modal-lead">
                            Grandparents may not be great parents themselves, and this can be reflected on the parents.
                            Parents learn how to nurture from their own caregivers even if may be unintentional.
                        </p>

                        <p className="modal-lead">
                            To nurture out of fear. 
                        </p>

                        <p className="modal-source">
                            Dr. Anna Marie Medina, GU
                        </p>
                        </>
                    )}

                    {activeModal === "citizenship" && (
                        <>
                        <h2>Citizenship</h2>
                        <p className="modal-lead">
                            Immigration in the United States can create a form of stressors for people trying to make it.
                        </p>

                        <p className="modal-lead">
                            Poor reputation around the world around immigration.
                        </p>

                        <p className="modal-lead">
                            People trying to get away from their past, dealing with current social status, and inhabiting a new society.
                        </p>

                        <p className="modal-lead">
                            Focus on own self, learning to survive, but never learn the sense of nurturing.
                        </p>
                        
                        <p className="modal-source">
                            Dr. Anna Marie Medina, GU
                        </p>
                        
                        </>
                    )}

                    {activeModal === "finance" && (
                        <>
                        <h2>Financial Situation</h2>
                        <p>
                            Stability, area of living, and the idea of being safe is all affected by financial situation.
                        </p>

                        <p className="modal-lead">
                            Financial struggles means spike in parent stress, the focus shifts to surviving. 
                            Parents are then focus on their work, their family's wellbeing, and this can lead to negligence
                            and emotional absence.
                        </p>

                        <p className="modal-lead">
                            In poor areas of living, children can be negatively influenced by its community. The crimes and activities going on
                            around, who the children spend their time with when they're not at home. 
                        </p>

                        <p className="modal-source">
                            Dr. Anna Marie Medina, GU
                        </p>
                        </>
                    )}

                    </div>
                </div>
                )}

            <section className="problem-quote">
                <blockquote>“I think I agonize too much, and I just end up agonizing over that.”</blockquote>
            </section>
        </div>
    );
}