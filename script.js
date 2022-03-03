//1
let warmHugs="Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs=warmHugs.replace("like", "love");
//or to check
// console.log(warmHugs.replace("like", "love"));

//2
let beenImpaled="Oh, look at that. I've been impaled.";
beenImpaled=beenImpaled.slice(18);
//or to check
// console.log(beenImpaled.slice(18));

//3
let dotDotDot="...";
let skullBones=`I don't have a skull${dotDotDot}or bones`;
console.log(skullBones);

//4
console.log(Math.PI);

//5
let randomNumber=Math.random();
randomNumber*=3;
randomNumber=Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);
//using .ceil and no ++ has a small chance to land on 0.0

//bonus
//6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

//7
let reindeers="Reindeers are better than people.";
console.log(reindeers.replaceAll(' ', '_'));
//or
// console.log(reindeers.replace(/ /g, '_'));

//8
console.log(Math.sqrt(2));

//9
let newRandomNumber=(Math.floor(Math.random() * 17) + 7);
console.log(newRandomNumber)