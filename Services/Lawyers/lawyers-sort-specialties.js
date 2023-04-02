function sortSpecialties(objectsData, data) {
  function removeLeadingSpacesFromSpecialties(objArray) {
    return objArray.map((obj) => {
      obj.specialties = obj.specialties.map((str) => str.trimStart());
      return obj;
    });
  }

  const objects = removeLeadingSpacesFromSpecialties(objectsData);

  objects.sort((a, b) => {
    const matchesA = a.specialties.filter((s) => data.includes(s));
    const matchesB = b.specialties.filter((s) => data.includes(s));
    return matchesB.length - matchesA.length;
  });
  return objects;
}

module.exports = { sortSpecialties };
