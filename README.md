# Movies Finder

[DEMO - DEMO - DEMO - DEMO](https://movies-finder-mz.netlify.app/#/)

## Opis

Movies finder to prosta aplikacja wykorzystująca [API TMDB](https://developers.themoviedb.org/3/getting-started/introduction) do wyszukiwania filmów i wyświetlania informacji o nich. Po wyświetleniu listy możemy posortować wyniki lub przejść do konkretnego filmu aby zobaczyć jego szczegóły. Zdecydowałem się na taki krok z sortowaniem ponieważ w przypadku szukania API nie zwraca posortowanych wyników i żeby wyświetlić użytkownikowi już poukładane dane musielibyśmy pobrać wyniki ze wszystkich stron (Jednorazowo API wysyła nam 1 stronę wyniku, czyli 20 filmów) co w niektórych przypadkach mogło by trochę potrwać. W przypadku szukania litery 'a' mamy około 10000 wyników. Aplikacja ma ogromny potencjał do rozbudowy, to co jest tu zaprezentowane to ledwie ułamek tego co można by zrobić wykorzystując to API.

## Zależności

Do wykonania aplikacji wykorzystałem: 
- Vue.js - Framework do tworzenia aplikacji SPA
- axios -  Biblioteka do prostszego wysyłania zapytń HTTP
- vue-router - Biblioteka do zarządzania ścieżkami w pasku URL, umożliwiająca łatwe budowanie aplikacji SPA

##Uruchomienie programu lokalnie

  1. Wchodzimy na adres [Movies Finder - GitHub](https://github.com/MichalZiolkiewicz/filmsfinder)
  2. Klikamy przycisk z napisem 'Code', wybieramy typ linku (HTTPS/SSH/CLI)
  3. Ja wybrałem HTTPS więc uruchamiam Git Bash na swoim komputerze, za jego pomocą przechodzę do lokalizacji gdzie chcę zapisać projekt i wpisuję: 
```
  git clone https://github.com/MichalZiolkiewicz/filmsfinder.git
```
  4. Kiedy repozytorium zostanie pobrane, otwieram je za pomocą IDE
  5. We wbudowanym terminalu IDE wpisuję poniższą komendę żeby zainstalować zależności:
  ```
    npm install
  ```
  6. Po zainstalowaniu wszystkiego możemy uruchomić program przy pomocy
  ```
    npm run serve
  ```



