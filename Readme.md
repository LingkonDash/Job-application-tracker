Answers of Questions.

Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: Here is the differences between all these element selectors.
getElementById:
getElementById selects only one element by its unique id. Since an id is unique in the whole html document, this selector allways returns a single element or null if not found the element with the specific id.

getElementsByClassName:
getElementsByClassName selects elements by their class name. And multiple element if avilable with same class name. It can return multiple elements, and getElementsByClassName allways returns a live HTMLCollection. Live HTMLCollection updates automatically if the DOM changes.

querySelector: 
querySelector selects the first element in the DOM that matches a CSS selector. like id, class, tag, etc. this method accepts CSS selector string as parameter, and returns a single element object.

querySelectorAll:
querySelectorAll selects all elements that match a CSS selector. like id, class, tag etc. and this method also accepts CSS selector string as parameter, but this selector returns a NodeList of selected elements. and NodeList is not live like HTMLCollection.

In short getElementById selects one element by specific id getElementsByClassName select multiple elements by class name. and querySelector / querySelectorAll more flexible, select elements with CSS selectors.

Q2. How do you create and insert a new element into the DOM?

Answer: 
To create a new element in teh DOM, first I will create a element using Javascript document.createElement(). Then i can add text or set atrributes to it with setAttribute() method. After that i will store it in a variable and then i will Append that new element into existing parent elemnt.
So the basic idea is:
first create the element then customize it (text, class, id etc.) and last and final Append ir insert it into the DOM, by storing the new element in a variable makes easier to reuse whenever its needed.

Q3. What is Event Bubbling? And how does it work?

Answer:
Event Bubbling is a behavior in javaScript where an event starts from the targer element and then moves upward to its parent elements.
for example, if an event happens in a button inside a div, the event first happens on the button, then it moves to the parent div, then to the body, then to html, and so on. means the event bubbles up from the child to the parent elements. And this behavior is called Event Bubbling.

Q4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is a technique where we attach a single event listener to a parent element instead of adding too many listeners to all child elements. Because of event bubbling, the parent can catch the events happening on its children, and can react to the event.

Its useful because it takes fewer event listeners to done the work and thats why it also improves performance of overall website. It works for dynamically added elements too. It keeps the code cleaner and easier to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: The key difference between preventDefault() method and stopPropagation() method is preventDefault() stops the default behavior of an elements. for example, stopping a form from submitting or stopping a link from opening. and stopPropagation() stops the event from bubbling to parent elements. 
In simple words preventDefault() stops teh brower's default action, and stopPropagation() stops the event from going to parent elements.