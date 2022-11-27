// Obtaining the .html div and image through the class and assigning them to the respective variables
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

// speed at which the character moves on the screen
const VELOCITY = 10;

// getting the maximum screen size
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

// initial position of the character on the screen, indicated by the X and Y axis
let xPosition = 500;
let yPosition = 300;

// Possible keys used to move
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

// Directions the character can go
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

// A listener event that watches when a key is pressed
window.addEventListener("keydown", (event) => {
    const key  = event.key; // tecla

    // checks if any of the 'keysAvaiable' keys were pressed and returns it
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return; //If no valid key is pressed, it returns nothing

    // loop responsible for "removing" the direction in which the character is going, after each click
    // for that use the predefined directions
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    /* Logic inside the 4 IFs
        - Adds direction to the character, which will be removed later.
        - Increases the speed value (already defined) to the current position value.
    */

   // If the up arrow is pressed and it is not at the upper limit, the character walks
    if(key === "ArrowUp" && yPosition>0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    // If the down arrow is pressed and it is not at the lower limit, the character walks
    if(key === "ArrowDown" && yPosition<SCREEN_HEIGHT){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    // If the left arrow is pressed and it is not in the upper left, the character walks
    if(key === "ArrowLeft" && xPosition>0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    // If the right arrow is pressed and it is not at the right limit, the character walks
    if(key === "ArrowRight" && xPosition<SCREEN_WIDTH){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    // Set the position of the container
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
