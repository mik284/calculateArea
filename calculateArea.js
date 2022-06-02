//Create a class with a method that calculates the area of a specified object
// i.e A circle, square or rectangle

class Rectangle{ // Define the class name
    constructor (length , width){ // defines and assigns the constructor arguments
        this.length = length
        this.width = width
    }
    calculate_area(){// defines the function inside the class
        return this.length * this.width
    }
}
const rectangle = new Rectangle(30 ,50) // create a new instance of the object
console.log(rectangle.calculate_area()); // call the function inside the class to print out the results