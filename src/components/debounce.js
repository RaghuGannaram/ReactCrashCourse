function debounce(fn, delay = 100) {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
}

export default debounce;
