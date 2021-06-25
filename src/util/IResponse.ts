export interface IResponse {
  success: boolean;
  statusCode: number;
  payload?: object;
}

export interface IResponseSuccess extends IResponse {
  success: true;
  //payload: object;
}

export interface IResponseError extends IResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}
