// option-1: directly set 
{/* <button onclick="console.log(34)">Another button</button> */}
// option-2
function makeRed(){
    document.body.style.backgroundColor ='red';
}

// option-3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick=makeBlue;

function makeBlue(){
 document.body.style.backgroundColor ='blue';
}

// option 3 another
const purpleButton = document.getElementById('make-purple');
      purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor ="purple"
      }

    //   option 4
    const pinkButton= document.getElementById('make-pink')
    pinkButton.addEventListener('click',makePink)

    function makePink(){
      document.body.style.backgroundColor ="pink"
    }
// option 4 another
    const makeGreen = document.getElementById('make-green');
     makeGreen.addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor ='green'
     })

    // option 4 Final
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor='goldenrod';
     })