import express, {Router, Request, Response} from "express";
import PrismaClient from "../bin/database-connection.ts";
import { Prisma } from "database";

const router: Router = express.Router();


router.post("/", async (req: Request, res: Response) => {
  const flowerRequestAttempt: Prisma.FlowerServiceRequestUncheckedCreateInput = req.body;

  try {
    // Create the FlowerServiceRequest with the connected room
    await PrismaClient.flowerServiceRequest.create({data: flowerRequestAttempt});

    res.sendStatus(200);
  } catch (error) {
    console.error(`Error populating node data: ${error}`);
    res.sendStatus(500);
  }
});

router.get("/", async function (req: Request, res: Response) {
  try{
    const flowerservicerequestCSV = await PrismaClient.flowerServiceRequest.findMany();
    res.send(flowerservicerequestCSV);
  } catch (error){
    console.error(`Error exporting Service Request data: ${error}`);
    res.sendStatus(500);
  }
  res.sendStatus(200);
});

router.patch("/", async (req: Request, res: Response) => {
  const flowerRequestUpdate: Prisma.FlowerServiceRequestUpdateManyArgs = req.body;

  try {
    // Create the FlowerServiceRequest with the connected room
    await PrismaClient.flowerServiceRequest.updateMany({ data: flowerRequestUpdate});

    res.sendStatus(200);
  } catch (error) {
    console.error(`Error populating node data: ${error}`);
    res.sendStatus(500);
  }
});


export default router;
