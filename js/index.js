var quotes = [
  {
  quote: "It always seems impossible until its done.",
  author:"Nelson Mandela"
},
 {
  quote:"The way to get started is to quit talking and begin doing.",
  author:"Walt Disney",
 },
  {
  quote:"What you do today can improve all your tomorrows.",
  author:"Ralph Marston"
  },
  {
  quote:"It does not matter how slowly you go as long as you do not stop.",
  author:"Confucius"
  },
  {
  quote:"With the new day comes new strength and new thoughts.",
  author:"Eleanor Roosevelt"
  }
];
function random(quotes){
  var r = Math.floor((Math.random() * quotes.length) + 1);
/*  console.log(quotes[r].quote+" -"+quotes[r].author);
  */
  return quotes[r].quote+" -"+quotes[r].author;
}
//random(quotes);
$(document).ready(function(){
  var r = Math.floor((Math.random() * quotes.length) + 1);
  $("#text").html(quotes[r].quote+"<br>"+" -"+quotes[r].author);
  
});
$("#new-quote").click(function(){
    var r = Math.floor((Math.random() * quotes.length) + 1);
  $("#text").html(quotes[r].quote+"<br>"+" -"+quotes[r].author);
});