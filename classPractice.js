class animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

class dog extends animals{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
        run(){
            return `${this.name} is running at ${this.speed} KMPH`;
        }
}

const tommy = new dog("Tommy",3,45);
console.log(tommy.run());
