import "./util/module-alias";
import express, { Application } from "express";
import { ForecastController } from "./controllers/forecast";
import { attachControllers } from "@decorators/express";

export class Server {
  public app = express();

  constructor(private port = 3000) {}

  public init(): void {
    this.setupExpress();
    this.setupControllers();
    this.app.listen(this.port, () => console.log(`Server started at port ${this.port}!`))
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    attachControllers(this.app, [ForecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
