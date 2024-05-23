import Container from "typedi";
import * as seed_factory_data from "../seed-data/seed_factory_data.json";
import * as seed_sprocket_types from "../seed-data/seed_sprocket_types.json";
import { DB } from "./3.da/dbconnection";

export const initSeedData = async () => {
  console.log("Seeding data...");
  const db = Container.get(DB);

  // Check if data exists
  const exists = await db.client.factory.findFirst();
  if (exists) {
    console.log("Data already exists, skipping seeding...");
    return;
  }

  // Insert factory data
  seed_factory_data.factories.forEach(async (factory, idx) => {
    const createdF = await db.client.factory.create({
      data: {
        name: `Factory ${idx}`,
      },
    });
    const performanceValues =
      factory.factory.chart_data.sprocket_production_actual.map(
        (productionActual, idx) => ({
          productionActual,
          productionGoal:
            factory.factory.chart_data.sprocket_production_goal[idx],
          time: new Date(factory.factory.chart_data.time[idx] * 1000),
          factoryId: createdF.id,
        })
      );
    await db.client.performanceValue.createMany({ data: performanceValues });
  });

  // Insert sprocket data
  seed_sprocket_types.sprockets.forEach(async (sprocket) => {
    await db.client.sprocket.create({
      data: {
        teeth: sprocket.teeth,
        pitchDiameter: sprocket.pitch_diameter,
        outsideDiameter: sprocket.outside_diameter,
        pitch: sprocket.pitch,
      },
    });
  });
  console.log("Data seeded successfully!");
};
