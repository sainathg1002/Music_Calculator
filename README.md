🎹 Music Calculator

A fun web-based calculator that not only performs arithmetic operations but also plays piano sounds when you press buttons. Each number and operator is mapped to a musical note, turning your calculator into a mini piano keyboard 🎶.

✨ Features

🔢 Basic Calculator – Supports +, -, *, /, decimals, and =.

⌨️ Keyboard Support – Enter numbers and operators directly from the keyboard.

🎵 Music Integration – Each button plays a piano sound (mapped to Sa Re Ga Ma / C D E F …).

❌ Error Handling – Shows Error for invalid expressions and allows resetting.

🎶 Bhajan Tune – Includes auto-play for "Raghupathi Raghava Rajaram, Patita Pavana Sitaram".

🎨 Styled UI – Grid layout with smooth hover effects, operators aligned right, and responsive design.

🛠️ Tech Stack

HTML – Structure of calculator.

CSS (Grid + Styling) – Layout, hover effects, and responsive design.

JavaScript – Core logic for calculations, keyboard handling, sounds, and melody playback.

🎹 Sound Mapping

Each button is mapped to a piano note:

Button	Note	Sound File
1	C3	soundsC3.wav
2	D3	soundsD3.m4a
3	E3	soundsE3.wav
4	F3	soundsF3.m4a
5	G3	soundsG3.m4a
6	A3	soundsA3.wav
7	B3	soundsB3.m4a
8	C (high)	soundsC3.wav
9	D (high)	soundsDhigh.wav
0	E (high)	soundsEhigh.wav
+	F (high)	soundsFhigh.wav
-	G (high)	soundsGhigh.ogg
*	A (high)	soundsAhigh.wav
/	B (high)	soundsBhigh.wav
=	C2	soundsC2.wav
.	D2	soundsD2.wav
c	C3	soundsC3.wav
🎶 Example Tune (Raghupathi Raghava Rajaram)

Mapped button sequence:

1 2 3 1 | 1 2 3 4
5 6 5 4 | 3 4 5 6

🚀 How to Run

Clone the repository:

git clone https://github.com/your-username/music-calculator.git
cd music-calculator


Open index.html in your browser.

Click or press keyboard keys to calculate and play music 🎶.

📂 Project Structure
music-calculator/
│── index.html
│── style.css
│── script.js
│── sounds/
│     ├── soundsC3.wav
│     ├── soundsD3.m4a
│     ├── soundsE3.wav
│     ├── soundsF3.m4a
│     ├── soundsG3.m4a
│     ├── soundsA3.wav
│     ├── soundsB3.m4a
│     ├── soundsDhigh.wav
│     ├── soundsEhigh.wav
│     ├── soundsFhigh.wav
│     ├── soundsGhigh.ogg
│     ├── soundsAhigh.wav
│     ├── soundsBhigh.wav
│     ├── soundsC2.wav
│     └── soundsD2.wav
