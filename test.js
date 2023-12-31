function constructor() {
	this.name = 'chirag';
	this.age = 29;
	this.wifeName = 'swarna';
}

let me = new constructor();

let remote1 = {
	playBtn: true,
	pauseBtn: true,
	rewindBtn: true,
	forwardBtn: true,
	stopBtn: true,
};

let remote2 = {
	showTimeBtn: true,
};

remote2.__proto__ = remote1;

console.log(remote2);

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
	console.log(this);
});

btn.addEventListener('click', function () {
	console.log(this);
});
