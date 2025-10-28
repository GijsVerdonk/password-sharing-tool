# Password Sharing Tool

Deze applicatie maakt het mogelijk om veilig wachtwoorden te delen met andere personen.

De applicatie heeft een Laravel backend met een React frontend.

## Functionaliteiten
- Maak een deelbare link om een wachtwoord met iemand te delen.
- Het delen is AVG-compliant, omdat wachtwoorden na eenmalig gebruik verwijderd worden.
- Wachtwoorden zijn encrypted met een key die alleen jij en de ontvanger hebben.

## Installatie
Volg de volgende stappen om het project te starten.

Stap 1: voer de volgende commando's uit
```bash
npm install
composer install
```
Stap 2: maak een .env-file en kopiëer de inhoud van de .env.example-file naar de nieuwe .env-file of gebruik het volgende commando
```bash
cp .env.example .env
```
Stap 3: voer daarna de volgende commando's uit
```bash
php artisan key:generate
php artisan migrate
composer run dev
```
Ga naar de URL uit de console, meestal is dit:
```bash
http://localhost:8000/
```

Success met het gebruiken van de tool!
