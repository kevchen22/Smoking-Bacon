# Smoking-Bacon

Site: smokin-bacon.netlify.app
https://smokin-bacon.herokuapp.com/

Technologies used:
Primarily used JavaScript, CSS, and HTML.
Manipulated the DOM with functions, event listeners, as well as appending class lists.

How to Play:
Just like normal flappy bird, you can click ANYWHERE on the page and the bird will jump. The goal is to get in between the saws so you don't turn into bacon!

Approach Taken:
Started the game with watching a BUNCH of YouTube videos. From there I had to decide which approach I wanted to go with. At first, I was heavily leaning towards canvas, however after some hiccups I scrapped that as I didn't want to completely learn the new method. I went back to everything we learned in class, that way I was doing things I was more familiar with and more comfortable with, as I thought it would have been challenging to learn canvas AND implement it in a game. (I commend everybody who used canvas for their games, that is amazing.) I took some bits and pieces from some YouTube videos as well as learning through them and implementing them in the game logic that I wanted. 

Challenges: 
The most challenging obstacles I had to push through were collision detection and making it so that my obstacles were working, both creating and making them move. The collision detection was more difficult of the two and it is still suspect. For now, I have only been able to hard code the collision detection with adding and subtracting pixels, so basically I have properties for my obstacles (obstacleLeft and obstacleBottom), and if these two properties of my obstacles were to hit my playerBottom/playerLeft plus/minus a certain value for pixels, then game over. In the future, I would like to change this where the collision detection are set to actual variables instead of hard coded pixel values. For example, I was able to get my bottom obstacle's hit-box accurate enough that it is fine, but my topObstacle's hit detection is not where I would like it to be. If you fly too close to the bottom of the topObstacle, it game overs even if you do not hit the obstacle. That is something I would like to fix in the future.

I also wanted to be able to implement a level two where the gap is smaller, the obstacles move faster, and the obstacles are created faster (every 2s instead of 3s). I played around with this for about two days until I finally caved in and wasn't able to get the logic down enough where I was comfortable with continuing to struggle through it. To implement a level two I had a timer set up (as you can see through my timer properties that are commented out). If you finish level one through the whole timer, then level 2 is implemented. The main problem with the level 2 was that, I wasn't able to clear the obstacles from level one that were still on the screen. There wasn't a smooth transition into level 2 it just went straight into it. So, I was able to get the obstacles created faster, the obstacle speed to be faster, and the gap to be smaller, HOWEVER once it hit level two, it was almost an instant game over because it was reading the obstacle properties of the first level still and not my level two obstacle properties.

At first, I had a block and gap div that I moved using keyframes. I had this for a solid day or two until I realized, that wasn't going to work. The reason why it wasn't going to work was because the the gap is literally just another div that showed in front of the block div, there wasn't an actual gap. I thought it would have been much more smooth using functions and appending class lists that we learned from class. 

Another big challenge I had was trying to get the game to reset using the 'Play Again' button that I created. I eventually figured it out, however, if you don't wait until the obstacles are gone and not creating, before you click 'Play Again' that is where you run into issues with the game. I STILL have to figure out how to clear all child nodes of my parent which in this case, the child nodes are the obstacles. Once I can figure this out in the future, I will also be able to implement level two. 

I would also like to add sounds to my game, everybody loves the sound of bacon sizzling. Sounds didn't even cross my mind once, as I was trying to figure out the basic logic of the game the whole time.

Another problem with the game is that sometimes the saws are floating and tehre is space between the bottom saw and the lava. You CANNOT go through the bottom of the saw, but it appears that you might be able to. I was going to try and get it to the bottom but I got side tracked as I was trying to get the game to just work.
