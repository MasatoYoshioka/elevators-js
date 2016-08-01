{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1]
        // Whenever the elevator is idle (has no more queued destinations) ...
        for(elevator in elevators){
            this.handler(elevators[elevator]);
            console.log(elevator)
            //this.handler(elevator):
        }

    },

    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    },

    handler: function(elevator){
        console.log(elevator)
        elevator.on("idle", function() {
            elevator.goToFloor(0);
        });
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum)
        });
        elevator.on("passing_floor", function(floorNum, direction){
            console.log(direction)
        });
    }
}
