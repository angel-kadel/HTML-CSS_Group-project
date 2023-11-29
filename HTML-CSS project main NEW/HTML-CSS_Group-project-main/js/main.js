/*waiting for HTML loading before running script*/
document.addEventListener('DOMContentLoaded', function () {  
    /*adding two constants and attaching them to the classes*/
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    /*adding a constant to target all the blocks with the required class*/
    const horses = document.querySelectorAll('.horse-section');
    let currentIndex = 0;

    /*Show the initial horse section*/
    showHorse(currentIndex);
    /*in our case - American Quarter House*/
    /*Event listener to the next button*/
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % horses.length;
        showHorse(currentIndex);
    });

    /*Event listener to the previous button*/
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + horses.length) % horses.length;
        showHorse(currentIndex);
    });
/*Function to show the current horse and hide others*/
   
    function showHorse(index) {
        horses.forEach((horse, i) => {
            if (i === index) {
                horse.style.display = 'block';
            } else {
                horse.style.display = 'none';
            }
        });
    }
});
