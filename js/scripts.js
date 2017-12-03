//backend logic
function Cat (catName, age, personality, color) {
	this.catName = catName;
	this.age = age;
	this.personalityAnswer = personality;
	this.independent = ["Staring out windows", "Hiding in boxes", "Being fed treats", "Meowing at 3AM", "Sitting on the highest shelf of the cat tree", "Rubbing around your ankles and then running away", "Watching you sleep", "Long naps"];
	this.playful = ["Attacking ankles", "Playing with toy mice", "Chasing laser pointers", "Rolling around on the floor for no reason", "Eating house plants", "Playing fetch", "Eating catnip, and then running around the house"];
	this.cuddly = ["Sitting on your lap", "Being held like a baby", "Laying on your computer when you are trying to work", "Purring", "Waking you up by putting their paw on your face", "Sleeping under the blankets", "Baking bread", "Good ear scratches"];
	this.curious = ["Trying to catch birds through windows", "Climbing onto the refridgerator", "Batting breakables off of shelves", "Greeting visitors", "Trying to escape out the front door", "Eating food you left on out on the counter", "Getting lost in walls"];
	this.catColor = color;
	this.orange = ["<img src='img/orange/orange01.jpg' width='100%'>", "<img src='img/orange/orange02.jpg' width='100%'>"];
	this.white = [];
	this.black = [];
	this.brown = [];
	this.grey = [];
	};

Cat.prototype.Random = function() {
  if (this.personalityAnswer === "cuddly") {
      return (this.cuddly[Math.floor(Math.random() * this.cuddly.length)])
  } else if (this.personalityAnswer === "curious") {
      return (this.curious[Math.floor(Math.random() * this.curious.length)])
  } else if (this.personalityAnswer === "playful") {
      return (this.playful[Math.floor(Math.random() * this.playful.length)])
  } else (this.personalityAnswer === "independent")
      return (this.independent[Math.floor(Math.random() * this.independent.length)])
};

Cat.prototype.randomImg = function() {
  if (this.catColor === "orange") {
      var orangePic = this.orange[Math.floor(Math.random() * this.orange.length)];
			$("#show-orange").html(catPic);
		}
  // } else if (this.personalityAnswer === "curious") {
  //     return (this.curious[Math.floor(Math.random() * this.curious.length)])
  // } else if (this.personalityAnswer === "playful") {
  //     return (this.playful[Math.floor(Math.random() * this.playful.length)])
  // } else (this.personalityAnswer === "independent")
  //     return (this.independent[Math.floor(Math.random() * this.independent.length)])
};

// function Color(color) {
// 	this.color = color;
// };


// Color.prototype.display = function() {
// 	if (this.color === "orange") {
// 		// var x = document.createElement("IMG");
// 		// x.setAttribute("src", "img/orange/orange01.jpg");
// 		// x.setAttribute("alt", "an orange cat");
// 	}
// 	else if (this.color === "black") {
// 		$("#show-black").html("<img src='img/black/black01.jpg' width='100%' alt='an orange cat'>");
//
// 	}
// };

//user interface logic
$(document).ready(function(){
  $("form#cat-form").submit(function(event){
    event.preventDefault();
    var personName = $("#name").val();
    var age = $("#age").val();
		var catColor = $("input:radio[name=color]:checked").val();
    var catName = $("#catName").val();
    var personalityAnswer = $("input:radio[name=personality]:checked").val();
    // var randomPersonality = new Personality(personality);
		newCat = new Cat(catName, age, personalityAnswer, catColor);
		// newCat.Random();
		newCat.randomImg();
		console.log(newCat);
		console.log(newCat.orange);
		// console.log(newCat.personality);
		// var newColor = new Color(catColor);
		// console.log(newColor);
		// newColor.display();
    // $("input:checkbox[name=topping]:checked").each(function(){
    //   newPizza.toppingPrice += parseFloat($(this).val());
    // });
    // $("input:checkbox[name=topping]:checked").each(function(){
    //   newPizza.toppings += parseFloat($(this).val());
    // });
		// console.log(age);
		// console.log(color);
    // console.log(personality);
    // console.log(randomPersonality);
    // console.log(randomPersonality.Random());


  });
});
