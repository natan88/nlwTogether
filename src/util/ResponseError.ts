export class ResponseError extends Error {
  statusCode: number;
  errorCode?: string;

  /**
   * Erro de request nas rotas do express
   * @param message mensagem de error
   * @param statusCode código de erro HTTP
   * @param errorCode código de erro descritivo
   */
  constructor(message: string, statusCode: number, errorCode?: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
