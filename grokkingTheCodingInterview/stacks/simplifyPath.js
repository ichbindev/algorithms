/*
Given an absolute file path in a Unix-style file system, 
simplify it by converting ".." to the previous directory 
and removing any "." or multiple slashes. The resulting 
string should represent the shortest absolute path.
*/

class Solution {
  simplifyPath(path) {
    const stack = [];
    for (const dir of path.split("/")) {
      if (dir === "..") stack.pop();
      else if (dir !== "" && dir !== ".") stack.push(dir);
    }
    return "/" + stack.join("/");
  }
}
