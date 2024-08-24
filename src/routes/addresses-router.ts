import { Request, Response, Router } from "express";

const addresses = [
  { id: 1, value: "new 12" },
  { id: 2, value: "old 21" },
];

export const addressesRoute = Router({})



addressesRoute.get("/", (req: Request, res: Response) => {
  res.send(addresses);
});

addressesRoute.get("/:id", (req: Request, res: Response) => {
  let address = addresses.find((p) => p.id === +req.params.id);
  if (address) {
    res.send(address);
  } else {
    res.send(404);
  }
});
