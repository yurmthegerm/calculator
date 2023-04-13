let first = 0;
let second = 0;
let op = '';

function operate (no, ope, nt) {
    if (ope === '+') {
        return no+nt;
    } else if (ope === '-') {
        return no-nt;
    } else if (ope === 'x') {
        return no*nt;
    } else if (ope === '/') {
        return no/nt;
    }
    return ;
}

function populate ()

