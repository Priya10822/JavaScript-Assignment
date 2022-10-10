class Employee{
    constructor(name,experience,division){
        this.name=name;
        this.experience=experience;
        this.division=division;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2022- this.experience;

    }
    //can use without making obj of this class
    static add(a,b){
        return a+b;
    }
   
}
// user1=new Employee("Priya", 5,"Division")
// console.log(user1.slogan());
// console.log(user1.joiningYear());
// console.log(Employee.add(4,5))

class Programmer extends Employee{
    constructor(name,experience,division,language,github){
        super(name,experience,division);
        this.language=language;
        this.github=github;
    }
    favLanguage(){
        if(this.language === 'python'){
            return 'python';

        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}
 
user2 =new Programmer("Piyush", 4 , "Lays" , "python");
console.log(user2)
console.log(user2.favLanguage());
console.log(Programmer.multiply(3,6));