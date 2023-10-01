export interface IAppwriteRequestData {
  bodyRaw: string;
  body: string;
  headers: {
    host: string;
    'x-appwrite-trigger': string;
    'x-appwrite-user-id': string;
    'x-appwrite-user-jwt': string;
    'x-appwrite-continent-eu': string;
    'content-type': string;
    connection: string;
    'content-length': string;
  };
  method: string;
  host: string;
  scheme: string;
  query: {};
  queryString: string;
  port: number;
  url: string;
  path: string;
}

export interface IResponse {
  ok: boolean,
  statusCode: number,
  message: string,
}
