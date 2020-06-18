
const FROGS = 3;
const racers = [];

// Initialize DOM so frogs ready for the race
for (let i = 0; i < FROGS ; i++) {
    // Create lanes in the DOM
    const lane = document.createElement("li");
    const laneId = `lane-${i + 1}`
    lane.id = laneId;
    document.querySelector(".track").appendChild(lane);

    // Randomly select a frog from frogStable and push it to racers
    const frogIndex = Math.floor(Math.random() * frogStable.length)
    racers.push(frogStable[frogIndex]);
    frogStable.splice(frogIndex, 1);

    const racingFrog = racers[i];
    racingFrog.progress = 0;
    racingFrog.lane = i + 1;

    // add frog to the DOM
    let span = document.createElement("span");
    span.className = "frog"
    span.innerHTML = `${racingFrog.name} ${racingFrog.number}`;
    span.setAttribute("progress", racingFrog.progress);
    document.querySelector(`#${laneId}`).appendChild(span);

    // style frog <span> element
    span.style.backgroundColor = `${racingFrog.color}`
}

// Function updates frog progress in the race
const racingFrog = function(frog) {
    const delay = Math.floor(Math.random() * 3000);
    const jumps = setInterval(function() {

        const progress = (Math.floor(Math.random() * 100) + 1);
        frog.progress = frog.progress + progress;

        if (frog.progress > 100) {
            frog.progress = 100;
            console.log("End of the race");
            clearInterval(jumps);
        }
        console.log(frog.progress)
        document.querySelector(`.track #lane-${frog.lane} .frog`).style.left = frog.progress + '%' ;
    }, delay);

}

// the race !
racers.forEach( racer => racingFrog(racer) );