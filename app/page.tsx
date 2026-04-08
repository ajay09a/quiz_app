"use client";

import { useEffect, useState } from "react";
import Cards from "./components/cards";
import { questions } from "./lib/db";

export default function Home(){
  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [feedback, setFeedback] = useState<string>("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const nextQue =()=>{
        if(index<questions.length-1){
            setIndex(index+1);
            setFeedback("");
            setHasAnswered(false);
            setTimeLeft(60);
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

  useEffect (()=>{
    if(timeLeft === 0 || hasAnswered){
      if(timeLeft === 0 && !hasAnswered){
        setHasAnswered(true);
        setFeedback("Times up!");
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev)=>prev -1)
    }, 1000);
    return ()=> clearInterval(timer);
  },[timeLeft, hasAnswered]);

  return (
    <div>
      <p>Your Score: {score}/10</p>
      <p>Time left: {timeLeft}</p>
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