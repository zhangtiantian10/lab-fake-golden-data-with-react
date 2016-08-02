function getNewFroms(froms, element) {
    froms.push(element);

    return froms;
}

function deleteFrom(froms, index) {
    froms.splice(index, 1);

    return froms;
}