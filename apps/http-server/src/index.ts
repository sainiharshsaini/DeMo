import express, { Request, Response } from 'express';
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.send("Hello World");
});

app.post('/signup', async (req: Request, res: Response) => {
    const { email, name } = await req.body;

    const user1 = await prisma.user.create({
        data: {
            email,
            name
        }
    })

    res.json({
        message: "Signup successfully",
        id: user1.id
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});