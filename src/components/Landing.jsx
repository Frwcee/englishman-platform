import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Assets / Icons ---
// Using simple unicode or SVGs for luxury feel. 
// Ideally we'd use a library like Lucide or Heroicons, but I'll stick to SVGs for zero-dep where possible or text.

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// --- Sub-Components ---

const Navbar = ({ onStart }) => (
    <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '24px 0',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.03)'
    }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                English<span className="text-gradient">Man</span>
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                <a href="#features" style={{ fontSize: '0.95rem', fontWeight: 500 }}>Features</a>
                <a href="#pricing" style={{ fontSize: '0.95rem', fontWeight: 500 }}>Pricing</a>
                <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }} onClick={onStart}>
                    Start Free
                </button>
            </div>
        </div>
    </nav>
);

const HeroSection = ({ onStart }) => (
    <section className="section" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center', overflow: 'hidden' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(13, 71, 161, 0.1)',
                    color: 'var(--primary)',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '24px'
                }}>
                    ✨ The Future of English Fluency
                </div>
                <h1 style={{ marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px' }}>
                    Speak English with <br />
                    <span className="text-gradient">Unshakable Confidence</span>
                </h1>
                <p style={{ fontSize: '1.35rem', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.6 }}>
                    The world's first AI-powered immersion platform. No boring grammar.
                    Just real conversations, real-time feedback, and rapid fluency.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
                    <button className="btn btn-primary" onClick={onStart}>
                        Start Speaking Now
                    </button>
                    <button className="btn btn-secondary" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                        How it Works
                    </button>
                </div>
            </motion.div>

            {/* Dashboard Mockup / Visual */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    position: 'relative',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(0,0,0,0.08)'
                }}
            >
                <div style={{ background: '#fff', padding: '20px', borderBottom: '1px solid #eee', display: 'flex', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ background: '#F8F9FA', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at 50% 50%, rgba(13, 71, 161, 0.05) 0%, transparent 60%)'
                    }} />
                    {/* Abstract Representation of AI Interface */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '120px', height: '120px',
                            background: 'linear-gradient(135deg, var(--primary), #42A5F5)',
                            borderRadius: '50%',
                            margin: '0 auto 32px',
                            boxShadow: '0 20px 60px rgba(13, 71, 161, 0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        </div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                            "Tell me about your future goals."
                        </div>
                        <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
                            Listening...
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const SocialProof = () => (
    <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '24px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Trusted by learners from
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '64px',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                flexWrap: 'wrap'
            }}>
                {['Google', 'Spotify', 'Notion', 'Stripe', 'Airbnb'].map(brand => (
                    <span key={brand} style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{brand}</span>
                ))}
            </div>
        </div>
    </section>
);

const ProblemSolution = () => (
    <section className="section">
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div>
                    <h2 style={{ maxWidth: '400px' }}>The Old Way is Broken</h2>
                    <p style={{ fontSize: '1.2rem' }}>
                        Textbooks, grammar drills, and passive listening don't work.
                        You study for years but still freeze when it's time to speak.
                    </p>
                </div>
                <div style={{ display: 'grid', gap: '24px' }}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
                        <div style={{ background: '#FFEEEE', padding: '12px', borderRadius: '50%', fontSize: '1.5rem' }}>🚫</div>
                        <div>
                            <h4 style={{ margin: 0 }}>Memorizing Rules</h4>
                            <p style={{ margin: 0, fontSize: '0.95rem' }}>Boring, inefficient, and forgettable.</p>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', borderColor: 'var(--primary)', background: 'rgba(13, 71, 161, 0.03)' }}>
                        <div style={{ background: 'rgba(13, 71, 161, 0.1)', padding: '12px', borderRadius: '50%', fontSize: '1.5rem' }}>✨</div>
                        <div>
                            <h4 style={{ margin: 0, color: 'var(--primary)' }}>EnglishMan Immersion</h4>
                            <p style={{ margin: 0, fontSize: '0.95rem' }}>Active speaking from Day 1.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeatureCard = ({ title, desc, icon }) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
            width: '48px', height: '48px',
            background: 'var(--bg-main)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', marginBottom: '24px',
            color: 'var(--primary)'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
        <p style={{ fontSize: '1rem', flex: 1 }}>{desc}</p>
    </div>
);

const FeaturesSection = () => (
    <section className="section" id="features" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ margin: '0 auto 16px' }}>Everything you need to <br />sound like a native.</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>Complete toolset for mastering English pronunciation, vocabulary, and flow.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                <FeatureCard
                    icon="🎙️"
                    title="Real-time Corrections"
                    desc="Our AI listens to every word and corrects your grammar and pronunciation instantly, without judgement."
                />
                <FeatureCard
                    icon="🧠"
                    title="Dynamic Context"
                    desc="Topics that adapt to your interests. Discuss tech, business, travel, or philosophy."
                />
                <FeatureCard
                    icon="📊"
                    title="Fluency Analytics"
                    desc="Track your vocabulary growth, WPM (words per minute), and clarity score over time."
                />
            </div>
        </div>
    </section>
);

