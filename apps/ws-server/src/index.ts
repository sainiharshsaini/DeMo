import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    const res = await prisma.user.create({
        data: {
            name : Math.random().toString(),
            email: Math.random().toString()
        }
    })
    console.log(res);
    
    socket.send("Hi there you are connected to the ws")
})