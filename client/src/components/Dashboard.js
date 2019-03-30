import React from 'react';
import renderJobs from './jobsList';
//import { connect } from 'react-redux';

const Dashboard = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Dashboard</h2>
      {renderJobs()}
    </div>
  );
};

export default Dashboard;
