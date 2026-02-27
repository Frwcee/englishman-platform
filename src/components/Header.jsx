import Logo from './Logo';

const Header = ({ onStart, onHome }) => {
    return (
        <header style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="container" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <div onClick={onHome} style={{ cursor: 'pointer' }}>
                    <Logo />
                </div>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); onHome && onHome(); }} style={{ fontWeight: '500', color: 'var(--text-dark)' }}>Home</a>
                    <a href="#features" style={{ fontWeight: '500', color: 'var(--text-muted)' }}>Features</a>
                    <a href="#about" style={{ fontWeight: '500', color: 'var(--text-muted)' }}>About</a>
                    <a href="https://t.me/englishmanadmin" target="_blank" style={{ fontWeight: '500', color: 'var(--text-muted)' }}>Contact</a>
                </nav>

                {/* CTA */}
                <button className="btn btn-primary" onClick={onStart}>
                    Start Speaking
                </button>
            </div>
        </header>
    );
};

export default Header;
