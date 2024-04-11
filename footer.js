import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
    },
    text: {
        fontSize: '14px',
    },
};

export default Footer;
