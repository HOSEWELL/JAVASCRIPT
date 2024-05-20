const string="Hosewell"


function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    string = string.toLowerCase();

    let vowelCount = 0;
    for (let character of string) {
        if (vowels.includes(character)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels(string));

{
    function countVowels(user_input){
  let vowels="aeiou"
  let count=0

  for(let i=0; i<user_input.length; i++){
    if(vowels.includes(user_input[i])){
        count++
    }
  }
  return count;
    }
    console.log(countVowels("zindua"));

}