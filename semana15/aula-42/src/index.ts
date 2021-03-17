import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries, country } from './countries'

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//endpoint 1
app.get("/countries/all", (req: Request, res: Response) => {
    const mapCountries = countries.map((c: country) => {
       return { id: c.id, name: c.name };
    });
 
    res.status(200).send(mapCountries);
 
 });

 //endpoint 2
app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
       country => country.id === Number(req.params.id)
    );
 
    if (result) {
       res.status(200).send(result)
    } else {
       res.status(404).send("Not found")
    }
 
 });