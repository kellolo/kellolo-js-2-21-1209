'use strict';

let story = "Short aren't stories you're also I'm a 'great' resource.";
let storyTwo = [];
//const one = new RegExp('are');
//const two = 
//console.log(one);

for (let i = 0; i < story.length; i++){
    if (story[i] === "'"){
        if (story[i+1] == 'r' && story[i+2] == 'e'){
            storyTwo[i] = "'";
        }

        else if (story[i+1] == 'm' && story[i-1] == 'I'){
            storyTwo[i] = "'";
        }

        else if (story[i+1] == 't' && story[i-1] == 'n'){
            storyTwo[i] = "'";
        }

        else {
            storyTwo[i] = '"';
        }
    
        console.log(story);
    }
    else {
        storyTwo[i] = story[i];
    }
}

story = storyTwo.join("");
console.log(story);


