const politicieni = [
    {
        nume: 'Mihai Tudose',
        descriere: 'Fost prim-ministru al României.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Mihai_Tudose',
        dosar_penal: true,
        href: './politicieni/mihai-tudose.html'
    },
    {
        nume: 'Rareș Bogdan',
        descriere: 'Politician român și jurnalist.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Rare%C8%99_Bogdan',
        dosar_penal: false,
        href: './politicieni/rares-bogdan.html'
    },
    {
        nume: 'Gabriela Firea',
        descriere: 'Politiciană română, fost primar al Bucureștiului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Gabriela_Firea',
        dosar_penal: false,
        href: './politicieni/gabriela-firea.html'
    },
    {
        nume: 'Dan Motreanu',
        descriere: 'Politician român, membru al Parlamentului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dan_Motreanu',
        dosar_penal: false,
        href: './politicieni/dan-motreanu.html'
    },
    {
        nume: 'Claudiu Manda',
        descriere: 'Politician român, membru al Parlamentului.',
        link_wikipedia: 'https://en.wikipedia.org/wiki/Claudiu_Manda',
        dosar_penal: false,
        href: './politicieni/claudiu-manda.html'
    },
    {
        nume: 'Adina Vălean',
        descriere: 'Politiciană română, comisar european.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Adina_Ioana_V%C4%83lean',
        dosar_penal: false,
        href: './politicieni/adina-valean.html'
    },
    {
        nume: 'Victor Negrescu',
        descriere: 'Politician român, membru al Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Victor_Negrescu',
        dosar_penal: false,
        href: './politicieni/victor-negrescu.html'
    },
    {
        nume: 'Daniel Buda',
        descriere: 'Politician român, membru al Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Daniel_Buda',
        dosar_penal: false,
        href: './politicieni/daniel-buda.html'
    },
    {
        nume: 'Vasile Dîncu',
        descriere: 'Politician român, fost ministru al Dezvoltării Regionale.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Vasile_D%C3%AEncu',
        dosar_penal: false,
        href: './politicieni/vasile-dincu.html'
    },
    {
        nume: 'Maria Grapini',
        descriere: 'Politiciană română, membră a Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Maria_Grapini',
        dosar_penal: false,
        href: './politicieni/maria-grapini.html'
    },
    {
        nume: 'Siegfried Mureșan',
        descriere: 'Politician român, membru al Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Siegfried_Mure%C8%99an',
        dosar_penal: false,
        href: './politicieni/siegfried-muresan.html'
    },
    {
        nume: 'Dragoș Benea',
        descriere: 'Politician român, membru al Parlamentului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Adrian-Drago%C8%99_Benea',
        dosar_penal: false,
        href: './politicieni/dragos-benea.html'
    },
    {
        nume: 'Mircea Hava',
        descriere: 'Politician român, membru al Parlamentului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Mircea_Hava',
        dosar_penal: false,
        href: './politicieni/mircea-hava.html'
    },
    {
        nume: 'Gheorghe Cîrciu',
        descriere: 'Politician român, membru al Parlamentului.',
        link_wikipedia: 'https://romania.europalibera.org/a/metropola-drp-200000-de-euro/32572259.html',
        dosar_penal: true,
        href: './politicieni/gheorghe-circiu.html'
    },
    {
        nume: 'Gheorghe Falcă',
        descriere: 'Politician român, fost primar al Aradului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Gheorghe_Falc%C4%83',
        dosar_penal: false,
        href: './politicieni/gheorghe-falca.html'
    },
    {
        nume: 'Virgil Popescu',
        descriere: 'Politician român, ministru al Economiei.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Virgil_Popescu',
        dosar_penal: true,
        href: './politicieni/virgil-popescu.html'
    },
    {
        nume: 'Dan Nica',
        descriere: 'Politician român, membru al Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dan_Nica',
        dosar_penal: false,
        href: './politicieni/dan-nica.html'
    },
    {
        nume: 'Alexandru Muraru',
        descriere: 'Politician român, membru al Parlamentului European.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Alexandru_Muraru',
        dosar_penal: false,
        href: './politicieni/alexandru-muraru.html'
    },
    {
        nume: 'Mara Mares',
        descriere: 'Presedinte al Tineretului National Liberal',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Mara_Mare%C8%99',
        dosar_penal: false,
        href: './politicieni/mara-mares.html'
    }
];



