# Feedback Oefening 2

Hier is mijn docenten-feedback voor `Oefening_2.js`. Je hebt de stappen uit de vorige oefening al mooi meegenomen en de opzet met `createBook` is een perfect begin! Er zijn wel nog vier conceptuele verbeterpunten die de rest van je code een stuk logischer zullen maken:

## 1. Een Functie versus een Methode
De opdracht vraagt heel specifiek: *"Voeg daarnaast nog een extra methode toe die het type boek bepaalt..."*. 
Jij hebt momenteel een losstaande functie genaamd `typeOfBook` in je code geplaatst. In JavaScript (en eigenlijk elke programmeertaal) is een **methode** een functie die vastzit aan/binnenin het object (zoals je dat met `getInfo` al heel goed hebt gedaan).

*Hint:* Neem je `typeOfBook`-logica en geef deze een plekje *binnenin* het object dat je teruggeeft via de `createBook` functie.

## 2. Verwarring rond `this` en parameters in je IF-statements
In je huidige (losse) functie noem je de binnenkomende parameter `books`. Binnen in die functie probeer je `this.books.title` uit te lezen. Dat botst een beetje; want als de parameter `books` een object is dat je er in gooit, bestaat er binnenin niet nóg een property die `books` heet (`books.books.title`). Dat gaf je waarschijnlijk de `undefined` teksten!

Het leuke is: zodra je er een échte methode in je object van maakt (zie punt 1), valt dit hele probleem weg. Je object weet dan over welk boek het gaat, waardoor je je parameter mag weglaten. Je kunt in al je if-checks dan gewoon rechtstreeks praten tegen `this.wordCount` of `this.title`.

## 3. Check je drempelwaarden (en je commentaar!)
Je had de controle op `undefined` (Unknown) slim bedacht, maar als commentaar (`//`) uit je code gehaald. Haal dit best even terug uit commentaar, want je hebt dit hard nodig! Als een woordwaarde `undefined` is, en je test of die kleiner is dan een getal (bv. `< 7500`), dan zal JavaScript `false` zeggen. Zonder die "Unknown"-check zal elk boek zonder woordenaantal per ongeluk als een "Doorstopper" aanzien worden (want het valt door al je regels naar de finale `else`).

*Lees ook nog even de opdracht er op na:* Je hebt de categorie "Novelette" per ongeluk overgeslagen en je drempel voor "Novella" wijkt een klein beetje af van de theorie.

## 4. Kies de juiste Loop: Arrays versus Objecten
In oefening 1 bestond jouw data uit een gigantisch "Hoofd-Object" (met accolades `{ }`). Daar was de `for...in` loop een meesterlijke en juiste keuze.
In deze oefening zie je op in regel 15: `const books = [`. Die vierkante haakjes `[ ]` geven aan dat dit hele ding een **Array** (een lijst) is. Voor Arrays in JavaScript gebruiken we liever een `for...of` loop!

*Probeer dit eens te veranderen:* Als je `for (const book in books)` verandert naar `for (const book of books)`, dan geeft het woordje `of` jou in élke ronde rechtstreeks dat éne specifieke boek. Al je andere ingewikkelde lijntjes daaronder (rond instantiëren via `[book]`, of die controle op `Object.hasOwn`) mag je dan gewoon volledig weggooien! Dat maakt alles plots extreem leesbaar!

--- 

Probeer dit stapje voor stapje toe te passen. Begin met de verhuis van je type-bepaler (puntje 1) naar de juiste plaats, en dan vallen puzzelstukken 2, 3 en 4 vanzelf in elkaar. Succes!
