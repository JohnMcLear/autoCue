# An autocue plugin for jQuery.

An autocue (also known as an teleprompter or telescript) is a display device that prompts the person speaking with an electronic visual text of a speech or script. 

# Our goal is to make autocues easy to use on the web

# About
autocue plugin for jQuery is a simple to use jQuery plugin that allows you to turn any div into an autocue'able object.  autocues are especially useful if you are reading the content out to an audience.  I often use autocues when recording videos that I am going to publish on teh net

**Online demo**<br>
Visit <http://primaryschoolict.com/autocue/> to test it live

# Example

Basic usage example
<code>$('#cue').autocue();</code>

See index.html and cue.html for examples.

# Installation

1. Include the latest jQuery (requires 1.4.2)
2. Include the autocue.js <code>&lt;script type="text/javascript" src="js/autocue.js"></script></code>
3. Include the autocue.css <code>&lt;link rel="stylesheet" href="css/autocue.css" type="text/css"/></code>
4. Initiate the plugin <code>$('#thisDiv').autocue();</code>

# Plugin Parameters

Parameters can be passed to the jQuery plugin in JSON.  The available paremeters are:
<pre>
'hoverRequired'    : 'false', // Is a hover required to see the controls?
'fontSize'        : '36px', // The font size used
'fontColor'       : '#777', // The color of the font
'controlSize'     : '', // size of the controls - will auto resize
'controlRadius'   : '20px', // the radius of the corners on the controls
'controlOpacity'  : '.9', // the opacity of the controls
'controlBGColor'  : 'lightgrey',
'controlLocation' : '"right","10px"' // The location of the controls
</pre>

Example:  $('#cue').autocue('hoverRequired':'true');

Parameters can be pased the cue.html as a "GET".  The available parameters are:
<pre>
'q'               : 'a really pointless string' // The text string you want the autocue to read out
'hoverRequired'    : 'false', // Is a hover required to see the controls?
'fontSize'        : '36px', // The font size used
'fontColor'       : '#777', // The color of the font
'controlSize'     : '', // size of the controls - will auto resize
'controlRadius'   : '20px', // the radius of the corners on the controls
'controlOpacity'  : '.9', // the opacity of the controls
'controlBGColor'  : 'lightgrey',
'controlLocation' : '"right","10px"' // The location of the controls
</pre>

Example: /cue.html?q=this%20is%20a%20string%20that%20needs%20to%20be%20at%20least%2030%20characters&hoverRequired=false

You should look at cue.html to see how this is implemented.


