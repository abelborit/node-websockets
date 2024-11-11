import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connected ✅");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("Hello from server");

  /* aquí estamos haciendo que cada 2 segundos el servidor emita un mensaje sin que el cliente (página web) lo solicite. Esta sería su principal característica de los WebSocket */
  // setInterval(() => {
  //   ws.send("Hello again");
  // }, 2000);
});

/* cuando nos queramos conectar mediante websocket no se usa el http sino el ws. Entonces para usarlo por ejemplo en Postman sería -- ws://localhost:3000 -- aunque Postman lo colocará automáticamente entonces sería solo -- localhost:3000 -- */
console.log("Server running on port http://localhost:3000 ✅");
