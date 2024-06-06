function filterStrObj(string,word){
    const result = string.split(' ')
                    .filter(str => !str.includes(word))
                    .join(' ');
    
    console.log(result);
    return result;

}

function bubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}


//Person constructor
function Person() {}

//added initialize function to Person
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

//Declartion of Teacher constructor
function Teacher(){}

//Teacher extends Person
Teacher.prototype = new Person();
//Add teach() to Teacher
Teacher.prototype.teach = function(subject){
    return(`${this.name} teaching us now ${subject}`);
}

var teacherObj = new Teacher();
teacherObj.initialize("Michael", 35);
console.log(teacherObj.teach("WAP"));


