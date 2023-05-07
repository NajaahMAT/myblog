---
title: 'Golang Interview Questions & Answers'
date: 'January 19 2023'
excerpt: 'This is the excerpt'
cover_image: '/assets/blogs/gointerviewqa.png'
---

#### Features of Go programming

* Support for environment adopting patterns similar to dynamic languages. For example, type inference (x := 0 is valid declaration of a variable x of type int)
* Compilation time is fast.
* Inbuilt concurrency support: lightweight processes (via go routines), channels, select statement.
* Go programs are simple, concise, and safe.
* Support for Interfaces and Type embedding.
* Production of statically linked native binaries without external dependencies.
* Support for type inheritance
* Support for method or operator overloading
* Support for circular dependencies among packages
* Support for pointer arithmetic
* Support for assertions
* Support for generic programming

#### What are the 2 types of Variable Declarations in Golang?

         1. Static Type Declaration

            Eg.

            var x int64

            x = 20000

          Here we are providing assurance to the compiler that there is one variable available with the given type and name. Compiler can proceed without requiring the complete detail of the variable. The compiler needs the actual variable declaration at the time of linking of the program.

       2. Dynamic Type Declaration

          Eg. x := 20000

A dynamic type variable declaration requires the compiler to interpret the type of the variable based on the value passed to it.

#### What are lvalues and the rvalues in Go?

lvalue − Expressions that refer to a memory location is called "lvalue" expression. It can appear in the left-hand or right-hand side of an assignment.

rvalue − The term rvalue refers to a data value that is stored at some address in memory. It can only appear in the right-hand side of an assignment.

             X = 10  x- Ivalue    , 10 – rvalue       This is a valid assignment.

             Y = X  -  valid                  but      10 = 20  not valid.



 #### What is a constant?

       Fixed values that the program may not alter during its execution.

       const variable type = value

       Eg const LENGTH int = 10



#### What are Loop Control Statements?

break - It terminates a for loop or switch statement and transfers execution to the statement immediately following the for loop or switch.

continue - It causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.

goto - It transfers control to the labeled statement.

A goto statement in Go programming language provides an unconditional jump from the goto to a labeled statement in the same function.

Note − Use of goto statement is highly discouraged in any programming language because it becomes difficult to trace the control flow of a program, making the program difficult to understand and hard to modify. Any program that uses a goto can be rewritten using some other construct.

Eg:

goto label;
..
.
label: statement;

#### What is call by value in Go?

       This method copies the actual value of an argument into the formal parameter of the function. In this case, changes made to the parameter inside the function have no effect on the argument.

/* function definition to swap the values */
func swap(int x, int y) int {
   var temp int

   temp = x /* save the value of x */
   x = y    /* put y into x */
   y = temp /* put temp into y */

   return temp;
}


import "fmt"

func main() {
   /* local variable definition */
   var a int = 100
   var b int = 200

   fmt.Printf("Before swap, value of a : %d\n", a )
   fmt.Printf("Before swap, value of b : %d\n", b )

   /* calling a function to swap the values */
   swap(a, b)

   fmt.Printf("After swap, value of a : %d\n", a )
   fmt.Printf("After swap, value of b : %d\n", b )
}

//output

Before swap, value of a :100
Before swap, value of b :200
After swap, value of a :100
After swap, value of b :200

#### What is call by reference in Go?

This method copies the address of an argument into the formal parameter. Inside the function, the address is used to access the actual argument used in the call. This means that changes made to the parameter affect the argument.

package main

import (
    "fmt"
)

func main() {

var a int = 100
var b int = 200

fmt.Println("Before swap a: ", a)
fmt.Println("Before swap b: ", b)

swap(&a, &b)

fmt.Println("After swap a: ", a)
fmt.Println("After swap b: ", b)

}



func swap(x, y *int) {

var temp int

temp = *x
*x = *y
*y = temp

return
}



//output

Before swap a:  100
Before swap b:  200
After swap a:  200
After swap b:  100


#### What are local variables in Go?

Variables that are declared inside a function or a block are called local variables. They can be access inside that function or block of code.

Eg.

func main() {
   /* local variable declaration */
   var a, b, c int

   /* actual initialization */
   a = 10
   b = 20
   c = a + b

   fmt.Printf ("value of a = %d, b = %d and c = %d\n", a, b, c)
}

