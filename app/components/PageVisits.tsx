'use client';

import { useState, useEffect } from 'react';

export default function PageVisits() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch('/api/counter', { method: 'POST' })
      .then(response => response.json())
      .then(data => setVisits(data.visits));
  }, []);

  return (
    <div>
      <p>{visits}</p>
    </div>
  );
}
