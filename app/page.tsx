"use client";

import { useEffect, useState } from "react";
import Cards from "./components/cards";
import { questions } from "./lib/db";
import "./globals.css";

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
    <main>
      <div className="header">
        <p className="scorecard">Your Score: <b>{score}/10</b></p>
        <p className="timer">Time left: <b>{timeLeft}</b></p>
      </div>
      <Cards
      question = {questions[index].question}
      index = {index}
      />
      <div className="options">
        {questions[index].options.map((option, index) => (
                      <button key={index} onClick={() => setAns(option)}>
                          {index+1}.  {option}
                      </button>
                  ))}
      </div>
      <p className="feedback">{feedback}</p>
      <div className="footer-button">
        <button className="checkAns" onClick={()=>checkAnswer(ans)}>Check for review</button>
        <button className="nextQue" onClick={()=>nextQue()}>Next</button>
      </div>
    </main>
  )
}