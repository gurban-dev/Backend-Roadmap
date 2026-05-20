/*
JavaScript Prototype Exercise

Objective

Learn how JavaScript prototype inheritance works using
Object.create() and the prototype chain.


Instructions

1. Create a parent object called animal.

2. Inside animal, create a method called makeSound() that prints:
   "Some generic animal sound"

3. Create a new object called dog that inherits from animal
   using Object.create(animal).

4. Add a method directly to dog called bark() that prints:
   "Woof!"

5. Call:
   dog.bark()

6. Call:
   dog.makeSound()

7. Observe that:
   - bark() is an own method of dog
   - makeSound() is inherited through the prototype chain


Questions

1. Why can dog access makeSound() even though the method was
   not defined directly on dog?

2. What is the prototype of dog?

3. What does this return?

   Object.getPrototypeOf(dog) === animal

4. Draw the full prototype chain for dog.


Expected Prototype Chain

dog -> animal -> Object.prototype -> null
*/