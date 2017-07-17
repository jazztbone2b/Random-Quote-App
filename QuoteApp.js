window.onload = generateNewQuote();
  //generates a new quote
  function generateNewQuote(){ 
    var randomQuote = ["Hipness is not a state of mind, it's a fact of life.",  "Well if I could play like Wynton, I wouldn't play like Wynton.", "Music washes away the dust of every day life.", "Sometimes you need to stand with your nose to the window and have a good look at jazz. And I've done that on many occasions.", "You can play a shoestring if you're sincere.", "I'll play it first & tell you what it is later.", "The first time I heard Bird play, it hit me right between the eyes.", "Stop before you're done.", "However it goes, I'll just keep playing. That's where the basic satisfaction is at.", "A good quartet is like a good conversation among friends interacting to each other's ideas.", "The sign of a mature musician is knowing what not to play.", "If you can't play the Blues you might as well hang it up.", "Jazz is restless. It won't stay put & it never will.", "Jazz speaks for life. This is triumphant music.", "Talking about music is like dancing about architecture.", "It's taken me all my life to learn what not to play."];
  
    
    var newQuote = randomQuote[Math.floor(Math.random() * randomQuote.length)]; 
  //assign a random quote
    document.querySelector('.quoteText').innerHTML = newQuote;
    
    //assigns the quote's author to the respective quote
    if(newQuote === randomQuote[0]){
      document.querySelector('#author').innerHTML = "-Cannonball Adderly";
    } else if(newQuote === randomQuote[1]){
      document.querySelector('#author').innerHTML = "-Chet Baker";
    } else if(newQuote === randomQuote[2]){
      document.querySelector('#author').innerHTML = "-Art Blakey";
    } else if(newQuote === randomQuote[3]){
      document.querySelector('#author').innerHTML = "-J.J. Johnson";
    } else if(newQuote === randomQuote[4]){
      document.querySelector('#author').innerHTML = "-John Coltrane"
    } else if(newQuote === randomQuote[5]){
      document.querySelector('#author').innerHTML = "-Miles Davis"
    } else if(newQuote === randomQuote[6]){
      document.querySelector('#author').innerHTML = "-John Coltrane"
    } else if(newQuote === randomQuote[7]){
      document.querySelector('#author').innerHTML = "-Miles Davis"
    } else if(newQuote === randomQuote[8]){
      document.querySelector('#author').innerHTML = "-Kenny Dorham"
    } else if(newQuote === randomQuote[9]){
      document.querySelector('#author').innerHTML = "-Stan Getz"
    } else if(newQuote === randomQuote[10]){
      document.querySelector('#author').innerHTML = "-Dizzy Gillespie"
    } else if(newQuote === randomQuote[11]){
      document.querySelector('#author').innerHTML = "-Dexter Gordon"
    } else if(newQuote === randomQuote[12]){
      document.querySelector('#author').innerHTML = "-J.J. Johnson"
    } else if(newQuote === randomQuote[13]){
      document.querySelector('#author').innerHTML = "-Martin Luther King, Jr."
    } else if(newQuote === randomQuote[14]){
      document.querySelector('#author').innerHTML = "-Thelonious Monk"
    } else if(newQuote === randomQuote[15]){
      document.querySelector('#author').innerHTML = "-Dizzy Gillespie"
    }
    
    //copies the text shown in newQuote and retweets it in a new window
    $('#tweetMe').attr(
'href', 'https://twitter.com/intent/tweet?hashtags=jazzquotes&text=' + newQuote + " " + document.querySelector('#author').innerHTML
) 
    //shares a link to the app to facebook
    $('#shareMe').attr(
    'href', 'https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/jazztbone2b/pen/WOPQPG/?editors=0010')
}

//randomly changes the color
function changeBackgroundColor(){ 
  var backgroundColor = '#';
  
  //colors to choose from
  var colorChoices = ['e27fef', 'f4d558', '57f462', '57f4f4', '579df4', 'f45757', '5d6496', '965d5d', '5d9691', '820101', '203f70', '702065', '702020', '724747', '47724c', 'a07d7d', '827554', '82536f', 'c64141', 'c3c641', '41c65d', '41c6a4', '417ac6', 'c64141', 'c66641'];
    
  //assign a random color
  backgroundColor += colorChoices[Math.floor(Math.random() * colorChoices.length)];
  
  //sets the color for each target element
  document.querySelector('#randomColor').style.background = backgroundColor;
  document.querySelector('.nextQuote').style.background = backgroundColor;
  document.querySelector('.quoteText').style.color = backgroundColor;
  document.querySelector('.fa-facebook').style.background = backgroundColor;
  document.querySelector('.fa-twitter').style.background = backgroundColor;
  document.querySelector('#author').style.color = backgroundColor;
}

//creates a simple fade animation using jQuery
$('button').click(function(){
  $('.nextQuote').fadeOut(1);
  $('.nextQuote').fadeIn(999);
  $('.quoteText').fadeOut(1);
  $('.quoteText').fadeIn(999);
  $('.fa-facebook').fadeOut(1);
  $('.fa-facebook').fadeIn(999);
  $('.fa-twitter').fadeOut(1);
  $('.fa-twitter').fadeIn(999);
  $('#author').fadeOut(1);
  $('#author').fadeIn(999);
})


