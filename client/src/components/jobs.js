import React from 'react'


const Jobs = (props) => {
    console.log(props);
    return(
        <div style={{textAlign: 'left', border: '2px'}}>
            <h4>{props.title}</h4>
            <button>Apply</button>
        </div>
    );
}
export default Jobs;