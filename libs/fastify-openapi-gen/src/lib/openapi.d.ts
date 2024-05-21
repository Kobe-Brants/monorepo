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
         * authSchemas
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
        /**
         * usersSchemas
         */
        export interface Def1 {
            getUsersResponseBodySchema: {
                id: string;
                name: string;
                email: string;
                password: string;
                salt: string;
                created: string;
            }[];
            getUserResponseBodySchema: {
                id: string;
                name: string;
                email: string;
                password: string;
                salt: string;
                created: string;
            };
        }
        namespace Def1 {
            namespace Properties {
                export interface GetUserResponseBodySchema {
                    id: string;
                    name: string;
                    email: string;
                    password: string;
                    salt: string;
                    created: string;
                }
                export type GetUsersResponseBodySchema = {
                    id: string;
                    name: string;
                    email: string;
                    password: string;
                    salt: string;
                    created: string;
                }[];
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
            export type $200 = Components.Schemas.Def1.Properties.GetUserResponseBodySchema;
        }
    }
    namespace GetUsers {
        namespace Responses {
            export type $200 = Components.Schemas.Def1.Properties.GetUsersResponseBodySchema;
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
}

export interface PathsDictionary {
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
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
