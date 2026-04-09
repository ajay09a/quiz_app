# 🧠 Quiz App (Next.js)

An interactive quiz application built using **Next.js (App Router)** that allows users to answer multiple-choice questions with a countdown timer, instant feedback, and score tracking.

---

## 🚀 Features

* ⏱️ **60-second timer per question**
* 📊 **Live score tracking**
* ✅ **Answer validation with instant feedback**
* ❌ Prevents multiple submissions per question
* 🔄 **Next question navigation**
* ⏳ Auto-lock when time runs out
* 🎯 Displays correct answer if user is wrong
* 💡 Clean and minimal UI using custom CSS

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React (useState, useEffect)**
* **TypeScript**
* **Custom CSS (no frameworks)**

---

## ⚙️ How It Works

1. Questions are loaded from a local data file (`db.tsx`)
2. Each question has:

   * 4 options
   * 1 correct answer
3. User selects an option and clicks **"Check for review"**
4. App:

   * Validates the answer
   * Shows feedback (Correct / Wrong)
   * Updates score
5. Timer:

   * Starts from 60 seconds
   * Auto-submits as "Time’s up" if it reaches 0
6. User clicks **Next** to move forward

---

## 📂 Project Snip

<img width="1257" height="730" alt="Screenshot 2026-04-09 at 19 17 37" src="https://github.com/user-attachments/assets/3e19eeed-9be7-43af-b121-f61f7fdfce56" />

---