function afiseazaPoliticieni(listaPoliticieni, id) {
    const politicieniList = document.getElementById(id);

    listaPoliticieni.forEach(politician => {
        const listItem = document.createElement('li');
        const wrapper = document.createElement('a');
        wrapper.href = politician.href;
        wrapper.target = '_blank';

        listItem.classList.add('politician');

        const heading = document.createElement('h2');
        heading.textContent = politician.nume;

        const description = document.createElement('p');
        description.textContent = politician.descriere;

        const link = document.createElement('a');
        link.href = politician.link_wikipedia;
        link.textContent = 'Wikipedia';
        link.target = '_blank';


        if (politician.dosar_penal) {
            listItem.style.color = 'red !important';
            listItem.style.fontWeight = 'bold';
            heading.style.color = 'black';

            const text = document.createElement('p');
            text.textContent = "Acest politician are dosar penal!";
            text.style.color = 'red';
            description.appendChild(text);
            listItem.style.border = '1px solid red';
            listItem.style.borderRadius = '10px';
            listItem.style.backgroundColor = '#d4b7b7';


        }
        wrapper.appendChild(heading);
        wrapper.appendChild(description);
        wrapper.appendChild(link);
        listItem.appendChild(wrapper);
        wrapper.style.textDecoration = 'none';

        politicieniList.appendChild(listItem);

    });

}


const politicieni2 = [
    {
        nume: 'Dan Barna',
        descriere: 'Politician român, președinte al partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dan_Barna',
        partid: 'USR'
    },
    {
        nume: 'Vlad Voiculescu',
        descriere: 'Politician român, membru al partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Vlad_Voiculescu',
        partid: 'USR'
    },
    {
        nume: 'Eugen Tomac',
        descriere: 'Politician român, președinte al partidului PMP.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Eugen_Tomac',
        partid: 'PMP'
    },
    {
        nume: 'Vlad Botoş',
        descriere: 'Politician român, membru al partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Vlad_Boto%C8%99',
        partid: 'USR'
    },
    {
        nume: 'Cristina Prună',
        descriere: 'Politician român, membru al partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Cristina_Prun%C4%83',
        partid: 'USR'
    },
    {
        nume: 'Violeta Alexandru',
        descriere: 'Politician român, membră a partidului FD.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Violeta_Alexandru',
        partid: 'FD'
    },
    {
        nume: 'Radu Mihail',
        descriere: 'Politician român, membru al partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Radu_Mihail',
        partid: 'USR'
    },
    {
        nume: 'Corina Atanasiu',
        descriere: 'Politician român, membră a partidului USR.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Corina_Atanasiu',
        partid: 'USR'
    }
];




