
let newX = 0, newY = 0, startX = 0, startY = 0;
let isMiki1 = true;
let dragged = false;

const card = document.getElementById('card');

card.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    dragged = false;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    dragged = true;

    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.left = (card.offsetLeft - newX) + 'px';
    card.style.top = (card.offsetTop - newY) + 'px';
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

card.addEventListener('click', function () {
    if (dragged) return;

    isMiki1 = !isMiki1;
    card.style.backgroundImage = isMiki1
        ? 'url("miki1.png")'
        : 'url("miki2.png")';
});

window.addEventListener('click', () => {
    const audio = document.getElementById('bgm-audio');
    audio.muted = false;
    audio.play().catch(e => {
        console.log('Playback failed:', e);
    });
}, { once: true });

