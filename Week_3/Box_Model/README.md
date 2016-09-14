# CSS Layout and the Box Model 

CSS allows us to take our **HTML content**, and define **styles** for how things look and how a page is layed out visually. This tutorial will go over a few **CSS properties** that effect the **box model**. Once we get these concepts under our belt, we can start worrying about colors,fonts, shadows, and more "designy" properties. 

When we looked at semantic markup and wireframes. We used tags like `<header>` or `<aside>` to help organize our content, but nothing really rendered much differently on our page. Today we will start defining styles and introducing some more HTML elements to effect the presenatation of a few simple `<div>` elements. Once we have that under out belt, we will take a look at a few common page layouts and how to style them.

---

###Class Selectors
First lets make a div with the class name thumbnail.

```html
<div class="thumbnail">
	This is a 200px X 200px thumbnail div.
</div>

```
`.thumbnail` is a nice sematic class name right? Much better than square, which just describes how it looks, but not its content or purpose. 

In our CSS lets define a background color, width, and height so we can see what we are working with. 

```css
	.thumbnail{
		background-color: #006FFF;/* hex color- just think RRGGBB! */
		width: 200px;
		height: 200px;
	}
```
Whenever we apply the class `thumbnail` to a block element on the page, it will render with a blue bg, and the dimensions of 200px*200px. Now, we can make several divs, and assign .thumbnail to apply the same style to multiple elements.

```html
<div class="thumbnail">
	This is a 200px X 200px thumbnail div.
</div>
<div class="thumbnail">
	Another thumbnail!
</div>
<div class="thumbnail">
	Now a third!
</div>
```
Notice how they are only 200x200 pixels wide, but the div won't share horizontal space with other elements. This is because divs, by default `display:block;`

* Block elements will always start a new line, and take up the full width of its parent element (or browser). Block elements can recieve a height and width.

* Inline elements do not start a new line, and only take up as much space as they require (you can stack them horizontally as long as there is enough room).

**^We need to keep this in mind when figuring our out layouts and dimensions- more on that in the next Lesson**

### Borders

Before we get these divs to stack horizontally using the float property, lets take a look at some other box model properties. Notice how we are applying several classes within the same attribute:

```html
<div class="thumbnail border">
	This has the class thumbnail and the class border. Border adds to the element's dimensions! 
</div>
```
In our CSS, we will define a border width, style, and color. We can do this with 3 separate properties:

```css
	.border{
		border-width: 2px;
		border-style: solid;
		border-color: red;
	}
```
Or we can define them all in one line like so: 

```css
	.border{
		/*border: thickness|style|color*/
		border: 2px solid red;
	}
```
We can also specify different values for each individual border:

```css
	.border{
		/*border: thickness|style|color*/
		border: 2px solid red;
		/* Make the bottom border to be 10px, dashed, and green*/
		border-bottom: 10px dashed green; 
	}
```
The border property adds to the dimensions of the 200x200 div! This last div is now 204x212 pixels. We need to keep this in mind when figuring our out page layouts and dimensions.

### Padding
Notice how the text within the div is butting right up against the edge. if we want to add a little breathing room within the div, we can do that with `padding`. Padding adds some space between the edge of an element and the content within. Check out this 3rd class:

```html
<div class="thumbnail padded">
	look what happens to the dimensions of our div with padding! we just added 10px to each side. our div is now 220x220. The text within is 10px away from the edge though! 
</div>
```
If we assign 1 value to padding, it will apply the same value to all 4 sides:
```css
	.padded{
		padding: 10px;
	}
```
Just like with border, we can define each padding separately, or group top/bottom, left right:

```css
	.padded{
		/*only apply padding to the right side*/
		padding-right: 50px;
		/*Define different values for each side top|right|bottom|left*/
		padding: 10px 2px 40px 6px;
		/*Define different values for the top+bottom|left+right
		padding: 10px 30px; 
	}
```
### Margin
So what about space around our divs? we can use `margin` for that! we can define margins values much like padding, but look how it is applied. also note that margin is added OUTSIDE of our box model. our div is still 200X200 but it has 20px spacing AROUND each if its sides.

```html
<div class="thumbnail space-around">
	This div has margin. Notice where the blue background of the div ends in relation to the margin.
</div>
```
Define uniform margins for all 4 sides:
```css
	.space-around{
		margin: 20px;
	}
```
Just like with border and padding, we can define each margin separately, or group top/bottom, left right:
```css
	.space-around{
		/*top|right|bottom|left*/
		margin: 20px 2px 10px 4px;
		/*OR* top+bottom|left+right/
		margin: 10px 20px;
	}
```
To really drive home how each of these properties effect the box model, lets apply ALL of out classes to this next div and see how it renders:

```html
<div class="thumbnail border padded space-around">Border,padding, and margin all at once!</div>
```

Take a moment to open google developer tools and inspect these elements. Cool right? 

---

### Tag Selectors
Finally let's use float to make these divs stack next to one another. Lets ditch our `.thumbnail` class, and just make a tag selector that apply to all divs on our page without applying a class to each one individually.

```css
	div{
		background-color: #006FFF;
		width: 200px;
		height: 200px;
	}
```
---

### Float
If we want block elements to stack horizonally on the page. We need to do 2 things:
1. Define dimensions for the element
2. Float the elements left or right

```css
	div{
		background-color: #006FFF;
		width: 200px;
		height: 200px;
		float:left;
	}
```
Floats will present some issues moving forward when we have container divs.  In order to fix this we can use the `clear` property. More on that in the layout section.

### ID Selectors
Lets override some of the tag and class styles on this final div. Lets leave all of the other classes there so we can see how #IDs have the strongest CSS specificty weight:

```html
<div class="thumbnail border padded space-around" id="specialDiv">This div has an ID of #specialDiv. More on CSS Specificity next!</div>
```
We define IDs with the `#` preceding the name:
```css
	#specialDiv{
		float: right;
		background-color: #FF0000;
		width: 300px;
		height: 300px;
		margin: 5px;
		padding: 15px;
		border: none;
	}
```
### In Class Exercise CSS Specificity

