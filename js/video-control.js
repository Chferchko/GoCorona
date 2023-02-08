const playButton = $('.info__video-play-button');
const video = document.getElementById("video");

function hidePlayButton() {
	playButton.addClass('hidden');
};

function showPlayButton() {
	playButton.removeClass('hidden');
};

function playVideo() {
	video.play();
};

function addControlPanel() {
	video.controls = true;
};

function removeControlPanel() {
	video.controls = false;
};

function reloadVideo() {
	video.load();	
};

function onClickEventHandler(event) {
	playVideo();
	addControlPanel();
	hidePlayButton();
};

function onVideoEndedEventHandler() {
	reloadVideo();
	removeControlPanel();
	showPlayButton();
};

playButton.click(onClickEventHandler);

video.onended = onVideoEndedEventHandler;