import React, {useState} from 'react';
import Result from './Result';
import '../styles/Calc.css'

function Calc() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCat]=useState('');
    const [resultVisible, setResultVisible] = useState(false);

    const calc=(i)=>{
        i.preventDefault();
        if(!weight || !height){
            alert('Please enter both wieght and height.');
            return;
        }
        const minWeight = 25;
        const maxWeight =180;
        const minHeight = 100;
        const maxHeight =220;

        if(weight<minWeight || weight>maxWeight){
            alert(`Weigth should be between ${minWeight}Kg and ${maxWeight}Kg`);
            return;
        }
        if(height<minHeight || height>maxHeight){
            alert(`Height should be between ${minHeight}Cm and ${maxHeight}Cm`);
            return;
        }

        const heightM=height/100;
        const bmiVal= (weight/(heightM*heightM)).toFixed(2);
        setBmi(bmiVal);

        if(bmiVal<18.5){
            setCat('Underweight');
        }else if(bmiVal>=18.5 && bmiVal<24.9){
            setCat('Healthy');
        }else if(bmiVal>=25 && bmiVal<29.9){
            setCat('Overweight');
        }else{
            setCat('Obesity');
        }
        setResultVisible(true);
    };
  return (
    <div style={{textAlign:"center"}}>
        <form >
            <div className='form'>
                <label>Height(cm):</label>
                <input type="number" value={height} onChange={(i)=> setHeight(i.target.value)}/>
            </div>
            <div className='form'>
                <label>Weight(kg):</label>
                <input type="number" value={weight} onChange={(i)=> setWeight(i.target.value)}/>
            </div>
            <button onClick={calc}>Calculate BMI</button>
        </form>
        <div className='result'>
            {bmi !== null && (
                <Result bmi={bmi} category={category}/>
            )}
        </div>
    </div>
    
  )
}

export default Calc;