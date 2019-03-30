import React from 'react';
import Jobs from './jobs';

const jobTitles = ['Engineer', 'Doctor', 'Scientist'];


function renderJobsList(){
    return jobTitles.map( job => {
      return <Jobs title={job}></Jobs>
    });
  }
export default renderJobsList;