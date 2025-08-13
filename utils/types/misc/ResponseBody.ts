export interface Metadata {
  [key: string]: any;
}

export interface IResponse<T = any> {
  event: ResponseEvents;
  status: boolean;
  message: string;
  data: T;
  errors: [];
}

export enum ResponseEnum {
  SUCCESS = "success",
  ERROR = "error",
}

export enum ResponseEvents {
  TWO_FACTOR_ENABLED = "two-factor-enabled",
  DEFAULT = "default",
}
