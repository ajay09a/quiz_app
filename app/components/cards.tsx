"use client";
import { useState } from "react";

export default function Cards({ question, index}: any) {
    return (
        <div>
            <h2>Q{index+1}:   {question}</h2>
        </div>
    );
}