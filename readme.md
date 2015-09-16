# material-number-select

This component manipulates `<select>` elements containing number options into an interactive view which allows users to make a selection more quickly than using the browser's built-in interaction.

## How it works

After adding the appropriate namespaced `class`, each `<select>` element is automatically activated when the user selects the element and automatically deactivated after the user makes a selection. It consists of a CSS file and a JavaScript file. You will need to include these and the hosted [Material Design Lite master files](http://www.getmdl.io/started/index.html#download) as `<link>` and `<script>` elements in your HTML files.

You can view an example page [here](http://jsejcksn.github.io/material-number-select/). I recommend using [Chrome's Dev Tools mobile emulation](https://developer.chrome.com/devtools/docs/device-mode) to see how it shines.

*Note: Due to the way mobile browsers seem to ignore CSS `overflow` rules on the `<html>` and `<body>` elements, all of your `<body>` code must be wrapped in a containing element such as a `<div>` You don't have to make any changes to your code; the JavaScript file takes care of that automatically.*

## Usage

Download [`material-number-select.css`](material-number-select.css) and [`material-number-select.js`](material-number-select.js). Put them wherever you'd like in your site structure and add the following information to your html's `<head>`:

```` html
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.4/material.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"> <!--Optional-->
<link rel="stylesheet" href="path/to/material-number-select.css">
````

and add this just before the closing of your `</body>` element:

```` html
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.4/material.min.js"></script>
<script src="path/to/material-number-select.js"></script>
````

## Release Notes

### v 0.3.2
Automatically wrap code in container div

### v 0.3.1
Fix iOS scrolling issue.

### v 0.3.0
*Still in beta.* It's only focused on mobile at present, and there is small bug when scrolling on iOS browsers that I still need to take a look at.
