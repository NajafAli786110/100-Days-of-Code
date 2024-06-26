function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s = s.split("");
  t = t.split("");

  for (let i = 0; i < s.length; i++) {
    let index = s[i];
    for (let j = 0; j < s.length; j++) {
      if (index === t[j]) {
        t[j] = "xxx";
        break;
      } else if (j == s.length - 1 && index != t[j]) {
        return false;
      }
    }
  }
  return true;
}
function isAnagramByFrequency(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countFrequencyS = [];
  let countFrequencyT = [];

  for (const char of s) {
    countFrequencyS[char] = (countFrequencyS[char] || 0) + 1;
  }

  for (const char of t) {
    countFrequencyT[char] = (countFrequencyT[char] || 0) + 1;
  }
  
  for (const char in countFrequencyS) {
    if (countFrequencyS[char] !== countFrequencyT[char]) {
        return false;
    }
  }

  return true;
}
let s = "anagrat";
let t = "nagaram";

let ans = isAnagramByFrequency(s, t);
console.log(ans);
