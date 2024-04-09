let magicians: string[] = ["David Blaine", "Apllo Robbins", "Shin Lim"];

function make_great(magicianArray: string[]) {

    for (let i = 0; i < magicianArray.length; i++) {   //i stand for index string
     magicians[i] =  magicianArray[i]    + ' the Great'
    }                  
}

function showMagician1(magician:string[]) {

    magician.forEach(element =>{
        console.log(element);

        });
}

make_great(magicians);
showMagician1(magicians)