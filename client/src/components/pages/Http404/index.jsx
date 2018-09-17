import React from 'react';
import './index.scss';

const Auth = () => {
  const contentStyle = {
    minHeight: 'calc(100vh - 250px)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    // Temporary http 404 page
    <div id="http404-page">
      <div className="content" style={contentStyle}>
        <div>
          <h1 style={{ fontSize: '81px' }}>404</h1>
          <h2>PAGE NOT FOUND</h2>
        </div>
      </div>
    </div>
  );
};

export default Auth;
