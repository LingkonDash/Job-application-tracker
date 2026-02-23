**Answers of Questions.**

**Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

**Answer:** Here are the differences between all these element selectors.

**getElementById:**
getElementById selects only one element by its unique id. Since an id is unique in the whole HTML document, this selector always returns a single element or null if not found the element with the specific id.

**getElementsByClassName:**
getElementsByClassName selects elements by their class name. And multiple elements if available with same class name. It can return multiple elements, and getElementsByClassName always returns a live HTMLCollection. Live HTMLCollection updates automatically if the DOM changes.

**querySelector:**
querySelector selects the first element in the DOM that matches a CSS selector, like id, class, tag, etc. This method accepts a CSS selector string as a parameter, and returns a single element object.

**querySelectorAll:**
querySelectorAll selects all elements that match a CSS selector, like id, class, tag, etc. And this method also accepts a CSS selector string as a parameter, but this selector returns a NodeList of selected elements. And NodeList is not live like HTMLCollection.

In short getElementById selects one element by specific id getElementsByClassName select multiple elements by class name. And querySelector / querySelectorAll more flexible, select elements with CSS selectors.

---

**Q2. How do you create and insert a new element into the DOM?**

**Answer:**
To create a new element in the DOM, first I will create an element using JavaScript document.createElement(). Then I can add text or set attributes to it with setAttribute() method. After that I will store it in a variable and then I will append that new element into existing parent element.
So the basic idea is:
First create the element then customize it (text, class, id etc.) and last and final append or insert it into the DOM, by storing the new element in a variable makes it easier to reuse whenever it is needed.

---

**Q3. What is Event Bubbling? And how does it work?**

**Answer:**
Event Bubbling is a behavior in JavaScript where an event starts from the target element and then moves upward to its parent elements.
For example, if an event happens in a button inside a div, the event first happens on the button, then it moves to the parent div, then to the body, then to html, and so on. Means the event bubbles up from the child to the parent elements. And this behavior is called Event Bubbling.

---

**Q4. What is Event Delegation in JavaScript? Why is it useful?**

**Answer:**
Event Delegation is a technique where we attach a single event listener to a parent element instead of adding too many listeners to all child elements. Because of event bubbling, the parent can catch the events happening on its children, and can react to the event.

It is useful because it takes fewer event listeners to do the work and that is why it also improves performance of overall website. It works for dynamically added elements too. It keeps the code cleaner and easier to manage.

---

**Q5. What is the difference between preventDefault() and stopPropagation() methods?**

**Answer:** The key difference between preventDefault() method and stopPropagation() method is preventDefault() stops the default behavior of an element. For example, stopping a form from submitting or stopping a link from opening. And stopPropagation() stops the event from bubbling to parent elements.
In simple words preventDefault() stops the browser's default action, and stopPropagation() stops the event from going to parent elements.
