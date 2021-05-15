
/*
  Say you have 500 multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.
  Versions after first bad version are supposed to be all bad versions.
  Inputs are all non-negative integers
  if none found, return -1


  type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad 
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    let left = 0;
    let right = version;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if(isBad(middle) && !isBad(middle-1)) return middle;
      else if(isBad(middle)) right = middle-1;
      else left = middle+1;
    }
    return -1;
  }
}
