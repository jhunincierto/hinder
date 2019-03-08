
//landing page//
const el = document.querySelector("#module");
el.addEventListener("mousemove", (e) => {
el.style.backgroundPositionX = -e.offsetX * .03 + "px";
el.style.backgroundPositionY = -e.offsetY * .03 + "px";
});

//sidebar menu//
function show(){
	document.getElementById('sidebar').classList.toggle('active');
	document.getElementById('sidebar').classList.toggle('change');
}
//typewriter page text//
const words = ["WELCOME ", "HINDER EDGE ", "EXPLORE","YOUR","SELF"];
let i = 0;
let timer;
function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML +=  word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};
function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML  =  word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 90);
	};
	loopDeleting();
};
typingEffect();