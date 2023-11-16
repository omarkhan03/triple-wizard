# Reflection on implementation process in point form

- What I learned
    - It is better to keep game mechanics simple rather than add in a bunch of new features. I had the idea of players being able to damage eachother which I didn't end up implementing. I think if I had tried to implement all of my ideas, I would have ended up with a game that was not fun to play and that was not polished.

    - For games such as this one, it is more fun to let creativity flow rather than focussing on making game mechanics perfectly balanced. At first, I wanted to make sure all attacks were very similar in power, but I found that it made each attack less unique and interesting. So I decided to make each attack fairly different, as diversity and uniqueness is what people seemed to enjoy more.

- Challenges
    - The most frustrating problem I had was the result of me having the filename "Game.js", but it said "game.js" in the import statement. This was extremely frustrating and it was a huge challenge until I carefully read the message in the console log and promptly fixed it. I think the problem was that my browser had cached "game.js" and was using that instead of the newer version.
  
    - CSS grid is weird to make real-time games with. If I could redo this assignment, I would implement it using a continuous movement system rather than a grid-based one because it is less choppy. However, I tried to make it flow as well as I could with CSS grid.
  
- How I managed the game's complexity
    - As mentioned before, I decided not to go with my initial idea of having the players be able to damange eachother because I realized that it would then mean I'd have to implement a health system and a way to respawn the players.
  
    - I re-used a lot of code. PlayerOne.js is basically the same as PlayerTwo.js, but with different key bindings. Worm.js, Fireball.js, Zap.js, and Ice.js are all very similar, but with different animations.

- How my final product compares to my initial design
    - It is very similar. The only differences are players not being able to damage eachother, and the worms moving in random directions instead of towards the players.

    - I made the patterns of the attacks more creative: the fireball being a diamond that moves, zap being a thingy that explodes after moving a bit, and ice being a quickfire thingy that spreads immediately in front of the player. Initially, these I planned for these to be very simple projectiles with minor range differences.

- Use of AI
  - I used Copilot extensively, I LOVE it because it automates the tedious parts of programming such as filling in comments and automatically writing duplicate code that is just slightly different. I used copilot to code the shape of the diamond that appears in the fireball attack - I didn't know how to implement it so I just made a comment saying "make a diamond shape", and it did it for me!
  - I didn't use ChatGPT because I found that it gives incorrect results many times. Maybe GPT-4 is better but I haven't paid for that. 
  - I learn less from ChatGPT than I do from Copilot because Copilot is more involved.