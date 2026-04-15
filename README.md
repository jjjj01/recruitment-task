# Projekt narzędzia do nawigacji po strukturze katalogów wykonany w ramach zadania rekrutacyjnego.
## Decyzje:
- aplikacja ma frontend w React i prosty backend w Node
- Tailwind jako narzędzie do stylowania - znam je i jest proste w użyciu
## Kierunek dalszego rozwoju:
- dodanie testów jednostkowych oraz integracyjnych aplikacji
- rozbudowanie sprawdzania formatu wrzucanego JSON o zwracanie sensownych błędów - brak folderu 'root', brak rozmiaru pliku, itp
- wirtualizacja listy wyników wyszukiwania oraz potencjalnie samej przeglądarki - przy kilkuset plikach/folderach daje radę, przy większej skali może spowalniać
## Ograniczenia/założenia:
- importowana struktura musi mieć na pierwszym poziomie zagnieżdżenia folder o nazwie 'root' który traktujemy jako początek struktury katalogu - dostęp przez ścieżki w widoku /tree/:nodePath jest dostępny zaczynając od jego dzieci
