// Definition of the Driveable interface
interface Driveable {
  // Declare properties for the vehicle's state
  started: boolean;      // Whether the vehicle is started or not
  currentSpeed: number;  // The current speed of the vehicle (mph)

  // Declare methods for the vehicle's actions
  start(): void;         // Method to start the vehicle
  accelerate(change: number): void;   // Method to increase speed
  decelerate(change: number): void;  // Method to decrease speed
  stop(): void;          // Method to stop the vehicle
  turn(direction: string): void;     // Method to turn the vehicle ('left' or 'right')
  reverse(): void;       // Method to reverse the vehicle
}

// Export the Driveable interface for use in other files
export default Driveable;
