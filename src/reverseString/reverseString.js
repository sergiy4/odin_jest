export default function(str){

    if(typeof(str)==="string"){
        if(str.length >=1){
            
            let Chars = str.split('');
            
            Chars = Chars.reverse() 

            str = Chars.join('')
            return str
        }
        return false
    }
    return false
}