export default ({
  state: {
    speciality: [
      'Акушерство и гинекология',
      'Аллергология и иммунология',
      'Анестезиология-реаниматология',
      'Бактериология',
      'Вирусология',
      'Водолазная медицина',
      'Гастроэнтерология',
      'Гематология',
      'Гигиена труда',
      'Гигиена питания',
      'Генетика',
      'Гериатрия',
      'Гигиена детей и подростков',
      'Гигиеническое воспитание',
      'Детская урология-андрология',
      'Детская эндокринология',
      'Дезинфектология',
      'Дерматовенерология',
      'Детская кардиология',
      'Детская онкология',
      'Детская хирургия',
      'Диетология',
      'Лечебная физкультура и спортивная медицина',
      'Медико-профилактическое дело',
      'Инфекционные болезни',
      'Кардиология',
      'Клиническая лабораторная диагностика',
      'Клиническая фармакология',
      'Колопроктология',
      'Коммунальная гигиена',
      'Косметология',
      'Лабораторная генетика',
      'Мануальная терапия',
      'Лечебное дело',
      'Неонатология',
      'Медико-социальная экспертиза',
      'Медицинская биофизика',
      'Неврология',
      'Медицинская биохимия',
      'Медицинская кибернетика',
      'Нейрохирургия',
      'Общая врачебная практика (семейная медицина)',
      'Нефрология',
      'Общая гигиена',
      'Организация здравоохранения и общественное здоровье',
      'Онкология',
      'Педиатрия',
      'Ортодонтия',
      'Остеопатия',
      'Оториноларингология',
      'Офтальмология',
      'Паразитология',
      'Патологическая анатомия',
      'Рефлексотерапия',
      'Профпатология',
      'Пластическая хирургия',
      'Психиатрия',
      'Психиатрия-наркология',
      'Психотерапия',
      'Пульмонология',
      'Радиационная гигиена',
      'Радиология',
      'Радиотерапия',
      'Ревматология',
      'Рентгенология',
      'Рентгенэндоваскулярные диагностика и лечение',
      'Санитарно-гигиенические лабораторные исследования',
      'Скорая медицинская помощь',
      'Сестринское дело (ВСО)',
      'Сердечно-сосудистая хирургия',
      'Сексология',
      'Сурдология-оториноларингология',
      'Социальная гигиена и организация госсанэпидслужбы',
      'Стоматология детская',
      'Стоматология общей практики',
      'Стоматология ортопедическая',
      'Стоматология терапевтическая',
      'Стоматология хирургическая',
      'Судебно-медицинская экспертиза',
      'Судебно-психиатрическая экспертиза',
      'Терапия',
      'Трансфузиология',
      'Токсикология',
      'Торакальная хирургия',
      'Травматология и ортопедия',
      'Управление сестринской деятельностью',
      'Урология',
      'Ультразвуковая диагностика',
      'Управление и экономика фармации',
      'Физиотерапия',
      'Фтизиатрия',
      'Функциональная диагностика',
      'Фармацевтическая технология',
      'Фармацевтическая химия и фармакогнозия',
      'Хирургия',
      'Фармация/Провизор',
      'Челюстно-лицевая хирургия',
      'Эндоскопия',
      'Эндокринология',
      'Эпидемиология',
    ],
  },
  getters: {
    getSpeciality(state) {
      return state.speciality.sort();
    }
  },
})