import express, { Request, Response } from "express";
import { Ticket } from "../models/tickets";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {});

export { router as showTicketRouter };