#### What are global variables in Go?

Global variables are defined outside of a function, usually on top of the program. Global variables hold their value throughout the lifetime of the program and they can be accessed inside any of the functions defined for the program.

package main

import "fmt"

/* global variable declaration */
var g int

func main() {
   /* local variable declaration */
   var a, b int

   /* actual initialization */
   a = 10
   b = 20
   g = a + b

   fmt.Printf("value of a = %d, b = %d and g = %d\n", a, b, g)
}

//output: value of a = 10, b = 20 and g = 30

A program can have the same name for local and global variables but the value of the local variable inside a function takes preference.

package main

import "fmt"

/* global variable declaration */
var g int = 20

func main() {
   /* local variable declaration */
   var g int = 10

   fmt.Printf ("value of g = %d\n",  g)
}

//output will be value of g = 10


#### How to calculate a length of a string in go?

Using len(string) method.

  Eg.

package main

import "fmt"

func main() {
   var greeting =  "Hello world!"

   fmt.Printf("String Length is: ")
   fmt.Println(len(greeting))
}

#### How to concatenate 2 strings / many in Go?

package main

import ("fmt" "math" )"fmt" "strings")

func main() {
   greetings :=  []string{"Hello","world!"}
   fmt.Println(strings.Join(greetings, " "))
}

#### In Golang strings are immutable, what does it means?

once a string is created the value of the string cannot be changed. Or in other words, strings are read-only. If you try to change, then the compiler will throw an error.

package main

import "fmt"

// Main function

func main() {

    // Creating and initializing a string
    // using shorthand declaration

    mystr := "Welcome to GeeksforGeeks"

    fmt.Println("String:", mystr)

    /* if you trying to change  the value of the string then the compiler will         throw an error, i.e,cannot assign to mystr[1]
       mystr[1]= 'G'
       fmt.Println("String:", mystr)
    */

}

#### How to iterate over a string?

You can iterate over string using for rang loop.

Eg.

for index, chr:= range str{
     // Statement..
}

#### How to access the individual byte of the string?:

The string is of a byte so, we can access each byte of the given string.
// Go program to illustrate how to access the bytes of the string

package main

import "fmt"

func main() {

    str := "Welcome"  // Creating and initializing a string

    // Accessing the bytes of the given string

    for c := 0; c < len(str); c++ {
        fmt.Printf("\nCharacter = %c Bytes = %v", str[c], str[c])
    }
}

//output:

Character = W Bytes = 87
Character = e Bytes = 101
Character = l Bytes = 108
Character = c Bytes = 99
Character = o Bytes = 111
Character = m Bytes = 109
Character = e Bytes = 101

#### How to create a string from the slice?:

In Go language, you are allowed to create a string from the slice of bytes.

package main

import "fmt"

func main() {

    myslice1 := []byte{0x47, 0x65, 0x65, 0x6b, 0x73}  //Creating and initializing a slice of byte
    mystring1 := string(myslice1)  // Creating a string from the slice
    fmt.Println("String 1: ", mystring1)  // Displaying the string
}

//output:

String 1:  Geeks

####  How to declare an array in Golang??

var variable_name [SIZE] variable_type

Eg.

var balance[10] float32

//initializing an array

var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

balance[5] = 150.0

//Accesing an array

Salary:= balance[6]

#### What are pointers?

A pointer is a variable whose value is the address of another variable,

var var_name *var-type

var ip *int        /* pointer to an integer */
var fp *float32    /* pointer to a float */

package main

import "fmt"

func main() {
   var a int = 20   /* actual variable declaration */
   var ip *int      /* pointer variable declaration */

   ip = &a  /* store address of a in pointer variable*/

   fmt.Printf("Address of a variable: %x\n", &a)

   /* address stored in pointer variable */
   fmt.Printf("Address stored in ip variable: %x\n", ip )

   /* access the value using the pointer */
   fmt.Printf("Value of *ip variable: %d\n", *ip )
}

package main

import "fmt"

func main() {

    var a int = 20
    var ip *int
    ip = &a

    fmt.Println(a)
    fmt.Println(&a)
    fmt.Println(ip)
    fmt.Println(*ip)
    var p *int  // since still no address assigned to this variable this is called nil pointer.

    fmt.Println(p)

}

//output:

