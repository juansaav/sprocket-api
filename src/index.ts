// Imports
import "reflect-metadata";
import express from "express";
import { FactoryRouter } from "./1.api/routes/factory.routes";
import { SprocketRouter } from "./1.api/routes/sprocket.routes";
import { initSeedData } from "./utils";

const bootstrap = async () => {
  await initSeedData();

  const app = express();
  const router = express.Router();
  FactoryRouter(router);
  SprocketRouter(router);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);

  // Start app
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, function () {
    console.log(
      "##############################\n" +
        "Server is running on port " +
        PORT +
        "\n" +
        "##############################"
    );
  });
};

bootstrap();