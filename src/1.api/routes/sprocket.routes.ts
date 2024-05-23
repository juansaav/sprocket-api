import { Router, Response } from "express";
import { isAuth } from "../middlewares/isAuth";
import { body } from "express-validator";
import checkValidations from "../middlewares/validation";
import Container from "typedi";
import { SprocketService } from "../../2.services/sprocket.service";

const route = Router();

export const SprocketRouter = (router: Router, ): void => {
  router.use("/sprocket", route);
  const service = Container.get(SprocketService);

  // get sprocket by id
  route.get("/:id", isAuth, async (req: any, res: Response) => {
    try {
      const id = req.params.id;
      const data = await service.getSprocketById(+id);
      data ? res.status(200).send(data) : res.sendStatus(404);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  });

  // create sprocket
  route.post(
    "/",
    isAuth,
    body("teeth").isNumeric(),
    body("pitchDiameter").isNumeric(),
    body("outsideDiameter").isNumeric(),
    body("pitch").isNumeric(),
    checkValidations,
    async (req: any, res: Response) => {
      const obj = req.body;
      const data = await service.createSprocket(obj);
      res.status(200).send(data);
    }
  );

  // update sprocket
  route.put(
    "/:id",
    isAuth,
    body("teeth").optional().isNumeric(),
    body("pitchDiameter").optional().isNumeric(),
    body("outsideDiameter").optional().isNumeric(),
    body("pitch").optional().isNumeric(),
    checkValidations,

    async (req: any, res: Response) => {
      const id = req.params.id;
      const obj = req.body;
      const data = await service.updateSprocket(+id, obj);
      res.status(200).send(data);
    }
  );
};