const politicieni3 = [
    {
        nume: 'Akkaya Felicia',
        descriere: 'Un candidat dedicat promovării valorilor conservatoare și a suveranității naționale.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Akkaya_Felicia'
    },
    {
        nume: 'Axinia Adrian',
        descriere: 'Expert în economie și susținător al politicii economice de dreapta.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Axinia_Adrian'
    },
    {
        nume: 'Baltasiu Radu',
        descriere: 'Luptător pentru drepturile individuale și libertatea de exprimare.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Baltasiu_Radu'
    },
    {
        nume: 'Biro Răzvan',
        descriere: 'Advocate pentru protecția mediului și dezvoltarea durabilă.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Biro_R%C4%83zvan'
    },
    {
        nume: 'Bruynseels Ramona-Ioana',
        descriere: 'Susținătoare a familiei tradiționale și a valorilor creștine.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Bruynseels_Ramona-Ioana'
    },
    {
        nume: 'Costea Paul',
        descriere: 'Apărător al suveranității României și al independenței economice.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Costea_Paul'
    },
    {
        nume: 'Costea Peter',
        descriere: 'Expert în afaceri internaționale și relații externe.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Costea_Peter'
    },
    {
        nume: 'Dămureanu Ringo',
        descriere: 'Luptător pentru drepturile animalelor și mediu sănătos.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/D%C4%83mureanu_Ringo'
    },
    {
        nume: 'Dascălu Cristina',
        descriere: 'Advocate pentru educație de calitate și accesibilă.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dasc%C4%83lu_Cristina'
    },
    {
        nume: 'Dragoman Dragoș',
        descriere: 'Susținător al inovației și tehnologiei.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dragoman_Drago%C8%99'
    },
    {
        nume: 'Doboș Elena',
        descriere: 'Apărătoare a drepturilor femeilor și egalității de gen.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dobo%C8%99_Elena'
    },
    {
        nume: 'Dumitrescu Cristina',
        descriere: 'Expert în sănătate publică și acces la servicii medicale.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dumitrescu_Cristina'
    },
    {
        nume: 'Enache Mihai',
        descriere: 'Advocate pentru dezvoltarea rurală și agricultură sustenabilă.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Enache_Mihai'
    },
    {
        nume: 'Enachi Raisa',
        descriere: 'Luptătoare pentru drepturile minorităților și diversitate culturală.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Enachi_Raisa'
    },
    {
        nume: 'Fițiu Avram',
        descriere: 'Susținător al antreprenoriatului și creșterii economice.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Fi%C8%9Biu_Avram'
    },
    {
        nume: 'Foriș Tiberiu',
        descriere: 'Expert în securitate cibernetică și protecția datelor.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Fori%C8%99_Tiberiu'
    },
    {
        nume: 'Gherasim Laura',
        descriere: 'Advocate pentru drepturile copiilor și acces la educație.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Gherasim_Laura'
    },
    {
        nume: 'Grosu Veronica',
        descriere: 'Luptătoare pentru justiție socială și egalitate.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Grosu_Veronica'
    },
    {
        nume: 'Gurlui Silviu',
        descriere: 'Susținător al infrastructurii și dezvoltării regionale.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Gurlui_Silviu'
    },
    {
        nume: 'Iagăr Monica',
        descriere: 'Expert în cultură și promovarea patrimoniului național.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Iag%C4%83r_Monica'
    },
    {
        nume: 'Irindea Mirela',
        descriere: 'Advocate pentru drepturile persoanelor cu dizabilități.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Irindea_Mirela'
    },
    {
        nume: 'Lulea Marius',
        descriere: 'Luptător pentru transparență și responsabilitate în guvernare.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Lulea_Marius'
    },
    {
        nume: 'Mancaș Nicușor-Cristian',
        descriere: 'Susținător al energiei regenerabile și protecției mediului.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Manca%C8%99_Nicu%C8%99or-Cristian'
    },
    {
        nume: 'Mihăescu Mugur',
        descriere: 'Expert în politici sociale și asistență socială.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Mugur_Mih%C4%83escu'
    },
    {
        nume: 'Mitrea Dumitrina',
        descriere: 'Advocate pentru drepturile vârstnicilor și sănătatea acestora.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Mitrea_Dumitrina'
    },
    {
        nume: 'Năstăsoiu Elena',
        descriere: 'Luptătoare pentru drepturile muncitorilor și condiții de muncă decente.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/N%C4%83st%C4%83soiu_Elena'
    },
    {
        nume: 'Natea Liviu',
        descriere: 'Susținător al securității naționale și apărării.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Natea_Liviu'
    },
    {
        nume: 'Nicolescu Maria-Lăcrimioara',
        descriere: 'Expert în educație civică și participare activă.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Nicolescu_Maria-L%C4%83crimioara'
    },
    {
        nume: 'Olteanu Vlad',
        descriere: 'Advocate pentru dezvoltarea urbană și infrastructură.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Olteanu_Vlad'
    },
    {
        nume: 'Păucean Fernandes Luminița',
        descriere: 'Luptătoare pentru drepturile imigranților și integrare.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/P%C4%83ucean_Fernandes_Lumini%C8%9Ba'
    },
    {
        nume: 'Petcu Simona-Maria',
        descriere: 'Susținătoare a culturii și diversității.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Petcu_Simona-Maria'
    },
    {
        nume: 'Piperea Gheorghe',
        descriere: 'Expert în drept și justiție.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Piperea_Gheorghe'
    },
    {
        nume: 'Popa Ioan-Aurelian',
        descriere: 'Advocate pentru drepturile consumatorilor și protecția acestora.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Popa_Ioan-Aurelian'
    },
    {
        nume: 'Popa Mihai Silviu',
        descriere: 'Luptător pentru drepturile tinerilor și educație.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Popa_Mihai_Silviu'
    },
    {
        nume: 'A.S. Sturdza Șerban Dimitrie',
        descriere: 'Susținător al patrimoniului cultural și artistic.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/A.S._Sturdza_%C8%98erban_Dimitrie'
    },
    {
        nume: 'Tanasă Dan',
        descriere: 'Expert în politici de securitate și apărare.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Tanas%C4%83_Dan'
    },
    {
        nume: 'Târziu Claudiu Richard',
        descriere: 'Advocate pentru drepturile minorităților sexuale și egalitate.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/T%C3%A2rziu_Claudiu_Richard'
    },
    {
        nume: 'Teodorescu Maria-Georgiana',
        descriere: 'Luptătoare pentru drepturile copiilor și acces la educație.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Teodorescu_Maria-Georgiana'
    },
    {
        nume: 'Terheș Cristian',
        descriere: 'Susținător al antreprenoriatului și dezvoltării economice.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Cristian_Terhe%C8%99'
    },
    {
        nume: 'Ursu Aurora',
        descriere: 'Expert în cultură și promovarea patrimoniului național.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Ursu_Aurora'
    },
    {
        nume: 'Vîlcu Selena Gabriela',
        descriere: 'Advocate pentru drepturile persoanelor cu dizabilități.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/V%C3%AElcu_Selena_Gabriela'
    },


];
const candidatiUDMR = [
    {
        nume: 'Winkler Iuliu',
        descriere: 'Eurodeputat cu experiență și reprezentant al comunității maghiare din Transilvania.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Iuliu_Winkler'
    },
    {
        nume: 'Vincze Lorant',
        descriere: 'Eurodeputat cu experiență și reprezentant al comunității maghiare din Transilvania.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/L%C3%B3r%C3%A1nt_Vincze'
    },
    {
        nume: 'Szilagyi Dora',
        descriere: 'Președintele Organizației de Tineret a UDMR, reprezentând interesele tinerilor maghiari.',
        link_wikipedia: 'https://rmdsz.ro/profil/szilagyi-dora-emese'
    },
    {
        nume: 'Foriș Tiberiu',
        descriere: 'Expert în securitate cibernetică și protecția datelor.',
        link_wikipedia: 'https://www.researchgate.net/profile/Tiberiu-Foris'
    }
];


