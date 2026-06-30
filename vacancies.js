// ============================================
// ФАЙЛ ВАКАНСІЙ / VACANCY DATA
// ============================================
// Щоб додати нову вакансію — просто додайте новий об'єкт у масив нижче.
// Поля:
//   lat, lng — координати на карті
//   title    — назва вакансії (об'єкт з мовами: uk, ru, en)
//   salary   — зарплата (текст)
//   link     — посилання на Telegram-пост з повною вакансією
//
// Приклад:
//   { lat: 51.05, lng: 3.72, title: {uk:"Зварник",ru:"Сварщик",en:"Welder"}, salary:"18-22€/h", link:"https://t.me/robotabelgium_info/123" }

var VACANCIES = [
  {
    lat: 51.2194,
    lng: 4.4025,
    title: { uk: "Будівельник", ru: "Строитель", en: "Construction Worker" },
    salary: "15-20€/h",
    link: "https://t.me/robotabelgium_info"
  },
  {
    lat: 50.8503,
    lng: 4.3517,
    title: { uk: "Водій категорії CE", ru: "Водитель категории CE", en: "CE Driver" },
    salary: "18-22€/h",
    link: "https://t.me/robotabelgium_info"
  },
  {
    lat: 51.0543,
    lng: 3.7174,
    title: { uk: "Працівник складу", ru: "Работник склада", en: "Warehouse Worker" },
    salary: "14-16€/h",
    link: "https://t.me/robotabelgium_info"
  },
  {
    lat: 50.9329,
    lng: 4.3644,
    title: { uk: "Оператор на завод", ru: "Оператор на завод", en: "Factory Operator" },
    salary: "15-18€/h",
    link: "https://t.me/robotabelgium_info"
  },
  {
    lat: 50.6292,
    lng: 5.5797,
    title: { uk: "Електрик", ru: "Электрик", en: "Electrician" },
    salary: "18-24€/h",
    link: "https://t.me/robotabelgium_info"
  }
];
