const combinationDiv = document.getElementById("combination");
const playgroundDiv = document.getElementById("playground");
const playButton = document.getElementById('playBtn');


playButton.addEventListener('click', () => {
    const randomCombination = generateRandomCombination();
    combinationDiv.innerHTML = `${randomCombination}`;
    const allPermutations = stringPermutations(randomCombination);
    const arrayOfStrings = [...allPermutations];
    const shuffledArray = shuffleArray(arrayOfStrings);
    playgroundDiv.innerHTML = " ";

    shuffledArray.forEach((element, index) => {
        let letterBox = document.createElement('div');
        letterBox.innerHTML += `${element}`;
        letterBox.id = `${element}`;
        letterBox.className = 'item';
        
        playgroundDiv.appendChild(letterBox);

        letterBox.addEventListener('click', (event) => {

            let clickedItem = event.target.id.toUpperCase();
           
            if (clickedItem == randomCombination.toUpperCase()) {
    
                    const node = document.getElementById(event.target.id);
                    node.style.backgroundColor = "green";
                    node.style.pointerEvents = "none";
               
                
            }
            else {
    
                const node = document.getElementById(event.target.id);
                node.style.backgroundColor = "red";
                node.style.pointerEvents = "none";
            }
        });
    });

});


function generateRandomCombination() {
   
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ12345467890!@#$%^&*()-_=+[]{};:""./><?\\|';
	var lenString = someRandomCombinationSize();
	var randomstring = '';
    


           
	for (var i=0; i<lenString; i++) {
		var rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum, rnum+1);
	}
    return randomstring;
 
   
}


const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  

  function someRandomCombinationSize()
  {
    const min = 2;
    const max = 4;
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}