```
let findPermutations = (string) => {  // 'abc'
  if (string.length < 2 )
    return [ string ];

  let permutationsArray = [];
   
  for (let i = 0; i < string.length; i++) {
    let char = string[i];  // 'a'

    if (string.indexOf(char) != i)
      continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1);  // 'bc'

    const permutations = findPermutations(remainingChars);  //

    for (let permutation of permutations) {
      permutationsArray.push(char + permutation);
    }
  }
  
  return permutationsArray;
}

let findPermutations = (string) => {  // 'bc'
  if (string.length < 2 )
    return [ string ];

  let permutationsArray = [];
   
  for (let i = 0; i < string.length; i++) {
    let char = string[i];  // 'b'

    if (string.indexOf(char) != i)
      continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1);  // 'c'

    const permutations = findPermutations(remainingChars);  // ['c']
    
    ~~~~~~~

    for (let permutation of permutations) {
      permutationsArray.push(char + permutation);  // ['bc']
    }
  }
  
  return permutationsArray;
}

```
