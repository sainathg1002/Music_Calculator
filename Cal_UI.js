const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let lastValidInput = ""; // store last valid expression
let resetBtn; // for dynamic reset button

// Prevent direct editing of the input; all input flows through our handlers
display.readOnly = true;

const pianoSounds = {
  "1": "sounds/soundsC3.wav",
  "2": "sounds/soundsD3.m4a",
  "3": "sounds/soundsE3.wav",
  "4": "sounds/soundsF3.m4a",
  "5": "sounds/soundsG3.m4a",
  "6": "sounds/soundsA3.wav",
  "7": "sounds/soundsB3.m4a",
  "8": "sounds/soundsC3.wav",
  "9": "sounds/soundsC3.wav",
  "0": "sounds/soundsEhigh.wav",
  "+": "sounds/soundsA3.wav",
  "-": "sounds/soundsGhigh.ogg",
  "*": "sounds/soundsAhigh.wav",
  "/": "sounds/soundsBhigh.wav",
  "=": "sounds/soundsC2.wav",
  ".": "sounds/soundsD2.wav",
  "c": "sounds/soundsDhigh.wav"
};

function playSound(value) {
  if (pianoSounds[value]) {
    const audio = new Audio(pianoSounds[value]);
    audio.currentTime = 0;
    audio.play();
  }
}

function createResetButtonIfNeeded() {
  if (!resetBtn) {
    resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "btn reset-btn";
    document.querySelector(".buttons").appendChild(resetBtn);

    resetBtn.addEventListener("click", () => {
      currentInput = lastValidInput; // restore old expression
      display.value = currentInput;
      resetBtn.remove();
      resetBtn = null;
    });
  }
}

function processValue(rawValue) {
  const value = rawValue === 'Enter' ? '=' : rawValue; // normalize Enter

  playSound(value.toString());

  if (value === 'c' || value === 'C' || value === 'Escape') {
    // Clear input
    currentInput = "";
    lastValidInput = "";
    display.value = "";
    if (resetBtn) { resetBtn.remove(); resetBtn = null; }
    return;
  }

  if (value === 'Backspace') {
    // remove last character
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
    return;
  }

  if (value === '=') {
    // Save expression before evaluating
    lastValidInput = currentInput;
    try {
      let result = eval(currentInput);  // ⚠️ for practice only
      display.value = result;
      currentInput = result.toString();
      if (resetBtn) { resetBtn.remove(); resetBtn = null; }
    } catch (error) {
      display.value = "Error";
      currentInput = "";
      createResetButtonIfNeeded();
    }
    return;
  }

  // Append numbers/operators/dot only
  if (/^[0-9+\-*/\.]$/.test(value)) {
    currentInput += value;
    display.value = currentInput;
  }
}

// Wire button clicks to the same handler
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    processValue(value);
    console.log('Button clicked:', value);
  });
});

// Keyboard support: numbers, operators, Enter (evaluate), Backspace (delete), c or Escape (clear)
document.addEventListener('keydown', (e) => {
  // Map keyboard keys to calculator values
  const key = e.key;

  // Allow typical calculator keys
  if (/^[0-9+\-*/\.]$/.test(key) || key === 'Enter' || key === 'Backspace' || key === 'Escape' || key.toLowerCase() === 'c') {
    // Prevent default only for keys we handle to avoid unexpected behavior
    e.preventDefault();
    processValue(key);
  }
});
