// SOLID Principle - Single Responsibility Principle

// This trackers has only 1 reason to change. If we change the way we track our calories.
// Before it also handled the logging of the message, but instead we import a module to do this.
// So if we need to change things, we won't affect multiple things.
import logMessage from "./logger.js";
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalories(calories) {
    this.currentCalories = calories;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max calories exceeded!");
    }
  }
}
const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1300);
calorieTracker.trackCalories(500);
