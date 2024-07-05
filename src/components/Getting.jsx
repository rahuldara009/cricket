// App.jsx
import React, { useState } from 'react';
import './ALL.css';

const PeopleAlsoAsk = ({ questions }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="people-also-ask">
      {questions.map((question, index) => (
        <div key={index} className="question-item">
          <div
            className="question"
            onClick={() => toggleQuestion(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0' }}
          >
            {question.question}
          </div>
          {openQuestion === index && (
            <div className="answer" style={{ paddingLeft: '20px', marginBottom: '10px' }}>
              {question.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
    const questions = [
        { question: 'What equipment do I need to start playing cricket?', answer: 'To start playing cricket, you will need a cricket bat, a ball, protective gear like pads, gloves, and a helmet, and access to a cricket ground or a practice net.' },
        { question: 'What are the basic rules of cricket?', answer: 'Cricket is played between two teams of eleven players each. The main objective is to score more runs than the opposing team. It involves batting, bowling, and fielding. Key rules include the method of scoring runs, getting out, and overs.' },
        { question: 'How can I improve my cricket skills?', answer: 'To improve your cricket skills, practice regularly, focus on specific aspects like batting, bowling, or fielding, watch professional matches, and consider joining a local cricket club or taking coaching classes.' },
        { question: 'What is the best way to learn cricket if I am a beginner?', answer: 'If you are a beginner, start by understanding the basic rules and positions, watch instructional videos, read cricket guides, and practice with friends or join a cricket academy to get professional training.' },
        { question: 'How do I find a local cricket club or team?', answer: 'You can find local cricket clubs or teams by searching online, visiting community centers or sports complexes, checking local sports directories, or asking for recommendations from friends or family who play cricket.' },
      ];

  return (
    <div className="App">
      <h1>Getting Started </h1>
      <PeopleAlsoAsk questions={questions} />
    </div>
  );
};

export default App;
