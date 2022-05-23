# 2. Hausaufgabe vom Programmierpraktikum: Skalierbare Systeme

## Anleitung zum Starten der Anwendung

### Server

Als Datenbank verwendet diese Anwendung [MongoDB](https://www.mongodb.com/). Ein auf `localhost` laufender MongoDB Server mit Port `27017` ist Voraussetzung für das Starten der Anwendung. Bei Bedarf kann der Connection String in `server/connect.js` angepasst werden.

Als Web-Server wird [Express.js](https://expressjs.com/) verwendet. Zum Starten des Servers einfach in `server` navigieren und folgende Befehle im Terminal eingeben:
```console
npm i
node index.js
```