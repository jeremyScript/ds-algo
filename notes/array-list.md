# Array List

Unlike other languages in which there are multiple types of array and you choose one based on the sort of operations you want to apply to the array, JS just has one type and that's it. However, it's useful to think beyond this and about how arrays are actually handled.

Pretend for a moment that JS has no array type and we only have objects. Can we implement the array type ourselves? Big O matters here. FOr instance, because everything is alreaady laid out sequentially in memory for an array, looking up something with an index would be a O(1). No matter how big the array list is, array lookups take the same amount of time.

Now imagine our list is 10,000 items long and we delete the 1 index. We now have to shift 9,998 items over in memory. This is going to be more painful.

Example:

```
[a,b,c,d,e,f,g]
-> delete index 3
-> array is [a,b,c,(blank),e,f,g]
-> shift elements 4,5,6 back one index
-> array is [a,b,c,e,f,g]
-> decrement length
```

So when do you choose to work with an array? When you need to do a lot of lookups. It's the best for that.

## Exercise

```
/*
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/


```
