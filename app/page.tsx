"use client";

import { useState } from "react";
import Cards from "./components/cards";
import { questions } from "./lib/db";

export default function Home(){
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<string>("");

  const nextQue =()=>{
        if(index<questions.length-1){
            setIndex(index+1);
            setFeedback("");
        }
    }

  const checkAnswer = (selectedOption: string) => {
        if (selectedOption === questions[index].answer) {
            setFeedback("Correct! 🎉");
        } else {
            setFeedback(`Wrong! The correct answer is: ${questions[index].answer}`);
        }
    };

  return (
    <div>
      <Cards
      question = {questions[index].question}
      />
      {questions[index].options.map((option, index) => (
                    <button key={index} onClick={() => checkAnswer(option)}>
                        {option}
                    </button>
                ))}
      <p>{feedback}</p>
      <button onClick={()=>nextQue()}>Next</button>
    </div>
  )
}