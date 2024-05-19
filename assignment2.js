const string="zindua"


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