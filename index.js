const myList = document.getElementById("myList");


class ListBinding {
    constructor(element){
        this.listElement = element;
        this.textList = [
            "dcode",
            "is", 
            "not bad"
        ]
    }
    static createListItem(text){
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }
    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }
    add(text){
        this.textList.push(text);
        this.update();
    }
    remove(index){
        this.textList.splice(index, 1);
        this.update()
    }
}

const listBinding = new ListBinding(myList)
listBinding.add("akihiko")
listBinding.remove(1);
listBinding.update();

class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
   describe(){
    console.log(`I am ${this.name} and I am ${this.age} years old`)
   }
}
class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience){
        super(_name, _age);

        this.yearsOfExperience = _yearsOfExperience;
    }
    code(){
        console.log(`${this.name} has been coding for ${this.yearsOfExperience} years`)
    }
}
let person1 = new Person("Aki", 48)
person1.describe()
let coder1 = new Programmer("Aki", 0, 7)
coder1.code()