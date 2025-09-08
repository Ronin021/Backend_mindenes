class AdatKezelo {
    #adatTomb;
    #hozzaadCallback;
    constructor() {
        this.#adatTomb = [];
    }
    beallitHozzaadCallback(callback_param) {
        this.#hozzaadCallback = callback_param;
    };

    hozzaad(adat) {
        this.#adatTomb.push(adat);
        this.#hozzaadCallback(adat);
    }
};

class AdatMegjelenito {

    #adatKezelo;
    constructor(adatKezelo) {
        this.#adatKezelo = adatKezelo;
        const fejlecek = [
            { innerHTML1: "azonosito" },
            { innerHTML1: "nev" },
            { innerHTML1: "eletkor" },
            { innerHTML1: "telepules" }
        ];

        const tabla = this.elemetLetrehozSzulohoz('table', document.body);
        const thead = this.elemetLetrehozSzulohoz('thead', tabla);
        const tbody = this.elemetLetrehozSzulohoz('tbody', tabla);

        const fejlecSor = this.elemetLetrehozSzulohoz('tr', thead);

        for (const fejlec of fejlecek) {
            this.elemetLetrehozInnerHTMLSzulohoz('th', fejlecSor, fejlec.innerHTML1);
        }

        this.#adatKezelo.beallitHozzaadCallback((adat) => {
            const sor = this.elemetLetrehozSzulohoz('tr', tbody);
            this.td1('td', sor, adat.azonosito);
            this.td2('td', sor, adat.nev);
            this.td3('td', sor, adat.eletkor);
            this.td4('td', sor, adat.telepules);
        });
    };

    /**
     * 
     * @param {String} htmltag 
     * @param {HTMLElement} szulo 
     * @returns {HTMLElement}
     */
    elemetLetrehozSzulohoz(htmltag, szulo) {
        const elem = document.createElement(htmltag);
        szulo.appendChild(elem);
        return elem;
    };

    /**
     * 
     * @param {String} htmltag 
     * @param {HTMLElement} szulo 
     * @param {String} innerhtml2 
     * @returns {HTMLElement}
     */
    elemetLetrehozInnerHTMLSzulohoz(htmltag, szulo, innerhtml2) {
        const elem = document.createElement(htmltag);
        elem.innerHTML = innerhtml2;
        szulo.appendChild(elem);
        return elem;
    };
};

class Feltoltes {

    #adatKezelo1;
    constructor(adatKezelo1) {
        this.#adatKezelo1 = adatKezelo1;

        const feltoltInput = document.createElement('input');
        feltoltInput.type = 'file';
        document.body.appendChild(feltoltInput);

        feltoltInput.addEventListener('change', (e) => {
            const fajl = e.target.files[0];

            const olvaso = new FileReader();

            olvaso.readAsText(fajl);

            olvaso.onload = () => {
                const fajlEredmeny = JSON.parse(olvaso.result);

                for (const ember of fajlEredmeny) {
                    this.#adatKezelo1.hozzaad(ember);
                }
            };
        });

    };
};

const adatKezelo = new AdatKezelo();
const adatMegjelenito = new AdatMegjelenito(adatKezelo);
const feltoltes = new Feltoltes(adatKezelo);