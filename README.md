# SaintCode projects API's

Для запуска сервера на своем ПК, клонируейте или скачайте репозиторий, и запустите скрипты в правильной последовательности:

## Скрипты:

`npm i` - Установить зависимости.\
`npm start` - Запустить сервер.\
`npm stop` - Остановить сервер.

При внесении изменений - требуется перезапуск!\

При закрытии терминала - работа не прерывается! (Можно запускать на VDS/VPS.

### URL для запроса:
`http://185.40.7.226:7000/`

### Если запускаете на своем ПК:
`http://localhost:7000/`

## API схема - Emoji Finder v1 (Basic)

| Method | Auth | Endpoint                               | Description                                                                                                 |
|--------|------|----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| GET    | NO   | /api/emoji/v1                          | Получение всех emoji.                                                                                       |
| GET    | NO   | /api/emoji/v1/find/?query=SEARCH_VALUE | Поиск эмоджи. Фильтрация происходит на стороне сервера. Вместо SEARCH_VALUE нужно передать параметр поиска. |


### Пример ответа:

```
[
{
  "title": "100",
  "symbol":	"💯",
  "keywords": "hundred points symbol sy…perfect parties parties"
},
{
  "title": "1234",
  "symbol":	"🔢",
  "keywords": "input symbol for numbers symbol"
},
]
```


## API схема - Emoji Finder v2 (Hard)

| Method | Auth | Endpoint                               | Description                                                                                                 |
|--------|------|----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| GET    | NO   | /api/emoji/v2                          | Получение всех emoji.                                                                                       |

### Пример ответа:

```
[
  {
    "emoji": "😀",
    "description": "grinning face",
    "category": "Smileys & Emotion",
    "aliases": ["grinning"],
    "tags": ["smile", "happy"],
    "unicode_version": "6.1",
    "ios_version": "6.0"
  },
  {
    "emoji": "😃",
    "description": "grinning face with big eyes",
    "category": "Smileys & Emotion",
    "aliases": ["smiley"],
    "tags": ["happy", "joy", "haha"],
    "unicode_version": "6.0",
    "ios_version": "6.0"
  },
]
```

## API схема - Products

| Method | Auth | Endpoint                              | Description                                                                                                                            |
|--------|------|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| GET    | NO   | /api/products/all                     | Получение всех товаров.                                                                                                                |
| GET    | NO   | /api/products/instock                 | Получение товаров в наличии                                                                                                            |                                                     |
| GET    | NO   | /api/products/find/?desc=SEARCH_VALUE | Поиск товаров по описанию (description). Фильтрация происходит на стороне сервера. Вместо SEARCH_VALUE нужно передать параметр поиска. |


### Пример ответа:

```
[
{
    "id": 0,
    "priceCountCard": "84,50",
    "priceCountBasic": "100,50",
    "currency": "₽",
    "imgSmall": "http://185.40.7.226:7000/products/pancakes.webp",
    "imgLarge": "http://185.40.7.226:7000/products/pancakes@2x.webp",
    "discount": 50,
    "description": "Г/Ц Блинчики с мясом вес, Россия",
    "rate": 2,
    "imgAlt": "pancakes",
    "qty": 70,
  },
  {
    "id": 1,
    "priceCountCard": "44,50",
    "priceCountBasic": "50,50",
    "currency": "₽",
    "imgSmall": "http://185.40.7.226:7000/products/milk.webp",
    "imgLarge": "http://185.40.7.226:7000/products/milk@2x.webp",
    "discount": 90,
    "description":
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное натуральное свежее",
    "rate": 3,
    "imgAlt": "milk",
    "qty": 0,
  },
]
```