//20
0xc0000b2000
0xc0000b2000
20
<nil>


//pointer for arrays
package main

import "fmt"

const MAX int = 3

func main() {
   a := []int{10,100,200}
   var i int
   var ptr [MAX]*int;

   for  i = 0; i < MAX; i++ {
      ptr[i] = &a[i] /* assign the address of integer. */
   }
   for  i = 0; i < MAX; i++ {
      fmt.Printf("Value of a[%d] = %d\n", i,*ptr[i] )
   }
}


//output

Value of a[0] = 10
Value of a[1] = 100
Value of a[2] = 200

//pointer on pointer

package main

import "fmt"

func main() {
   var a int
   var ptr *int
   var pptr **int

   a = 3000

   /* take the address of var */
   ptr = &a

   /* take the address of ptr using address of operator & */
   pptr = &ptr

   /* take the value using pptr */
   fmt.Printf("Value of a = %d\n", a )
   fmt.Printf("Value available at *ptr = %d\n", *ptr )
   fmt.Printf("Value available at **pptr = %d\n", **pptr)
}



//output

Value of var = 3000
Value available at *ptr = 3000
Value available at **pptr = 3000


//Passing pointers to functions

package main

import (
    "fmt"
)

func main() {
    a := 100
    b := 200
    fmt.Printf("Before swapping,  a = %d , b = %d", a, b)
    swap(&a, &b)
}

func swap(a *int, b *int) {
    var temp *int

    temp = a
    a = b
    b = temp

    fmt.Printf("\nAfter swapping,  a = %d , b = %d", *a, *b)
}

#### What is structure in golang?

It is a user-defined data type.

type struct_variable_type struct {
   member definition;
   member definition;
   ...
   member definition;
}

package main

import "fmt"

type Books struct {
   title string
   author string
   subject string
   book_id int
}

func main() {
   var Book1 Books    /* Declare Book1 of type Book */


  /* book 1 specification */
   Book1.title = "Go Programming"
   Book1.author = "Mahesh Kumar"
   Book1.subject = "Go Programming Tutorial"
   Book1.book_id = 6495407

   /* print Book1 info */
   fmt.Printf( "Book 1 title : %s\n", Book1.title)
   fmt.Printf( "Book 1 author : %s\n", Book1.author)
   fmt.Printf( "Book 1 subject : %s\n", Book1.subject)
   fmt.Printf( "Book 1 book_id : %d\n", Book1.book_id)

}

#### How to define a slice in golang?

To define a slice, you can declare it as an array without specifying its size. Alternatively, you can use make function to create a slice.

var numbers []int /* a slice of unspecified size */
/* numbers == []int{0,0,0,0,0}*/

numbers = make([]int,5,5) /* a slice of length 5 and capacity 5 */

#### Define the len()and cap() on slices?

A slice is an abstraction over array. It actually uses arrays as an underlying structure. The len() function returns the elements presents in the slice where cap() function returns the capacity of the slice (i.e., how many elements it can be accommodate).

package main

import "fmt"

func main() {
   var numbers = make([]int,3,5)
   printSlice(numbers)
}
func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}

The default value for slice is nil

package main

import "fmt"

func main() {
   /* create a slice */
   numbers := []int{0,1,2,3,4,5,6,7,8}
   printSlice(numbers)

   /* print the original slice */
   fmt.Println("numbers ==", numbers)

   /* print the sub slice starting from index 1(included) to index 4(excluded)*/
   fmt.Println("numbers[1:4] ==", numbers[1:4])

   /* missing lower bound implies 0*/
   fmt.Println("numbers[:3] ==", numbers[:3])

   /* missing upper bound implies len(s)*/
   fmt.Println("numbers[4:] ==", numbers[4:])

   numbers1 := make([]int,0,5)
   printSlice(numbers1)

   /* print the sub slice starting from index 0(included) to index 2(excluded) */
   number2 := numbers[:2]
   printSlice(number2)

   /* print the sub slice starting from index 2(included) to index 5(excluded) */
   number3 := numbers[2:5]
   printSlice(number3)

}


func printSlice(x []int){
   fmt.Printf("len = %d cap = %d slice = %v\n", len(x), cap(x),x)
}


//output:

