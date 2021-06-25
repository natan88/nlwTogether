import { Request, Response, NextFunction } from "express";
//import { ResponseError } from "../util/ResponseError";
import { IResponseError } from "../util/IResponse";

export const RequestMiddlewareError = (
  error: Error,
  request: Request,
  response: Response<IResponseError>,
  next: NextFunction
) => {
  /*   if (error instanceof ResponseError) {
    return response.status(error.statusCode || 400).json({
      success: false,
      statusCode: error.statusCode || 400,
      error: {
        code: error.errorCode,
        message: error.message,
      },
    });
  } */

  if (error instanceof Error) {
    return response.status(400).json({
      success: false,
      statusCode: 400,
      error: {
        code: "BAD_REQUEST",
        message: error.message,
      },
    });
  }

  return response.status(500).send({
    success: false,
    statusCode: 500,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
    },
  });
};
