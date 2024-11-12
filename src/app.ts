import { WebSocketServer } from "ws";

/* este "wss" es nuesto WebSocket Server */
const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connected ✅");

  /* este "ws" sería el WebSocket del cliente, es decir, el que está en el "index.html". Cada instancia del navegador web es una nueva conexión de websockets */
  // console.log(ws);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    /* cuando el WebSocket emita un mensaje, aquí se ejecutará algo del lado del servidor y es en tiempo real, se podría guardar de repente alguna data en la base de datos o lanzar una funcionalidad o cosas por el estilo */
    console.log("Desde el cliente:", data);
  });

  ws.send("Hello from server");

  /* aquí estamos haciendo que cada 2 segundos el servidor emita un mensaje sin que el cliente (página web) lo solicite. Esta sería su principal característica de los WebSocket */
  // setInterval(() => {
  //   ws.send("Hello again");
  // }, 2000);

  ws.on("close", () => {
    console.log("Client Disconnected ⚡");
  });
});

/* cuando nos queramos conectar mediante websocket no se usa el http sino el ws. Entonces para usarlo por ejemplo en Postman sería -- ws://localhost:3000 -- aunque Postman lo colocará automáticamente entonces sería solo -- localhost:3000 -- */
console.log("Server running on port http://localhost:3000 ✅");