len = 9 cap = 9 slice = [0 1 2 3 4 5 6 7 8]
numbers == [0 1 2 3 4 5 6 7 8]
numbers[1:4] == [1 2 3]
numbers[:3] == [0 1 2]
numbers[4:] == [4 5 6 7 8]
len = 0 cap = 5 slice = []
len = 2 cap = 9  slice = [0 1]
len = 3 cap = 7 slice = [2 3 4]

//append() and copy()

package main

import "fmt"

func main() {
   var numbers []int
   printSlice(numbers)

   /* append allows nil slice */
   numbers = append(numbers, 0)
   printSlice(numbers)

   /* add one element to slice*/
   numbers = append(numbers, 1)
   printSlice(numbers)

   /* add more than one element at a time*/
   numbers = append(numbers, 2,3,4)
   printSlice(numbers)

   /* create a slice numbers1 with double the capacity of earlier slice*/
   numbers1 := make([]int, len(numbers), (cap(numbers))*2)

   /* copy content of numbers to numbers1 */
   copy(numbers1,numbers)
   printSlice(numbers1)
}


func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}

//output

len=0 cap=0 slice=[]
len=1 cap=1 slice=[0]
len=2 cap=2 slice=[0 1]
len=5 cap=6 slice=[0 1 2 3 4]
len=5 cap=12 slice=[0 1 2 3 4]

package main

import "fmt"

func main() {

countryCapitalMap := map[string]string{"Srilanka": "Colombo", "India": "Delhi", "Japan": "Tokyo"}

for country := range countryCapitalMap {

fmt.Println(country, "=>", countryCapitalMap[country])

}

for country, capital := range countryCapitalMap {

fmt.Println(country, "=>", capital)

}
}

//output:

Srilanka => Colombo
India => Delhi
Japan => Tokyo

#### What is Map in Golang?

Map unique keys to values. A key is an object that you use to retrieve a value at a later date. Given a key and a value, you can store the value in a Map object. After the value is stored, you can retrieve it by using its key.

/* declare a variable, by default map will be nil*/
var map_variable map[key_data_type]value_data_type

/* define the map as nil map cannot be assigned any value*/
map_variable = make(map[key_data_type]value_data_type)

#### Recursion

If a program allows to call a function inside the same function, then it is called a recursive function call.

func recursion() {
   recursion() /* function calls itself */
}
func main() {
   recursion()
}

Recursive functions are very useful to solve many mathematical problems such as calculating factorial of a number, generating a Fibonacci series, etc.

#### What is Factorial?

Factorial of a number is the product of all numbers starting from 1 up to the number itself. While calculating the product of all the numbers, the number is itself included. Factorial of a number is calculated for positive integers only. The factorial of 0 is always 1 and the factorial of a negative number does not exist.

package main

import "fmt"

// Main function

func main() {
  var i int = 5
  fmt.Println(factorial(i))
}

func factorial(i int)int{
   if i <= 1{
     return 1
   }else {
     return i * factorial(i - 1)
   }
}

#### What is Fibonacci series in go?

The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.

package main

import "fmt"

// Main function

func main() {
    for i:=0; i < 10; i++{
        fmt.Println(fibonaci(i))
    }
}

func fibonaci(i int)int{
   if i == 0{
      return 0
   }else if i == 1{
      return 1
   }else{
      return fibonaci(i-1) + fibonaci(i-2)
   }
}


#### Interfaces in golang

Go programming provides another data type called interfaces which represents a set of method signatures. The struct data type implements these interfaces to have method definitions for the method signature of the interfaces.

/* define an interface */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]
}

/* define a struct */
type struct_name struct {
   /* variables */
}

/* implement interface methods*/
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* method implementation */
}
...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* method implementation */
}

Example:

package main

import (
    "fmt"
    "math"
)

type shape interface {
    area() float64
}

type circle struct {
    Radius float64
}

type rectangle struct {
    Length float64
    Width  float64
}

func (c circle) area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (r rectangle) area() float64 {
    return r.Length * r.Width
}

func getArea(s shape) float64 {
    return s.area()
}

func main() {
    c := circle{
        Radius: 7,
    }

    fmt.Printf("Area of the Circle is %v", getArea(c))

    r := rectangle{
        Length: 10,
        Width:  5,
    }

    fmt.Printf("\nArea of the Rectangle is %v", getArea(r))

}



#### How go error handling works?

