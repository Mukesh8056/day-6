  class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

        if(rating==null){
            return this.rating="pg";
        }else{
            return this.rating=rating;
        }
    }

    getdetail(){
        return(`tne name of movie is ${this.title} and the studio is ${this.studio}
         and  rating of the movie is ${this.rating}`)
    }
   getpg(){

         let returnVal=reating.filter((element)=>element.rating=="pg")
   }




}



let movie1=new movie("Casino Royale","Eon Productions","pg13")
console.log(movie1.getdetail())

