module.exports = function createDreamTeam( members ) {

  if (!Array.isArray(members)) {
    return false;
}

return members.filter(el => typeof el === 'string').map(el => {
                  let a = el.trim();
                  return a[0].toUpperCase();
                }).sort().join('');
};