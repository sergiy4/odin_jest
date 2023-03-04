export default function caesarCipher(str,shift){

    if(typeof(str) !== "string") return false
    
   let Chars = str.split('');
   let newChars ="";

   for(let el of Chars){
    newChars += getShiftLetter(el,shift)
   }
   return newChars


}


function getShiftLetter(letter ,shift){
    if(!letter.match(/[a-z]/i)){
        return letter
    }


    const ABC = "abcdefghijklmnopqrstuvwxyz"
    let alphabet = ABC.split('');

    if(shift<0){
        shift = Math.abs(shift);
        alphabet = alphabet.reverse();
    }
  

    let index = alphabet.indexOf(letter.toLowerCase());

    let shiftLetter =  (index < (alphabet.length-shift)) ? alphabet[index+shift] : alphabet[shift - (alphabet.length - index)]
    shiftLetter = (letter == letter.toUpperCase()) ? shiftLetter.toUpperCase(): shiftLetter
  
    return shiftLetter
}


