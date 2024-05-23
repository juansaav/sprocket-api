import { Router, Response } from "express";
import { isAuth } from "../middlewares/isAuth";
import { FactoryService } from "../../2.services/factory.service";
import Container from "typedi";

const route = Router();

export const FactoryRouter = (router: Router, ): void => {
  router.use("/factory", route);
  const service = Container.get(FactoryService);

  // get all factories paginated
  route.get("/", isAuth, async (req: any, res: Response) => {
    try {
      const limit = req.query.limit ? +req.query.limit : 5;
      const offset = req.query.offset ? +req.query.offset : 0;
      const data = await service.getFactoryPaginated(limit, offset);
      res.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  })

  // get factory by id
  route.get("/:id", isAuth, async (req: any, res: Response) => {
    try {
      const id = req.params.id;
      const data = await service.getFactoryData(+id);
      data ? res.status(200).send(data) : res.sendStatus(404);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  });

  const DEFAULT_FROM_DATE = new Date("2020-01-01");
  const DEFAULT_TO_DATE = new Date();

  // get factory performance values
  route.get("/:id/performance-value", isAuth, async (req: any, res: Response) => {
    try {
      const id = req.params.id;
      const fromDate = req.query.fromDate || DEFAULT_FROM_DATE;
      const toDate = req.query.toDate || DEFAULT_TO_DATE;
      const data = await service.getFactoryPerformanceValues(+id, fromDate, toDate);
      data !== null ? res.status(200).send(data) : res.sendStatus(404);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  });
};