const Step = ({ num, title, desc }) => (
    <div style={{ flex: 1, position: 'relative' }}>
        <div style={{
            fontSize: '4rem', fontWeight: 700,
            color: 'var(--primary)', opacity: 0.1,
            lineHeight: 1, marginBottom: '-20px', marginLeft: '-10px'
        }}>0{num}</div>
        <h3 style={{ position: 'relative', zIndex: 1 }}>{title}</h3>
        <p>{desc}</p>
    </div>
)

const HowItWorks = () => (
    <section className="section" id="how-it-works">
        <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '80px' }}>How EnglishMan Works</h2>
            <div style={{ display: 'flex', gap: '40px', flexDirection: 'row', flexWrap: 'wrap' }}>
                <Step num="1" title="Choose a Topic" desc="Select from 100+ scenarios or create your own custom roleplay." />
                <Step num="2" title="Start Talking" desc="Have a natural voice conversation with our AI mentor. No typing allowed." />
                <Step num="3" title="Get Feedback" desc="Review your session summary and practice your weak points instantly." />
            </div>
        </div>
    </section>
);

const UseCases = () => (
    <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-main) 0%, rgba(13, 71, 161, 0.05) 100%)' }}>
        <div className="container">
            <div className="card" style={{ padding: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ marginBottom: '48px' }}>Perfect for...</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💼</div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Career Growth</h4>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✈️</div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Global Travel</h4>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎓</div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>IELTS Prep</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PricingCard = ({ title, price, features, isPopular, onStart }) => (
    <div className="card" style={{
        border: isPopular ? '2px solid var(--primary)' : '1px solid var(--border)',
        transform: isPopular ? 'scale(1.05)' : 'none',
        position: 'relative'
    }}>
        {isPopular && (
            <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 600
            }}>
                MOST POPULAR
            </div>
        )}
        <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
        <div style={{ fontSize: '3rem', fontWeight: 700, margin: '24px 0', fontFamily: 'var(--font-heading)' }}>
            {price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span>
        </div>
        <ul style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {features.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <CheckIcon />
                    <span>{f}</span>
                </li>
            ))}
        </ul>
        <button className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }} onClick={onStart}>
            Get Started
        </button>
    </div>
);

const PricingSection = ({ onStart }) => (
    <section className="section" id="pricing">
        <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>Simple, transparent pricing</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
                <PricingCard
                    title="Starter"
                    price="$0"
                    features={[
                        "15 mins/day speaking",
                        "Basic feedback",
                        "3 Scenarios"
                    ]}
                    onStart={onStart}
                />
                <PricingCard
                    title="Pro"
                    price="$29"
                    isPopular={true}
                    features={[
                        "Unlimited speaking",
                        "Deep grammar analysis",
                        "All 100+ Scenarios",
                        "Accent training"
                    ]}
                    onStart={onStart}
                />
            </div>
        </div>
    </section>
);

const CTASection = ({ onStart }) => (
    <section className="section" style={{ paddingBottom: '120px' }}>
        <div className="container">
            <div style={{
                background: 'var(--primary)',
                borderRadius: 'var(--radius-xl)',
                padding: '80px 40px',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ color: 'white', marginBottom: '24px' }}>Start your fluency journey.</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '40px' }}>
                        Join 10,000+ students mastering English with EnglishMan.
                    </p>
                    <button className="btn" style={{ background: 'white', color: 'var(--primary)' }} onClick={onStart}>
                        Create Free Account
                    </button>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer style={{ padding: '80px 0', background: '#F0F0F0' }}>
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                        English<span style={{ color: 'var(--primary)' }}>Man</span>
                    </div>
                    <p style={{ maxWidth: '300px', fontSize: '0.9rem' }}>
                        The future of language learning. <br />San Francisco, CA.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '60px' }}>
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Product</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.05)', fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', justifyContent: 'space-between' }}>
                <div>© 2026 EnglishMan Inc.</div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>
        </div>
    </footer>
);

const Landing = ({ onStart }) => {
    return (
        <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
            <Navbar onStart={onStart} />
            <HeroSection onStart={onStart} />
            <SocialProof />
            <ProblemSolution />
            <FeaturesSection />
            <HowItWorks />
            <UseCases />
            <PricingSection onStart={onStart} />
            <CTASection onStart={onStart} />
            <Footer />
        </div>
    );
};

export default Landing;
