// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const status = document.getElementById('flightStatus');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const background = document.getElementById('shuttleBackground');
    console.log('window loaded');

    let takeoffButton = this.document.getElementById("takeoff");
    takeoffButton.addEventListener('click', () => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(response) {
            status.innerHTML = "Shuttle in flight";
            shuttleHeight.innerHTML = Number(10000);
            background.style.backgroundColor = "blue";
        }
        })

    let landButton = this.document.getElementById("landing");
    landButton.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = Number(0);
        })

    let abortMissionButton = this.document.getElementById("missionAbort");
    abortMissionButton.addEventListener('click', () => {
        let response = window.confirm("Confirm that you want to abort the mission.")
        if(response) {
            status.innerHTML = "Mission aborted";
            shuttleHeight.innerHTML = Number(0);
            background.style.backgroundColor = "green";
        }
        })

    const rocketShip = this.document.getElementById('rocket')
    
    let upButton = this.document.getElementById("Up");
    upButton.addEventListener('click', () => {
        shuttleHeight.innerHTML = shuttleHeight.innerHTML + Number(10000)

    })

    let downButton = this.document.getElementById("Down");
    downButton.addEventListener('click', () => {
        shuttleHeight.innerHTML = shuttleHeight.innerHTML + Number(10000)
    })

    let leftButton = this.document.getElementById("Left");
    leftButton.addEventListener('click', () => {
        const currentX = rocketShip.style.transform 
        rocketShip.style.transform = "translateX(-10px)";
    })

    let rightButton = this.document.getElementById("Right");
    rightButton.addEventListener('click', () => {

    })

}) 