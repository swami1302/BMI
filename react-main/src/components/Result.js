import React from 'react'

function Result({bmi,category}) {
    let color="";

    if(category==='Underweight'){
        color='underweight';
    }else if(category==='Healthy'){
        color='healthy';
    }else if(category==='Overweight'){
        color='overweight';
    }else{
        color='obesity';
    }

  return (
    <div >
        <h3>Your BMI is:</h3>{bmi}
        <p>
            <strong>Comment:You are </strong><span className={`result ${category.toLowerCase()}`}>{category}</span>
        </p>

    </div>
  );
}

export default Result