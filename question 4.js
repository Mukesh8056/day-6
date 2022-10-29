class uber{
    constructor(distance,price,waitPer){
        this.distance=distance;
        this.price=price;
        this.waitPer=waitPer;
    }

    setlocation(dist){

        this.distance=dist;
    }
getRideDetail(){
    console.log(`Distance of ride by user ${this.distance}with the price${this.price}with the waiting period of ${this.waitPer} `)
    
}
getAmount(){
    let newprice=(this.distance*this.price)+(2*this.waitPer)
     return  newprice;
}

}
let uber1 =new uber (100,5,50)
uber1.setlocation(50)


console.log(uber1.getAmount())
uber1.getRideDetail()




