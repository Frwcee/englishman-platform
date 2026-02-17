import React, { useState } from 'react';
import './index.css';

// Components
import Landing from './components/Landing';
import Registration from './components/Registration';
import GrammarTest from './components/GrammarTest';
import Results from './components/Results';
import FloatingAssistant from './components/FloatingAssistant';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [step, setStep] = useState('landing'); // landing | registration | test | results
    const [userData, setUserData] = useState({
        fullName: '',
        estimatedLevel: '',
        city: '',
        place: '',
        grade: '',
    });
    const [testScore, setTestScore] = useState(0);

    const handleStart = () => {
        setStep('registration');
        window.scrollTo(0, 0);
    };

    const handleRegistrationComplete = (data) => {
        setUserData(data);
        setStep('test');
        window.scrollTo(0, 0);
    };

    const handleTestComplete = (score) => {
        setTestScore(score);
        setStep('results');
        window.scrollTo(0, 0);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header always visible unless in Test mode to avoid distraction? 
                Actually, keeping it is standard for trust, maybe hide on test for focus.
            */}
            {step !== 'test' && step !== 'landing' && <Header onStart={handleStart} />}

            <main style={{ flex: 1 }}>
                {step !== 'landing' && <FloatingAssistant step={step} />}

                {step === 'landing' && (
                    <Landing onStart={handleStart} />
                )}

                {step === 'registration' && (
                    <div className="container section">
                        <Registration onComplete={handleRegistrationComplete} />
                    </div>
                )}

                {step === 'test' && (
                    <GrammarTest onComplete={handleTestComplete} />
                )}

                {step === 'results' && (
                    <div className="container section">
                        <Results score={testScore} userData={userData} />
                    </div>
                )}
            </main>

            {step !== 'test' && step !== 'landing' && <Footer />}
        </div>
    );

}

export default App;
