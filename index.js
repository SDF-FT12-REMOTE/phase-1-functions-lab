// 1. Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
    const hq = 42; // HQ is located at block 42
    return Math.abs(someValue - hq); // Return absolute distance in blocks
  }
  
  // 2. Function to calculate distance from HQ in feet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Calculate blocks
    return blocks * 264; // Convert blocks to feet (1 block = 264 feet)
  }
  
  // 3. Function to calculate distance traveled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start); // Calculate distance in blocks
    return blocks * 264; // Convert blocks to feet
  }
  
  // 4. Function to calculate the fare price based on distance
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Distance in feet
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25
    } else {
      return 'cannot travel that far'; // Beyond 2500 feet
    }
  }
  
  // Exporting the functions (optional, based on your test setup)
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  
