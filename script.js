const items = [
  {
    link: 'https://movie-search-app-yajuj.herokuapp.com/',
    image: './img/movie-app.png',
    alt: 'rwn-app example',
    technologies: ['React', 'Redux'],
  },
  {
    link: 'https://yajujapp-live.herokuapp.com/',
    image: './img/crwn-app.png',
    alt: 'movie_search_app',
    technologies: ['React', 'Redux', 'Redux-Saga'],
  },
  {
    link: 'https://quotes-machine-yajuj.herokuapp.com/',
    image: './img/quotes-machine.png',
    alt: 'quotes_machine_app',
    technologies: ['React'],
  },
];

const skills = [
  'HTML, CSS, JavaScript.',
  'React, React-Native.',
  'Redux, Redux-Saga.',
];

const description_obj_RU = {
  h2: 'Привет.',
  p: `Меня зовут Тимур, я frontend-developer.<br />
  Это моё небольшое портфолио.❤️`,
  h3: 'Мои навыки.',
};
const description_obj_EN = {
  h2: 'Hello.',
  p: `My name is Timur i'am a front-end developer.<br />
  This is my small portfolio.`,
  h3: 'My skills.',
};
const description = document.querySelector('.info__about_inner');

let translated = false;

const changeLanguage = () => {
  translated = !translated;

  const description_obj = translated ? description_obj_RU : description_obj_EN;

  document.querySelector('.language').textContent = translated
    ? 'на русском...'
    : 'in english...';
  const div_main = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.innerText = description_obj.h2;

  const p = document.createElement('p');
  p.innerHTML = description_obj.p;

  const div_info = document.createElement('div');
  div_info.className = 'info__skills';

  const h3_info = document.createElement('h3');
  h3_info.innerText = description_obj.h3;

  div_info.appendChild(h3_info);

  const ul_info = document.createElement('ul');

  while (skills.length) {
    const ul_info_skill = document.createElement('li');
    ul_info_skill.innerText = skills.shift();

    ul_info.appendChild(ul_info_skill);
  }
  div_main.appendChild(div_info);

  div_main.appendChild(h2);
  div_main.appendChild(p);
  div_main.appendChild(div_info);

  description.firstElementChild?.remove();
  description.appendChild(div_main);
};

const start = () => {
  const main = document.querySelector('main');

  while (items.length) {
    const current = items.shift();

    const img = document.createElement('img');
    img.src = current.image;
    img.alt = current.alt;
    img.className = 'portfolio__item__img';

    const a = document.createElement('a');
    a.href = current.link;
    a.target = '_blanc';
    a.appendChild(img);

    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio__item';
    portfolioItem.appendChild(a);

    const skills = document.createElement('div');
    skills.className = 'skills';

    while (current.technologies.length) {
      const span = document.createElement('span');
      span.className = 'skill';
      span.innerHTML = current.technologies.shift();
      skills.appendChild(span);
    }

    portfolioItem.appendChild(skills);

    main.appendChild(portfolioItem);
  }

  changeLanguage();
};

start();

document.querySelector('.language').addEventListener('click', () => {
  changeLanguage();
});
