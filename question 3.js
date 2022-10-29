


class person{

constructor(name,age,nationality,college,degree,location)
{

   this.name=name;
   this.age=age;
   this.nationality=nationality;
   this.college=college;
   this.degree=degree;
   this.location=location;
}

getdetail(){
    return (`Name    :${this.name}

             Age     :${this.age}

             nationality :${this.nationality}

             College :${this.college}

             Degree  :${this.degree}

             Location:${this.location}`)
}
}

let person1 =new person("Mukesh","23","Hindu","ST.Joseph's institute of technology","B.E AND MBA","Salem")


console.log(person1.getdetail())


