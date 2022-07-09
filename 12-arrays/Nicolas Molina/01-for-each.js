const letters = ['a','b','c'];   //array

for (let index = 0; index < letters.length; index++) {    //forma larga
    const element = letters[index];
    console.log('for',element);
}

letters.forEach(item => console.log('forEach', item))   //forma corta