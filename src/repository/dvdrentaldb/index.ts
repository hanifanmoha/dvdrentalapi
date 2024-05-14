const data = require('./dvdrental.json');

function getFilm() {
  return data.actor;
}

const dvdRendalDBRepository = { getFilm };

export default dvdRendalDBRepository;
