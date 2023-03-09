# RegentOfRigel
Regent of Rigel is a HTML, CSS and JavaScript clone of the 1993 game Master of Orion that runs entirely in a browser tab.

One of the goals of this project is to have as much of the functionality as possible implemented in HTML/CSS only. I want the state of the game to be stored in plain HTML, so that players can modify the values if they wish to, to set up challenges for themselves or to cheat - whatever they prefer. CSS allows the game to display changes to the HTML as they are made, without an expensive (and unnecessary) game loop.

Currently this project is not in any kind of playable state, but to try it out simply download the repository and access it through your web browser. For security reasons, your browser will require you run a local web server to access it (I use Python's inbuilt web server using the command `python -m http.server` in the project source directory). Don't be afraid to use your browser's developer tools to mess around and find out how it works.