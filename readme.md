a.pavlov@3red.net
> akk github apavlov3rednet

### Порядок работы:

1. Создать проект на гитхабе, публичный, или приватный но с доступом к проекту
2. Пишите письмо. 
    - Тема письма: Кванториум. Имя Фамилия. Название проекта. 
    - В письме: ссылку на гитхаб проект, краткое описание проекта
    - В письме: телефон или акаунт телеграма
3. Группа в телеграм
4. Полезные ресурсы:
    ### Дизайн, идеи:
    - https://www.behance.net/
    - dribbble.com
    - pinterest.com
    - https://www.flaticon.com/
    - https://color.adobe.com/ru/create/color-wheel 
    - https://gradients.app/ru/newpalette - подбор цвета по картинке
    ### Модули и плагины:
    - https://www.npmjs.com/ - [полезные](plugins.md)
    ### Документация:
    - https://developer.mozilla.org/ - MDN
    - https://www.mongodb.com/docs/ - MongoDB
    - https://nodejs.org/docs/latest/api/ - node.js
    - https://javascript.ru/ - на русском языке
    - https://doka.guide/css/grid-guide/ - Гриды в CSS для верстки
    ### Софт:
    - https://www.mongodb.com/try/download/shell - шелл монгодб
    - https://www.mongodb.com/try/download/compass - компасс монгодб (ГУИ)

### Скачиваем файлы:
- back/
- front/
- все файлы в корне

### Установка:
1. Открываете терминал в VSC
2. npm i - установка серверной части
3. cd front/ - переходим в папку фронт
4. npm i - установка клиентской части
5. Устанавливаем MongoDB Compass
6. back\params\config.js - прописать настройки сервера
7. front\src\params\config.js - прописать настройки клиентской части
8. back\modules\fetchServer\api\MongoDB.js - указать имя базы данных #DBNAME

### Терминал
Два терминала - front и back

#### Back:
Корень вашего проекта (/);
Если не установлен node_modules
> npm i

> npm run dev - старт сервера бэка

#### Front:
От корня переходим в папку front
> cd front/

Если не установлен node_modules
> npm i

> npm run start - для запуска клиентской части