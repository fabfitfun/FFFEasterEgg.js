  function onFFFEasterEgg() {
      var input = '';
      //https://keycode.info/
      var key1 = '3883787987'; // up-snow
      var key2 = '3870657676'; // up-fall
      var key3 = '38384040'; // up-fireworks
      var key4 = '2727'; // clear
      document.addEventListener('keydown', function(e) {
          input += ("" + e.keyCode);
          //console.log("input:" + input);
          if (input === key1) {
              fff_easter_snow();
          }
          if (input === key2) {
              fff_easter_fall();
          }
          if (input === key3) {
              fff_easter_fireworks();
          }
          if (input === key4) {
              fff_easter_clear();
          }
          if (!key1.indexOf(input) || !key2.indexOf(input) || !key3.indexOf(input) || !key4.indexOf(input))
              return;
          input = ("" + e.keyCode);
      });
  }

  function fff_easter_clear() {
      console.log("🥚🐇 - Clearing");
      var tempFFFElement1 = document.getElementById("fff_easter_fireworkscanvas");
      var tempFFFElement2 = document.getElementById("leaves");
      var tempFFFElement3 = document.getElementById("fffEasterCanvas");
      if (tempFFFElement1 === null) {
        // i might do something with this later.
      } else {
          document.body.removeChild(tempFFFElement1);
      }
      if (tempFFFElement2 === null) {

      } else {
          document.body.removeChild(tempFFFElement2);
      }
      if (tempFFFElement3 === null) {
      } else {
          document.body.removeChild(tempFFFElement3);
      }
  }


  function fff_easter_fireworks() {
      console.log("🎆");

      



      var fffEasterFireworksElement = document.createElement("aside");
      fffEasterFireworksElement.setAttribute("id", "ffflibrary");
      fffEasterFireworksElement.setAttribute("style", "display:none;");
      var fff_easter_bigglow = document.createElement("img");
      fff_easter_bigglow.setAttribute("id", "big-glow");
      fff_easter_bigglow.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAyNi8xMi8xMcZdNcsAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAw0lEQVQokZXSQUvDQBAF4K8SUgjBSCiFQo89+f9/izfRQ0CQElRCoSWgl7cQcxH3Mrvz5s28mdkNvv3jVKv3DWdMmIO32KFeE74w4B2fIdfo8IEj7qtF5gGvsSOu2KLHJXGnQjgn84AXvCWowSExDR4KYYqMMcHPuffBu+DTXRxzZF2TecRT7CX+G+ZCqNLgNqV7PMY28deoiqQ2ZfuF5sOihz54Wwi7jK5Mo1tN6Yg9doVQx1mmsd7DPni98ftr/LnpH5OqNW1n169XAAAAAElFTkSuQmCC");
      var fff_easter_smallglow = document.createElement("img");
      fff_easter_smallglow.setAttribute("id", "small-glow");
      fff_easter_smallglow.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAyNi8xMi8xMcZdNcsAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAATUlEQVQImV3MPQ2AMBQE4K+EnaUOcFAROEAlTjohoDioh7K8JoRbLveb/DDGACnEhoKMjrpGseDAjgeWCHKYZ3CeQY/mFdzmVf0sG+4XEhkRBqSyQ+IAAAAASUVORK5CYII=");
      fffEasterFireworksElement.appendChild(fff_easter_bigglow);
      fffEasterFireworksElement.appendChild(fff_easter_smallglow);
      document.body.appendChild(fffEasterFireworksElement);
      window.requestAnimFrame = (function() {
          return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(callback) {
                  window.setTimeout(callback, 1000 / 60);
              };
      })();
      /**
       * Copyright 2011 Paul Lewis. All rights reserved.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var Fireworks = (function() {
          // declare the variables we need
          var particles = [],
              mainCanvas = null,
              mainContext = null,
              fireworkCanvas = null,
              fireworkContext = null,
              viewportWidth = 0,
              viewportHeight = 0;
          /**
           * Create DOM elements and get your game on
           */
          function initialize() {
              // start by measuring the viewport
              onWindowResize();
              // create a canvas for the fireworks
              mainCanvas = document.createElement('canvas');
              mainContext = mainCanvas.getContext('2d');
              // mainCanvas.setAttribute("id", "fffEasterFireworks");
              mainCanvas.setAttribute("style", "position: fixed;opacity:0.3;display: hidden;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;z-index: 9999;pointer-events:none; -webkit-transform: translateZ(0)");
              document.body.appendChild(mainCanvas);

              // and another one for, like, an off screen buffer
              // because that's rad n all
              fireworkCanvas = document.createElement('canvas');
              fireworkContext = fireworkCanvas.getContext('2d');

              mainCanvas.setAttribute("id", "fff_easter_fireworkscanvas");

              fireworkCanvas.setAttribute("style", "position: fixed;display: hidden;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;z-index: 9999;pointer-events:none; -webkit-transform: translateZ(0)");

              // set up the colours for the fireworks
              createFireworkPalette(12);

              // set the dimensions on the canvas
              setMainCanvasDimensions();

              // add the canvas in
              document.body.appendChild(mainCanvas);
              document.addEventListener('mouseup', createFirework, true);
              document.addEventListener('touchend', createFirework, true);

              // and now we set off
              update();
          }

          /**
           * Pass through function to create a
           * new firework on touch / click
           */
          function createFirework() {
              createParticle();
          }

          /**
           * Creates a block of colours for the
           * fireworks to use as their colouring
           */
          function createFireworkPalette(gridSize) {

              var size = gridSize * 10;
              fireworkCanvas.width = size;
              fireworkCanvas.height = size;
              fireworkContext.globalCompositeOperation = 'source-over';

              // create 100 blocks which cycle through
              // the rainbow... HSL is teh r0xx0rz
              for (var c = 0; c < 100; c++) {

                  var marker = (c * gridSize);
                  var gridX = marker % size;
                  var gridY = Math.floor(marker / size) * gridSize;

                  fireworkContext.fillStyle = "hsl(" + Math.round(c * 3.6) + ",100%,60%)";
                  fireworkContext.fillRect(gridX, gridY, gridSize, gridSize);
                  fireworkContext.drawImage(
                      Library.bigGlow,
                      gridX,
                      gridY);
              }
          }

          /**
           * Update the canvas based on the
           * detected viewport size
           */
          function setMainCanvasDimensions() {
              mainCanvas.width = viewportWidth;
              mainCanvas.height = viewportHeight;
          }

          /**
           * The main loop where everything happens
           */
          function update() {
              clearContext();
              requestAnimFrame(update);
              drawFireworks();
          }

          /**
           * Clears out the canvas with semi transparent
           * black. The bonus of this is the trails effect we get
           */
          function clearContext() {
              mainContext.fillStyle = "rgba(0,0,0,0.2)";
              mainContext.fillRect(0, 0, viewportWidth, viewportHeight);
          }

          /**
           * Passes over all particles particles
           * and draws them
           */
          function drawFireworks() {
              var a = particles.length;

              while (a--) {
                  var firework = particles[a];

                  // if the update comes back as true
                  // then our firework should explode
                  if (firework.update()) {

                      // kill off the firework, replace it
                      // with the particles for the exploded version
                      particles.splice(a, 1);

                      // if the firework isn't using physics
                      // then we know we can safely(!) explode it... yeah.
                      if (!firework.usePhysics) {

                          if (Math.random() < 0.8) {
                              FireworkExplosions.star(firework);
                          } else {
                              FireworkExplosions.circle(firework);
                          }
                      }
                  }

                  // pass the canvas context and the firework
                  // colours to the
                  firework.render(mainContext, fireworkCanvas);
              }
          }

          /**
           * Creates a new particle / firework
           */
          function createParticle(pos, target, vel, color, usePhysics) {

              pos = pos || {};
              target = target || {};
              vel = vel || {};

              particles.push(
                  new Particle(
                      // position
                      {
                          x: pos.x || viewportWidth * 0.5,
                          y: pos.y || viewportHeight + 10
                      },

                      // target
                      {
                          y: target.y || 150 + Math.random() * 100
                      },

                      // velocity
                      {
                          x: vel.x || Math.random() * 3 - 1.5,
                          y: vel.y || 0
                      },

                      color || Math.floor(Math.random() * 100) * 12,

                      usePhysics)
              );
          }

          /**
           * Callback for window resizing -
           * sets the viewport dimensions
           */
          function onWindowResize() {
              viewportWidth = window.innerWidth;
              viewportHeight = window.innerHeight;
          }

          // declare an API
          return {
              initialize: initialize,
              createParticle: createParticle
          };

      })();

      /**
       * Represents a single point, so the firework being fired up
       * into the air, or a point in the exploded firework
       */
      var Particle = function(pos, target, vel, marker, usePhysics) {

          // properties for animation
          // and colouring
          this.GRAVITY = 0.06;
          this.alpha = 1;
          this.easing = Math.random() * 0.02;
          this.fade = Math.random() * 0.1;
          this.gridX = marker % 120;
          this.gridY = Math.floor(marker / 120) * 12;
          this.color = marker;

          this.pos = {
              x: pos.x || 0,
              y: pos.y || 0
          };

          this.vel = {
              x: vel.x || 0,
              y: vel.y || 0
          };

          this.lastPos = {
              x: this.pos.x,
              y: this.pos.y
          };

          this.target = {
              y: target.y || 0
          };

          this.usePhysics = usePhysics || false;

      };

      /**
       * Functions that we'd rather like to be
       * available to all our particles, such
       * as updating and rendering
       */
      Particle.prototype = {

          update: function() {

              this.lastPos.x = this.pos.x;
              this.lastPos.y = this.pos.y;

              if (this.usePhysics) {
                  this.vel.y += this.GRAVITY;
                  this.pos.y += this.vel.y;

                  // since this value will drop below
                  // zero we'll occasionally see flicker,
                  // ... just like in real life! Woo! xD
                  this.alpha -= this.fade;
              } else {

                  var distance = (this.target.y - this.pos.y);

                  // ease the position
                  this.pos.y += distance * (0.03 + this.easing);

                  // cap to 1
                  this.alpha = Math.min(distance * distance * 0.00005, 1);
              }

              this.pos.x += this.vel.x;

              return (this.alpha < 0.005);
          },

          render: function(context, fireworkCanvas) {

              var x = Math.round(this.pos.x),
                  y = Math.round(this.pos.y),
                  xVel = (x - this.lastPos.x) * -5,
                  yVel = (y - this.lastPos.y) * -5;

              context.save();
              context.globalCompositeOperation = 'lighter';
              context.globalAlpha = Math.random() * this.alpha;

              // draw the line from where we were to where
              // we are now
              context.fillStyle = "rgba(255,255,255,0.3)";
              context.beginPath();
              context.moveTo(this.pos.x, this.pos.y);
              context.lineTo(this.pos.x + 1.5, this.pos.y);
              context.lineTo(this.pos.x + xVel, this.pos.y + yVel);
              context.lineTo(this.pos.x - 1.5, this.pos.y);
              context.closePath();
              context.fill();

              // draw in the images
              context.drawImage(fireworkCanvas,
                  this.gridX, this.gridY, 12, 12,
                  x - 6, y - 6, 12, 12);
              context.drawImage(Library.smallGlow, x - 3, y - 3);

              context.restore();
          }

      };

      /**
       * Stores references to the images that
       * we want to reference later on
       */
      var Library = {
          bigGlow: document.getElementById('big-glow'),
          smallGlow: document.getElementById('small-glow')
      };

      /**
       * Stores a collection of functions that
       * we can use for the firework explosions. Always
       * takes a firework (Particle) as its parameter
       */
      var FireworkExplosions = {

          /**
           * Explodes in a roughly circular fashion
           */
          circle: function(firework) {

              var count = 100;
              var angle = (Math.PI * 2) / count;
              while (count--) {

                  var randomVelocity = 4 + Math.random() * 4;
                  var particleAngle = count * angle;

                  Fireworks.createParticle(
                      firework.pos,
                      null, {
                          x: Math.cos(particleAngle) * randomVelocity,
                          y: Math.sin(particleAngle) * randomVelocity
                      },
                      firework.color,
                      true);
              }
          },

          /**
           * Explodes in a star shape
           */
          star: function(firework) {

              // set up how many points the firework
              // should have as well as the velocity
              // of the exploded particles etc
              var points = 6 + Math.round(Math.random() * 15);
              var jump = 3 + Math.round(Math.random() * 7);
              var subdivisions = 10;
              var radius = 80;
              var randomVelocity = -(Math.random() * 3 - 6);

              var start = 0;
              var end = 0;
              var circle = Math.PI * 2;
              var adjustment = Math.random() * circle;

              do {

                  // work out the start, end
                  // and change values
                  start = end;
                  end = (end + jump) % points;

                  var sAngle = (start / points) * circle - adjustment;
                  var eAngle = ((start + jump) / points) * circle - adjustment;

                  var startPos = {
                      x: firework.pos.x + Math.cos(sAngle) * radius,
                      y: firework.pos.y + Math.sin(sAngle) * radius
                  };

                  var endPos = {
                      x: firework.pos.x + Math.cos(eAngle) * radius,
                      y: firework.pos.y + Math.sin(eAngle) * radius
                  };

                  var diffPos = {
                      x: endPos.x - startPos.x,
                      y: endPos.y - startPos.y,
                      a: eAngle - sAngle
                  };

                  // now linearly interpolate across
                  // the subdivisions to get to a final
                  // set of particles
                  for (var s = 0; s < subdivisions; s++) {

                      var sub = s / subdivisions;
                      var subAngle = sAngle + (sub * diffPos.a);

                      Fireworks.createParticle({
                              x: startPos.x + (sub * diffPos.x),
                              y: startPos.y + (sub * diffPos.y)
                          },
                          null, {
                              x: Math.cos(subAngle) * randomVelocity,
                              y: Math.sin(subAngle) * randomVelocity
                          },
                          firework.color,
                          true);
                  }

                  // loop until we're back at the start
              } while (end !== 0);

          }

      };

      // Go

      Fireworks.initialize();







  }

  function fff_easter_snow() {
      console.log("❄️❄️❄️");
      var fffEasterElement = document.createElement("canvas");
      fffEasterElement.setAttribute("id", "fffEasterCanvas");
      fffEasterElement.setAttribute("style", "position: fixed;display: hidden;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: transparent;z-index: 9999;pointer-events:none;");
      document.body.appendChild(fffEasterElement);


      var c = document.getElementById('fffEasterCanvas'),
          $ = c.getContext("2d");
      var w = c.width = window.innerWidth,
          h = c.height = window.innerHeight;

      Snowy();

      function Snowy() {
          var snow, arr = [];
          var num = 600,
              tsc = 1,
              sp = 1;
          var sc = 1.3,
              t = 0,
              mv = 10,
              min = 1;
          for (var i = 0; i < num; ++i) {
              snow = new Flake();
              snow.y = Math.random() * (h + 50);
              snow.x = Math.random() * w;
              snow.t = Math.random() * (Math.PI * 2);
              snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
              snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
              snow.sp = snow.sp < min ? min : snow.sp;
              arr.push(snow);
          }
          go();

          function go() {
              window.requestAnimationFrame(go);
              $.clearRect(0, 0, w, h);
              $.fillStyle = 'hsla(242, 95%, 3%, 0)';
              $.fillRect(0, 0, w, h);
              $.fill();
              for (var i = 0; i < arr.length; ++i) {
                  f = arr[i];
                  f.t += .05;
                  f.t = f.t >= Math.PI * 2 ? 0 : f.t;
                  f.y += f.sp;
                  f.x += Math.sin(f.t * tsc) * (f.sz * .3);
                  if (f.y > h + 50) f.y = -10 - Math.random() * mv;
                  if (f.x > w + mv) f.x = -mv;
                  if (f.x < -mv) f.x = w + mv;
                  f.draw();
              }
          }

          function Flake() {
              this.draw = function() {
                  this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
                  //this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
                  //this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
                  //http://hslpicker.com/
                  this.g.addColorStop(0, 'hsla(183, 100%, 90%, .8)');
                  this.g.addColorStop(1, 'hsla(183, 100%, 90%, 0)');
                  $.moveTo(this.x, this.y);
                  $.fillStyle = this.g;
                  $.beginPath();
                  $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
                  $.fill();
              }
          }
      }
      /*________________________________________*/
      window.addEventListener('resize', function() {
          c.width = w = window.innerWidth;
          c.height = h = window.innerHeight;
      }, false);


  }

  function fff_easter_fall() {
      console.log("🍃");
      var fffEasterElementLeaves = document.createElement("div");
      fffEasterElementLeaves.setAttribute("id", "leaves");
      fffEasterElementLeaves.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
      document.body.appendChild(fffEasterElementLeaves);
      var fffEaster_css = document.createElement("style");
      fffEaster_css.type = "text/css";
      //css minified
      fffEaster_css.innerHTML = "#leaves i:after,#leaves i:before{content:'';position:absolute}#leaves i,#leaves i:nth-of-type(n){background:linear-gradient(to bottom right,#309900,#005600)}#leaves{top:-50px;text-align:right;position:fixed;display:hidden;width:100%;height:100%;left:0;right:0;bottom:0;background-color:transparent;z-index:9999;pointer-events:none}#leaves i{display:inline-block;width:200px;height:150px;transform:skew(20deg);border-radius:5% 40% 70%;box-shadow:inset 0 0 1px #222;border:1px solid #333;z-index:1;-webkit-animation:falling 5s 0s infinite}#leaves i:nth-of-type(2n){-webkit-animation:falling2 5s 0s infinite;-webkit-animation-delay:3.9s}#leaves i:nth-of-type(3n){-webkit-animation:falling3 5s 0s infinite;-webkit-animation-delay:2.3s}#leaves i:before{top:117px;right:9px;height:27px;width:32px;transform:rotate(49deg);border-radius:0 15% 15% 0;border-top:1px solid #222;border-bottom:1px solid #222;border-left:0 solid #222;border-right:1px solid #222;background:linear-gradient(to right,rgba(0,100,0,1),#005600);z-index:1}#leaves i:after{height:125px;width:10px;background:linear-gradient(to right,rgba(0,0,0,.15),rgba(0,0,0,0));display:block;transform:rotate(125deg);left:85px;border-radius:50%}#leaves i:nth-of-type(n){height:23px;width:30px;-webkit-animation-delay:1.9s;opacity:.7;transform:rotate(180deg);-webkit-animation-timing-function:ease-in-out}#leaves i:nth-of-type(n):before{width:7px;height:5px;top:17px;right:1px}#leaves i:nth-of-type(n):after{width:2px;height:17px;left:12px;top:0}#leaves i:nth-of-type(2n+1){height:22px;width:32px}#leaves i:nth-of-type(2n+1):before{width:4px;height:3px;top:7px;right:0}#leaves i:nth-of-type(2n+1):after{width:2px;height:6px;left:5px;top:1px}#leaves i:nth-of-type(3n+2){height:17px;width:23px}#leaves i:nth-of-type(3n+2):before{height:4px;width:4px;top:12px;right:1px}#leaves i:nth-of-type(3n+2):after{height:10px;width:2px;top:1px;left:8px}#leaves i:nth-of-type(4n){-webkit-animation-delay:4.4s}#leaves i:nth-of-type(5n){-webkit-animation-delay:5s}#leaves i:nth-of-type(6n){-webkit-animation-delay:3.5s}#leaves i:nth-of-type(7n){-webkit-animation-delay:2.8s}#leaves i:nth-of-type(8n){-webkit-animation-delay:1.5s}#leaves i:nth-of-type(9n){-webkit-animation-delay:3.3s}#leaves i:nth-of-type(10n){-webkit-animation-delay:2.5s}#leaves i:nth-of-type(11n){-webkit-animation-delay:1.2s}#leaves i:nth-of-type(12n){-webkit-animation-delay:4.1s}#leaves i:nth-of-type(13n){-webkit-animation-delay:1s}#leaves i:nth-of-type(14n){-webkit-animation-delay:4.7s}#leaves i:nth-of-type(15n){-webkit-animation-delay:3s}#leaves i:nth-of-type(2n+2){background:linear-gradient(to bottom right,#5e9900,#2b5600)}#leaves i:nth-of-type(4n+1){background:linear-gradient(to bottom right,#990,#564500)}#leaves i:nth-of-type(3n+1){opacity:.5}#leaves i:nth-of-type(3n+2){opacity:.3}@-webkit-keyframes falling{0%{-webkit-transform:translate3d(300,0,0) rotate(0)}100%{-webkit-transform:translate3d(-350px,700px,0) rotate(90deg);opacity:0}}@-webkit-keyframes falling3{0%{-webkit-transform:translate3d(0,0,0) rotate(-20deg)}100%{-webkit-transform:translate3d(-230px,640px,0) rotate(-70deg);opacity:0}}@-webkit-keyframes falling2{0%{-webkit-transform:translate3d(0,0,0) rotate(90deg)}100%{-webkit-transform:translate3d(-400px,680px,0) rotate(0);opacity:0}}";
      document.body.appendChild(fffEaster_css);
  }
  console.log("🥚🐇");

  onFFFEasterEgg();