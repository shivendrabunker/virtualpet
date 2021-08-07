var dog,sadDog,happyDog;
var foodObj;
var foodS,foodStock;
var fedTime,lastFed,feed ,addFrrd;




function preload()
{
  sadDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database = firebase.database()
	createCanvas(1000, 400);

  foodObj = new food();

  foodStock = database.ref('food');
  foodStock.on("value,readStock");

  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  
}


function draw() {  
  background(46,139,87);

  foodObj.display();

  fedTime = database.ref('feedTime');
  fedTime.on("value",function (data){
    lastFed = data.val();
  })

  Fill(255,255,254);
  textSize(15);
  if(lastFed >= 12){
    text("last feed: " + lastFed %12 + "PM",350,30);
  }
else if(lastFed == 0)
{
  text("last feed: 12AM ", 350,30);
}  
else{
  text("last feed: " + lastFed + "AM",350,30);
}

  drawSprites();
   
  function readStock(data){
    foodS = data.val();
    foodObj.updateFoodStock(foodS);

    function feedDog () {
      dog.addImage(happyDog);

      foodObj.updateFoodStock(foodObj.getFoodStock()-1);
      database.ref('/').update({
        food: foodObj.getFoodStock(),
        feedTime : Hour()
      })

    }


  }


}






