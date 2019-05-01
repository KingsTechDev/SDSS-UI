export class AuthenticationRequest {
  constructor(public authPrinciple: AuthPrinciple, public authCredentials: AuthCredentials) {}
}

export class AuthPrinciple {
  constructor(public userName: string) {}
}

export class AuthCredentials {
  constructor(public password: string, public token?: string) {}
}