Go programming provides a pretty simple error handling framework with inbuilt error interface type of the following declaration

type error interface {
   Error() string
}

Functions normally return error as last return value. Use errors.New to construct a basic error message.

package main

import (
    "errors"
    "fmt"
    "math"
)

func sqrt(n float64) (float64, error) {
    if n < 0 {
        return 0, errors.New("contain Negative Value")
    } else {
        return math.Sqrt(n), nil
    }
}

func main() {
    n := 10.0

    sqrt, err := sqrt(n)

    if err != nil {
        fmt.Println(err)
    }

    fmt.Println("Sqrt Value of No ", n, " is: ", sqrt)
}


#### Does Go support type inheritance?
Not supporting for type inheritance

#### Does Go is an Object-Oriented Language?
Object-oriented programming is a paradigm that works with objects and has 3 properties – Inheritance, Encapsulation, and Polymorphism. Go also supports OOP, but it’s not like other object-oriented languages. It doesn’t support classes.

#### What is inheritance?
In OO-languages inheritance refers to the property that a class can have properties of a superclass and thus inherits it is called inheritance. An example would be a bird class that will be the superclass, whereas the duck class will be the subclass inheriting superclass in that sense that a duck is a bird. This is inheritance in action

#### How go achieves inheritance?
In Go to achieve inheritance, structs are used such that the anonymous field property can be used to extend a struct to another struct. This is the simplest way inheritance can be done in Go.

package main

import "fmt"

type Polygon struct {
    Sides int
}

func (p *Polygon) NSides() int {
    return p.Sides
}

type Triangle struct {
    Polygon // anonymous field
}

func main() {
    t := Triangle{
        Polygon{
           Sides: 3,
        },
    }

    fmt.Println(t.NSides()) // 3
}

#### What is polymorphism?
In Object-Oriented Programming, an object can behave like another object. This property is called polymorphism.

#### How does go achieves polymorphism?
In GoLang, polymorphism is achieved mainly using interfaces. A type implementing a function defined in interface becomes the type defined as an interface. This is the property that makes polymorphism achievable in Go.

package main

import "fmt"

// declare interface
type Dog interface {
    Bark()
}

// declare struct
type Dalmatian struct {
    DogType string
}

// implement the interface
func (d Dalmatian) Bark() {
    fmt.Println("Dalmatian barking!!")
}

func MakeDogBark(d Dog) {
    d.Bark()
}

func main() {
    d := Dalmatian{"Jack"}
    MakeDogBark(d)   // Dalmatian barking!!
}

Note: In the code above, the struct Dalmatian implements the Dog interface. Thus, the struct becomes the type Dog and so that it can be passed in that function.

Now, we can simply add any type and implement that interface and the type will behave as that interface. That is polymorphism. An object taking many different forms.

#### Does Go support operator overloading?
No

####  What is Overloading?
Overloading is a concept used to avoid redundant code where the same method name is used multiple times but with a different set of parameters. The actual method that gets called during runtime is resolved at compile time, thus avoiding runtime errors. Overloading provides code clarity, eliminates complexity, and enhances runtime performance.

#### Does Go support method overloading?
 No

#### What is Method Overloading?
in which we can have two or more methods functions that have the same name but the parameters that they take as input values are different.

#### Does Go support pointer arithmetic?
No

#### What is Pointer Arithmatic?
perform arithmetic operations on pointer variable just as you can a numeric value. As we know that, a pointer in C is a variable which is used to store the memory address which is a numeric value. The arithmetic operations on pointer variable effects the memory address pointed by pointer.

#### Why is there no pointer arithmetic in golang?
Safety. Without pointer arithmetic it's possible to create a language that can never derive an illegal address that succeeds incorrectly. Compiler and hardware technology have advanced to the point where a loop using array indices can be as efficient as a loop using pointer arithmetic. Also, the lack of pointer arithmetic can simplify the implementation of the garbage collector.

#### Does Go support generic programming?
No

#### What is Generic Programming?

Generic Programming enables the programmer to write a general algorithm which will work with all data types. It eliminates the need to create different algorithms if the data type is an integer, string or a character.

The advantages of Generic Programming are
* Code Reusability
* Avoid Function Overloading
* Once written it can be used for multiple times and cases
  Eg. In C++

#include <iostream>

using namespace std;

