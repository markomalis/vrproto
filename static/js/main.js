AFRAME.registerComponent('change-video', {
	schema: {
		on: {type: 'string', default: 'click'},
		target: {type: 'selector'},
		src: {type: 'string'}
	},
	init: function () {
		console.log('in init');
		var data = this.data;
		var el = this.el;

		el.addEventListener(data.on, function() {
			console.log('di: ', el);
			data.target.setAttribute('src', data.src);
			data.target.setAttribute('material', 'src: ' + data.src);
		});
	}
});
