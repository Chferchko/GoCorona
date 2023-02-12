const introVideoButton = $('.intro__play-button');
const popup = $('.intro__popup');
const popupVideo = $('.intro__popup-video');
const popupVideoObject = document.getElementById("popup-video");
const closeArea = popupVideoObject.closest('.intro__popup');
let scrollBarWidth;

function toggleButtonStatus() {
	introVideoButton.toggleClass('active');
};

function toggleVisibilityPopup() {
	popup.toggleClass('active');
};

function toggleVisibilityVideo() {
	popupVideo.toggleClass('active');
};

function playPopupVideo() {
	popupVideoObject.play();
};

function reloadPopupVideo() {
	popupVideoObject.load();
};

function playPopupVideoAfterTime() {
	setTimeout(playPopupVideo, 500);
};

function reloadPopupVideoAfterTime() {
	setTimeout(reloadPopupVideo, 500);
};

function toggleLockDocumentBody() {
	document.body.classList.toggle('active');
};

function toggleLockDocumentBodyAfterTime() {
	setTimeout(toggleLockDocumentBody, 500);
};

let getScrollBarWidth = () => window.innerWidth - document.body.firstElementChild.clientWidth;

scrollBarWidth = getScrollBarWidth();

function lockDocumentContent() {
	document.body.firstElementChild.style.paddingRight = `${scrollBarWidth}px`;
	document.body.querySelector('header').style.paddingRight = `${scrollBarWidth}px`;
};

function unlockDocumentContent() {
	document.body.firstElementChild.style.paddingRight = ``;
	document.body.querySelector('header').style.paddingRight = ``;	
};

function unlockDocumentContentAfterTime() {
	setTimeout(unlockDocumentContent, 500)
};
	
function onClickToVideoButtonEventHandler(event) {
	toggleButtonStatus();
	toggleVisibilityPopup();
	toggleVisibilityVideo();
	toggleLockDocumentBody();
	lockDocumentContent();
	playPopupVideoAfterTime();
};

function onClickToCloseAreaEventHandler(e) {
	if (!popup.is(e.target)) return;
	toggleButtonStatus();
	toggleVisibilityPopup();
	toggleVisibilityVideo();
	toggleLockDocumentBodyAfterTime()
	unlockDocumentContentAfterTime();
	reloadPopupVideoAfterTime();
};

introVideoButton.click(onClickToVideoButtonEventHandler);
closeArea.onclick = onClickToCloseAreaEventHandler;