// One function works for all data types.
// This would work even for user defined types
// if operator '>' is overloaded

template <typename T>

T myMax(T x, T y)

{
    return (x > y) ? x : y;
}

int main()
{
    // Call myMax for int
    cout << myMax<int>(3, 7) << endl;

    // call myMax for double
    cout << myMax<double>(3.0, 7.0) << endl;

    // call myMax for char
    cout << myMax<char>('g', 'e') << endl;

    return 0;
}

Output:7
7
g

#### Can you declared multiple types of variables in single declaration in Go?
Yes, Variables of different types can be declared in one go using type inference.
var a, b, c = 3, 4, "foo"

#### How to print type of a variable in Go?
We can achieve this in 3 ways.
* Using fmt.Printf(“%T”, var_name)
* Using reflect package.
* Type Assertion

Following code prints the type of a variable −
var a, b, c = 3, 4, "foo"
fmt.Printf("a is of type %T\n", a)

package main

import (
    "fmt"
    "reflect"
)

func main() {
    tst := "string"
    tst2 := 10
    tst3 := 1.2

    fmt.Println(reflect.TypeOf(tst))
    fmt.Println(reflect.TypeOf(tst2))
    fmt.Println(reflect.TypeOf(tst3))
}

#### Can go return multiple values from a function?
A Go function can return multiple values. For example −

package main
import "fmt"

func swap(x, y string) (string, string) {
   return y, x
}

func main() {
   a, b := swap("Mahesh", "Kumar")
   fmt.Println(a, b)
}

#### What do you mean by function as value in Go?
Go programming language provides the flexibility to create functions on the fly and use them as values. In the following example, we've initialized a variable with a function definition. Purpose of this function variable is just to use inbuilt math.sqrt() function.

package main

import ("fmt" "math")

func main(){
   /* declare a function variable */
   getSquareRoot := func(x float64) float64 {
      return math.Sqrt(x)
   }

   /* use the function */
   fmt.Println(getSquareRoot(9))
}

#### What are the function closures?
In Golang, the closure function is an anonymous nested function that has access to variables defined outside the body/scope of the closure. A closures function in Go can hold a unique state of its own. The state becomes isolated as we create new instances of the function.

package main

import "fmt"

func main() {

    input := "Suresh"

    msg := displayMessage(input) //calling outer function

    fmt.Println(msg())  //calling inner function
}

// func()string{} îs closure function returned from displayMessage()

// outer function
func displayMessage(msg string) func() string {
    //annonymus function will return the string value
    return func() string {
        return "Hello " + msg
    }
}

#### What are the differences between functions and methods in golang?
Functions in Golang are a block of code that take a few parameters as input and produce some output. If we pass in the same input to a function, it will produce the same output as always.

Eg.
package main

import (
   "fmt"
)

func height(x, y int) int {
   return 2 * (x + y)
}

func main() {
   x, y := 10, 20
   res := height(x, y)
   fmt.Println("The result is:", res)
}

A method in Golang is like a function that needs a receiver to get invoked. In simple words, a method is a function that is defined on struct types.

Eg.

package main

import (
   "fmt"
)

type shape struct {
   x int
   y int
}

func (s shape) height() int {
   return 2 * (s.x + s.y)
}

func main() {
   res1 := shape{x: 10, y: 20}
   fmt.Println("The result1 is:", res1.height())
}

####  Explain the purpose of the function Printf()?
Prints the formatted output

#### What is the difference between actual and formal parameters?

The parameters sent to the function at calling end are called as actual parameters while at the receiving of the function definition called as formal parameters.

#### What is the difference between variable declaration and variable definition?
Declaration associates type to the variable whereas definition gives the value to the variable.

#### Explain modular programming.
Dividing the program in to sub programs (modules/function) to achieve the given task is modular approach. More generic functions definition gives the ability to re-use the functions, such as built-in library functions.

#### What is a token in Go?
A Go program consists of various tokens and a token is either a keyword, an identifier, a constant, a string literal, or a symbol.

#### Which key word is used to perform unconditional branching?
goto

#### What is an array?
Array is collection of similar data items under a common name

#### What is a nil pointer in go?
Go compiler assign a Nil value to a pointer variable in case you do not have exact address to be assigned. This is done at the time of variable declaration. A pointer that is assigned nil is called a nil pointer. The nil pointer is a constant with a value of zero defined in several standard libraries.

