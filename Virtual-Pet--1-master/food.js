class food {
    constructor (){
        this.foodStock = 0
        this.image = loadImage(images/Milk.png)
       this.lastfed;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if (this.foodStock > o){
            this.foodStock = this.foodStock = -1;
        }
    }

    getFoodStock () {
        return this.foodStock;
    }



    display(){
        
    var x=80, y=100
    ImageMode(CENTER);
    Image(this.image,720,220,70,70)

    if(this.foodStock !=0){
        for (var i=0;ci<this.foodStock; i++){
            if(i%10==0){
                x = 80
                y=y=50;
            }
            image(this.image,x,y,50,50);
            x=x=30

        }

    }

}
}
