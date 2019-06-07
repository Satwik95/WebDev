// global variable
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const closedDoorpath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor((Math.random()*numClosedDoors));
    if (choreDoor===0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor==1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else{
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }
}
// door interaction
doorImage1.onclick = () => {doorImage1.src = openDoor1;
    playDoor();}
doorImage2.onclick = () => {doorImage2.src = openDoor2;
    playDoor();}
doorImage3.onclick = () => {doorImage3.src = openDoor3;
    playDoor();}
//button new game
randomChoreDoorGenerator();

const isClicked = (door) => {

}
const playDoor = () => {
    numClosedDoors -= 1;
    if (numClosedDoor===1){
        gameOver();
    }
}



