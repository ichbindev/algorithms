/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const originalColor = image[sr][sc];
  
  // return if color is already set
  // important to avoid infinite fill & stack overflow
  if (originalColor === newColor) {
      return image;
  }
  
  // change the color, then cascade to the neighbors
  image[sr][sc] = newColor;
  if (sr > 0 && image[sr - 1][sc] === originalColor) {
      floodFill(image, sr - 1, sc, newColor);
  } 
  if (sc > 0 && image[sr][sc - 1] === originalColor) {
      floodFill(image, sr, sc - 1, newColor);
  }
  if (sr < image.length - 1 && image[sr + 1][sc] === originalColor) {
      floodFill(image, sr + 1, sc, newColor);
  }
  if (sc < image[0].length - 1 && image[sr][sc + 1] === originalColor) {
      floodFill(image, sr, sc + 1, newColor);
  }
      
  return image;
};