#### What is a pointer on pointer?
It's a pointer variable which can hold the address of another pointer variable. It de-refers twice to point to the data held by the designated pointer variable.

var a int
var ptr *int
var pptr **int
a = 3000
ptr = &a
pptr = &ptr
fmt.Printf("Value available at **pptr = %d\n", **pptr)

Note: Therefore 'a' can be accessed by **pptr.

#### What is structure in Go?
Structure is another user defined data type available in Go programming, which allows you to combine data items of different kinds.

#### How to get a sub-slice of a slice?
Slice allows lower-bound and upper bound to be specified to get the subslice of it using[lower-bound:upper-bound].

#### What is range in Go?
The range keyword is used in for loop to iterate over items of an array, slice, channel or map. With array and slices, it returns the index of the item as integer. With maps, it returns the key of the next key-value pair.

#### How to delete an entry from a map in Go?
delete() function is used to delete an entry from the map. It requires map and corresponding key which is to be deleted.

#### What is type casting in Go?
Type casting is a way to convert a variable from one data type to another data type. For example, if you want to store a long value into a simple integer then you can type cast long to int. You can convert values from one type to another using the cast operator as following −

type_name(expression)

#### What are interfaces in Go?
Go programming provides another data type called interfaces which represents a set of method signatures. struct data type implements these interfaces to have method definitions for the method signature of the interfaces.

#### What is the Channels in golang?
A channel in Golang is a medium through which Goroutines can communicate with each other. In other words, a channel is a pipe that allows Goroutine to perform certain operations like reading/writing, etc.

#### What is concurrency in Golang?
Concurrency is the ability of different segments or units of a program or an algorithm to execute independently without affecting the terminal(final) output of the program.
When a program is broken down into different segments say “n “no of segments or parts.
The final output should not depend on how these “n” segments are executed.

#### Benefit of concurrency
Concurrency allows the parallel execution of concurrent units.
It improves the overall speed/performance of execution.

#### What is a thread in Golang?
In go programming language Goroutine is a lightweight thread that is controlled by go runtime. Goroutine is similar to threads as in any other programming language. Go threads are also known as “Green threads”. Green threads are simply threads that are not managed by an underlying OS (operating system) but are managed either by a user program or user library or in some other ways.

#### What is Goroutine in Golang?
In Golang concurrently executing actions in a program is known as Goroutines. Besides using huge and resource-intensive threads, Golang creates an abstraction of a thread that is called a Goroutine. Go runtime has a scheduler that maps Goroutine to OS threads for a certain period of time.

Note: Programmers do not interact with low-level threads but do interact with high-level Goroutine provided by Golang runtime.

#### What is the difference between Threads & Goroutine?

<table class="data">
  <tr>
    <th>Thread</th>
    <th>Goroutine</th>
  </tr>
  <tr>
    <td>Threads are managed by operating systems.</td>
    <td>Goroutine methods are managed by Golang runtime</td>
  </tr>
  <tr>
     <td>Thread is dependent on hardware</td>
     <td>Goroutine is independent of hardware.</td>
  </tr>
  <tr>
    <td>Thread does not have an easy communication medium.</td>
    <td>Goroutines have an easy communication medium known as a channel.</td>
  </tr>
  <tr>
    <td>Threads do not have growable segmented stacks.</td>
    <td>Goroutine has growable segmented stacks.</td>
  </tr>
  <tr>
    <td>Threads are preemptively scheduled.</td>
    <td>Goroutines are co-operatively scheduled.</td>
  </tr>
  </table>

#### How to introduce Goroutine in Golang?
func  main (){
    go f(a,b)  //go keyword
}

func  f(a,b){}

Eg.

package main

import "fmt"

func main() {
    fmt.Println("Go Programme Starts")
    go hello(1)
    fmt.Println("Go Programme Ends")
}

func hello(word int) {
    for i := 0; i < 5; i++ {
        fmt.Println(word, "Hello")
    }
}

//output
Go Programme Starts
Go Programme Ends

Note:
The main() function or main Goroutine terminated before hello(1) function execution. To avoid this we have to make the main Goroutine sleep for some time.

time.Sleep(100 * time.Millisecond)

