# angular-waage

Hier entsteht das Webinterface einer Gemüsekistenwaage für die solidarische Landwirtschaft

![Preview](docs/gemuesekistenwaage.png 'Preview Gemüsekistenwaage')

## Motivation

Es müssen große Mengen Gemüse in unterschiedlichen Kisten gewogen werden. Die Kisten haben alle unterschiedliche Gewichte. Das ausrechnen des Gewichts des Gemüses ist bisher mühsame Handarbeit.

## Ansatz

Die Gemüsekistenwaage soll diesen Prozess unterstützen.
Die gemessenen Kisten können auf dem Webinterface (per Smartphone) ausgewählt werden und das Gemüsegewicht wird direkt berechnet in dem von dem gemessenen Gewicht das angegebene Kistengewicht abgezogen wird.
Über den Button abschicken kann das berechnete Gemüsegewicht gespeichert werden.

## Hardware

- Eine Waage mit Wägezelle (z.B.: https://honey-pi.de/waagegestell-bauen/ )
- HX711 A/D-Wandler (zum Auslesen der Waage)
- Raspberry Pi
  - Liest über den HX711 das gemessene Gewicht der Waage
  - Stellt ein Webinterface zum berechnen des Gemüsegewichts bereit

## Softwarekomponenten [WIP]

- Angular Webapp (dieses Repository)
- Python-Skript zum auslesen des HX711 A/D-Wandlers und bereitstellen der Informationen per API


## Todos

- [] Gemüsekisten und Gemüsesorten als .json-file zur verfügung stellen
- [] Dokumentation der Einrichtung der Gemüsekisten und Gemüsesorten
- [] Auslesen der HX711 und API-Schnittstelle
## Credits:

Dieses Repository wurde mit Stackblitz erstellt
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-qif65x-xsftxj)
