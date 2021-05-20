/*
There is a pile of n (n > 0) stones.
Player A and Player B take turns to pick 1 or 2 stones from the pile. A starts first.
Who picks the last stone loses the game.
Now here is the question, is there a winning strategy for A or B ? If so, returns the player name. If there is none, return null.

  1 : B
  2 : A
  3 : A
  4 : B
  5 : A cycle repeats
  6 : A
  7 : B
  8 : A
  9 : A
  .
  .
  n % 3 === 1 ? 'B' : 'A'
*/
/** 
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
  // your code here
  let canAWin = {
    1: false,
    2: true
  };
  let canBWin = {
    1: true,
    2: false
  }

  for (let i=3; i<=n; i++) {
    canAWin[i] = canAWin[i-1] || canAWin[i-2];
    canBWin[i] = !canBWin[i-1] && !canBWin[i-2];

    if (n !== i-2) {
      delete canBWin[i-2];
      delete canBWin[i-2];
    }
  }
  return canBWin[n] ? 'B' : 'A';
}
