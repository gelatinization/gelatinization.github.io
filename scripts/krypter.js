let alfabet = "";
let upper = "";
for (i=65;i<91;i++) {
    upper += String.fromCharCode(i);
}
upper += "ÆØÅ";
let lower = "";
for (i=97;i<123;i++) {
    lower += String.fromCharCode(i);
}
lower += "æøå";
let numbers = "";
for (i=48;i<58;i++) {
    numbers += String.fromCharCode(i);
}
let special = "";
for (i=32;i<48;i++) {
    special += String.fromCharCode(i);
}
for (i=58;i<65;i++) {
    special += String.fromCharCode(i);
}
for (i=91;i<97;i++) {
    special += String.fromCharCode(i);
}

for (i=123;i<127;i++) {
    special += String.fromCharCode(i);
}
alfabet = upper+lower+numbers+special;

function tallKrypt(string,key) {
    let out = "";
    for (i=0;i<string.length;i++) {
        let plass = alfabet.indexOf(string[i]);
        let newPlass = plass+key;
        while (newPlass >= alfabet.length) {
            newPlass -= alfabet.length
        }
        while (newPlass < 0) {
            newPlass += alfabet.length;
        }
        out += alfabet[newPlass];
    }
    return out;
}

function boksKrypt(string,key, encrypt=true) {
    let nokkel = null;
    if (encrypt===true) {
        nokkel = alfabet.indexOf(key);
    } else {
        nokkel = -alfabet.indexOf(key);
    }
    return tallKrypt(string,nokkel);
}

function krypter(string,key, encode=true) {
    let ut = "";
    let keyPlace = 0;
    for (j=0;j<string.length;j++) {
        ut += boksKrypt(string[j],key[keyPlace],encode);
        
        keyPlace++;
        if (keyPlace >= key.length) {
            keyPlace -= key.length;
        }

    }
    return ut;
}



