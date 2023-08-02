import 'express-serve-static-core';

declare module 'express' {
  export interface Request {
    user?: any;
  }
}
