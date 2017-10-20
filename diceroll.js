(function() {
	'use strict';
	function makeYoutubeVideos(ids) {
		var videos = [];
		var length = ids.length;
		for(var i = 0; i < length; i++) {
			videos.push({
				src: 'https://www.youtube-nocookie.com/embed/' + ids[i] + '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1',
				link: 'https://www.youtube.com/watch?v=' + ids[i],
			});
		}
		return videos;
	}

	function getRandomVideo(videos) {
		var index = Math.floor(Math.random() * videos.length);
		return videos[index];
	}

	var youtubeVideoIds = [
		'5uZr3JWYdy8',
		'gQfGgHfQgv0',
		'b1WWpKEPdT4',
		'9NcPvmk4vfo',
		'SQoA_wjmE9w',
	];

	var rickrolls = [];
	var video;

	rickrolls.push.apply(rickrolls, makeYoutubeVideos(youtubeVideoIds));
	video = getRandomVideo(rickrolls);
	document.getElementById('diceroll-embed').src = video.src;
	document.getElementById('diceroll-info-link').href = video.link;
	document.getElementById('diceroll-info').style.display = 'block';
})();