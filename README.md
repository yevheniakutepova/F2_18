# Biblioteka

## License
Projekt udostępniony na licencji MIT!

## Opis
Projekt BibliotekaV1 to bardzo prosta aplikacja napisana w Node.js która pozwala na zarządzanie
własną biblioteką książek. Po zalogowaniu za pomocą podania loginu i hasła użytkownik ma pełny dostęp do biblioteki (lub utworzeniu konta jeżeli
użytkownik go jeszcze nie posiada).
Posiada możliwosc dodawac,edytować, usuwać ksiązki, zaznaczac ich status oraz możliwość dodania opisu tej książki.

## Funkcjonalność
Logowanie użytkownika (dostęp do danych jest dopiero po zalogowaniu),
Tworzenie użytkownika jeżeli nie istnieje,
Osobne danne dla każdego użytkownika,
Dodawanie książek,
Edycja książek,
Usuwanie książek,
Wyświetla szczegóły ksiażki,
Możliwość filtrowania książek po statusie,
Możliwość sortowania po tytule lub po dacie dodania,
Obsługa blędu 404 i mozliwość powrotu do index,

## Technologie
Node.js, 
Express.js, 
MongoDB, 
Mongoose, 
EJS, 
express-session, 
Docker (MongoDB), 
Html,
CSS,


## Instrukcja instalacji i uruchomienia
Sklonuj projekt, 
w konsoli wprowadż npm install, 
utwórz plik .env w katologu glównym, 
MONGO_URI=mongodb://localhost:27017/biblioteka, 
LOGIN=Zenia, 
PASSWORD=123@!, 
wprowadć tam to, 
nastepnie wprowadż npm start, 
i otworz przeglądarke na odpowiednim localhost:
! Wymagane: Node.js oraz Docker.

## Lista endpointów
GET /register
POST /register
GET /login
POST /login
GET /logout
GET / 
GET /books/add
POST /books/add
GET /books/edit/:id
POST /books/edit/:id
POST /books/delete/:id
GET /books/details/:id

# Autor
Żenia Kutepova 4f gr2
