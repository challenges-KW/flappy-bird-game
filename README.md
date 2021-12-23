# Puffy Cat Game

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

Created in the style of Flappy Bird, Puffy Cat allows the user to play as Puffy the Cat while he dodges obstacles. A local best score is stored and displayed on the lefthand side during play while the current score is displayed on the right.

### Screenshot

![](/images/puffy-cat-screenshot.png)

### Links
[Puffy Cat Game](https://katarzyna-kw.github.io/puffy-cat-game/)

## My process

### Built with

- HTML5
- Javascript
- CSS / Tailwind CSS

### Structure

The Javascript code is separated into three files. Puffy-cat.js holds the puffy sprite class and its methods. Obstacles.js holds the obstacles class and its methods as well as the function that handles obstacles by creating and removing them. Flappy.js holds the rest of the game logic --  handling the background of the HTML5 canvas, initializing and starting each game, event listeners for holding down the up and down arrow keys and the start button, and storing/displaying the best score in local storage.  

### Progression

In the first phase, I designed and coded the game to allow play. In the second phase, I added the functionality of storing and then displaying the local best score to enhance the user experience and engagement. 

A potential next phase may be storing and displaying the top 3 scores overall for all users.

### Useful resources

These are helpful resources that inspired me and helped me with creating this game:

- [Ania Kubow - Flappy Bird](https://www.youtube.com/watch?v=gxHcW84izz0) - This is a great tutorial for building a Flappy Bird using Javascript without HTML5 canvas, although I ultimately did use HTML5 canvas for Puffy Cat.
- [Chris Courses - HTML5 Canvas and JavaScript Game Tutorial](https://www.youtube.com/watch?v=eI9idPTT0c4) - This is another great tutorial and inspired me to use Tailwind CSS for the first time.
- [Frank's Laboratory - How to make a game with Javascript and HTML5 Canvas](https://www.youtube.com/watch?v=EYf_JwzwTlQ) - Another excellent tutorial that was helpful, especially in creating the Puffy sprite.


## Game Creator

- Website - [Katarzyna Wegrzynowicz](https://katarzyna-kw.github.io/portfolio-website/)