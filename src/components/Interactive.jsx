import React, { useState } from "react";
import "./ALL.css";

const Interactive = () => {
  const [currentque, setCurrentque] = useState(0);
  const [flace, setFlace] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
 const[score,setScore]=useState(0)
 const [result,setResult]=useState(false)
 const content = [
  {
    question: 'What sport uses a bat?',
    options: ['cricket', 'baseball', 'tennis', 'golf'],
    correctoption: 0,
  },
  {
    question: 'What sport uses a ball?',
    options: ['football', 'basketball', 'volleyball', 'rugby'],
    correctoption: 0,
  },
  {
    question: 'Which animal is associated with cricket?',
    options: ['bat', 'cat', 'dog', 'rat'],
    correctoption: 0,
  },
  {
    question: 'Which animal is associated with king?',
    options: ['dog', 'cat', 'elephant', 'lion'],
    correctoption: 3,
  },
  {
    question: 'What is the main tool in cricket?',
    options: ['bat', 'glove', 'racket', 'stick'],
    correctoption: 0,
  },
  {
    question: 'What is the main tool in football?',
    options: ['ball', 'net', 'hoop', 'goalpost'],
    correctoption: 0,
  }
];


  const Nextcontroller = () => {
    if (currentque < content.length - 1) {
      setCurrentque(currentque + 1);
      setCorrect(false); 
      setFlace(false); 
      setSelectedOption(null); 
    } else {
      setResult(true)
      console.log('Show results');
    }
  }

  const clickHandler = (index) => {
    setSelectedOption(index);
        if(currentque==(content.length-1)){
      
        
        }
    
    if (index === content[currentque].correctoption) {
      setCorrect(true);
      setFlace(false); 
      setScore(score+1)// Reset flace state if the correct option is selected
    } else {
      setCorrect(false);
      setFlace(true); // Set flace state if an incorrect option is selected
    }
  }

  return (
 <div>
      <div className={result? 'rahul':'int'}>
        

       <div> <p>{content[currentque].question}</p>{content[currentque].options.map((option, index) => (
          <button
            key={index}
            className={
              selectedOption === index ?
                (correct && index === content[currentque].correctoption ? 'green' :
                 !correct && index === content[currentque].correctoption ? 'green' :
                 !correct && flace ? 'nogreen' :
                 'normalbutton') :
                'normalbutton'
            }
            onClick={() => clickHandler(index)}
          >
            {option}
          </button>        ))}
        <button className="nextbtn" onClick={Nextcontroller}>
          {currentque < content.length - 1 ? 'Next' : 'Show Results'}
        </button>
        </div>
      </div>
      <div className={result?"dara":"d1"}>
        <h2>Your score is : {score}</h2>
      </div>
      </div>
     
  
  );
}

export default Interactive;
