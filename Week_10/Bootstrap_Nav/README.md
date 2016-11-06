# Bootstrap Navbars:

Bootstrap’s navbars often require some base JavaScript to behave correctly. For example, if we have dropdowns in our navigation. Here is a basic navbar with a brand image on the left, and  links on the right:

```html
<!-- Default Navbar with Brand image/text on left Boostrap's NavBar is 50px unless you add a custom height yourself.-->
<nav class="navbar navbar-default">
 <div class="container-fluid">
  <div class="navbar-header">
 <!-- Logo on Left -->
  <a class="navbar-brand" href="#">
  Logo Here
  <!-- 
   Use this if you are placing a brand image here. 
   <img alt="Brand" src="..."> 
  -->
  </a>
 </div> <!--End Navbar Header -->
<!-- Links on the Right -->
  <ul class="nav navbar-nav navbar-right">
   <li><a href="#">Link</a></li>
   <li><a href="#">Link</a></li>
   <li><a href="#">Link</a></li>
  </ul>
 </div><!-- End Container Fluid -->
</nav>
```

We can also invert the color of the navbar, and fix it to the top of the page using the classes .navbar-fixed-top and  .navbar-inverse. If we fix a navbar to the top of our page, we need make sure we take the 50px high navbar into account in our layout. We should add margin-top or padding-top of at least 50px to the container below it so that the fixed navigation does not cover it.

```html
<nav class="navbar navbar-fixed-top navbar-inverse">
 <div class="container-fluid">
  <div class="navbar-header">
 <!-- Logo on Left -->
  <a class="navbar-brand" href="#">
  Logo Here
  </a>
 </div> <!--End Navbar Header -->
<!-- Links on the Right -->
  <ul class="nav navbar-nav navbar-right">
   <li><a href="#">Link</a></li>
   <li><a href="#">Link</a></li>
   <li><a href="#">Link</a></li>
  </ul>
 </div><!-- End Container Fluid -->
</nav>

<div class="container" style="padding-top:70px">Main Content of Page</div>
```

We can also add dropdowns to our navigation to save space. We can do this by adding a few extra classes to a <li> and then nesting another <ul> within:

```html
<ul class="nav navbar-nav navbar-right">
 <li><a href="#">Link</a></li>
 <li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-  haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
   <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
 </li>
</ul>
```

The anchor tag in red has a few data attributes to make the link behave like a button that opens a dropdown. It also has a little `<span>` with a custom class to make the dropdown more obvious to the user by adding a little caret. Notice the entire list item has a class of “dropdown” applied

The unordered list in blue is nested within the last list item and these will be the links shown when we open our dropdown.

## Fixed Responsive Navigation with Brand Links and Dropdowns:

This example uses the collapse plugin behind the scenes. We have already linked to this in our minified version of bootstrap.js at the bottom of the body of our page. The code highlighted in red is for our collapse button, this is only visible when the page width is small, like on a mobile device. The code in blue is all of the links/dropdowns that are going to be shown when the collapsed button is clicked. The code in purple is very important! The data-target attribute text must match the ID or CLASS of the content to be shown.

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
   <div class="container-fluid">
   <!-- Brand and toggle get grouped for better mobile display -->
     <div class="navbar-header">
       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseMe" aria-expanded="false">
       <span class="sr-only">Toggle navigation</span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       </button>
       <a class="navbar-brand" href="#">Brand</a>
     </div>
     <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="collapseMe">
     <ul class="nav navbar-nav">
       <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
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
     <ul class="nav navbar-nav navbar-right">
       <li><a href="#">Link</a></li>
       <li class="dropdown">
       <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
         <ul class="dropdown-menu">
           <li><a href="#">Action</a></li>
           <li><a href="#">Another action</a></li>
           <li><a href="#">Something else here</a></li>
           <li role="separator" class="divider"></li>
           <li><a href="#">Separated link</a></li>
         </ul>
       </li>
     </ul>
     </div>
   <!-- /.navbar-collapse -->
   </div>
 <!-- /.container-fluid -->
 </nav>
 <!-- Fluid container example -->
 <div class="container-fluid" style="padding-top:70px;">
   <div class="row">
     <div class="col-md-6"> 6 wide column</div>
     <div class="col-md-6"> 6 wide column</div>
   </div>
 </div>
 ```