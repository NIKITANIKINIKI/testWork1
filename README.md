Задача: Реализация функциональности отображения списка животных
Описание задачи:
Для выполнения данной задачи доступны две функции: requestAnimals и requestAnimalsWithError
requestAnimals принимает аргумент типа Query, имитируя работу с API
requestAnimalsWithError возвращает Promise.reject<string> с текстовой ошибкой
Требования:
Реализовать отображение списка животных с указанием их вида и количества через запятую.
Показывать текст "Loading..." во время загрузки списка животных.
Обрабатывать возможные ошибки при вызове requestAnimals (можно проверить с помощью requestAnimalsWithError) и отображать текст ошибки вместо списка животных.
Реализовать фильтрацию по названию животного, передавая в аргументе поле animal в функции requestAnimals (например: requestAnimals({animal: "Cat", ...})). Значение по умолчанию - пустая строка.
Реализовать фильтрацию по количеству (допустим, в зоопарке), передавая в аргументе поле amount в функции requestAnimals (например: requestAnimals({amount: "26", ...})). Значение по умолчанию - пустая строка.
Реализовать возможность смены страницы и количества элементов на странице с помощью requestAnimals({limit: 4, offset: 4, ...}). Здесь offset представляет собой сдвиг (offset = (page - 1) * limit), Значения по умолчанию: offset - 0, limit - 4.
При получении пустого списка от функции requestAnimals показывать сообщение Animals not found
Использование стилей, ui-kit и прочего не требуется. Достаточно использования нативных элементов.
