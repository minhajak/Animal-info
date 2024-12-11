// DOM Elements
const intro = document.getElementById("intro");
const animalSummary = document.getElementById("animalSummary");
const animalName = document.getElementById("animalName");
const searchImg = document.getElementById("search-img");

// Animal Data
const animals = ["lion", "sheep", "dog", "bear","tiger"];
const animalInfo = {
    lion: "The lion is known as the king of the jungle and symbolizes strength and courage.",
    sheep: "Sheep are gentle and docile creatures, often associated with peace and tranquility.",
    dog: "Dogs are loyal companions, known for their friendly and protective nature.",
    bear: "Bears are powerful animals, representing bravery and strength in the wild.",
    tiger: "The tiger is a solitary and powerful big cat, known for its strength, agility, and beautiful striped coat."
};


// Constants for animation speeds
const HEAD_TYPING_SPEED = 150;
const INFO_TYPING_SPEED = 40;
const CHANGE_INTERVAL = 5000;

// Preload images to avoid delays
function preloadImages() {
    animals.forEach(animal => {
        const img = new Image();
        img.src = `images/${animal}.jpg`;
    });
}

// Get a random animal, ensuring it's different from the current one
function getRandomAnimal(exclude) {
    let newAnimal;
    do {
        newAnimal = animals[Math.floor(Math.random() * animals.length)];
        
    } while (newAnimal === exclude);  // Ensure a different animal is selected
    return newAnimal;
}

// Set background and animate text
function setAnimalDisplay(animal) {
    // Set background image
    intro.style.backgroundImage = `url('images/${animal}.jpg')`;

    // Animate text for animal name and description
    typeText(animalName, animal.toUpperCase(), HEAD_TYPING_SPEED);
    typeText(animalSummary, animalInfo[animal], INFO_TYPING_SPEED);
}

// Typing effect for text using setInterval
function typeText(element, text, speed) {
    element.textContent = "";  // Clear current text
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);  // Stop typing when done
        }
    }, speed);
}

// Switch to a new animal, ensuring it's different from the current one
function changeAnimal() {
    const newAnimal = getRandomAnimal(currentAnimal);
    setAnimalDisplay(newAnimal);
    currentAnimal = newAnimal;
}


// Initialize after declaring the functions
let currentAnimal = getRandomAnimal();  // Initial random animal

// Preload images, set the initial animal, and schedule changes
preloadImages();
setAnimalDisplay(currentAnimal);
setInterval(changeAnimal, CHANGE_INTERVAL);

animalName.onmouseenter = ()=>{
    animalName.style.color = `hsla(80, 25%, 100%, 1)`
}
animalName.onmouseleave= ()=>{
    animalName.style.color = `hsla(80, 25%, 100%, 0.4)`
}
animalSummary.onmouseenter = ()=>{
    animalSummary.style.color = `hsla(80, 25%, 100%, 1)`
}
animalSummary.onmouseleave= ()=>{
    animalSummary.style.color = `hsla(80, 25%, 100%, 0.4)`
}
// Get elements
const loginBtn = document.getElementById('signin');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');

// Show the popup when clicking the login button
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
});

// Close the popup when clicking the close button
closePopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
  if (event.target == loginPopup) {
    loginPopup.style.display = 'none';
  }
});

searchImg.onclick = ()=>{
    
}




