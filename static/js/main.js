AFRAME.registerComponent('change-video', {
	schema: {
		on: {type: 'string', default: 'click'},
		id: {type: 'string'},
		target: {type: 'selector'},
		src: {type: 'string'}
	},
	init: function () {
		console.log('in init');
		var data = this.data;
		var el = this.el;
		console.log(el.components.position);

		el.addEventListener(data.on, function() {
			console.log('di: ', el);
			if(data.id==="#code") {
				window.open('https://www.cameranu.nl/nl/p816015/kodak-pixpro-sp360-4k-action-cam-dual-pro-pack');
			}
			restartVideo(data.target.getAttribute('src'));
			data.target.setAttribute('src', data.id);
			data.target.setAttribute('material', 'src: ' + data.src);
			el.emit('explode');
		});
	}
});

function restartVideo(id) {
	let video = document.querySelector(id);
	video.pause();
	video.currentTime = 0;
	video.load();
}

AFRAME.registerComponent('launch-to-invisible', {
	schema: {
		on: {type: 'string', default: 'click'}
	},
	init: function () {
		console.log('in launch-to-invisible init');
		var data = this.data;
		var el = this.el;

		el.addEventListener(data.on, function() {
			data.target.setAttribute('src', data.src);
			data.target.setAttribute('material', 'src: ' + data.src);
		});
	}
});


AFRAME.registerComponent('launch-to-invisible', {
	schema:{},
	init: function() {
		var data = this.data;
		var el = this.el;

		el.addEventListener('triggerdown', function(e) {
			console.log(e);
		})
	}
});
