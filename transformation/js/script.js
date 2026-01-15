const revealBtn = document.getElementById('revealBtn');

const curtains = document.getElementById('curtains');

revealBtn.addEventListener('click', function() {
	curtains.classList.toggle('hidden');

    if (curtains.classList.contains('hidden')) {

        revealBtn.classList.add('hidden');
       

        setTimeout(function() {
            revealBtn.textContent = 'HIDE';
            revealBtn.classList.remove ('hidden');
        
        }, 5000); 
} else {
    revealBtn.textContent ='REVEAL';
    revealBtn;this.classList.remove('hidden');
}
});