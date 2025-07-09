const avatarList = document.getElementById('avatar-list');
const nameModal = document.getElementById('nameModal');
const nameInput = document.getElementById('nameInput');

function getRandomColor() {
  const colors = ['#bca37f', '#ff90bc', '#dfccfb', '#a8df8e', '#ffc7ea', '#79e0ee', '#c3f8ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function openModal() {
  nameModal.style.display = 'flex';
  nameInput.value = "";
  nameInput.focus();
}

function closeModal() {
  nameModal.style.display = 'none';
}

function addAvatarFromInput() {
  const name = nameInput.value.trim();
  if (!name) return;

  const firstLetter = name[0].toUpperCase();

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.style.backgroundColor = getRandomColor();
  avatar.textContent = firstLetter;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '×';
  closeBtn.onclick = () => avatar.remove();

  avatar.appendChild(closeBtn);
  avatarList.appendChild(avatar);

  closeModal();
}
