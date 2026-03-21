# 📝 Feedback: Sorteer Systeem Groenten & Fruit

**Algemene indruk:**
> Je code werkt logisch gezien prima! Je vangt de input op, filtert de juiste regels eruit en knipt de voorvoegsels weg. Goed begin! 👍

Echter, om exact de output van het voorbeeld te krijgen (en om je code efficiënter te maken), zijn er **drie belangrijke concepten** die je nu nog over het hoofd ziet.

---

## 1. Het geheim van de "Set" 📦

Kijk eens heel goed naar de voorbeeld-output in de opdracht:
`Groenten: Set(2) { ... }`

Jij gebruikt nu een **Array** (`[]`).
* **Het probleem:** Als ik twee keer `"g bloemkool"` intyp, zal jouw array `["bloemkool", "bloemkool"]` bevatten.
* **De oplossing:** De voorbeeld-oplossing toont `Set(2)`. Een **Set** is een speciale lijst in JavaScript die **automatisch dubbele waarden verwijdert**.

**💡 Tip:**
Kijk in plaats van `groenten.push(...)` eens hoe je items toevoegt aan een `new Set()`.

---

## 2. Dubbel werk in je logica 🔄

Je code doet nu op twee plekken hetzelfde werk:
1.  **In de functie:** Je checkt `startsWith("g ")` om te beslissen of het in de grote verzamelbak mag.
2.  **In de loop:** Je checkt *nogmaals* `startsWith("g ")` om te beslissen in welke bak het moet.

**🛠️ Verbetering:**
Het is veel efficiënter om meteen **twee collecties** (bijvoorbeeld `groentenSet` en `fruitSet`) aan te maken **binnenin je functie**.

* Is het `"g "`? ➡️ Hup, direct in de groenten-bak (zonder de "g ").
* Is het `"f "`? ➡️ Hup, direct in de fruit-bak (zonder de "f ").

Aan het einde return je beide bakken tegelijk, bijvoorbeeld als een object.

---

## 3. De Console Output (Niet simuleren) 🖨️

Je bent nu heel hard je best aan het doen om de output na te bouwen met tekst strings:

```javascript
console.log(`Groenten: Set(${groenten.length}) ...`)



Je probeert de tekst "Set(2)..." handmatig te typen. Maar als je punt 1 hierboven toepast (en dus écht een Set gebruikt), doet JavaScript dit vaak al voor jou!

Als je in de meeste environments (zoals Node.js of de browser console) dit doet:

JavaScript

const mijnSet = new Set();
mijnSet.add("appel");
console.log(mijnSet);
... dan krijg je vaak al automatisch die mooie Set(1) { 'appel' } weergave, zonder dat je moeilijk moet doen met .join() en \n.

🚀 Samengevat voor de volgende versie:
Gebruik Sets in plaats van Arrays (geen dubbele waarden).

Vul deze Sets direct in je while-lus (geen dubbele loops).

Dit maakt je code de helft korter en robuuster!

Succes!