
let ok = 0;

document.querySelectorAll('.patrat').forEach(pat => {
    pat.addEventListener('click', function () {

        if (ok == 0) {
            ok = ok + 1;
            this.classList.add('colorized');


            const stamp = document.querySelector('.stampila');
            stamp.classList.add('visible');
        }
    });
});


if (ok == 0) {
    alert('You must vote first!');
} else {
    alert('Thank you for voting!');
}