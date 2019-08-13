import React from 'react';

function Alert({ alert, type }) {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
}

export default Alert;
