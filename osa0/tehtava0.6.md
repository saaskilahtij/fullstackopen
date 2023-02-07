```mermaid

sequenceDiagram


  Browser ->> Server: HTTp POST https://studies.cs.helsinki.fi/exampleapp/spa
  Server -->> Browser: Palvelin siirtää JSON (data.json) tiedoston datan selaimelle
  Note right of Browser: Tapahtumankäsittelijä renderöi datan selaimelle


```