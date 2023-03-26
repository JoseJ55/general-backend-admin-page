import React, { useState, useEffect } from 'react';
import './MostUsedTab.css';

// SHows the endpoint that is most used
function MostUsedTab() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div id="mostusedtab" style={{ transform: loading ? 'translateY(25%)' : 'translateY(0%)', opacity: loading ? 0 : 1 }}>
      <p id="mostusedtab-title">Most used</p>
      <p id="mostusedtab-content">/first</p>
    </div>
  );
}

export default MostUsedTab;
