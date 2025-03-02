import type {
  Request,
  Response,
  NextFunction,
} from "express";
import express from "express";
import * as OpenApiValidator from "express-openapi-validator";
import * as path from "path";
import { initDB } from "./adapters/mongodb-manager";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import 'express-async-errors';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.PORT || 8080;
const x = YAML.load(path.join(__dirname, "api/openapi.yaml"));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(x));

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "./api/openapi.yaml"),
    operationHandlers: path.join(__dirname, "controllers"),
  })
);

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error?.statusCode ?? 500).json({
    message: error?.message ?? "Someting went wrong",
  });
});

initDB(async () => {

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    console.log(
      `OpenAPI SWAGGER is available at http://127.0.0.1:${port}/api-docs`
    );
  });
});
