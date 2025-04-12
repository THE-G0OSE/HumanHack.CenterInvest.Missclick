interface baseResponse {
  message: string;
  email: string;
}

export interface IRegisterResponse extends baseResponse {}

export interface ILoginResponse extends baseResponse {}

export interface IEmailCodeResponse extends baseResponse {}

export interface IEmailVerificationResponse extends baseResponse {}

export interface IPasswordRecoveryResponse extends baseResponse {}

export interface I2FAResponse {
  access_token: string;
  token_type: string;
}
