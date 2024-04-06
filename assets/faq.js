
// Sample FAQ data
const faqItems = [
    {
        title: "Câți deputați sunt aleși?",
        description: "În 2024, votanții vor alege 33 de membri ai Parlamentului European."
    },
    {
        title: "Cine sunt candidații?", description: "Au dreptul de a fi aleși ca membri din România în Parlamentul European persoanele care au împlinit vârsta de 23 de ani, au drept de vot și figurează pe listele unui partid politic, ale unei organizaţii a cetăţenilor aparţinînd minorităţilor naţionale, unei alianţe politice, alianţe electorale ori ca independent. Lista completă a candidaților este publicată pe pagina Biroului Electoral Central (constituit cu aproximativ 3 luni înainte de data alegerilor europene – 16.03.2024)."
    },
    {
        title: "Câte și care sunt circumscripțiile electorale?", description: "Întreg teritoriul României constituie o singură circumscripție electorală, ceea ce înseamnă că alegătorii aleg dintre aceleași liste de candidați/candidați independenți."
    },
    {
        title: "Am obligația legală de a vota? ",
        description: "Nu, nu există obligația legală de a vota la alegerile europene în România."
    },
    {
        title: " Cine poate vota?", description: "În România, poți vota la alegerile europene dacă: ai cel puțin 18 ani, împliniți până în ziua alegerilor inclusiv sau daca ești cetățean român sau cetățean UE, cu domiciliul sau reședința pe teritoriul României, în conformitate cu procedura administrativă aplicabilă."
    },
    {
        title: " ", description: " "
    },

    {
        title: " ", description: " "
    },

    {
        title: " ", description: " "
    },
];

// Function to render FAQ components
function renderFAQ(faqItems) {
    const faqContainer = document.getElementById('faqContainer');

    // Clear existing content
    faqContainer.innerHTML = '';

    // Loop through FAQ items and create elements
    faqItems.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-chevron-down', 'arrow');

        faqItem.appendChild(title);
        faqItem.appendChild(icon);
        faqItem.appendChild(description);

        faqContainer.appendChild(faqItem);

        // Toggle description visibility on click
        title.addEventListener('click', () => {
            description.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });
}

// Render FAQ components on page load
window.addEventListener('load', () => {
    renderFAQ(faqItems);
});