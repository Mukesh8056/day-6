

class circle{

    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

getradius(){
    return(`the redius of double value is=${this.radius}`)
}
setradius(rad){
    
     void (rad===this.radius)
     return rad;
}
getcolor(){
    return (`The color of string is ${this.color}`)
      
}
setcolor(col){
    void (col===this.color)
    return col;
}


tostring(){
    return(`"circle[radius=${this.radius},color=${this.color}]"`)
}

getarea(){
         
    return(`The Area of circule is ${Math.PI*this.radius*this.radius}`)
}
getcircumference(){
    return (`The circumference os circul is${2*Math.PI*this.radius}`)
}
}

let circle1=new circle(1.0,"red")


console.log(circle1.getradius())

console.log(circle1.setradius(2))
console.log(circle1.getcolor())
console.log(circle1.setcolor("orange"))
console.log(circle1.tostring())
console.log(circle1.getarea())
console.log(circle1.getcircumference())