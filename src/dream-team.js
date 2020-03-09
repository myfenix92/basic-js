module.exports = function createDreamTeam(members) {
  //throw 'Not implemented'
  if (!Array.isArray(members)) {
    return false;
  }
  let str = ''
  let membersName = members.filter(item => typeof(item) === 'string')
  for (i = 0; i < membersName.length; i++) {
    str = str + membersName[i].toString().trim().slice(0,1)
  }
  return str.toUpperCase().split('').sort().join('')
};
