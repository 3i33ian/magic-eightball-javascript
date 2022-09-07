const username = 'cina'
if (username) {
  console.log('Hello ' + username)
} else if (!username) {
  console.log('hello')
}

  const userQuestion = 'do you like me?'
  console.log(userQuestion)

  const randomNumber = Math.floor(Math.random() * 8);
  console.log(randomNumber);

  const eightball= randomNumber
 /*
  if (eightball === 1){
    console.log('It is certain');
  } else if (eightball === 2){
    console.log('It is decidely so');
  } else if (eightball === 3){
    console.log('reply hazy try again');
  } else if (eightball === 4){
    console.log('Cannot predict now');
  } else if (eightball === 5){
    console.log('Do not count on it');
  } else if (eightball === 6){
    console.log('My sources say no');
  } else if (eightball === 7){
    console.log('Outlook not so good');
  } else if (eightball === 8){
    console.log('Sign point to yes');
  } else if (eightball === 0)
    console.log('Tomare omo'); */

    switch (eightball) {
    case 1:  
    console.log('It is certain');
    break;
    case 2 :
    console.log('It is decidely so');
    break;
    case  3:
    console.log('reply hazy try again');
    break;
    case  4:
    console.log('Cannot predict now');
    break;
    case  5:
    console.log('Do not count on it');
    break;
    case  6:
    console.log('My sources say no');
    break;
    case  7:
    console.log('Outlook not so good');
    break;
    case  8:
    console.log('Sign point to yes');
    break;
    case  0:
    console.log('Tomare omo');
    break;
    }
