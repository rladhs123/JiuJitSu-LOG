// src/App.js
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './App.css';

function App() {
  const data = [
    { date: '2025-07-01', count: 1 },
    { date: '2025-07-02', count: 0 },
    { date: '2025-07-03', count: 1 },
    { date: '2025-07-04', count: 1 },
    { date: '2025-07-05', count: 0 },
  ];

  return (
    <div className="App" style={{ width: '80%', margin: '50px auto' }}>
      <h2>주짓수 출석 잔디</h2>
      <CalendarHeatmap
        startDate={new Date('2025-01-01')}
        endDate={new Date('2025-12-31')}
        values={data}
        classForValue={(value) => {
          if (!value || value.count === 0) {
            return 'color-empty';
          }
          return 'color-filled';
        }}
      />
    </div>
  );
}

export default App;
