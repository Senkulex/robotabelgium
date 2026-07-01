// ============================================
// ВАКАНСІЇ / VACANCY DATA
// ============================================
// Щоб додати вакансію — додайте об'єкт у масив.
// lat, lng  — координати
// title     — назва {uk, ru, en}
// salary    — зарплата
// link      — посилання на Telegram-пост
//
// Приклад:
// { lat:51.05, lng:3.72, title:{uk:"Зварник",ru:"Сварщик",en:"Welder"}, salary:"18-22€/h", link:"https://t.me/robotabelgium_info/123" }

var VACANCIES = [
  // === Вакансія: Домашня робітниця (прибирання) ===
  // Джерело: https://t.me/robotabelgium_info/39
  {
    lat: 50.8506, lng: 4.2586,
    city: "Dilbeek",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.8000, lng: 4.1500,
    city: "Lennik",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.8833, lng: 4.2667,
    city: "Zellik",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.8833, lng: 4.4667,
    city: "Zaventem",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 51.0259, lng: 4.4777,
    city: "Mechelen",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.8889, lng: 4.5333,
    city: "Kortenberg",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.9333, lng: 4.3667,
    city: "Grimbergen",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.9500, lng: 4.5500,
    city: "Kampenhout",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  },
  {
    lat: 50.9167, lng: 4.5167,
    city: "Steenokkerzeel",
    title: { uk: "Домашня робітниця (прибирання)", ru: "Домработница (уборка)", en: "Housekeeper (Cleaning)" },
    salary: "€14,96/h brutto",
    link: "https://t.me/robotabelgium_info/39"
  }
];

// Города по вакансиям (для справки):
// Dilbeek (50.8506, 4.2586)
// Lennik (50.8000, 4.1500)
// Zellik (50.8833, 4.2667)
// Zaventem (50.8833, 4.4667)
// Mechelen (51.0259, 4.4777)
// Kortenberg (50.8889, 4.5333)
// Grimbergen (50.9333, 4.3667)
// Kampenhout (50.9500, 4.5500)
// Steenokkerzeel (50.9167, 4.5167)
