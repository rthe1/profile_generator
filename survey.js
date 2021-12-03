const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerArr = []

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answerArr.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answerArr.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answerArr.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answerArr.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          answerArr.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            answerArr.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answerArr.push(answer);
              rl.close();
              
              console.log(`They call me ${answerArr[0]}. I love ${answerArr[1]}. My favourite type of music is ${answerArr[2]}. My favourite meal of the day is ${answerArr[3]}. I can never turn down ${answerArr[4]}. I love to watch and play ${answerArr[5]}. If I could have any superpower it would be ${answerArr[6]}`)


            });


          });


        });


      });


    });


  });


  

})

