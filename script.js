var userName = prompt('Hi, What is Your Name?')
userName ? document.getElementById('greeting').innerText = `Hello, ${userName}`
    : document.getElementById('greeting').innerText = `Hello!`

function shakeMagic8Ball() {
    var userQuestion = prompt('Will is your question for the mighty 8 Ball?');
    var randomNumber = Math.floor(Math.random() * 8);
    var eightBall = '';
    let responseImg;


    console.log(`${userName} has asked - ${userQuestion}`)

    console.log(randomNumber)

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            responseImg = "8-ball-it-is-certain.png";
            break;
        case 1:
            eightBall = 'It is decidely so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            responseImg = "tryagain.gif";
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            responseImg = "outlooknotsogood.gif";
        case 7:
            eightBall = 'Signs point to yes';
            break;
    }

    console.log(`The Magic Eight Ball says: ${eightBall}.`)
    document.getElementById('response-text').innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wondrous 8 ball has replied ${eightBall}`
    document.getElementById('response-image').src = responseImg;
}




