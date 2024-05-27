function tell(liste, verdi) { //teller antallet av et element i en array
    let antall = 0;
    for(i=0;i<liste.length;i++) { //går gjennom hvert element i listen
        if (liste[i]===verdi) { //dersom elementet matcher med verdien vi bruker, øker vi tellingen med 1
            antall+=1;
        }
    }
    return antall;
}

function stor(liste) { //finner største verdi i en array
    let temp=liste[0];
    for(i=1;i<liste.length;i++) { //går gjennom hvert element i listen
        if (liste[i]>temp) { //dersom verdien er større enn den lagrede største verdien, så settes det som en ny størst verdi
            temp = liste[i];
        }
    }
    return temp;
}

function liten(liste) { //finner minste verdi i en array, gjør det samme bare med minst.
    let temp=liste[0];
    for(i=1;i<liste.length;i++) {
        if (liste[i]<temp) {
            temp = liste[i]
        }
    }
    return temp;
}

function summer(liste, start=0) { //summerer sammen alle tallene i en array, med mulighet for å endre startpunkt
    let total = 0;
    for (i=start;i<liste.length;i++) { //går gjennom hvert element i en array og legger de sammen
        total += liste[i]
    }
    return total;
}

function avg(liste) { //finner gjennomsnittet av alle tallene i en array
    return summer(liste)/liste.length //bruker summer-metoden og dividerer på antall elementer for å finne snitt
}

function finnIndex(liste, verdi) { //finner hvor første av et element er i en array
    for(i=0;i<liste.length;i++) { //går gjennom hvert element i listen
        if(liste[i]===verdi) { //dersom det er en match, returneres det hvilken plass 
            return i;
        }
    }
}

function motsatt(liste) { //reverserer rekkefølgen på en array
    let motListe = [] //lager en liste for output
    for(i=1;i<liste.length+1;i++){ //går gjennom listen
        motListe.push(liste[liste.length-i]) //legger til verdier fra slutt til start
    }
    return motListe;
}

function finnes(liste, verdi) { //sjekker om en verdi finnes i en array
    for(i=0;i<liste.length;i++) { //går gjennom hvert element
        if(liste[i]===verdi) { //dersom det er en match, returneres det true
            return true;
        }
    }
}

function kutt(liste, start=0, slutt=liste.length) { //funksjon for å kopiere ut en spesifikk del av koden, dersom start/slutt ikke er definert kopieres hele listen.
    let nyListe = []; //lager output liste
    for(i=start; i<slutt;i++) { //legger inn verdier fra originallisten fra start til sluttverdi
        nyListe.push(liste[i]);
    }
    return nyListe;
}


function sorter(liste) { //sorterer en liste ved å plukke ut minste verdi (gjort på egenhånd)
    let oldListe = kutt(liste); //lager en kopi av listen
    let nyListe = []; //lager en output-liste
    for(j=0;j<liste.length;j++) { //gjentar dette like mange ganger som lengden til listen
        let minst = liten(oldListe); //finner den miste verdien, og putter den i den nye lsiten
        let plass = finnIndex(oldListe,minst);
        nyListe.push(minst)
        oldListe = pod(oldListe,plass,1) //fjerner den miste verdien fra den gamle lsiten
    }
    return nyListe;
}



function rydd(liste) { //alternativ funksjon for å sortere som sammenlikner verdiene (basert på undervisning i timen)
    let nyListe = kutt(liste); //lager en kopi av listen
    let clear = false; //setter statusen til listen at den ikke er sotert ferdig
    while (clear === false) { //så lenge listen ikke er sortert ferdig
        clear = true; //setter den til sortert
        for (j=0;j<nyListe.length-1;j++) { //går gjennom hvert element i listen
            if ((nyListe[j+1]-nyListe[j]<0)) { //sammenlikner verdien med den neste, dersom den nåværende verdien er større en den neste, så bytter de
                let temp = nyListe[j];
                nyListe[j] = nyListe[j+1];
                nyListe[j+1] = temp;
                clear = false; //setter statusen til listen som usortert
            }
        }
    }
    return nyListe;
}

function pod(liste, start, mengde, verdi) { //funksjon for å kutte ut og/eller legge til verdier inn i arrayen
    let nyListe = []; //lager en liste for output
    for(i=0;i<start;i++) { //legger til verdiene før stedet det kuttes ut/legges til verdier
        nyListe.push(liste[i])
    }
    if (verdi !== undefined) { //dersom brukeren har lagt inn verdier
        if (Array.isArray(verdi)) { //og det er en liste med verdier
            for(i=0;i<verdi.length;i++) { //legges verdiene inn i listen
                nyListe.push(verdi[i]);
            }
        } else { //ellers hvis det er en enkeltverdi
            nyListe.push(verdi); //legges verdien inn i listen
        }
    }
    for(i=(start+mengde);i<liste.length;i++) { //legger til resten av verdiene som kommer etter
        nyListe.push(liste[i])
    }
    return nyListe;
}

function tilfeldig(start,slutt,antall,norepeat=false) { //funksjon for å lage en liste med tilfeldig tall, med mulighet til å kun ha unike verdier
    let liste = []; //lager en liste for output
    let diff = slutt-start+1; //finner hvor stort intervallet av tall er
    for(index=0;index<antall;index++) { //repeterer like mange ganger som listen skal ha elementer
        let tall; //lager en variabel for tallet
        do { //kjører en gang uansett
            tall = start+Math.floor(Math.random()*diff); //setter tallet til en tilfeldig verdi innenfor intervallet satt
        } while (norepeat && finnes(liste,tall)); //finner en ny verdi hvis det er en duplikat verdi dersom personen har valgt å kun ha unike verdier
        liste.push(tall); //legger til tallverdien
    }
    return liste;
}

function scramble(liste) { //funksjon for å endre rekkefølgen tilfeldig til en array
    let order = tilfeldig(0,liste.length-1,liste.length,true); //lager en tilfeldig liste for unike verdier som skal være de nye plasseringene
    let nyListe = []; //lager en liste for putput
    console.log(order)
    for(i=0;i<liste.length;i++) { 
        for(j=0;j<liste.length;j++) { //finner hvor verdien i listen for rekkefølger samsvarer med den nåværende plasseringen i listen nå
            if(order[j]===i) {
                nyListe.push(liste[j]); //legger til den sammenhørende verdien i den originale listen
            }
        }
    }
    return nyListe;
}

