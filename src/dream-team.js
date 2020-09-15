module.exports = function createDreamTeam(members) {
	let TeamName;
  if (members instanceof Array) {
  teamName = members.filter((member) => {
      if (typeof (member) == 'string') {
        return member;
      }
    })
    .map((member) => {
      return member.trim();
    })
    .map((member) => {
      if (member.charAt(0) >= 'A' && member.charAt(0) <= 'z') {
        return member.charAt(0);
      }
    })
    .map((member) => {
      return member.toUpperCase();
    })
    .sort()
    .join('');
  } else {
    return false;
  }

  if (teamName.length === 0) {
    return false;
  }

  return teamName;
};