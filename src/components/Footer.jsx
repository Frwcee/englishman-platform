import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{
            background: 'white',
            borderTop: '1px solid var(--border-color)',
            padding: '60px 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '16px' }}>
                            <Logo />
                        </div>
                        <p style={{ fontSize: '0.9rem' }}>
                            The #1 platform specifically designed for English Speaking practice.
                            Real results without the boring theory.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Platform</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                            <li><a href="https://t.me/englishmanadmin">Telegram Support</a></li>
                            <li>Tashkent, Uzbekistan</li>
                            <li>+998 90 123 45 67</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    paddingTop: '30px',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                }}>
                    &copy; {new Date().getFullYear()} EnglishMan Education. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
