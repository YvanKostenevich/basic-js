module.exports = function createDreamTeam(array) {

    if (Array.isArray(array) === false){
        return false;
    }

    let stringArray = array.filter(value => typeof value === 'string');
    let dreamTeamName = '';

    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].trim().toUpperCase();
    }
    stringArray.sort();
    for (let i = 0; i < stringArray.length; i++) {

        dreamTeamName = dreamTeamName + stringArray[i][0];

    }

    return dreamTeamName;

};
