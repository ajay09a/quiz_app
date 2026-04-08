"use client";

import { useState } from "react";
import Cards from "./components/cards";
import { questions } from "./lib/db";

export default function Home(){
  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [feedback, setFeedback] = useState<string>("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const nextQue =()=>{
        if(index<questions.length-1){
            setIndex(index+1);
            setFeedback("");
            setHasAnswered(false);
        }
    }

  const checkAnswer = (selectedOption: string) => {
        if(hasAnswered){
          return;
        }
        if (selectedOption === questions[index].answer) {
            setFeedback("Correct! 🎉");
            setScore(score + 1);
        } else {
            setFeedback(`Wrong! The correct answer is: ${questions[index].answer}`);
        }
        setHasAnswered(true);
    };

  return (
    <div>
      <p>Your Score: {score}/10</p>
      <Cards
      question = {questions[index].question}
      />
      {questions[index].options.map((option, index) => (
                    <button key={index} onClick={() => setAns(option)}>
                        {option}
                    </button>
                ))}
      <p>{feedback}</p>
      <div>
        <button onClick={()=>checkAnswer(ans)}>Check for review</button>
        <button onClick={()=>nextQue()}>Next</button>
      </div>
    </div>
  )
}