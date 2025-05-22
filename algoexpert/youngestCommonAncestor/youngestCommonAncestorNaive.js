/*
  You're given three inputs, all of which are instances of an
  AncestralTree class that have an ancestor property
  pointing to their youngest ancestor. The first input is the top ancestor in an
  ancestral tree (i.e., the only instance that has no ancestor--its
  ancestor property points to None /
  null), and the other two inputs are descendants in the ancestral
  tree.

  Write a function that returns the youngest common ancestor to the two
  descendants.

  Note that a descendant is considered its own ancestor. So in the simple
  ancestral tree below, the youngest common ancestor to nodes A and B is node A.

// The youngest common ancestor to nodes A and B is node A.
  A
 /
B

Sample Input
// The nodes are from the ancestral tree below.
topAncestor = node A
descendantOne = node E
descendantTwo = node I
          A
       /     \
      B       C
    /   \   /   \
   D     E F     G
 /   \
H     I

Sample Output
  node B
*/

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const lineageOne = [];
  const lineageTwo = [];
  while (descendantOne !== null) {
    lineageOne.push(descendantOne);
    descendantOne = descendantOne.ancestor;
  }
  while (descendantTwo !== null) {
    lineageTwo.push(descendantTwo);
    descendantTwo = descendantTwo.ancestor;
  }
  let fromBack = 1;
  while (lineageOne[lineageOne.length - fromBack] === 
         lineageTwo[lineageTwo.length - fromBack]) {
    fromBack++;
  }
  return lineageOne[lineageOne.length - fromBack + 1];
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
