let quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  { quote: "Wubbalubbadubdub!", author: "Rick Sanchez" },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy"
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    quote:
      "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    quote:
      "Take positive care of your mind, and it would surely take positive care of your life.",
    author: "Edmond Mbiaka"
  },
  {
    quote:
      "A conscious human is driven by their conscience, not popular opinion.",
    author: " Suzy Kassem"
  },
  {
    quote:
      "If you have no confidence in self, you are twice defeated in the race of life.",
    author: "Marcus Garvey"
  },
  {
    quote:
      "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
    author: "Thomas Carlyle"
  },
  {
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    quote:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    quote:
      "And in the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote:
      "If you shoot for the stars and hit the moon, it’s OK. But you’ve got to shoot for something. A lot of people don’t even shoot.",
    author: "Confucius"
  },
  {
    quote:
      "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    quote:
      "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization.",
    author: "Gerald Weinberg"
  },
  {
    quote:
      "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    author: "Maya Angelou"
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein"
  }
]; //Quotes
let speed = 200; //Animation Speed
var curIndex; //Current Quote index

$(document).ready(() => {
  let updateTweetIntent = (quote, author) => {
    //Update Tweet Share content
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(quote + " - " + author));
  };

  let animBrackets = () => {
    //Brackets Animation function
    $("#top-bracket")
      .transition({ scale: 1.02 }, speed)
      .transition({ scale: 1 }, speed + 50);
    $("#bottom-bracket-right")
      .transition({ x: "5px", y: "5px", delay: 100 }, speed)
      .transition({ x: "0px", y: "0px" }, speed);
    $("#bottom-bracket-left")
      .transition({ x: "-5px", y: "5px", delay: 200 }, speed)
      .transition({ x: "0px", y: "0px" }, speed);
  };
  let fetchQuote = () => {
    //Quote Renderer function
    let index = Math.floor(Math.random() * quotes.length);

    if (index == curIndex)
      //Regenerate index if same as current
      index = Math.floor(Math.random() * quotes.length);

    curIndex = index; //Save current quote index

    $("#text").fadeOut(0);
    $("#author").fadeOut(0);

    $("#text")
      .text(quotes[index].quote)
      .fadeIn(speed * 2);
    $("#author")
      .text("- " + quotes[index].author)
      .fadeIn(speed * 2);

    animBrackets(); //Animate Brackets
    updateTweetIntent(quotes[index].quote, quotes[index].author); //Update tweet intent
  };

  fetchQuote(); //Fetch Quote on App Load
  $("#new-quote").click(fetchQuote); //Quote button click handler

  //New Quote Button and quote tip hover handler
  $("#new-quote").hover(function() {
    $("#new-quote,.quote-tip").toggleClass("hover-select");
  });
  
});