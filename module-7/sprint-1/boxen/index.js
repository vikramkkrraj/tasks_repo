import boxen from 'boxen';

console.log(boxen("I am using my first external module!", {borderStyle: 'classic', title :"Hurray!!!", titleAlignment : "center"}));

console.log(boxen("I am using my first external module!", { title :"Hurray!!!", titleAlignment : "center", borderStyle: 'singleDouble',}));

console.log(boxen("I am using my first external module!", { title :"Hurray!!!", titleAlignment : "center", borderStyle: 'round',}));