const politicieni5 = [
    {
        nume: 'Dacian Cioloș',
        descriere: 'Europarlamentar REPER din 2019, fost prim-ministru al Guvernului României, Comisar European pentru Agricultură și Dezvoltare Rurală între 2010 și 2014 și fost ministru al Agriculturii.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Dacian_Ciolo%C8%99'
    },
    {
        nume: 'Ramona Strugariu',
        descriere: 'Europarlamentară și copreședinta REPER, în top 5 deputați europeni ca influență pentru activitatea sa din domeniul justiției, afacerilor interne și migrației. De profesie, juristă.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Ramona_Strugariu'
    },
    {
        nume: 'Dragoș Pîslaru',
        descriere: 'Europarlamentar REPER din anul 2019 și președinte al Comisiei de Ocupare și Afaceri Sociale din Parlamentul European.',
        link_wikipedia: 'https://dragospislaru.eu/'
    },
    {
        nume: 'Oana Cambera',
        descriere: 'Deputată de Ilfov, membră în Comisia pentru administrație publică și în Comisia pentru egalitate de șanse din Camera Deputaților.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Oana_Cambera'
    },
    {
        nume: 'Andrei Lupu',
        descriere: 'Cadru didactic al Universității din București, cu studii universitare de drept și afaceri europene.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Andrei_Lupu'
    },
    {
        nume: 'Andreea Leonte',
        descriere: 'Consilieră parlamentară, specializată în politici publice, participând la redactarea și negocierea sprijinului politic pentru două dintre cele mai importante legi adoptate în legislatura 2020-2024.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Andreea_Leonte'
    },
    {
        nume: 'Cristian Presură',
        descriere: 'Doctor în fizică, inventator, autor și cercetător român, cu experiență națională și internațională în domeniul științelor exacte.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Cristian_Presur%C4%83'
    },
    {
        nume: 'Simina Tulbure',
        descriere: 'Prima femeie care reprezintă Diaspora în Parlamentul României, voluntară entuziastă, lingvistă de profesie, absolventă de Essex.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Simina_Tulbure'
    },
    {
        nume: 'Ciprian Mihali',
        descriere: 'Profesor la Universitatea „Babeș-Bolyai” din Cluj, doctor în filosofie cu experiență în domeniul științelor politice.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Ciprian_Mihali'
    },
    {
        nume: 'Ana-Maria Boghean',
        descriere: 'Expertă în politici de tineret și egalitate de gen, consultantă în comunicare cu experiență în relații internaționale și diplomație.',
        link_wikipedia: 'https://ro.wikipedia.org/wiki/Ana-Maria_Boghean'
    }
];




window.onload = function () {
    afiseazaPoliticieni(politicieni, 'politicieni-list');
    afiseazaPoliticieni(politicieni2, 'politicieni-list2');
    afiseazaPoliticieni(politicieni3, 'politicieni-list3');
    afiseazaPoliticieni(candidatiUDMR, 'politicieni-list4');
    afiseazaPoliticieni(politicieni5, 'politicieni-list5');
};