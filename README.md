Тестове завдання React
 
Необхідно створити спрощену копію програми Нотатки з операційної системи Apple macOS за допомогою Reactjs. Програма має бути створена за допомогою create-react-app
 
 
Зовнішній вигляд програми складається з сайдбару, області для перегляду/редагування/додавання нотатки та пошуку за нотатками.
При виборі нотатки зліва, праворуч повинен відображатися відрендерований Markdown текст із локальної бази даних браузера (дивитися на indexeddb), а також дві кнопки - видалити і редагувати, які при відсутності вибору у лівому сайдбарі неактивні(мають сірий колір)
При натисканні на кнопку Delete відбувається підтвердження видалення (для підтвердження використовувати стандартне модальне вікно)
Під час редагування тексту збереження контенту має відбуватися автоматично.
Пошук за нотатками йде за частковим входженням символів
При натисканні кнопки + має з'явитися нова пуста нотатка
 
Під час виконання завдання необхідно програмний код розмістити в кількох компонентах - App, Sidebar, ListItem, Workspace, SearchBox та інших за потреби. Для зв'язку між компонентами використовувати Context (https://ua.reactjs.org/docs/context.html), буде плюсом використання hooks, працювати з БД з декількох компонентів – заборонено (тільки один компонент має вміти спілкуватися з БД). Верста має бути адаптивною і гнучко підлаштовуватися під потрібне розширення екрана.
Додатково(вище оцінюється) можна створити версію, яка б замість indexeddb, використовувала quintadb API (https://quintadb.com) для зберігання даних нотаток
Ще просунутіша версія - реалізувати підтримку обох баз даних (indexeddb, quintadb API) і обирати для роботи програми ту, яка вказується у параметрі команди при старті програми
 
Код опублікувати на GitHub, зі зрозумілими комітами та з кількістю більше 1
