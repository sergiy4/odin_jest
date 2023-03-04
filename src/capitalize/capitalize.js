export default function capitalize(str){
  if(typeof(str) === "string"){

    if(str.length >=1){
        
        let Chars = str.split('');
        Chars[0] = Chars[0].toUpperCase();
        let newStr = Chars.join('')

        
        return newStr;
    }
    return false
  }
  return false
}

