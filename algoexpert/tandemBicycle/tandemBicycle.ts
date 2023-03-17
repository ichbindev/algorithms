export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {

  blueShirtSpeeds.sort((a, b) => a - b);
  // if you want fastest, sort in opposite directions to optimize difference in pairs
  if (fastest) {
    redShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
  }
  
  let totalSpeed = 0;
  for (let i = 0; i < blueShirtSpeeds.length; i++) {
    totalSpeed += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
  }

  return totalSpeed;
}