//output
Go Programme Starts
Go Programme Ends
1 Hello
1 Hello
1 Hello
1 Hello
1 Hello

Eg:

package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("Go Programme Starts")
    msg := "learn eTutorial"
    go func() { //anonymous function
        fmt.Println(msg)
    }()

    fmt.Println("Go Programme Ends")
    time.Sleep(100 * time.Millisecond)
}

func hello(word int) {
    for i := 0; i < 5; i++ {
        fmt.Println(word, "Hello")
    }
}

//output:
Go Programme Starts
Go Programme Ends
learn eTutorial

Eg:

package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("Go Programme Starts")
    msg := "learn eTutorial"
    go func() { //anonymous function
        fmt.Println(msg)
    }()

    msg = "Hello users"
    fmt.Println("Go Programme Ends")
    time.Sleep(100 * time.Millisecond)
}

func hello(word int) {
    for i := 0; i < 5; i++ {
        fmt.Println(word, "Hello")
    }
}

//output:
Go Programme Starts
Go Programme Ends
Hello users

#### What is a race condition in Goroutine?
The same code is accessed from the main Goroutine as well as for the Goroutine in the anonymous function.

Note: In the general race, conditions are not safe to use inside programs because it results in so many bugs or errors.

#### What are the advantages of Goroutine?
- Goroutine can be started with a very small stack space.
- Goroutine can be easily created or destroyed
- Goroutine can be reallocated quickly.
- Go applications can have 1000s of Goroutines.

#### How to declare a channel in Golang?
Keyword ‘chan’ used to declares a channel

var <variable name> chan <data type>

Eg.  var c chan int

Note: Default value of channel when declared is nil same as we discussed in Goroutine

#### How to add channels between Goroutines?
In Golang a channel is a mechanism that allows sharing of data between Goroutine.

Through the channels, Goroutine transfers their data or resources, where one Goroutine writes data into the channel and another Goroutine will read from the same channel.

package main

import (
    "fmt"
)

func main() {
    fmt.Println("Learn eTutorials")

    msgs := make(chan int) //instantiating a channel

    defer close(msgs) //to close the channel.The act of closing stops the Goroutines from sending or receiving to that channel.

    go SendMsg(msgs)

    msg := <-msgs  // receive the value from SendMsg in order to receive, receive operator is used which blocks until a value is sent to that channel.

    fmt.Println(msg)
}

func SendMsg(c chan int) {
    c <- 0  //send operator ( <- ) is defined to send value to this channel.
}

//output:
Learn eTutorials
0

#### What are the types of channels in Golang?
1. Unbuffered channels
2. Buffered channels

#### What is Unbuffered Channels in Golang?
When a channel is created without specifying the size of the channel technically it is known as an unbuffered channel.

In an unbuffered channel, communication succeeds between Goroutines only when both sender and receiver are ready.

In a traditional channel in any go program, there may be some unexpected behavior.

In an unbuffered channel whenever a Goroutine says A sends a value to a channel that Goroutine A will be blocked until the value is received from that channel.

Eg.

package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("Learn eTutorials")

    msgs := make(chan string) //instantiating a channel

    defer close(msgs)         //to close the channel.The act of closing stops the Goroutines from sending or receiving to that channel.

    go SendMsg(msgs)

    go SendMsg(msgs)

    msg := <-msgs // receive the value from SendMsg in order to receive, receive operator is used which blocks until a value is sent to that channel.

    fmt.Println(msg)
}

func SendMsg(c chan string) {
    fmt.Println("Start Goroutine Execution")
    time.Sleep(1 * time.Second)
    c <- "Hello World" //send operator ( <- ) is defined to send value to this channel.
    fmt.Println("Finished Goroutine Execution")
}

Note: In this part of the code two print statements ("start Goroutine execution") & ("finished Goroutine execution") are defined. Sleep statement to allow Goroutine to sleep for some seconds. After the send operation to the channel i.e. c <-"hello world" prints that Goroutine execution is finished.
Also duplicated the go SendMsg(msgs) statement. There are two Goroutines that are trying to send the same channel.
There is only one receive statement     msg := <-msgs  to the channel in the above program so only one of the Goroutine is expected to finish its execution. Only one Goroutine will execute and print the last print statement.

The second Goroutine will not finish its execution gets blocked within the main function. The program will terminate before the second Goroutine finishes its execution.


