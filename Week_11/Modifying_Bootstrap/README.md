# Customizing Bootstrap:

Today’s class is going to be a doosey! We are going to start with our jQuery based carousel, and modify Bootstrap’s base CSS to create something more custom and unique.

Before we begin, do a git pull so you have the starter folder.

## Color Palette:

When coming up with the color palette for today’s exercise, i came across a cool generator that will help you choose colors based on an uploaded image. This is the link to the palette for today’s class:

[Color Palette Generator](https://coolors.co/app/0a0706-766832-4c4c35-fef3e7-cab592)

## Bootstrap Image Classes 

We are going to use a few built in image helper classes from bootstrap moving forward:

[Bootstrap Image CSS](http://getbootstrap.com/css/#images)

## Navigation:

Here is a basic inverted fixed navbar for us to modify. Brand Text is on the left, dummy links are on the right.
```html
<nav class="navbar navbar-fixed-top navbar-inverse brown-shad">
 <div class="container-fluid">
 <!-- Brand and toggle get grouped for better mobile display -->
 <div class="navbar-header">
 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
 <span class="sr-only">Toggle navigation</span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 </button>
 <a class="navbar-brand" href="#">Mystic Goats</a>
 </div>
 <!-- End Brand and Toggle Group -->
 <!-- Begin Grouping Right Nav Links -->
 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 <ul class="nav navbar-nav navbar-right">
 <li class="active">
 <a href="#">Link <span class="sr-only">(current)</span></a>
 </li>
 <li><a href="#">Link</a></li>
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
 <ul class="dropdown-menu">
 <li><a href="#">Action</a></li>
 <li><a href="#">Another action</a></li>
 <li><a href="#">Something else here</a></li>
 <li role="separator" class="divider"></li>
 <li><a href="#">Separated link</a></li>
 <li role="separator" class="divider"></li>
 <li><a href="#">One more separated link</a></li>
 </ul>
 </li>
 </ul>
 </div>
 <!-- End Grouping Nav Links-->
 </div>
 </nav>
 ```

## Modifying CSS:

Today in class we are going to look through Bootstrap’s non minified CSS and find all of the classes we need to modify. The classes we are going to modify/search for are:

### Carousel Layout, and Colors:
```
.carousel-inner
.carousel-indicators li
.carousel-indicators .active
.carousel-caption
.carousel-caption h3
.carousel-caption p
```

### Changing the Height of the Navbar
```
.navbar-fixed-top
.navbar-nav > li > a
.navbar-brand
```

### Changing the Color and Fonts of the Navbar

```
.navbar-inverse
.navbar-inverse .navbar-brand
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus
.navbar-inverse .navbar-text
.navbar-inverse .navbar-nav > li > a
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus
```