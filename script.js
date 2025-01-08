const input = document.querySelector('input');
const audioElem = document.querySelector('audio');

input.addEventListener('change', (e) => {
    const file = input.files[0];
    if(!file) return;

    audioElem.src = URL.createObjectURL(file);
    audioElem.play();

    // Audio Processing
    // 1. Create Audio Context
    // 2. Create Audio Source
    // 3. Create audio effect
    // 4. Create audio destination
})