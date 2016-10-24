{
    init: function(elevators, floors) {
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
            this.goToFloor(0);
        });
        elevator.on("floor_button_pressed", function(floorNum) {
            this.goToFloor(floorNum)
        });
        elevator.on("passing_floor", function(floorNum, direction){
            console.log(direction)
        });
    }
}
