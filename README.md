# FFF Easter Egg
Pure Javascript secret easter eggs for FabFitFun.

### Version 0.0.5 - October 4th, 2018
- Type a secret command where this easter egg is loaded to see these effects.

### Instructions
Either reference javascript code via script tag, or paste the code nested inside of a script tag. Google tag manager is a good way to inject this. The index.html is simply there for you to quickly test

## Goals
- Not dependant on any library.
- The entire project is self-contained and the example (index.html) can be run from the browser without a web server.
- Not dependant on any build processes like Grunt.
- Not dependant on any externally hosted resource including images. All images are byte64 encoded.
- Not dependant on any specifically designated ID for DOM nodes. It generally injects the code to the end of the body tag. 
- Heavily scoped as to not potentially affect the workings of the site.


###Fireworks
up up down down fff(up up down down f f f)
Then use your mouse and click around

###Snow (for Winter)
Type: up s n o w (press up and then type “snow”)

###Falling Leaves (For Fall)
Type: up f a l l (press up and then type “fall”)

###To Exit and Clear all Effects
Press the escape key twice.


## Credits
The underlying animations movements are from these sources. Most of them have been rewritten to remove library references (jQuery), image references (by using byte64 encoding), to provide more specific scoping, to remove dependancies on event listeners, and to turn the animation into a full screen and transparent experience while not removing ability to navigate a site. Various animations and assets have been fully tuned to be compatible with a transparent experience.

- Falling leaves: https://codepen.io/uurrnn/pen/Kuylr
- Snow: https://codepen.io/tmrDevelops/pen/PPgjwz
- Fireworks: https://github.com/paullewis/Fireworks (Apache 2.0 license)
- "Contra Key Press capture"-- Various stackoverflow and google links. Much has been rewritten to support multiple events.

## License
Apache 2.0


