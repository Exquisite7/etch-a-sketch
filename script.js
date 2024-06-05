let mouseClick = false;

document.addEventListener('mousedown', () => {
    mouseClick = true;
});
document.addEventListener('mouseup', () => {
    mouseClick = false;
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const resizeButton = document.getElementById('resize-button');
    const colorPicker = document.getElementById('color-picker');

    let hoverColor = colorPicker.value;

    function createGrid(squaresPerSide) {
        container.innerHTML = '';

        const squareSize = 960 / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener('mouseenter', function() {
                if (mouseClick) {
                    square.style.backgroundColor = hoverColor;
                }
            });

            square.addEventListener('mousedown', function() {
                square.style.backgroundColor = hoverColor;
            });

            container.appendChild(square);
        }
    }

    resizeButton.addEventListener('click', function() {
        let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
        squaresPerSide = parseInt(squaresPerSide);

        if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
            alert('Please enter a valid number between 1 and 100.');
        } else {
            createGrid(squaresPerSide);
        }
    });

    colorPicker.addEventListener('input', function() {
        hoverColor = colorPicker.value;
    });


    createGrid(16);
});
