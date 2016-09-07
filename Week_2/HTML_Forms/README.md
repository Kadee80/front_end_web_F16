# Intro to HTML Form Elements

Aside form text and images, sometimes we need to collect/submit data from the user. We do this with a `<form>` and various `<input>` elements.

At the very minimum, we need to nest out inputs inside of out form element:

```html
<form>
	<input type="text" />
	<input type="submit" /> 
</form>
```
The form above leaves a LOT to be desired, we have a text box and a submit button. But what kind of data are we sending? Where does it go? We need to add in a few form specific attributes to make a functional, semantically defined form.

```html
<form action="login.php" method="POST" name="sampleForm">
...
</form>
```

The form `action` attribute usually contains a script or file to process the form data. For example createuser.php or upload.asp 
In this example we just have a dummy link.

The form `method` attribute is either GET or POST. We will cover this a bit more when we dive into JavaScript. For now we need to consider a few facts about these methods:

`GET`will submit data via a URL and query string. 
for example:
`http://mysubmitscript.js?name=John&password=pass123`

YIKES! That URL can be cached in my browser, and my browser history. The whole world now has access to my username and password! In general, `GET` requests should only be used to retrieve data (Stay tuned for APIs after midterms!)

`POST` requests sumbit data as the body of a `POST` request. Think of a message with a desintation, and data in a sealed envelope.

You can read up more on [GET vs POST here](http://www.w3schools.com/tags/ref_httpmethods.asp). This doesn't concern us at week 1 of intro to web dev, but it is good to be aware of these things right?

The `name` attribute is particularly helpful if you have multiple forms on the same page, or even site. For example, `name="login"` vs `name="logout"`. This will become important when you being learning server side programming, and writing scripts to handle different form submissions. For now, just name you forms. They help describe what the form is for.

___

OK, so we have our form element filled out with the appropriate attributes. (note - if you dont have scripts to handle a `method` or `action` use a `#` as a placeholder). Let's start adding some basic form `input` types `labels` and thier corresponding `attributes`









