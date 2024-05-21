import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * Schema
         */
        export interface Def0 {
            loginBodySchema: {
                email: string;
                password: string;
            };
            loginResponseSchema: {
                result: string;
                token: string;
            };
        }
        namespace Def0 {
            namespace Properties {
                export interface LoginBodySchema {
                    email: string;
                    password: string;
                }
                export interface LoginResponseSchema {
                    result: string;
                    token: string;
                }
            }
        }
    }
}
declare namespace Paths {
    namespace ApiUsers {
        namespace Post {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiUsers$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiUsersSeed {
        namespace Get {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace GetHealth {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace GetUser {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace GetUsers {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace Login {
        export type RequestBody = Components.Schemas.Def0.Properties.LoginBodySchema;
        namespace Responses {
            export type $200 = Components.Schemas.Def0.Properties.LoginResponseSchema;
        }
    }
}

export interface OperationMethods {
  /**
   * getUsers
   */
  'getUsers'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUsers.Responses.$200>
  /**
   * getUser
   */
  'getUser'(
    parameters: Parameters<Paths.GetUser.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUser.Responses.$200>
  /**
   * login
   */
  'login'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Login.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Login.Responses.$200>
  /**
   * getHealth
   */
  'getHealth'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetHealth.Responses.$200>
}

export interface PathsDictionary {
  ['/api/users/']: {
    /**
     * getUsers
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUsers.Responses.$200>
  }
  ['/api/users/{id}']: {
    /**
     * getUser
     */
    'get'(
      parameters: Parameters<Paths.GetUser.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUser.Responses.$200>
  }
  ['/api/users/seed']: {
  }
  ['/api/auth/login']: {
    /**
     * login
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Login.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Login.Responses.$200>
  }
  ['/api/health/']: {
    /**
     * getHealth
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetHealth.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
