export const movie =  {
    "type": "object",
    "properties": {
      "cinemaId": {
        "type": "integer",
        "description": "id для фильма",
        "example": 1
      },
      "name": {
        "type": "string",
        "description": "Название фильма",
        "example": "007: Не час помирати"
      },
      "poster": {
        "type": "string",
        "description": "Урл к картинке для постера для хедера на странице о фильме размером 1400/650 пикселей",
        "example": "https://picsum.photos/1400/650"
      },
      "preview": {
        "type": "string",
        "description": "Урл для картинки-превью для списка фильмов размером 320/220 пикселей",
        "example": "https://picsum.photos/320/220"
      },
      "description": {
        "type": "string",
        "description": "Краткое описание для фильма",
        "example": "Сер Джеймс Бонд (Деніел Крейг) вирішив відпочити від скаженого ритму життя агента 007"
      },
      "imdbRating": {
        "type": "string",
        "description": "Оценка в IMDb рейтинг",
        "example": "7.7"
      },
      "yearOfCreation": {
        "type": "string",
        "description": "Год выхода фильма в прокат",
        "example": "2019"
      },
      "country": {
        "type": "string",
        "description": "Страна создания фильма",
        "example": "USA"
      },
      "language": {
        "type": "string",
        "description": "Язык фильма",
        "enum": ["ukrainian", "original", "english"],
        "example": "english"
      },
      "genre": {
        "type": "string",
        "enum": ["action", "comedy", "crime", "drama", "horror"],
        "description": "Жанр фильма",
        "example": "comedy"
      },
      "mainCrew": {
        "type": "string",
        "description": "Строка, которая содержит основной актерский состав",
        "example": "Меттью МакКонахі, Чарлі Ханнем, Мішель Докері"
      },
      "director": {
        "type": "string",
        "description": "Режиссер фильма",
        "example": "Гай Ричи"
      },
      "screenwriter": {
        "type": "string",
        "description": "Сценарист",
        "example": "Айван Еткинсон"
      },
      "rentalStart": {
        "type": "string",
        "description": "Дата начала проката в кинотеатре",
        "example": "З 02 липня 2020"
      },
      "duration": {
        "type": "integer",
        "description": "Длительность фильма в минутах",
        "example": 115
      },
      "ageRestriction": {
        "type": "string",
        "description": "Возрастные ограничения для сеанса",
        "example": "12+"
      },
      "cinemaShows": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CinemaShow"
        }
      }
    }
}