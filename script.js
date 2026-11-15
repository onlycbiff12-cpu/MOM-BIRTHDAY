const screens = [...document.querySelectorAll('.screen')];
const progressDots = [...document.querySelectorAll('.progress-dot')];
let currentScreen = 0;

function showScreen(index) {
  screens.forEach((screen, screenIndex) => {
    const active = screenIndex === index;
    screen.hidden = !active;
    screen.classList.toggle('is-active', active);
    if (active) screen.style.animation = 'none';
  });
  // Restart the entrance animation after the screen becomes visible.
  const activeScreen = screens[index];
  void activeScreen.offsetWidth;
  activeScreen.style.animation = '';
  progressDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex <= index));
  currentScreen = index;
}

document.querySelector('#open-gift').addEventListener('click', () => showScreen(1));
document.querySelector('[data-next]').addEventListener('click', () => showScreen(2));

const reviewPrompt = document.querySelector('#closing-title');
const reviewInput = document.querySelector('#gift-review');

reviewPrompt.addEventListener('click', () => {
  reviewPrompt.hidden = true;
  reviewInput.hidden = false;
  reviewInput.focus();
});
