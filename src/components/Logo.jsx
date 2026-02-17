import React from 'react';

const Logo = ({ withSubtitle = false, size = '1.5rem', className = '' }) => {
    return (
        <div className={`logo-container ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: withSubtitle ? 'flex-start' : 'center' }}>
            <div style={{
                fontSize: size,
                fontWeight: '800',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center'
            }}>
                <span style={{ color: 'var(--text-dark)' }}>English</span>
                <span style={{ color: 'var(--primary)' }}>Man</span>
            </div>
            {withSubtitle && (
                <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontWeight: '500',
                    marginTop: '4px',
                    letterSpacing: '0.01em'
                }}>
                    English Speaking Practice Academy
                </div>
            )}
        </div>
    );
};

export default Logo;
