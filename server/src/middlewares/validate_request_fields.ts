import { Request, Response, NextFunction } from "express";
const { validationResult } = require("express-validator");

const validateRequestFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "fail",
      msg: "Inocrrect request body",
      errors,
    });
  }

  //Continuar con la siguiente funcion
  next();
};

export { validateRequestFields };
