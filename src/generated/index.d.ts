
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model OutboxEvent
 * 
 */
export type OutboxEvent = $Result.DefaultSelection<Prisma.$OutboxEventPayload>
/**
 * Model WebhookCircuitBreaker
 * 
 */
export type WebhookCircuitBreaker = $Result.DefaultSelection<Prisma.$WebhookCircuitBreakerPayload>
/**
 * Model WebhookDelivery
 * 
 */
export type WebhookDelivery = $Result.DefaultSelection<Prisma.$WebhookDeliveryPayload>
/**
 * Model WebhookRetryHistory
 * 
 */
export type WebhookRetryHistory = $Result.DefaultSelection<Prisma.$WebhookRetryHistoryPayload>
/**
 * Model ReplayHistory
 * 
 */
export type ReplayHistory = $Result.DefaultSelection<Prisma.$ReplayHistoryPayload>
/**
 * Model CleanupExecution
 * 
 */
export type CleanupExecution = $Result.DefaultSelection<Prisma.$CleanupExecutionPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model Consent
 * 
 */
export type Consent = $Result.DefaultSelection<Prisma.$ConsentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Webhook
 * 
 */
export type Webhook = $Result.DefaultSelection<Prisma.$WebhookPayload>
/**
 * Model InternalEvent
 * 
 */
export type InternalEvent = $Result.DefaultSelection<Prisma.$InternalEventPayload>
/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConsentStatus: {
  GRANTED: 'GRANTED',
  REVOKED: 'REVOKED'
};

export type ConsentStatus = (typeof ConsentStatus)[keyof typeof ConsentStatus]


export const CircuitBreakerState: {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
  HALF_OPEN: 'HALF_OPEN'
};

export type CircuitBreakerState = (typeof CircuitBreakerState)[keyof typeof CircuitBreakerState]

}

export type ConsentStatus = $Enums.ConsentStatus

export const ConsentStatus: typeof $Enums.ConsentStatus

export type CircuitBreakerState = $Enums.CircuitBreakerState

export const CircuitBreakerState: typeof $Enums.CircuitBreakerState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outboxEvent`: Exposes CRUD operations for the **OutboxEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutboxEvents
    * const outboxEvents = await prisma.outboxEvent.findMany()
    * ```
    */
  get outboxEvent(): Prisma.OutboxEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookCircuitBreaker`: Exposes CRUD operations for the **WebhookCircuitBreaker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookCircuitBreakers
    * const webhookCircuitBreakers = await prisma.webhookCircuitBreaker.findMany()
    * ```
    */
  get webhookCircuitBreaker(): Prisma.WebhookCircuitBreakerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookDelivery`: Exposes CRUD operations for the **WebhookDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookDeliveries
    * const webhookDeliveries = await prisma.webhookDelivery.findMany()
    * ```
    */
  get webhookDelivery(): Prisma.WebhookDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookRetryHistory`: Exposes CRUD operations for the **WebhookRetryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookRetryHistories
    * const webhookRetryHistories = await prisma.webhookRetryHistory.findMany()
    * ```
    */
  get webhookRetryHistory(): Prisma.WebhookRetryHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.replayHistory`: Exposes CRUD operations for the **ReplayHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReplayHistories
    * const replayHistories = await prisma.replayHistory.findMany()
    * ```
    */
  get replayHistory(): Prisma.ReplayHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleanupExecution`: Exposes CRUD operations for the **CleanupExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CleanupExecutions
    * const cleanupExecutions = await prisma.cleanupExecution.findMany()
    * ```
    */
  get cleanupExecution(): Prisma.CleanupExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consent`: Exposes CRUD operations for the **Consent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consents
    * const consents = await prisma.consent.findMany()
    * ```
    */
  get consent(): Prisma.ConsentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook`: Exposes CRUD operations for the **Webhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhooks
    * const webhooks = await prisma.webhook.findMany()
    * ```
    */
  get webhook(): Prisma.WebhookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internalEvent`: Exposes CRUD operations for the **InternalEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternalEvents
    * const internalEvents = await prisma.internalEvent.findMany()
    * ```
    */
  get internalEvent(): Prisma.InternalEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    OutboxEvent: 'OutboxEvent',
    WebhookCircuitBreaker: 'WebhookCircuitBreaker',
    WebhookDelivery: 'WebhookDelivery',
    WebhookRetryHistory: 'WebhookRetryHistory',
    ReplayHistory: 'ReplayHistory',
    CleanupExecution: 'CleanupExecution',
    Policy: 'Policy',
    Consent: 'Consent',
    AuditLog: 'AuditLog',
    ApiKey: 'ApiKey',
    Webhook: 'Webhook',
    InternalEvent: 'InternalEvent',
    SuperAdmin: 'SuperAdmin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "outboxEvent" | "webhookCircuitBreaker" | "webhookDelivery" | "webhookRetryHistory" | "replayHistory" | "cleanupExecution" | "policy" | "consent" | "auditLog" | "apiKey" | "webhook" | "internalEvent" | "superAdmin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      OutboxEvent: {
        payload: Prisma.$OutboxEventPayload<ExtArgs>
        fields: Prisma.OutboxEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboxEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboxEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findFirst: {
            args: Prisma.OutboxEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboxEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findMany: {
            args: Prisma.OutboxEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          create: {
            args: Prisma.OutboxEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          createMany: {
            args: Prisma.OutboxEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutboxEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          delete: {
            args: Prisma.OutboxEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          update: {
            args: Prisma.OutboxEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          deleteMany: {
            args: Prisma.OutboxEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboxEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutboxEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          upsert: {
            args: Prisma.OutboxEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          aggregate: {
            args: Prisma.OutboxEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutboxEvent>
          }
          groupBy: {
            args: Prisma.OutboxEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboxEventCountArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventCountAggregateOutputType> | number
          }
        }
      }
      WebhookCircuitBreaker: {
        payload: Prisma.$WebhookCircuitBreakerPayload<ExtArgs>
        fields: Prisma.WebhookCircuitBreakerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookCircuitBreakerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookCircuitBreakerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          findFirst: {
            args: Prisma.WebhookCircuitBreakerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookCircuitBreakerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          findMany: {
            args: Prisma.WebhookCircuitBreakerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>[]
          }
          create: {
            args: Prisma.WebhookCircuitBreakerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          createMany: {
            args: Prisma.WebhookCircuitBreakerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookCircuitBreakerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>[]
          }
          delete: {
            args: Prisma.WebhookCircuitBreakerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          update: {
            args: Prisma.WebhookCircuitBreakerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          deleteMany: {
            args: Prisma.WebhookCircuitBreakerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookCircuitBreakerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookCircuitBreakerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>[]
          }
          upsert: {
            args: Prisma.WebhookCircuitBreakerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookCircuitBreakerPayload>
          }
          aggregate: {
            args: Prisma.WebhookCircuitBreakerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookCircuitBreaker>
          }
          groupBy: {
            args: Prisma.WebhookCircuitBreakerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookCircuitBreakerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookCircuitBreakerCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookCircuitBreakerCountAggregateOutputType> | number
          }
        }
      }
      WebhookDelivery: {
        payload: Prisma.$WebhookDeliveryPayload<ExtArgs>
        fields: Prisma.WebhookDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findFirst: {
            args: Prisma.WebhookDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findMany: {
            args: Prisma.WebhookDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          create: {
            args: Prisma.WebhookDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          createMany: {
            args: Prisma.WebhookDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          update: {
            args: Prisma.WebhookDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.WebhookDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          aggregate: {
            args: Prisma.WebhookDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookDelivery>
          }
          groupBy: {
            args: Prisma.WebhookDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryCountAggregateOutputType> | number
          }
        }
      }
      WebhookRetryHistory: {
        payload: Prisma.$WebhookRetryHistoryPayload<ExtArgs>
        fields: Prisma.WebhookRetryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookRetryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookRetryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          findFirst: {
            args: Prisma.WebhookRetryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookRetryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          findMany: {
            args: Prisma.WebhookRetryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>[]
          }
          create: {
            args: Prisma.WebhookRetryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          createMany: {
            args: Prisma.WebhookRetryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookRetryHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>[]
          }
          delete: {
            args: Prisma.WebhookRetryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          update: {
            args: Prisma.WebhookRetryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WebhookRetryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookRetryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookRetryHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WebhookRetryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookRetryHistoryPayload>
          }
          aggregate: {
            args: Prisma.WebhookRetryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookRetryHistory>
          }
          groupBy: {
            args: Prisma.WebhookRetryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookRetryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookRetryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookRetryHistoryCountAggregateOutputType> | number
          }
        }
      }
      ReplayHistory: {
        payload: Prisma.$ReplayHistoryPayload<ExtArgs>
        fields: Prisma.ReplayHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplayHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplayHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          findFirst: {
            args: Prisma.ReplayHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplayHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          findMany: {
            args: Prisma.ReplayHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>[]
          }
          create: {
            args: Prisma.ReplayHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          createMany: {
            args: Prisma.ReplayHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplayHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>[]
          }
          delete: {
            args: Prisma.ReplayHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          update: {
            args: Prisma.ReplayHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ReplayHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplayHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplayHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ReplayHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayHistoryPayload>
          }
          aggregate: {
            args: Prisma.ReplayHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReplayHistory>
          }
          groupBy: {
            args: Prisma.ReplayHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplayHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplayHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ReplayHistoryCountAggregateOutputType> | number
          }
        }
      }
      CleanupExecution: {
        payload: Prisma.$CleanupExecutionPayload<ExtArgs>
        fields: Prisma.CleanupExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanupExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanupExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          findFirst: {
            args: Prisma.CleanupExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanupExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          findMany: {
            args: Prisma.CleanupExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>[]
          }
          create: {
            args: Prisma.CleanupExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          createMany: {
            args: Prisma.CleanupExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleanupExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>[]
          }
          delete: {
            args: Prisma.CleanupExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          update: {
            args: Prisma.CleanupExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          deleteMany: {
            args: Prisma.CleanupExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanupExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleanupExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>[]
          }
          upsert: {
            args: Prisma.CleanupExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanupExecutionPayload>
          }
          aggregate: {
            args: Prisma.CleanupExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleanupExecution>
          }
          groupBy: {
            args: Prisma.CleanupExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanupExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleanupExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<CleanupExecutionCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      Consent: {
        payload: Prisma.$ConsentPayload<ExtArgs>
        fields: Prisma.ConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          findFirst: {
            args: Prisma.ConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          findMany: {
            args: Prisma.ConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>[]
          }
          create: {
            args: Prisma.ConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          createMany: {
            args: Prisma.ConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>[]
          }
          delete: {
            args: Prisma.ConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          update: {
            args: Prisma.ConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          deleteMany: {
            args: Prisma.ConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>[]
          }
          upsert: {
            args: Prisma.ConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          aggregate: {
            args: Prisma.ConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsent>
          }
          groupBy: {
            args: Prisma.ConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsentCountArgs<ExtArgs>
            result: $Utils.Optional<ConsentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Webhook: {
        payload: Prisma.$WebhookPayload<ExtArgs>
        fields: Prisma.WebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          findFirst: {
            args: Prisma.WebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          findMany: {
            args: Prisma.WebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          create: {
            args: Prisma.WebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          createMany: {
            args: Prisma.WebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          update: {
            args: Prisma.WebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          upsert: {
            args: Prisma.WebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          aggregate: {
            args: Prisma.WebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook>
          }
          groupBy: {
            args: Prisma.WebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookCountAggregateOutputType> | number
          }
        }
      }
      InternalEvent: {
        payload: Prisma.$InternalEventPayload<ExtArgs>
        fields: Prisma.InternalEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternalEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternalEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          findFirst: {
            args: Prisma.InternalEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternalEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          findMany: {
            args: Prisma.InternalEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>[]
          }
          create: {
            args: Prisma.InternalEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          createMany: {
            args: Prisma.InternalEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternalEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>[]
          }
          delete: {
            args: Prisma.InternalEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          update: {
            args: Prisma.InternalEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          deleteMany: {
            args: Prisma.InternalEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternalEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternalEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>[]
          }
          upsert: {
            args: Prisma.InternalEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalEventPayload>
          }
          aggregate: {
            args: Prisma.InternalEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternalEvent>
          }
          groupBy: {
            args: Prisma.InternalEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternalEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternalEventCountArgs<ExtArgs>
            result: $Utils.Optional<InternalEventCountAggregateOutputType> | number
          }
        }
      }
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuperAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    outboxEvent?: OutboxEventOmit
    webhookCircuitBreaker?: WebhookCircuitBreakerOmit
    webhookDelivery?: WebhookDeliveryOmit
    webhookRetryHistory?: WebhookRetryHistoryOmit
    replayHistory?: ReplayHistoryOmit
    cleanupExecution?: CleanupExecutionOmit
    policy?: PolicyOmit
    consent?: ConsentOmit
    auditLog?: AuditLogOmit
    apiKey?: ApiKeyOmit
    webhook?: WebhookOmit
    internalEvent?: InternalEventOmit
    superAdmin?: SuperAdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    consents: number
    policies: number
    auditLogs: number
    apiKeys: number
    webhooks: number
    internalEvents: number
    outboxEvents: number
    webhookDeliveries: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consents?: boolean | TenantCountOutputTypeCountConsentsArgs
    policies?: boolean | TenantCountOutputTypeCountPoliciesArgs
    auditLogs?: boolean | TenantCountOutputTypeCountAuditLogsArgs
    apiKeys?: boolean | TenantCountOutputTypeCountApiKeysArgs
    webhooks?: boolean | TenantCountOutputTypeCountWebhooksArgs
    internalEvents?: boolean | TenantCountOutputTypeCountInternalEventsArgs
    outboxEvents?: boolean | TenantCountOutputTypeCountOutboxEventsArgs
    webhookDeliveries?: boolean | TenantCountOutputTypeCountWebhookDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountConsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountInternalEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalEventWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountOutboxEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboxEventWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountWebhookDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
  }


  /**
   * Count Type WebhookDeliveryCountOutputType
   */

  export type WebhookDeliveryCountOutputType = {
    retryHistories: number
  }

  export type WebhookDeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    retryHistories?: boolean | WebhookDeliveryCountOutputTypeCountRetryHistoriesArgs
  }

  // Custom InputTypes
  /**
   * WebhookDeliveryCountOutputType without action
   */
  export type WebhookDeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDeliveryCountOutputType
     */
    select?: WebhookDeliveryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebhookDeliveryCountOutputType without action
   */
  export type WebhookDeliveryCountOutputTypeCountRetryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookRetryHistoryWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    consents: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consents?: boolean | PolicyCountOutputTypeCountConsentsArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountConsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentWhereInput
  }


  /**
   * Count Type WebhookCountOutputType
   */

  export type WebhookCountOutputType = {
    deliveries: number
  }

  export type WebhookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | WebhookCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * WebhookCountOutputType without action
   */
  export type WebhookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCountOutputType
     */
    select?: WebhookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebhookCountOutputType without action
   */
  export type WebhookCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consents?: boolean | Tenant$consentsArgs<ExtArgs>
    policies?: boolean | Tenant$policiesArgs<ExtArgs>
    auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
    apiKeys?: boolean | Tenant$apiKeysArgs<ExtArgs>
    webhooks?: boolean | Tenant$webhooksArgs<ExtArgs>
    internalEvents?: boolean | Tenant$internalEventsArgs<ExtArgs>
    outboxEvents?: boolean | Tenant$outboxEventsArgs<ExtArgs>
    webhookDeliveries?: boolean | Tenant$webhookDeliveriesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consents?: boolean | Tenant$consentsArgs<ExtArgs>
    policies?: boolean | Tenant$policiesArgs<ExtArgs>
    auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
    apiKeys?: boolean | Tenant$apiKeysArgs<ExtArgs>
    webhooks?: boolean | Tenant$webhooksArgs<ExtArgs>
    internalEvents?: boolean | Tenant$internalEventsArgs<ExtArgs>
    outboxEvents?: boolean | Tenant$outboxEventsArgs<ExtArgs>
    webhookDeliveries?: boolean | Tenant$webhookDeliveriesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      consents: Prisma.$ConsentPayload<ExtArgs>[]
      policies: Prisma.$PolicyPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      webhooks: Prisma.$WebhookPayload<ExtArgs>[]
      internalEvents: Prisma.$InternalEventPayload<ExtArgs>[]
      outboxEvents: Prisma.$OutboxEventPayload<ExtArgs>[]
      webhookDeliveries: Prisma.$WebhookDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consents<T extends Tenant$consentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$consentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Tenant$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Tenant$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Tenant$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhooks<T extends Tenant$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    internalEvents<T extends Tenant$internalEventsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$internalEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outboxEvents<T extends Tenant$outboxEventsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$outboxEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhookDeliveries<T extends Tenant$webhookDeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$webhookDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.consents
   */
  export type Tenant$consentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    where?: ConsentWhereInput
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    cursor?: ConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Tenant.policies
   */
  export type Tenant$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Tenant.auditLogs
   */
  export type Tenant$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Tenant.apiKeys
   */
  export type Tenant$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Tenant.webhooks
   */
  export type Tenant$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    where?: WebhookWhereInput
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    cursor?: WebhookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Tenant.internalEvents
   */
  export type Tenant$internalEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    where?: InternalEventWhereInput
    orderBy?: InternalEventOrderByWithRelationInput | InternalEventOrderByWithRelationInput[]
    cursor?: InternalEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternalEventScalarFieldEnum | InternalEventScalarFieldEnum[]
  }

  /**
   * Tenant.outboxEvents
   */
  export type Tenant$outboxEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    where?: OutboxEventWhereInput
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    cursor?: OutboxEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * Tenant.webhookDeliveries
   */
  export type Tenant$webhookDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    cursor?: WebhookDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model OutboxEvent
   */

  export type AggregateOutboxEvent = {
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  export type OutboxEventAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type OutboxEventSumAggregateOutputType = {
    retryCount: number | null
  }

  export type OutboxEventMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    eventType: string | null
    aggregateId: string | null
    status: string | null
    retryCount: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type OutboxEventMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    eventType: string | null
    aggregateId: string | null
    status: string | null
    retryCount: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type OutboxEventCountAggregateOutputType = {
    id: number
    tenantId: number
    eventType: number
    aggregateId: number
    payload: number
    status: number
    retryCount: number
    lastError: number
    createdAt: number
    processedAt: number
    _all: number
  }


  export type OutboxEventAvgAggregateInputType = {
    retryCount?: true
  }

  export type OutboxEventSumAggregateInputType = {
    retryCount?: true
  }

  export type OutboxEventMinAggregateInputType = {
    id?: true
    tenantId?: true
    eventType?: true
    aggregateId?: true
    status?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type OutboxEventMaxAggregateInputType = {
    id?: true
    tenantId?: true
    eventType?: true
    aggregateId?: true
    status?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type OutboxEventCountAggregateInputType = {
    id?: true
    tenantId?: true
    eventType?: true
    aggregateId?: true
    payload?: true
    status?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
    _all?: true
  }

  export type OutboxEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvent to aggregate.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutboxEvents
    **/
    _count?: true | OutboxEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboxEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboxEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboxEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboxEventMaxAggregateInputType
  }

  export type GetOutboxEventAggregateType<T extends OutboxEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOutboxEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutboxEvent[P]>
      : GetScalarType<T[P], AggregateOutboxEvent[P]>
  }




  export type OutboxEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboxEventWhereInput
    orderBy?: OutboxEventOrderByWithAggregationInput | OutboxEventOrderByWithAggregationInput[]
    by: OutboxEventScalarFieldEnum[] | OutboxEventScalarFieldEnum
    having?: OutboxEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboxEventCountAggregateInputType | true
    _avg?: OutboxEventAvgAggregateInputType
    _sum?: OutboxEventSumAggregateInputType
    _min?: OutboxEventMinAggregateInputType
    _max?: OutboxEventMaxAggregateInputType
  }

  export type OutboxEventGroupByOutputType = {
    id: string
    tenantId: string
    eventType: string
    aggregateId: string | null
    payload: JsonValue
    status: string
    retryCount: number
    lastError: string | null
    createdAt: Date
    processedAt: Date | null
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  type GetOutboxEventGroupByPayload<T extends OutboxEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboxEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboxEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
            : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
        }
      >
    >


  export type OutboxEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    eventType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    eventType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    eventType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectScalar = {
    id?: boolean
    tenantId?: boolean
    eventType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }

  export type OutboxEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "eventType" | "aggregateId" | "payload" | "status" | "retryCount" | "lastError" | "createdAt" | "processedAt", ExtArgs["result"]["outboxEvent"]>
  export type OutboxEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type OutboxEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type OutboxEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $OutboxEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutboxEvent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      eventType: string
      aggregateId: string | null
      payload: Prisma.JsonValue
      status: string
      retryCount: number
      lastError: string | null
      createdAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["outboxEvent"]>
    composites: {}
  }

  type OutboxEventGetPayload<S extends boolean | null | undefined | OutboxEventDefaultArgs> = $Result.GetResult<Prisma.$OutboxEventPayload, S>

  type OutboxEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboxEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboxEventCountAggregateInputType | true
    }

  export interface OutboxEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutboxEvent'], meta: { name: 'OutboxEvent' } }
    /**
     * Find zero or one OutboxEvent that matches the filter.
     * @param {OutboxEventFindUniqueArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboxEventFindUniqueArgs>(args: SelectSubset<T, OutboxEventFindUniqueArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutboxEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboxEventFindUniqueOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboxEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboxEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboxEventFindFirstArgs>(args?: SelectSubset<T, OutboxEventFindFirstArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboxEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboxEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutboxEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany()
     * 
     * // Get first 10 OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboxEventFindManyArgs>(args?: SelectSubset<T, OutboxEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutboxEvent.
     * @param {OutboxEventCreateArgs} args - Arguments to create a OutboxEvent.
     * @example
     * // Create one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.create({
     *   data: {
     *     // ... data to create a OutboxEvent
     *   }
     * })
     * 
     */
    create<T extends OutboxEventCreateArgs>(args: SelectSubset<T, OutboxEventCreateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutboxEvents.
     * @param {OutboxEventCreateManyArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboxEventCreateManyArgs>(args?: SelectSubset<T, OutboxEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutboxEvents and returns the data saved in the database.
     * @param {OutboxEventCreateManyAndReturnArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutboxEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OutboxEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutboxEvent.
     * @param {OutboxEventDeleteArgs} args - Arguments to delete one OutboxEvent.
     * @example
     * // Delete one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.delete({
     *   where: {
     *     // ... filter to delete one OutboxEvent
     *   }
     * })
     * 
     */
    delete<T extends OutboxEventDeleteArgs>(args: SelectSubset<T, OutboxEventDeleteArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutboxEvent.
     * @param {OutboxEventUpdateArgs} args - Arguments to update one OutboxEvent.
     * @example
     * // Update one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboxEventUpdateArgs>(args: SelectSubset<T, OutboxEventUpdateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutboxEvents.
     * @param {OutboxEventDeleteManyArgs} args - Arguments to filter OutboxEvents to delete.
     * @example
     * // Delete a few OutboxEvents
     * const { count } = await prisma.outboxEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboxEventDeleteManyArgs>(args?: SelectSubset<T, OutboxEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboxEventUpdateManyArgs>(args: SelectSubset<T, OutboxEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents and returns the data updated in the database.
     * @param {OutboxEventUpdateManyAndReturnArgs} args - Arguments to update many OutboxEvents.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutboxEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OutboxEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutboxEvent.
     * @param {OutboxEventUpsertArgs} args - Arguments to update or create a OutboxEvent.
     * @example
     * // Update or create a OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.upsert({
     *   create: {
     *     // ... data to create a OutboxEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutboxEvent we want to update
     *   }
     * })
     */
    upsert<T extends OutboxEventUpsertArgs>(args: SelectSubset<T, OutboxEventUpsertArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventCountArgs} args - Arguments to filter OutboxEvents to count.
     * @example
     * // Count the number of OutboxEvents
     * const count = await prisma.outboxEvent.count({
     *   where: {
     *     // ... the filter for the OutboxEvents we want to count
     *   }
     * })
    **/
    count<T extends OutboxEventCountArgs>(
      args?: Subset<T, OutboxEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboxEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutboxEventAggregateArgs>(args: Subset<T, OutboxEventAggregateArgs>): Prisma.PrismaPromise<GetOutboxEventAggregateType<T>>

    /**
     * Group by OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutboxEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboxEventGroupByArgs['orderBy'] }
        : { orderBy?: OutboxEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutboxEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboxEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutboxEvent model
   */
  readonly fields: OutboxEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutboxEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboxEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutboxEvent model
   */
  interface OutboxEventFieldRefs {
    readonly id: FieldRef<"OutboxEvent", 'String'>
    readonly tenantId: FieldRef<"OutboxEvent", 'String'>
    readonly eventType: FieldRef<"OutboxEvent", 'String'>
    readonly aggregateId: FieldRef<"OutboxEvent", 'String'>
    readonly payload: FieldRef<"OutboxEvent", 'Json'>
    readonly status: FieldRef<"OutboxEvent", 'String'>
    readonly retryCount: FieldRef<"OutboxEvent", 'Int'>
    readonly lastError: FieldRef<"OutboxEvent", 'String'>
    readonly createdAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly processedAt: FieldRef<"OutboxEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutboxEvent findUnique
   */
  export type OutboxEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findUniqueOrThrow
   */
  export type OutboxEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findFirst
   */
  export type OutboxEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findFirstOrThrow
   */
  export type OutboxEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findMany
   */
  export type OutboxEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter, which OutboxEvents to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent create
   */
  export type OutboxEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * The data needed to create a OutboxEvent.
     */
    data: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
  }

  /**
   * OutboxEvent createMany
   */
  export type OutboxEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboxEvent createManyAndReturn
   */
  export type OutboxEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutboxEvent update
   */
  export type OutboxEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * The data needed to update a OutboxEvent.
     */
    data: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
    /**
     * Choose, which OutboxEvent to update.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent updateMany
   */
  export type OutboxEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
  }

  /**
   * OutboxEvent updateManyAndReturn
   */
  export type OutboxEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutboxEvent upsert
   */
  export type OutboxEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * The filter to search for the OutboxEvent to update in case it exists.
     */
    where: OutboxEventWhereUniqueInput
    /**
     * In case the OutboxEvent found by the `where` argument doesn't exist, create a new OutboxEvent with this data.
     */
    create: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
    /**
     * In case the OutboxEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
  }

  /**
   * OutboxEvent delete
   */
  export type OutboxEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
    /**
     * Filter which OutboxEvent to delete.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent deleteMany
   */
  export type OutboxEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvents to delete
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to delete.
     */
    limit?: number
  }

  /**
   * OutboxEvent without action
   */
  export type OutboxEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboxEventInclude<ExtArgs> | null
  }


  /**
   * Model WebhookCircuitBreaker
   */

  export type AggregateWebhookCircuitBreaker = {
    _count: WebhookCircuitBreakerCountAggregateOutputType | null
    _avg: WebhookCircuitBreakerAvgAggregateOutputType | null
    _sum: WebhookCircuitBreakerSumAggregateOutputType | null
    _min: WebhookCircuitBreakerMinAggregateOutputType | null
    _max: WebhookCircuitBreakerMaxAggregateOutputType | null
  }

  export type WebhookCircuitBreakerAvgAggregateOutputType = {
    consecutiveFailures: number | null
  }

  export type WebhookCircuitBreakerSumAggregateOutputType = {
    consecutiveFailures: number | null
  }

  export type WebhookCircuitBreakerMinAggregateOutputType = {
    id: string | null
    webhookId: string | null
    state: $Enums.CircuitBreakerState | null
    consecutiveFailures: number | null
    openedAt: Date | null
    lastTestedAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookCircuitBreakerMaxAggregateOutputType = {
    id: string | null
    webhookId: string | null
    state: $Enums.CircuitBreakerState | null
    consecutiveFailures: number | null
    openedAt: Date | null
    lastTestedAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookCircuitBreakerCountAggregateOutputType = {
    id: number
    webhookId: number
    state: number
    consecutiveFailures: number
    openedAt: number
    lastTestedAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookCircuitBreakerAvgAggregateInputType = {
    consecutiveFailures?: true
  }

  export type WebhookCircuitBreakerSumAggregateInputType = {
    consecutiveFailures?: true
  }

  export type WebhookCircuitBreakerMinAggregateInputType = {
    id?: true
    webhookId?: true
    state?: true
    consecutiveFailures?: true
    openedAt?: true
    lastTestedAt?: true
    updatedAt?: true
  }

  export type WebhookCircuitBreakerMaxAggregateInputType = {
    id?: true
    webhookId?: true
    state?: true
    consecutiveFailures?: true
    openedAt?: true
    lastTestedAt?: true
    updatedAt?: true
  }

  export type WebhookCircuitBreakerCountAggregateInputType = {
    id?: true
    webhookId?: true
    state?: true
    consecutiveFailures?: true
    openedAt?: true
    lastTestedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookCircuitBreakerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookCircuitBreaker to aggregate.
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookCircuitBreakers to fetch.
     */
    orderBy?: WebhookCircuitBreakerOrderByWithRelationInput | WebhookCircuitBreakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookCircuitBreakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookCircuitBreakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookCircuitBreakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookCircuitBreakers
    **/
    _count?: true | WebhookCircuitBreakerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookCircuitBreakerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookCircuitBreakerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookCircuitBreakerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookCircuitBreakerMaxAggregateInputType
  }

  export type GetWebhookCircuitBreakerAggregateType<T extends WebhookCircuitBreakerAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookCircuitBreaker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookCircuitBreaker[P]>
      : GetScalarType<T[P], AggregateWebhookCircuitBreaker[P]>
  }




  export type WebhookCircuitBreakerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookCircuitBreakerWhereInput
    orderBy?: WebhookCircuitBreakerOrderByWithAggregationInput | WebhookCircuitBreakerOrderByWithAggregationInput[]
    by: WebhookCircuitBreakerScalarFieldEnum[] | WebhookCircuitBreakerScalarFieldEnum
    having?: WebhookCircuitBreakerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookCircuitBreakerCountAggregateInputType | true
    _avg?: WebhookCircuitBreakerAvgAggregateInputType
    _sum?: WebhookCircuitBreakerSumAggregateInputType
    _min?: WebhookCircuitBreakerMinAggregateInputType
    _max?: WebhookCircuitBreakerMaxAggregateInputType
  }

  export type WebhookCircuitBreakerGroupByOutputType = {
    id: string
    webhookId: string
    state: $Enums.CircuitBreakerState
    consecutiveFailures: number
    openedAt: Date | null
    lastTestedAt: Date | null
    updatedAt: Date
    _count: WebhookCircuitBreakerCountAggregateOutputType | null
    _avg: WebhookCircuitBreakerAvgAggregateOutputType | null
    _sum: WebhookCircuitBreakerSumAggregateOutputType | null
    _min: WebhookCircuitBreakerMinAggregateOutputType | null
    _max: WebhookCircuitBreakerMaxAggregateOutputType | null
  }

  type GetWebhookCircuitBreakerGroupByPayload<T extends WebhookCircuitBreakerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookCircuitBreakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookCircuitBreakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookCircuitBreakerGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookCircuitBreakerGroupByOutputType[P]>
        }
      >
    >


  export type WebhookCircuitBreakerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    state?: boolean
    consecutiveFailures?: boolean
    openedAt?: boolean
    lastTestedAt?: boolean
    updatedAt?: boolean
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookCircuitBreaker"]>

  export type WebhookCircuitBreakerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    state?: boolean
    consecutiveFailures?: boolean
    openedAt?: boolean
    lastTestedAt?: boolean
    updatedAt?: boolean
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookCircuitBreaker"]>

  export type WebhookCircuitBreakerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    state?: boolean
    consecutiveFailures?: boolean
    openedAt?: boolean
    lastTestedAt?: boolean
    updatedAt?: boolean
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookCircuitBreaker"]>

  export type WebhookCircuitBreakerSelectScalar = {
    id?: boolean
    webhookId?: boolean
    state?: boolean
    consecutiveFailures?: boolean
    openedAt?: boolean
    lastTestedAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookCircuitBreakerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhookId" | "state" | "consecutiveFailures" | "openedAt" | "lastTestedAt" | "updatedAt", ExtArgs["result"]["webhookCircuitBreaker"]>
  export type WebhookCircuitBreakerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }
  export type WebhookCircuitBreakerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }
  export type WebhookCircuitBreakerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }

  export type $WebhookCircuitBreakerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookCircuitBreaker"
    objects: {
      webhook: Prisma.$WebhookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhookId: string
      state: $Enums.CircuitBreakerState
      consecutiveFailures: number
      openedAt: Date | null
      lastTestedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["webhookCircuitBreaker"]>
    composites: {}
  }

  type WebhookCircuitBreakerGetPayload<S extends boolean | null | undefined | WebhookCircuitBreakerDefaultArgs> = $Result.GetResult<Prisma.$WebhookCircuitBreakerPayload, S>

  type WebhookCircuitBreakerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookCircuitBreakerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookCircuitBreakerCountAggregateInputType | true
    }

  export interface WebhookCircuitBreakerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookCircuitBreaker'], meta: { name: 'WebhookCircuitBreaker' } }
    /**
     * Find zero or one WebhookCircuitBreaker that matches the filter.
     * @param {WebhookCircuitBreakerFindUniqueArgs} args - Arguments to find a WebhookCircuitBreaker
     * @example
     * // Get one WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookCircuitBreakerFindUniqueArgs>(args: SelectSubset<T, WebhookCircuitBreakerFindUniqueArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookCircuitBreaker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookCircuitBreakerFindUniqueOrThrowArgs} args - Arguments to find a WebhookCircuitBreaker
     * @example
     * // Get one WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookCircuitBreakerFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookCircuitBreakerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookCircuitBreaker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerFindFirstArgs} args - Arguments to find a WebhookCircuitBreaker
     * @example
     * // Get one WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookCircuitBreakerFindFirstArgs>(args?: SelectSubset<T, WebhookCircuitBreakerFindFirstArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookCircuitBreaker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerFindFirstOrThrowArgs} args - Arguments to find a WebhookCircuitBreaker
     * @example
     * // Get one WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookCircuitBreakerFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookCircuitBreakerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookCircuitBreakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookCircuitBreakers
     * const webhookCircuitBreakers = await prisma.webhookCircuitBreaker.findMany()
     * 
     * // Get first 10 WebhookCircuitBreakers
     * const webhookCircuitBreakers = await prisma.webhookCircuitBreaker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookCircuitBreakerWithIdOnly = await prisma.webhookCircuitBreaker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookCircuitBreakerFindManyArgs>(args?: SelectSubset<T, WebhookCircuitBreakerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookCircuitBreaker.
     * @param {WebhookCircuitBreakerCreateArgs} args - Arguments to create a WebhookCircuitBreaker.
     * @example
     * // Create one WebhookCircuitBreaker
     * const WebhookCircuitBreaker = await prisma.webhookCircuitBreaker.create({
     *   data: {
     *     // ... data to create a WebhookCircuitBreaker
     *   }
     * })
     * 
     */
    create<T extends WebhookCircuitBreakerCreateArgs>(args: SelectSubset<T, WebhookCircuitBreakerCreateArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookCircuitBreakers.
     * @param {WebhookCircuitBreakerCreateManyArgs} args - Arguments to create many WebhookCircuitBreakers.
     * @example
     * // Create many WebhookCircuitBreakers
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookCircuitBreakerCreateManyArgs>(args?: SelectSubset<T, WebhookCircuitBreakerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookCircuitBreakers and returns the data saved in the database.
     * @param {WebhookCircuitBreakerCreateManyAndReturnArgs} args - Arguments to create many WebhookCircuitBreakers.
     * @example
     * // Create many WebhookCircuitBreakers
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookCircuitBreakers and only return the `id`
     * const webhookCircuitBreakerWithIdOnly = await prisma.webhookCircuitBreaker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookCircuitBreakerCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookCircuitBreakerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookCircuitBreaker.
     * @param {WebhookCircuitBreakerDeleteArgs} args - Arguments to delete one WebhookCircuitBreaker.
     * @example
     * // Delete one WebhookCircuitBreaker
     * const WebhookCircuitBreaker = await prisma.webhookCircuitBreaker.delete({
     *   where: {
     *     // ... filter to delete one WebhookCircuitBreaker
     *   }
     * })
     * 
     */
    delete<T extends WebhookCircuitBreakerDeleteArgs>(args: SelectSubset<T, WebhookCircuitBreakerDeleteArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookCircuitBreaker.
     * @param {WebhookCircuitBreakerUpdateArgs} args - Arguments to update one WebhookCircuitBreaker.
     * @example
     * // Update one WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookCircuitBreakerUpdateArgs>(args: SelectSubset<T, WebhookCircuitBreakerUpdateArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookCircuitBreakers.
     * @param {WebhookCircuitBreakerDeleteManyArgs} args - Arguments to filter WebhookCircuitBreakers to delete.
     * @example
     * // Delete a few WebhookCircuitBreakers
     * const { count } = await prisma.webhookCircuitBreaker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookCircuitBreakerDeleteManyArgs>(args?: SelectSubset<T, WebhookCircuitBreakerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookCircuitBreakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookCircuitBreakers
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookCircuitBreakerUpdateManyArgs>(args: SelectSubset<T, WebhookCircuitBreakerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookCircuitBreakers and returns the data updated in the database.
     * @param {WebhookCircuitBreakerUpdateManyAndReturnArgs} args - Arguments to update many WebhookCircuitBreakers.
     * @example
     * // Update many WebhookCircuitBreakers
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookCircuitBreakers and only return the `id`
     * const webhookCircuitBreakerWithIdOnly = await prisma.webhookCircuitBreaker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookCircuitBreakerUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookCircuitBreakerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookCircuitBreaker.
     * @param {WebhookCircuitBreakerUpsertArgs} args - Arguments to update or create a WebhookCircuitBreaker.
     * @example
     * // Update or create a WebhookCircuitBreaker
     * const webhookCircuitBreaker = await prisma.webhookCircuitBreaker.upsert({
     *   create: {
     *     // ... data to create a WebhookCircuitBreaker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookCircuitBreaker we want to update
     *   }
     * })
     */
    upsert<T extends WebhookCircuitBreakerUpsertArgs>(args: SelectSubset<T, WebhookCircuitBreakerUpsertArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookCircuitBreakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerCountArgs} args - Arguments to filter WebhookCircuitBreakers to count.
     * @example
     * // Count the number of WebhookCircuitBreakers
     * const count = await prisma.webhookCircuitBreaker.count({
     *   where: {
     *     // ... the filter for the WebhookCircuitBreakers we want to count
     *   }
     * })
    **/
    count<T extends WebhookCircuitBreakerCountArgs>(
      args?: Subset<T, WebhookCircuitBreakerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookCircuitBreakerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookCircuitBreaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookCircuitBreakerAggregateArgs>(args: Subset<T, WebhookCircuitBreakerAggregateArgs>): Prisma.PrismaPromise<GetWebhookCircuitBreakerAggregateType<T>>

    /**
     * Group by WebhookCircuitBreaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCircuitBreakerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookCircuitBreakerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookCircuitBreakerGroupByArgs['orderBy'] }
        : { orderBy?: WebhookCircuitBreakerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookCircuitBreakerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookCircuitBreakerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookCircuitBreaker model
   */
  readonly fields: WebhookCircuitBreakerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookCircuitBreaker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookCircuitBreakerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webhook<T extends WebhookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebhookDefaultArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookCircuitBreaker model
   */
  interface WebhookCircuitBreakerFieldRefs {
    readonly id: FieldRef<"WebhookCircuitBreaker", 'String'>
    readonly webhookId: FieldRef<"WebhookCircuitBreaker", 'String'>
    readonly state: FieldRef<"WebhookCircuitBreaker", 'CircuitBreakerState'>
    readonly consecutiveFailures: FieldRef<"WebhookCircuitBreaker", 'Int'>
    readonly openedAt: FieldRef<"WebhookCircuitBreaker", 'DateTime'>
    readonly lastTestedAt: FieldRef<"WebhookCircuitBreaker", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookCircuitBreaker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookCircuitBreaker findUnique
   */
  export type WebhookCircuitBreakerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter, which WebhookCircuitBreaker to fetch.
     */
    where: WebhookCircuitBreakerWhereUniqueInput
  }

  /**
   * WebhookCircuitBreaker findUniqueOrThrow
   */
  export type WebhookCircuitBreakerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter, which WebhookCircuitBreaker to fetch.
     */
    where: WebhookCircuitBreakerWhereUniqueInput
  }

  /**
   * WebhookCircuitBreaker findFirst
   */
  export type WebhookCircuitBreakerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter, which WebhookCircuitBreaker to fetch.
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookCircuitBreakers to fetch.
     */
    orderBy?: WebhookCircuitBreakerOrderByWithRelationInput | WebhookCircuitBreakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookCircuitBreakers.
     */
    cursor?: WebhookCircuitBreakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookCircuitBreakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookCircuitBreakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookCircuitBreakers.
     */
    distinct?: WebhookCircuitBreakerScalarFieldEnum | WebhookCircuitBreakerScalarFieldEnum[]
  }

  /**
   * WebhookCircuitBreaker findFirstOrThrow
   */
  export type WebhookCircuitBreakerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter, which WebhookCircuitBreaker to fetch.
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookCircuitBreakers to fetch.
     */
    orderBy?: WebhookCircuitBreakerOrderByWithRelationInput | WebhookCircuitBreakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookCircuitBreakers.
     */
    cursor?: WebhookCircuitBreakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookCircuitBreakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookCircuitBreakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookCircuitBreakers.
     */
    distinct?: WebhookCircuitBreakerScalarFieldEnum | WebhookCircuitBreakerScalarFieldEnum[]
  }

  /**
   * WebhookCircuitBreaker findMany
   */
  export type WebhookCircuitBreakerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter, which WebhookCircuitBreakers to fetch.
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookCircuitBreakers to fetch.
     */
    orderBy?: WebhookCircuitBreakerOrderByWithRelationInput | WebhookCircuitBreakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookCircuitBreakers.
     */
    cursor?: WebhookCircuitBreakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookCircuitBreakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookCircuitBreakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookCircuitBreakers.
     */
    distinct?: WebhookCircuitBreakerScalarFieldEnum | WebhookCircuitBreakerScalarFieldEnum[]
  }

  /**
   * WebhookCircuitBreaker create
   */
  export type WebhookCircuitBreakerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookCircuitBreaker.
     */
    data: XOR<WebhookCircuitBreakerCreateInput, WebhookCircuitBreakerUncheckedCreateInput>
  }

  /**
   * WebhookCircuitBreaker createMany
   */
  export type WebhookCircuitBreakerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookCircuitBreakers.
     */
    data: WebhookCircuitBreakerCreateManyInput | WebhookCircuitBreakerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookCircuitBreaker createManyAndReturn
   */
  export type WebhookCircuitBreakerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookCircuitBreakers.
     */
    data: WebhookCircuitBreakerCreateManyInput | WebhookCircuitBreakerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookCircuitBreaker update
   */
  export type WebhookCircuitBreakerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookCircuitBreaker.
     */
    data: XOR<WebhookCircuitBreakerUpdateInput, WebhookCircuitBreakerUncheckedUpdateInput>
    /**
     * Choose, which WebhookCircuitBreaker to update.
     */
    where: WebhookCircuitBreakerWhereUniqueInput
  }

  /**
   * WebhookCircuitBreaker updateMany
   */
  export type WebhookCircuitBreakerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookCircuitBreakers.
     */
    data: XOR<WebhookCircuitBreakerUpdateManyMutationInput, WebhookCircuitBreakerUncheckedUpdateManyInput>
    /**
     * Filter which WebhookCircuitBreakers to update
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * Limit how many WebhookCircuitBreakers to update.
     */
    limit?: number
  }

  /**
   * WebhookCircuitBreaker updateManyAndReturn
   */
  export type WebhookCircuitBreakerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * The data used to update WebhookCircuitBreakers.
     */
    data: XOR<WebhookCircuitBreakerUpdateManyMutationInput, WebhookCircuitBreakerUncheckedUpdateManyInput>
    /**
     * Filter which WebhookCircuitBreakers to update
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * Limit how many WebhookCircuitBreakers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookCircuitBreaker upsert
   */
  export type WebhookCircuitBreakerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookCircuitBreaker to update in case it exists.
     */
    where: WebhookCircuitBreakerWhereUniqueInput
    /**
     * In case the WebhookCircuitBreaker found by the `where` argument doesn't exist, create a new WebhookCircuitBreaker with this data.
     */
    create: XOR<WebhookCircuitBreakerCreateInput, WebhookCircuitBreakerUncheckedCreateInput>
    /**
     * In case the WebhookCircuitBreaker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookCircuitBreakerUpdateInput, WebhookCircuitBreakerUncheckedUpdateInput>
  }

  /**
   * WebhookCircuitBreaker delete
   */
  export type WebhookCircuitBreakerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    /**
     * Filter which WebhookCircuitBreaker to delete.
     */
    where: WebhookCircuitBreakerWhereUniqueInput
  }

  /**
   * WebhookCircuitBreaker deleteMany
   */
  export type WebhookCircuitBreakerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookCircuitBreakers to delete
     */
    where?: WebhookCircuitBreakerWhereInput
    /**
     * Limit how many WebhookCircuitBreakers to delete.
     */
    limit?: number
  }

  /**
   * WebhookCircuitBreaker without action
   */
  export type WebhookCircuitBreakerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
  }


  /**
   * Model WebhookDelivery
   */

  export type AggregateWebhookDelivery = {
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  export type WebhookDeliveryAvgAggregateOutputType = {
    attempt: number | null
    httpStatus: number | null
    duration: number | null
  }

  export type WebhookDeliverySumAggregateOutputType = {
    attempt: number | null
    httpStatus: number | null
    duration: number | null
  }

  export type WebhookDeliveryMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    webhookId: string | null
    eventId: string | null
    attempt: number | null
    status: string | null
    httpStatus: number | null
    responseBody: string | null
    duration: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type WebhookDeliveryMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    webhookId: string | null
    eventId: string | null
    attempt: number | null
    status: string | null
    httpStatus: number | null
    responseBody: string | null
    duration: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type WebhookDeliveryCountAggregateOutputType = {
    id: number
    tenantId: number
    webhookId: number
    eventId: number
    attempt: number
    status: number
    httpStatus: number
    responseBody: number
    responseHeaders: number
    duration: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type WebhookDeliveryAvgAggregateInputType = {
    attempt?: true
    httpStatus?: true
    duration?: true
  }

  export type WebhookDeliverySumAggregateInputType = {
    attempt?: true
    httpStatus?: true
    duration?: true
  }

  export type WebhookDeliveryMinAggregateInputType = {
    id?: true
    tenantId?: true
    webhookId?: true
    eventId?: true
    attempt?: true
    status?: true
    httpStatus?: true
    responseBody?: true
    duration?: true
    errorMessage?: true
    createdAt?: true
  }

  export type WebhookDeliveryMaxAggregateInputType = {
    id?: true
    tenantId?: true
    webhookId?: true
    eventId?: true
    attempt?: true
    status?: true
    httpStatus?: true
    responseBody?: true
    duration?: true
    errorMessage?: true
    createdAt?: true
  }

  export type WebhookDeliveryCountAggregateInputType = {
    id?: true
    tenantId?: true
    webhookId?: true
    eventId?: true
    attempt?: true
    status?: true
    httpStatus?: true
    responseBody?: true
    responseHeaders?: true
    duration?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDelivery to aggregate.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookDeliveries
    **/
    _count?: true | WebhookDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type GetWebhookDeliveryAggregateType<T extends WebhookDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookDelivery[P]>
      : GetScalarType<T[P], AggregateWebhookDelivery[P]>
  }




  export type WebhookDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithAggregationInput | WebhookDeliveryOrderByWithAggregationInput[]
    by: WebhookDeliveryScalarFieldEnum[] | WebhookDeliveryScalarFieldEnum
    having?: WebhookDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookDeliveryCountAggregateInputType | true
    _avg?: WebhookDeliveryAvgAggregateInputType
    _sum?: WebhookDeliverySumAggregateInputType
    _min?: WebhookDeliveryMinAggregateInputType
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type WebhookDeliveryGroupByOutputType = {
    id: string
    tenantId: string
    webhookId: string
    eventId: string
    attempt: number
    status: string
    httpStatus: number | null
    responseBody: string | null
    responseHeaders: JsonValue | null
    duration: number
    errorMessage: string | null
    createdAt: Date
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  type GetWebhookDeliveryGroupByPayload<T extends WebhookDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type WebhookDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    webhookId?: boolean
    eventId?: boolean
    attempt?: boolean
    status?: boolean
    httpStatus?: boolean
    responseBody?: boolean
    responseHeaders?: boolean
    duration?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
    retryHistories?: boolean | WebhookDelivery$retryHistoriesArgs<ExtArgs>
    _count?: boolean | WebhookDeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    webhookId?: boolean
    eventId?: boolean
    attempt?: boolean
    status?: boolean
    httpStatus?: boolean
    responseBody?: boolean
    responseHeaders?: boolean
    duration?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    webhookId?: boolean
    eventId?: boolean
    attempt?: boolean
    status?: boolean
    httpStatus?: boolean
    responseBody?: boolean
    responseHeaders?: boolean
    duration?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectScalar = {
    id?: boolean
    tenantId?: boolean
    webhookId?: boolean
    eventId?: boolean
    attempt?: boolean
    status?: boolean
    httpStatus?: boolean
    responseBody?: boolean
    responseHeaders?: boolean
    duration?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type WebhookDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "webhookId" | "eventId" | "attempt" | "status" | "httpStatus" | "responseBody" | "responseHeaders" | "duration" | "errorMessage" | "createdAt", ExtArgs["result"]["webhookDelivery"]>
  export type WebhookDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
    retryHistories?: boolean | WebhookDelivery$retryHistoriesArgs<ExtArgs>
    _count?: boolean | WebhookDeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }
  export type WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    webhook?: boolean | WebhookDefaultArgs<ExtArgs>
  }

  export type $WebhookDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookDelivery"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      webhook: Prisma.$WebhookPayload<ExtArgs>
      retryHistories: Prisma.$WebhookRetryHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      webhookId: string
      eventId: string
      attempt: number
      status: string
      httpStatus: number | null
      responseBody: string | null
      responseHeaders: Prisma.JsonValue | null
      duration: number
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["webhookDelivery"]>
    composites: {}
  }

  type WebhookDeliveryGetPayload<S extends boolean | null | undefined | WebhookDeliveryDefaultArgs> = $Result.GetResult<Prisma.$WebhookDeliveryPayload, S>

  type WebhookDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookDeliveryCountAggregateInputType | true
    }

  export interface WebhookDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookDelivery'], meta: { name: 'WebhookDelivery' } }
    /**
     * Find zero or one WebhookDelivery that matches the filter.
     * @param {WebhookDeliveryFindUniqueArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookDeliveryFindUniqueArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookDeliveryFindUniqueOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookDeliveryFindFirstArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany()
     * 
     * // Get first 10 WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookDeliveryFindManyArgs>(args?: SelectSubset<T, WebhookDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookDelivery.
     * @param {WebhookDeliveryCreateArgs} args - Arguments to create a WebhookDelivery.
     * @example
     * // Create one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.create({
     *   data: {
     *     // ... data to create a WebhookDelivery
     *   }
     * })
     * 
     */
    create<T extends WebhookDeliveryCreateArgs>(args: SelectSubset<T, WebhookDeliveryCreateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookDeliveries.
     * @param {WebhookDeliveryCreateManyArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookDeliveryCreateManyArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookDeliveries and returns the data saved in the database.
     * @param {WebhookDeliveryCreateManyAndReturnArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookDelivery.
     * @param {WebhookDeliveryDeleteArgs} args - Arguments to delete one WebhookDelivery.
     * @example
     * // Delete one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.delete({
     *   where: {
     *     // ... filter to delete one WebhookDelivery
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeliveryDeleteArgs>(args: SelectSubset<T, WebhookDeliveryDeleteArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookDelivery.
     * @param {WebhookDeliveryUpdateArgs} args - Arguments to update one WebhookDelivery.
     * @example
     * // Update one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookDeliveryUpdateArgs>(args: SelectSubset<T, WebhookDeliveryUpdateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookDeliveries.
     * @param {WebhookDeliveryDeleteManyArgs} args - Arguments to filter WebhookDeliveries to delete.
     * @example
     * // Delete a few WebhookDeliveries
     * const { count } = await prisma.webhookDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeliveryDeleteManyArgs>(args?: SelectSubset<T, WebhookDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookDeliveryUpdateManyArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries and returns the data updated in the database.
     * @param {WebhookDeliveryUpdateManyAndReturnArgs} args - Arguments to update many WebhookDeliveries.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookDelivery.
     * @param {WebhookDeliveryUpsertArgs} args - Arguments to update or create a WebhookDelivery.
     * @example
     * // Update or create a WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.upsert({
     *   create: {
     *     // ... data to create a WebhookDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookDelivery we want to update
     *   }
     * })
     */
    upsert<T extends WebhookDeliveryUpsertArgs>(args: SelectSubset<T, WebhookDeliveryUpsertArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryCountArgs} args - Arguments to filter WebhookDeliveries to count.
     * @example
     * // Count the number of WebhookDeliveries
     * const count = await prisma.webhookDelivery.count({
     *   where: {
     *     // ... the filter for the WebhookDeliveries we want to count
     *   }
     * })
    **/
    count<T extends WebhookDeliveryCountArgs>(
      args?: Subset<T, WebhookDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookDeliveryAggregateArgs>(args: Subset<T, WebhookDeliveryAggregateArgs>): Prisma.PrismaPromise<GetWebhookDeliveryAggregateType<T>>

    /**
     * Group by WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: WebhookDeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookDelivery model
   */
  readonly fields: WebhookDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    webhook<T extends WebhookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebhookDefaultArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    retryHistories<T extends WebhookDelivery$retryHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, WebhookDelivery$retryHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookDelivery model
   */
  interface WebhookDeliveryFieldRefs {
    readonly id: FieldRef<"WebhookDelivery", 'String'>
    readonly tenantId: FieldRef<"WebhookDelivery", 'String'>
    readonly webhookId: FieldRef<"WebhookDelivery", 'String'>
    readonly eventId: FieldRef<"WebhookDelivery", 'String'>
    readonly attempt: FieldRef<"WebhookDelivery", 'Int'>
    readonly status: FieldRef<"WebhookDelivery", 'String'>
    readonly httpStatus: FieldRef<"WebhookDelivery", 'Int'>
    readonly responseBody: FieldRef<"WebhookDelivery", 'String'>
    readonly responseHeaders: FieldRef<"WebhookDelivery", 'Json'>
    readonly duration: FieldRef<"WebhookDelivery", 'Int'>
    readonly errorMessage: FieldRef<"WebhookDelivery", 'String'>
    readonly createdAt: FieldRef<"WebhookDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookDelivery findUnique
   */
  export type WebhookDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findUniqueOrThrow
   */
  export type WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findFirst
   */
  export type WebhookDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findFirstOrThrow
   */
  export type WebhookDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findMany
   */
  export type WebhookDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDeliveries to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery create
   */
  export type WebhookDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
  }

  /**
   * WebhookDelivery createMany
   */
  export type WebhookDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookDelivery createManyAndReturn
   */
  export type WebhookDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookDelivery update
   */
  export type WebhookDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
    /**
     * Choose, which WebhookDelivery to update.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery updateMany
   */
  export type WebhookDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
  }

  /**
   * WebhookDelivery updateManyAndReturn
   */
  export type WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookDelivery upsert
   */
  export type WebhookDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookDelivery to update in case it exists.
     */
    where: WebhookDeliveryWhereUniqueInput
    /**
     * In case the WebhookDelivery found by the `where` argument doesn't exist, create a new WebhookDelivery with this data.
     */
    create: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
    /**
     * In case the WebhookDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
  }

  /**
   * WebhookDelivery delete
   */
  export type WebhookDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter which WebhookDelivery to delete.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery deleteMany
   */
  export type WebhookDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDeliveries to delete
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to delete.
     */
    limit?: number
  }

  /**
   * WebhookDelivery.retryHistories
   */
  export type WebhookDelivery$retryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    where?: WebhookRetryHistoryWhereInput
    orderBy?: WebhookRetryHistoryOrderByWithRelationInput | WebhookRetryHistoryOrderByWithRelationInput[]
    cursor?: WebhookRetryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookRetryHistoryScalarFieldEnum | WebhookRetryHistoryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery without action
   */
  export type WebhookDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
  }


  /**
   * Model WebhookRetryHistory
   */

  export type AggregateWebhookRetryHistory = {
    _count: WebhookRetryHistoryCountAggregateOutputType | null
    _avg: WebhookRetryHistoryAvgAggregateOutputType | null
    _sum: WebhookRetryHistorySumAggregateOutputType | null
    _min: WebhookRetryHistoryMinAggregateOutputType | null
    _max: WebhookRetryHistoryMaxAggregateOutputType | null
  }

  export type WebhookRetryHistoryAvgAggregateOutputType = {
    attempt: number | null
  }

  export type WebhookRetryHistorySumAggregateOutputType = {
    attempt: number | null
  }

  export type WebhookRetryHistoryMinAggregateOutputType = {
    id: string | null
    deliveryId: string | null
    attempt: number | null
    reason: string | null
    scheduledAt: Date | null
    executedAt: Date | null
    result: string | null
    createdAt: Date | null
  }

  export type WebhookRetryHistoryMaxAggregateOutputType = {
    id: string | null
    deliveryId: string | null
    attempt: number | null
    reason: string | null
    scheduledAt: Date | null
    executedAt: Date | null
    result: string | null
    createdAt: Date | null
  }

  export type WebhookRetryHistoryCountAggregateOutputType = {
    id: number
    deliveryId: number
    attempt: number
    reason: number
    scheduledAt: number
    executedAt: number
    result: number
    createdAt: number
    _all: number
  }


  export type WebhookRetryHistoryAvgAggregateInputType = {
    attempt?: true
  }

  export type WebhookRetryHistorySumAggregateInputType = {
    attempt?: true
  }

  export type WebhookRetryHistoryMinAggregateInputType = {
    id?: true
    deliveryId?: true
    attempt?: true
    reason?: true
    scheduledAt?: true
    executedAt?: true
    result?: true
    createdAt?: true
  }

  export type WebhookRetryHistoryMaxAggregateInputType = {
    id?: true
    deliveryId?: true
    attempt?: true
    reason?: true
    scheduledAt?: true
    executedAt?: true
    result?: true
    createdAt?: true
  }

  export type WebhookRetryHistoryCountAggregateInputType = {
    id?: true
    deliveryId?: true
    attempt?: true
    reason?: true
    scheduledAt?: true
    executedAt?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookRetryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookRetryHistory to aggregate.
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookRetryHistories to fetch.
     */
    orderBy?: WebhookRetryHistoryOrderByWithRelationInput | WebhookRetryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookRetryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookRetryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookRetryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookRetryHistories
    **/
    _count?: true | WebhookRetryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookRetryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookRetryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookRetryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookRetryHistoryMaxAggregateInputType
  }

  export type GetWebhookRetryHistoryAggregateType<T extends WebhookRetryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookRetryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookRetryHistory[P]>
      : GetScalarType<T[P], AggregateWebhookRetryHistory[P]>
  }




  export type WebhookRetryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookRetryHistoryWhereInput
    orderBy?: WebhookRetryHistoryOrderByWithAggregationInput | WebhookRetryHistoryOrderByWithAggregationInput[]
    by: WebhookRetryHistoryScalarFieldEnum[] | WebhookRetryHistoryScalarFieldEnum
    having?: WebhookRetryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookRetryHistoryCountAggregateInputType | true
    _avg?: WebhookRetryHistoryAvgAggregateInputType
    _sum?: WebhookRetryHistorySumAggregateInputType
    _min?: WebhookRetryHistoryMinAggregateInputType
    _max?: WebhookRetryHistoryMaxAggregateInputType
  }

  export type WebhookRetryHistoryGroupByOutputType = {
    id: string
    deliveryId: string
    attempt: number
    reason: string | null
    scheduledAt: Date
    executedAt: Date | null
    result: string | null
    createdAt: Date
    _count: WebhookRetryHistoryCountAggregateOutputType | null
    _avg: WebhookRetryHistoryAvgAggregateOutputType | null
    _sum: WebhookRetryHistorySumAggregateOutputType | null
    _min: WebhookRetryHistoryMinAggregateOutputType | null
    _max: WebhookRetryHistoryMaxAggregateOutputType | null
  }

  type GetWebhookRetryHistoryGroupByPayload<T extends WebhookRetryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookRetryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookRetryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookRetryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookRetryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WebhookRetryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    attempt?: boolean
    reason?: boolean
    scheduledAt?: boolean
    executedAt?: boolean
    result?: boolean
    createdAt?: boolean
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookRetryHistory"]>

  export type WebhookRetryHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    attempt?: boolean
    reason?: boolean
    scheduledAt?: boolean
    executedAt?: boolean
    result?: boolean
    createdAt?: boolean
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookRetryHistory"]>

  export type WebhookRetryHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    attempt?: boolean
    reason?: boolean
    scheduledAt?: boolean
    executedAt?: boolean
    result?: boolean
    createdAt?: boolean
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookRetryHistory"]>

  export type WebhookRetryHistorySelectScalar = {
    id?: boolean
    deliveryId?: boolean
    attempt?: boolean
    reason?: boolean
    scheduledAt?: boolean
    executedAt?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type WebhookRetryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliveryId" | "attempt" | "reason" | "scheduledAt" | "executedAt" | "result" | "createdAt", ExtArgs["result"]["webhookRetryHistory"]>
  export type WebhookRetryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }
  export type WebhookRetryHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }
  export type WebhookRetryHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | WebhookDeliveryDefaultArgs<ExtArgs>
  }

  export type $WebhookRetryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookRetryHistory"
    objects: {
      delivery: Prisma.$WebhookDeliveryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deliveryId: string
      attempt: number
      reason: string | null
      scheduledAt: Date
      executedAt: Date | null
      result: string | null
      createdAt: Date
    }, ExtArgs["result"]["webhookRetryHistory"]>
    composites: {}
  }

  type WebhookRetryHistoryGetPayload<S extends boolean | null | undefined | WebhookRetryHistoryDefaultArgs> = $Result.GetResult<Prisma.$WebhookRetryHistoryPayload, S>

  type WebhookRetryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookRetryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookRetryHistoryCountAggregateInputType | true
    }

  export interface WebhookRetryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookRetryHistory'], meta: { name: 'WebhookRetryHistory' } }
    /**
     * Find zero or one WebhookRetryHistory that matches the filter.
     * @param {WebhookRetryHistoryFindUniqueArgs} args - Arguments to find a WebhookRetryHistory
     * @example
     * // Get one WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookRetryHistoryFindUniqueArgs>(args: SelectSubset<T, WebhookRetryHistoryFindUniqueArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookRetryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookRetryHistoryFindUniqueOrThrowArgs} args - Arguments to find a WebhookRetryHistory
     * @example
     * // Get one WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookRetryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookRetryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookRetryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryFindFirstArgs} args - Arguments to find a WebhookRetryHistory
     * @example
     * // Get one WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookRetryHistoryFindFirstArgs>(args?: SelectSubset<T, WebhookRetryHistoryFindFirstArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookRetryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryFindFirstOrThrowArgs} args - Arguments to find a WebhookRetryHistory
     * @example
     * // Get one WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookRetryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookRetryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookRetryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookRetryHistories
     * const webhookRetryHistories = await prisma.webhookRetryHistory.findMany()
     * 
     * // Get first 10 WebhookRetryHistories
     * const webhookRetryHistories = await prisma.webhookRetryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookRetryHistoryWithIdOnly = await prisma.webhookRetryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookRetryHistoryFindManyArgs>(args?: SelectSubset<T, WebhookRetryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookRetryHistory.
     * @param {WebhookRetryHistoryCreateArgs} args - Arguments to create a WebhookRetryHistory.
     * @example
     * // Create one WebhookRetryHistory
     * const WebhookRetryHistory = await prisma.webhookRetryHistory.create({
     *   data: {
     *     // ... data to create a WebhookRetryHistory
     *   }
     * })
     * 
     */
    create<T extends WebhookRetryHistoryCreateArgs>(args: SelectSubset<T, WebhookRetryHistoryCreateArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookRetryHistories.
     * @param {WebhookRetryHistoryCreateManyArgs} args - Arguments to create many WebhookRetryHistories.
     * @example
     * // Create many WebhookRetryHistories
     * const webhookRetryHistory = await prisma.webhookRetryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookRetryHistoryCreateManyArgs>(args?: SelectSubset<T, WebhookRetryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookRetryHistories and returns the data saved in the database.
     * @param {WebhookRetryHistoryCreateManyAndReturnArgs} args - Arguments to create many WebhookRetryHistories.
     * @example
     * // Create many WebhookRetryHistories
     * const webhookRetryHistory = await prisma.webhookRetryHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookRetryHistories and only return the `id`
     * const webhookRetryHistoryWithIdOnly = await prisma.webhookRetryHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookRetryHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookRetryHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookRetryHistory.
     * @param {WebhookRetryHistoryDeleteArgs} args - Arguments to delete one WebhookRetryHistory.
     * @example
     * // Delete one WebhookRetryHistory
     * const WebhookRetryHistory = await prisma.webhookRetryHistory.delete({
     *   where: {
     *     // ... filter to delete one WebhookRetryHistory
     *   }
     * })
     * 
     */
    delete<T extends WebhookRetryHistoryDeleteArgs>(args: SelectSubset<T, WebhookRetryHistoryDeleteArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookRetryHistory.
     * @param {WebhookRetryHistoryUpdateArgs} args - Arguments to update one WebhookRetryHistory.
     * @example
     * // Update one WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookRetryHistoryUpdateArgs>(args: SelectSubset<T, WebhookRetryHistoryUpdateArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookRetryHistories.
     * @param {WebhookRetryHistoryDeleteManyArgs} args - Arguments to filter WebhookRetryHistories to delete.
     * @example
     * // Delete a few WebhookRetryHistories
     * const { count } = await prisma.webhookRetryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookRetryHistoryDeleteManyArgs>(args?: SelectSubset<T, WebhookRetryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookRetryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookRetryHistories
     * const webhookRetryHistory = await prisma.webhookRetryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookRetryHistoryUpdateManyArgs>(args: SelectSubset<T, WebhookRetryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookRetryHistories and returns the data updated in the database.
     * @param {WebhookRetryHistoryUpdateManyAndReturnArgs} args - Arguments to update many WebhookRetryHistories.
     * @example
     * // Update many WebhookRetryHistories
     * const webhookRetryHistory = await prisma.webhookRetryHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookRetryHistories and only return the `id`
     * const webhookRetryHistoryWithIdOnly = await prisma.webhookRetryHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookRetryHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookRetryHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookRetryHistory.
     * @param {WebhookRetryHistoryUpsertArgs} args - Arguments to update or create a WebhookRetryHistory.
     * @example
     * // Update or create a WebhookRetryHistory
     * const webhookRetryHistory = await prisma.webhookRetryHistory.upsert({
     *   create: {
     *     // ... data to create a WebhookRetryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookRetryHistory we want to update
     *   }
     * })
     */
    upsert<T extends WebhookRetryHistoryUpsertArgs>(args: SelectSubset<T, WebhookRetryHistoryUpsertArgs<ExtArgs>>): Prisma__WebhookRetryHistoryClient<$Result.GetResult<Prisma.$WebhookRetryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookRetryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryCountArgs} args - Arguments to filter WebhookRetryHistories to count.
     * @example
     * // Count the number of WebhookRetryHistories
     * const count = await prisma.webhookRetryHistory.count({
     *   where: {
     *     // ... the filter for the WebhookRetryHistories we want to count
     *   }
     * })
    **/
    count<T extends WebhookRetryHistoryCountArgs>(
      args?: Subset<T, WebhookRetryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookRetryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookRetryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookRetryHistoryAggregateArgs>(args: Subset<T, WebhookRetryHistoryAggregateArgs>): Prisma.PrismaPromise<GetWebhookRetryHistoryAggregateType<T>>

    /**
     * Group by WebhookRetryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookRetryHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookRetryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookRetryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WebhookRetryHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookRetryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookRetryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookRetryHistory model
   */
  readonly fields: WebhookRetryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookRetryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookRetryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delivery<T extends WebhookDeliveryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebhookDeliveryDefaultArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookRetryHistory model
   */
  interface WebhookRetryHistoryFieldRefs {
    readonly id: FieldRef<"WebhookRetryHistory", 'String'>
    readonly deliveryId: FieldRef<"WebhookRetryHistory", 'String'>
    readonly attempt: FieldRef<"WebhookRetryHistory", 'Int'>
    readonly reason: FieldRef<"WebhookRetryHistory", 'String'>
    readonly scheduledAt: FieldRef<"WebhookRetryHistory", 'DateTime'>
    readonly executedAt: FieldRef<"WebhookRetryHistory", 'DateTime'>
    readonly result: FieldRef<"WebhookRetryHistory", 'String'>
    readonly createdAt: FieldRef<"WebhookRetryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookRetryHistory findUnique
   */
  export type WebhookRetryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookRetryHistory to fetch.
     */
    where: WebhookRetryHistoryWhereUniqueInput
  }

  /**
   * WebhookRetryHistory findUniqueOrThrow
   */
  export type WebhookRetryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookRetryHistory to fetch.
     */
    where: WebhookRetryHistoryWhereUniqueInput
  }

  /**
   * WebhookRetryHistory findFirst
   */
  export type WebhookRetryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookRetryHistory to fetch.
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookRetryHistories to fetch.
     */
    orderBy?: WebhookRetryHistoryOrderByWithRelationInput | WebhookRetryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookRetryHistories.
     */
    cursor?: WebhookRetryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookRetryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookRetryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookRetryHistories.
     */
    distinct?: WebhookRetryHistoryScalarFieldEnum | WebhookRetryHistoryScalarFieldEnum[]
  }

  /**
   * WebhookRetryHistory findFirstOrThrow
   */
  export type WebhookRetryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookRetryHistory to fetch.
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookRetryHistories to fetch.
     */
    orderBy?: WebhookRetryHistoryOrderByWithRelationInput | WebhookRetryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookRetryHistories.
     */
    cursor?: WebhookRetryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookRetryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookRetryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookRetryHistories.
     */
    distinct?: WebhookRetryHistoryScalarFieldEnum | WebhookRetryHistoryScalarFieldEnum[]
  }

  /**
   * WebhookRetryHistory findMany
   */
  export type WebhookRetryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookRetryHistories to fetch.
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookRetryHistories to fetch.
     */
    orderBy?: WebhookRetryHistoryOrderByWithRelationInput | WebhookRetryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookRetryHistories.
     */
    cursor?: WebhookRetryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookRetryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookRetryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookRetryHistories.
     */
    distinct?: WebhookRetryHistoryScalarFieldEnum | WebhookRetryHistoryScalarFieldEnum[]
  }

  /**
   * WebhookRetryHistory create
   */
  export type WebhookRetryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookRetryHistory.
     */
    data: XOR<WebhookRetryHistoryCreateInput, WebhookRetryHistoryUncheckedCreateInput>
  }

  /**
   * WebhookRetryHistory createMany
   */
  export type WebhookRetryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookRetryHistories.
     */
    data: WebhookRetryHistoryCreateManyInput | WebhookRetryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookRetryHistory createManyAndReturn
   */
  export type WebhookRetryHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookRetryHistories.
     */
    data: WebhookRetryHistoryCreateManyInput | WebhookRetryHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookRetryHistory update
   */
  export type WebhookRetryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookRetryHistory.
     */
    data: XOR<WebhookRetryHistoryUpdateInput, WebhookRetryHistoryUncheckedUpdateInput>
    /**
     * Choose, which WebhookRetryHistory to update.
     */
    where: WebhookRetryHistoryWhereUniqueInput
  }

  /**
   * WebhookRetryHistory updateMany
   */
  export type WebhookRetryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookRetryHistories.
     */
    data: XOR<WebhookRetryHistoryUpdateManyMutationInput, WebhookRetryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookRetryHistories to update
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * Limit how many WebhookRetryHistories to update.
     */
    limit?: number
  }

  /**
   * WebhookRetryHistory updateManyAndReturn
   */
  export type WebhookRetryHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WebhookRetryHistories.
     */
    data: XOR<WebhookRetryHistoryUpdateManyMutationInput, WebhookRetryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookRetryHistories to update
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * Limit how many WebhookRetryHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookRetryHistory upsert
   */
  export type WebhookRetryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookRetryHistory to update in case it exists.
     */
    where: WebhookRetryHistoryWhereUniqueInput
    /**
     * In case the WebhookRetryHistory found by the `where` argument doesn't exist, create a new WebhookRetryHistory with this data.
     */
    create: XOR<WebhookRetryHistoryCreateInput, WebhookRetryHistoryUncheckedCreateInput>
    /**
     * In case the WebhookRetryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookRetryHistoryUpdateInput, WebhookRetryHistoryUncheckedUpdateInput>
  }

  /**
   * WebhookRetryHistory delete
   */
  export type WebhookRetryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
    /**
     * Filter which WebhookRetryHistory to delete.
     */
    where: WebhookRetryHistoryWhereUniqueInput
  }

  /**
   * WebhookRetryHistory deleteMany
   */
  export type WebhookRetryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookRetryHistories to delete
     */
    where?: WebhookRetryHistoryWhereInput
    /**
     * Limit how many WebhookRetryHistories to delete.
     */
    limit?: number
  }

  /**
   * WebhookRetryHistory without action
   */
  export type WebhookRetryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookRetryHistory
     */
    select?: WebhookRetryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookRetryHistory
     */
    omit?: WebhookRetryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookRetryHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ReplayHistory
   */

  export type AggregateReplayHistory = {
    _count: ReplayHistoryCountAggregateOutputType | null
    _avg: ReplayHistoryAvgAggregateOutputType | null
    _sum: ReplayHistorySumAggregateOutputType | null
    _min: ReplayHistoryMinAggregateOutputType | null
    _max: ReplayHistoryMaxAggregateOutputType | null
  }

  export type ReplayHistoryAvgAggregateOutputType = {
    replayCount: number | null
    maxReplayAttempts: number | null
  }

  export type ReplayHistorySumAggregateOutputType = {
    replayCount: number | null
    maxReplayAttempts: number | null
  }

  export type ReplayHistoryMinAggregateOutputType = {
    id: string | null
    targetType: string | null
    targetId: string | null
    originalJobId: string | null
    newJobId: string | null
    reason: string | null
    result: string | null
    operatorId: string | null
    replayCount: number | null
    maxReplayAttempts: number | null
    replayedAt: Date | null
  }

  export type ReplayHistoryMaxAggregateOutputType = {
    id: string | null
    targetType: string | null
    targetId: string | null
    originalJobId: string | null
    newJobId: string | null
    reason: string | null
    result: string | null
    operatorId: string | null
    replayCount: number | null
    maxReplayAttempts: number | null
    replayedAt: Date | null
  }

  export type ReplayHistoryCountAggregateOutputType = {
    id: number
    targetType: number
    targetId: number
    originalJobId: number
    newJobId: number
    reason: number
    result: number
    operatorId: number
    replayCount: number
    maxReplayAttempts: number
    replayedAt: number
    _all: number
  }


  export type ReplayHistoryAvgAggregateInputType = {
    replayCount?: true
    maxReplayAttempts?: true
  }

  export type ReplayHistorySumAggregateInputType = {
    replayCount?: true
    maxReplayAttempts?: true
  }

  export type ReplayHistoryMinAggregateInputType = {
    id?: true
    targetType?: true
    targetId?: true
    originalJobId?: true
    newJobId?: true
    reason?: true
    result?: true
    operatorId?: true
    replayCount?: true
    maxReplayAttempts?: true
    replayedAt?: true
  }

  export type ReplayHistoryMaxAggregateInputType = {
    id?: true
    targetType?: true
    targetId?: true
    originalJobId?: true
    newJobId?: true
    reason?: true
    result?: true
    operatorId?: true
    replayCount?: true
    maxReplayAttempts?: true
    replayedAt?: true
  }

  export type ReplayHistoryCountAggregateInputType = {
    id?: true
    targetType?: true
    targetId?: true
    originalJobId?: true
    newJobId?: true
    reason?: true
    result?: true
    operatorId?: true
    replayCount?: true
    maxReplayAttempts?: true
    replayedAt?: true
    _all?: true
  }

  export type ReplayHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReplayHistory to aggregate.
     */
    where?: ReplayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayHistories to fetch.
     */
    orderBy?: ReplayHistoryOrderByWithRelationInput | ReplayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReplayHistories
    **/
    _count?: true | ReplayHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplayHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplayHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplayHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplayHistoryMaxAggregateInputType
  }

  export type GetReplayHistoryAggregateType<T extends ReplayHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateReplayHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReplayHistory[P]>
      : GetScalarType<T[P], AggregateReplayHistory[P]>
  }




  export type ReplayHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplayHistoryWhereInput
    orderBy?: ReplayHistoryOrderByWithAggregationInput | ReplayHistoryOrderByWithAggregationInput[]
    by: ReplayHistoryScalarFieldEnum[] | ReplayHistoryScalarFieldEnum
    having?: ReplayHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplayHistoryCountAggregateInputType | true
    _avg?: ReplayHistoryAvgAggregateInputType
    _sum?: ReplayHistorySumAggregateInputType
    _min?: ReplayHistoryMinAggregateInputType
    _max?: ReplayHistoryMaxAggregateInputType
  }

  export type ReplayHistoryGroupByOutputType = {
    id: string
    targetType: string
    targetId: string
    originalJobId: string | null
    newJobId: string | null
    reason: string | null
    result: string
    operatorId: string | null
    replayCount: number
    maxReplayAttempts: number
    replayedAt: Date
    _count: ReplayHistoryCountAggregateOutputType | null
    _avg: ReplayHistoryAvgAggregateOutputType | null
    _sum: ReplayHistorySumAggregateOutputType | null
    _min: ReplayHistoryMinAggregateOutputType | null
    _max: ReplayHistoryMaxAggregateOutputType | null
  }

  type GetReplayHistoryGroupByPayload<T extends ReplayHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplayHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplayHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplayHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ReplayHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ReplayHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetType?: boolean
    targetId?: boolean
    originalJobId?: boolean
    newJobId?: boolean
    reason?: boolean
    result?: boolean
    operatorId?: boolean
    replayCount?: boolean
    maxReplayAttempts?: boolean
    replayedAt?: boolean
  }, ExtArgs["result"]["replayHistory"]>

  export type ReplayHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetType?: boolean
    targetId?: boolean
    originalJobId?: boolean
    newJobId?: boolean
    reason?: boolean
    result?: boolean
    operatorId?: boolean
    replayCount?: boolean
    maxReplayAttempts?: boolean
    replayedAt?: boolean
  }, ExtArgs["result"]["replayHistory"]>

  export type ReplayHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetType?: boolean
    targetId?: boolean
    originalJobId?: boolean
    newJobId?: boolean
    reason?: boolean
    result?: boolean
    operatorId?: boolean
    replayCount?: boolean
    maxReplayAttempts?: boolean
    replayedAt?: boolean
  }, ExtArgs["result"]["replayHistory"]>

  export type ReplayHistorySelectScalar = {
    id?: boolean
    targetType?: boolean
    targetId?: boolean
    originalJobId?: boolean
    newJobId?: boolean
    reason?: boolean
    result?: boolean
    operatorId?: boolean
    replayCount?: boolean
    maxReplayAttempts?: boolean
    replayedAt?: boolean
  }

  export type ReplayHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "targetType" | "targetId" | "originalJobId" | "newJobId" | "reason" | "result" | "operatorId" | "replayCount" | "maxReplayAttempts" | "replayedAt", ExtArgs["result"]["replayHistory"]>

  export type $ReplayHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReplayHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targetType: string
      targetId: string
      originalJobId: string | null
      newJobId: string | null
      reason: string | null
      result: string
      operatorId: string | null
      replayCount: number
      maxReplayAttempts: number
      replayedAt: Date
    }, ExtArgs["result"]["replayHistory"]>
    composites: {}
  }

  type ReplayHistoryGetPayload<S extends boolean | null | undefined | ReplayHistoryDefaultArgs> = $Result.GetResult<Prisma.$ReplayHistoryPayload, S>

  type ReplayHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplayHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplayHistoryCountAggregateInputType | true
    }

  export interface ReplayHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReplayHistory'], meta: { name: 'ReplayHistory' } }
    /**
     * Find zero or one ReplayHistory that matches the filter.
     * @param {ReplayHistoryFindUniqueArgs} args - Arguments to find a ReplayHistory
     * @example
     * // Get one ReplayHistory
     * const replayHistory = await prisma.replayHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplayHistoryFindUniqueArgs>(args: SelectSubset<T, ReplayHistoryFindUniqueArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReplayHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplayHistoryFindUniqueOrThrowArgs} args - Arguments to find a ReplayHistory
     * @example
     * // Get one ReplayHistory
     * const replayHistory = await prisma.replayHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplayHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplayHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReplayHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryFindFirstArgs} args - Arguments to find a ReplayHistory
     * @example
     * // Get one ReplayHistory
     * const replayHistory = await prisma.replayHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplayHistoryFindFirstArgs>(args?: SelectSubset<T, ReplayHistoryFindFirstArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReplayHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryFindFirstOrThrowArgs} args - Arguments to find a ReplayHistory
     * @example
     * // Get one ReplayHistory
     * const replayHistory = await prisma.replayHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplayHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplayHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReplayHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReplayHistories
     * const replayHistories = await prisma.replayHistory.findMany()
     * 
     * // Get first 10 ReplayHistories
     * const replayHistories = await prisma.replayHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replayHistoryWithIdOnly = await prisma.replayHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplayHistoryFindManyArgs>(args?: SelectSubset<T, ReplayHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReplayHistory.
     * @param {ReplayHistoryCreateArgs} args - Arguments to create a ReplayHistory.
     * @example
     * // Create one ReplayHistory
     * const ReplayHistory = await prisma.replayHistory.create({
     *   data: {
     *     // ... data to create a ReplayHistory
     *   }
     * })
     * 
     */
    create<T extends ReplayHistoryCreateArgs>(args: SelectSubset<T, ReplayHistoryCreateArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReplayHistories.
     * @param {ReplayHistoryCreateManyArgs} args - Arguments to create many ReplayHistories.
     * @example
     * // Create many ReplayHistories
     * const replayHistory = await prisma.replayHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplayHistoryCreateManyArgs>(args?: SelectSubset<T, ReplayHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReplayHistories and returns the data saved in the database.
     * @param {ReplayHistoryCreateManyAndReturnArgs} args - Arguments to create many ReplayHistories.
     * @example
     * // Create many ReplayHistories
     * const replayHistory = await prisma.replayHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReplayHistories and only return the `id`
     * const replayHistoryWithIdOnly = await prisma.replayHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplayHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplayHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReplayHistory.
     * @param {ReplayHistoryDeleteArgs} args - Arguments to delete one ReplayHistory.
     * @example
     * // Delete one ReplayHistory
     * const ReplayHistory = await prisma.replayHistory.delete({
     *   where: {
     *     // ... filter to delete one ReplayHistory
     *   }
     * })
     * 
     */
    delete<T extends ReplayHistoryDeleteArgs>(args: SelectSubset<T, ReplayHistoryDeleteArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReplayHistory.
     * @param {ReplayHistoryUpdateArgs} args - Arguments to update one ReplayHistory.
     * @example
     * // Update one ReplayHistory
     * const replayHistory = await prisma.replayHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplayHistoryUpdateArgs>(args: SelectSubset<T, ReplayHistoryUpdateArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReplayHistories.
     * @param {ReplayHistoryDeleteManyArgs} args - Arguments to filter ReplayHistories to delete.
     * @example
     * // Delete a few ReplayHistories
     * const { count } = await prisma.replayHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplayHistoryDeleteManyArgs>(args?: SelectSubset<T, ReplayHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReplayHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReplayHistories
     * const replayHistory = await prisma.replayHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplayHistoryUpdateManyArgs>(args: SelectSubset<T, ReplayHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReplayHistories and returns the data updated in the database.
     * @param {ReplayHistoryUpdateManyAndReturnArgs} args - Arguments to update many ReplayHistories.
     * @example
     * // Update many ReplayHistories
     * const replayHistory = await prisma.replayHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReplayHistories and only return the `id`
     * const replayHistoryWithIdOnly = await prisma.replayHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplayHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplayHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReplayHistory.
     * @param {ReplayHistoryUpsertArgs} args - Arguments to update or create a ReplayHistory.
     * @example
     * // Update or create a ReplayHistory
     * const replayHistory = await prisma.replayHistory.upsert({
     *   create: {
     *     // ... data to create a ReplayHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReplayHistory we want to update
     *   }
     * })
     */
    upsert<T extends ReplayHistoryUpsertArgs>(args: SelectSubset<T, ReplayHistoryUpsertArgs<ExtArgs>>): Prisma__ReplayHistoryClient<$Result.GetResult<Prisma.$ReplayHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReplayHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryCountArgs} args - Arguments to filter ReplayHistories to count.
     * @example
     * // Count the number of ReplayHistories
     * const count = await prisma.replayHistory.count({
     *   where: {
     *     // ... the filter for the ReplayHistories we want to count
     *   }
     * })
    **/
    count<T extends ReplayHistoryCountArgs>(
      args?: Subset<T, ReplayHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplayHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReplayHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReplayHistoryAggregateArgs>(args: Subset<T, ReplayHistoryAggregateArgs>): Prisma.PrismaPromise<GetReplayHistoryAggregateType<T>>

    /**
     * Group by ReplayHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReplayHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplayHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ReplayHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReplayHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplayHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReplayHistory model
   */
  readonly fields: ReplayHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReplayHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplayHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReplayHistory model
   */
  interface ReplayHistoryFieldRefs {
    readonly id: FieldRef<"ReplayHistory", 'String'>
    readonly targetType: FieldRef<"ReplayHistory", 'String'>
    readonly targetId: FieldRef<"ReplayHistory", 'String'>
    readonly originalJobId: FieldRef<"ReplayHistory", 'String'>
    readonly newJobId: FieldRef<"ReplayHistory", 'String'>
    readonly reason: FieldRef<"ReplayHistory", 'String'>
    readonly result: FieldRef<"ReplayHistory", 'String'>
    readonly operatorId: FieldRef<"ReplayHistory", 'String'>
    readonly replayCount: FieldRef<"ReplayHistory", 'Int'>
    readonly maxReplayAttempts: FieldRef<"ReplayHistory", 'Int'>
    readonly replayedAt: FieldRef<"ReplayHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReplayHistory findUnique
   */
  export type ReplayHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ReplayHistory to fetch.
     */
    where: ReplayHistoryWhereUniqueInput
  }

  /**
   * ReplayHistory findUniqueOrThrow
   */
  export type ReplayHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ReplayHistory to fetch.
     */
    where: ReplayHistoryWhereUniqueInput
  }

  /**
   * ReplayHistory findFirst
   */
  export type ReplayHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ReplayHistory to fetch.
     */
    where?: ReplayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayHistories to fetch.
     */
    orderBy?: ReplayHistoryOrderByWithRelationInput | ReplayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReplayHistories.
     */
    cursor?: ReplayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReplayHistories.
     */
    distinct?: ReplayHistoryScalarFieldEnum | ReplayHistoryScalarFieldEnum[]
  }

  /**
   * ReplayHistory findFirstOrThrow
   */
  export type ReplayHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ReplayHistory to fetch.
     */
    where?: ReplayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayHistories to fetch.
     */
    orderBy?: ReplayHistoryOrderByWithRelationInput | ReplayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReplayHistories.
     */
    cursor?: ReplayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReplayHistories.
     */
    distinct?: ReplayHistoryScalarFieldEnum | ReplayHistoryScalarFieldEnum[]
  }

  /**
   * ReplayHistory findMany
   */
  export type ReplayHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ReplayHistories to fetch.
     */
    where?: ReplayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayHistories to fetch.
     */
    orderBy?: ReplayHistoryOrderByWithRelationInput | ReplayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReplayHistories.
     */
    cursor?: ReplayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReplayHistories.
     */
    distinct?: ReplayHistoryScalarFieldEnum | ReplayHistoryScalarFieldEnum[]
  }

  /**
   * ReplayHistory create
   */
  export type ReplayHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ReplayHistory.
     */
    data: XOR<ReplayHistoryCreateInput, ReplayHistoryUncheckedCreateInput>
  }

  /**
   * ReplayHistory createMany
   */
  export type ReplayHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReplayHistories.
     */
    data: ReplayHistoryCreateManyInput | ReplayHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReplayHistory createManyAndReturn
   */
  export type ReplayHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ReplayHistories.
     */
    data: ReplayHistoryCreateManyInput | ReplayHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReplayHistory update
   */
  export type ReplayHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ReplayHistory.
     */
    data: XOR<ReplayHistoryUpdateInput, ReplayHistoryUncheckedUpdateInput>
    /**
     * Choose, which ReplayHistory to update.
     */
    where: ReplayHistoryWhereUniqueInput
  }

  /**
   * ReplayHistory updateMany
   */
  export type ReplayHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReplayHistories.
     */
    data: XOR<ReplayHistoryUpdateManyMutationInput, ReplayHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ReplayHistories to update
     */
    where?: ReplayHistoryWhereInput
    /**
     * Limit how many ReplayHistories to update.
     */
    limit?: number
  }

  /**
   * ReplayHistory updateManyAndReturn
   */
  export type ReplayHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ReplayHistories.
     */
    data: XOR<ReplayHistoryUpdateManyMutationInput, ReplayHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ReplayHistories to update
     */
    where?: ReplayHistoryWhereInput
    /**
     * Limit how many ReplayHistories to update.
     */
    limit?: number
  }

  /**
   * ReplayHistory upsert
   */
  export type ReplayHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ReplayHistory to update in case it exists.
     */
    where: ReplayHistoryWhereUniqueInput
    /**
     * In case the ReplayHistory found by the `where` argument doesn't exist, create a new ReplayHistory with this data.
     */
    create: XOR<ReplayHistoryCreateInput, ReplayHistoryUncheckedCreateInput>
    /**
     * In case the ReplayHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplayHistoryUpdateInput, ReplayHistoryUncheckedUpdateInput>
  }

  /**
   * ReplayHistory delete
   */
  export type ReplayHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
    /**
     * Filter which ReplayHistory to delete.
     */
    where: ReplayHistoryWhereUniqueInput
  }

  /**
   * ReplayHistory deleteMany
   */
  export type ReplayHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReplayHistories to delete
     */
    where?: ReplayHistoryWhereInput
    /**
     * Limit how many ReplayHistories to delete.
     */
    limit?: number
  }

  /**
   * ReplayHistory without action
   */
  export type ReplayHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayHistory
     */
    select?: ReplayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayHistory
     */
    omit?: ReplayHistoryOmit<ExtArgs> | null
  }


  /**
   * Model CleanupExecution
   */

  export type AggregateCleanupExecution = {
    _count: CleanupExecutionCountAggregateOutputType | null
    _avg: CleanupExecutionAvgAggregateOutputType | null
    _sum: CleanupExecutionSumAggregateOutputType | null
    _min: CleanupExecutionMinAggregateOutputType | null
    _max: CleanupExecutionMaxAggregateOutputType | null
  }

  export type CleanupExecutionAvgAggregateOutputType = {
    itemsProcessed: number | null
    itemsDeleted: number | null
    durationMs: number | null
  }

  export type CleanupExecutionSumAggregateOutputType = {
    itemsProcessed: number | null
    itemsDeleted: number | null
    durationMs: number | null
  }

  export type CleanupExecutionMinAggregateOutputType = {
    id: string | null
    jobName: string | null
    startedAt: Date | null
    completedAt: Date | null
    status: string | null
    itemsProcessed: number | null
    itemsDeleted: number | null
    durationMs: number | null
    errorMessage: string | null
  }

  export type CleanupExecutionMaxAggregateOutputType = {
    id: string | null
    jobName: string | null
    startedAt: Date | null
    completedAt: Date | null
    status: string | null
    itemsProcessed: number | null
    itemsDeleted: number | null
    durationMs: number | null
    errorMessage: string | null
  }

  export type CleanupExecutionCountAggregateOutputType = {
    id: number
    jobName: number
    startedAt: number
    completedAt: number
    status: number
    itemsProcessed: number
    itemsDeleted: number
    durationMs: number
    errorMessage: number
    _all: number
  }


  export type CleanupExecutionAvgAggregateInputType = {
    itemsProcessed?: true
    itemsDeleted?: true
    durationMs?: true
  }

  export type CleanupExecutionSumAggregateInputType = {
    itemsProcessed?: true
    itemsDeleted?: true
    durationMs?: true
  }

  export type CleanupExecutionMinAggregateInputType = {
    id?: true
    jobName?: true
    startedAt?: true
    completedAt?: true
    status?: true
    itemsProcessed?: true
    itemsDeleted?: true
    durationMs?: true
    errorMessage?: true
  }

  export type CleanupExecutionMaxAggregateInputType = {
    id?: true
    jobName?: true
    startedAt?: true
    completedAt?: true
    status?: true
    itemsProcessed?: true
    itemsDeleted?: true
    durationMs?: true
    errorMessage?: true
  }

  export type CleanupExecutionCountAggregateInputType = {
    id?: true
    jobName?: true
    startedAt?: true
    completedAt?: true
    status?: true
    itemsProcessed?: true
    itemsDeleted?: true
    durationMs?: true
    errorMessage?: true
    _all?: true
  }

  export type CleanupExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanupExecution to aggregate.
     */
    where?: CleanupExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanupExecutions to fetch.
     */
    orderBy?: CleanupExecutionOrderByWithRelationInput | CleanupExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanupExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanupExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanupExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CleanupExecutions
    **/
    _count?: true | CleanupExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanupExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanupExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanupExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanupExecutionMaxAggregateInputType
  }

  export type GetCleanupExecutionAggregateType<T extends CleanupExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateCleanupExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleanupExecution[P]>
      : GetScalarType<T[P], AggregateCleanupExecution[P]>
  }




  export type CleanupExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanupExecutionWhereInput
    orderBy?: CleanupExecutionOrderByWithAggregationInput | CleanupExecutionOrderByWithAggregationInput[]
    by: CleanupExecutionScalarFieldEnum[] | CleanupExecutionScalarFieldEnum
    having?: CleanupExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanupExecutionCountAggregateInputType | true
    _avg?: CleanupExecutionAvgAggregateInputType
    _sum?: CleanupExecutionSumAggregateInputType
    _min?: CleanupExecutionMinAggregateInputType
    _max?: CleanupExecutionMaxAggregateInputType
  }

  export type CleanupExecutionGroupByOutputType = {
    id: string
    jobName: string
    startedAt: Date
    completedAt: Date | null
    status: string
    itemsProcessed: number
    itemsDeleted: number
    durationMs: number | null
    errorMessage: string | null
    _count: CleanupExecutionCountAggregateOutputType | null
    _avg: CleanupExecutionAvgAggregateOutputType | null
    _sum: CleanupExecutionSumAggregateOutputType | null
    _min: CleanupExecutionMinAggregateOutputType | null
    _max: CleanupExecutionMaxAggregateOutputType | null
  }

  type GetCleanupExecutionGroupByPayload<T extends CleanupExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanupExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanupExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanupExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], CleanupExecutionGroupByOutputType[P]>
        }
      >
    >


  export type CleanupExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    itemsProcessed?: boolean
    itemsDeleted?: boolean
    durationMs?: boolean
    errorMessage?: boolean
  }, ExtArgs["result"]["cleanupExecution"]>

  export type CleanupExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    itemsProcessed?: boolean
    itemsDeleted?: boolean
    durationMs?: boolean
    errorMessage?: boolean
  }, ExtArgs["result"]["cleanupExecution"]>

  export type CleanupExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    itemsProcessed?: boolean
    itemsDeleted?: boolean
    durationMs?: boolean
    errorMessage?: boolean
  }, ExtArgs["result"]["cleanupExecution"]>

  export type CleanupExecutionSelectScalar = {
    id?: boolean
    jobName?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    itemsProcessed?: boolean
    itemsDeleted?: boolean
    durationMs?: boolean
    errorMessage?: boolean
  }

  export type CleanupExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobName" | "startedAt" | "completedAt" | "status" | "itemsProcessed" | "itemsDeleted" | "durationMs" | "errorMessage", ExtArgs["result"]["cleanupExecution"]>

  export type $CleanupExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CleanupExecution"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobName: string
      startedAt: Date
      completedAt: Date | null
      status: string
      itemsProcessed: number
      itemsDeleted: number
      durationMs: number | null
      errorMessage: string | null
    }, ExtArgs["result"]["cleanupExecution"]>
    composites: {}
  }

  type CleanupExecutionGetPayload<S extends boolean | null | undefined | CleanupExecutionDefaultArgs> = $Result.GetResult<Prisma.$CleanupExecutionPayload, S>

  type CleanupExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleanupExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleanupExecutionCountAggregateInputType | true
    }

  export interface CleanupExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CleanupExecution'], meta: { name: 'CleanupExecution' } }
    /**
     * Find zero or one CleanupExecution that matches the filter.
     * @param {CleanupExecutionFindUniqueArgs} args - Arguments to find a CleanupExecution
     * @example
     * // Get one CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanupExecutionFindUniqueArgs>(args: SelectSubset<T, CleanupExecutionFindUniqueArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CleanupExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleanupExecutionFindUniqueOrThrowArgs} args - Arguments to find a CleanupExecution
     * @example
     * // Get one CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanupExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanupExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanupExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionFindFirstArgs} args - Arguments to find a CleanupExecution
     * @example
     * // Get one CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanupExecutionFindFirstArgs>(args?: SelectSubset<T, CleanupExecutionFindFirstArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CleanupExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionFindFirstOrThrowArgs} args - Arguments to find a CleanupExecution
     * @example
     * // Get one CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanupExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanupExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CleanupExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CleanupExecutions
     * const cleanupExecutions = await prisma.cleanupExecution.findMany()
     * 
     * // Get first 10 CleanupExecutions
     * const cleanupExecutions = await prisma.cleanupExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanupExecutionWithIdOnly = await prisma.cleanupExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanupExecutionFindManyArgs>(args?: SelectSubset<T, CleanupExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CleanupExecution.
     * @param {CleanupExecutionCreateArgs} args - Arguments to create a CleanupExecution.
     * @example
     * // Create one CleanupExecution
     * const CleanupExecution = await prisma.cleanupExecution.create({
     *   data: {
     *     // ... data to create a CleanupExecution
     *   }
     * })
     * 
     */
    create<T extends CleanupExecutionCreateArgs>(args: SelectSubset<T, CleanupExecutionCreateArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CleanupExecutions.
     * @param {CleanupExecutionCreateManyArgs} args - Arguments to create many CleanupExecutions.
     * @example
     * // Create many CleanupExecutions
     * const cleanupExecution = await prisma.cleanupExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanupExecutionCreateManyArgs>(args?: SelectSubset<T, CleanupExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CleanupExecutions and returns the data saved in the database.
     * @param {CleanupExecutionCreateManyAndReturnArgs} args - Arguments to create many CleanupExecutions.
     * @example
     * // Create many CleanupExecutions
     * const cleanupExecution = await prisma.cleanupExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CleanupExecutions and only return the `id`
     * const cleanupExecutionWithIdOnly = await prisma.cleanupExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleanupExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, CleanupExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CleanupExecution.
     * @param {CleanupExecutionDeleteArgs} args - Arguments to delete one CleanupExecution.
     * @example
     * // Delete one CleanupExecution
     * const CleanupExecution = await prisma.cleanupExecution.delete({
     *   where: {
     *     // ... filter to delete one CleanupExecution
     *   }
     * })
     * 
     */
    delete<T extends CleanupExecutionDeleteArgs>(args: SelectSubset<T, CleanupExecutionDeleteArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CleanupExecution.
     * @param {CleanupExecutionUpdateArgs} args - Arguments to update one CleanupExecution.
     * @example
     * // Update one CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanupExecutionUpdateArgs>(args: SelectSubset<T, CleanupExecutionUpdateArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CleanupExecutions.
     * @param {CleanupExecutionDeleteManyArgs} args - Arguments to filter CleanupExecutions to delete.
     * @example
     * // Delete a few CleanupExecutions
     * const { count } = await prisma.cleanupExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanupExecutionDeleteManyArgs>(args?: SelectSubset<T, CleanupExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanupExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CleanupExecutions
     * const cleanupExecution = await prisma.cleanupExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanupExecutionUpdateManyArgs>(args: SelectSubset<T, CleanupExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CleanupExecutions and returns the data updated in the database.
     * @param {CleanupExecutionUpdateManyAndReturnArgs} args - Arguments to update many CleanupExecutions.
     * @example
     * // Update many CleanupExecutions
     * const cleanupExecution = await prisma.cleanupExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CleanupExecutions and only return the `id`
     * const cleanupExecutionWithIdOnly = await prisma.cleanupExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CleanupExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, CleanupExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CleanupExecution.
     * @param {CleanupExecutionUpsertArgs} args - Arguments to update or create a CleanupExecution.
     * @example
     * // Update or create a CleanupExecution
     * const cleanupExecution = await prisma.cleanupExecution.upsert({
     *   create: {
     *     // ... data to create a CleanupExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CleanupExecution we want to update
     *   }
     * })
     */
    upsert<T extends CleanupExecutionUpsertArgs>(args: SelectSubset<T, CleanupExecutionUpsertArgs<ExtArgs>>): Prisma__CleanupExecutionClient<$Result.GetResult<Prisma.$CleanupExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CleanupExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionCountArgs} args - Arguments to filter CleanupExecutions to count.
     * @example
     * // Count the number of CleanupExecutions
     * const count = await prisma.cleanupExecution.count({
     *   where: {
     *     // ... the filter for the CleanupExecutions we want to count
     *   }
     * })
    **/
    count<T extends CleanupExecutionCountArgs>(
      args?: Subset<T, CleanupExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanupExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CleanupExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CleanupExecutionAggregateArgs>(args: Subset<T, CleanupExecutionAggregateArgs>): Prisma.PrismaPromise<GetCleanupExecutionAggregateType<T>>

    /**
     * Group by CleanupExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanupExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CleanupExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanupExecutionGroupByArgs['orderBy'] }
        : { orderBy?: CleanupExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CleanupExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanupExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CleanupExecution model
   */
  readonly fields: CleanupExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CleanupExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanupExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CleanupExecution model
   */
  interface CleanupExecutionFieldRefs {
    readonly id: FieldRef<"CleanupExecution", 'String'>
    readonly jobName: FieldRef<"CleanupExecution", 'String'>
    readonly startedAt: FieldRef<"CleanupExecution", 'DateTime'>
    readonly completedAt: FieldRef<"CleanupExecution", 'DateTime'>
    readonly status: FieldRef<"CleanupExecution", 'String'>
    readonly itemsProcessed: FieldRef<"CleanupExecution", 'Int'>
    readonly itemsDeleted: FieldRef<"CleanupExecution", 'Int'>
    readonly durationMs: FieldRef<"CleanupExecution", 'Int'>
    readonly errorMessage: FieldRef<"CleanupExecution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CleanupExecution findUnique
   */
  export type CleanupExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter, which CleanupExecution to fetch.
     */
    where: CleanupExecutionWhereUniqueInput
  }

  /**
   * CleanupExecution findUniqueOrThrow
   */
  export type CleanupExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter, which CleanupExecution to fetch.
     */
    where: CleanupExecutionWhereUniqueInput
  }

  /**
   * CleanupExecution findFirst
   */
  export type CleanupExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter, which CleanupExecution to fetch.
     */
    where?: CleanupExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanupExecutions to fetch.
     */
    orderBy?: CleanupExecutionOrderByWithRelationInput | CleanupExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanupExecutions.
     */
    cursor?: CleanupExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanupExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanupExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanupExecutions.
     */
    distinct?: CleanupExecutionScalarFieldEnum | CleanupExecutionScalarFieldEnum[]
  }

  /**
   * CleanupExecution findFirstOrThrow
   */
  export type CleanupExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter, which CleanupExecution to fetch.
     */
    where?: CleanupExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanupExecutions to fetch.
     */
    orderBy?: CleanupExecutionOrderByWithRelationInput | CleanupExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CleanupExecutions.
     */
    cursor?: CleanupExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanupExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanupExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanupExecutions.
     */
    distinct?: CleanupExecutionScalarFieldEnum | CleanupExecutionScalarFieldEnum[]
  }

  /**
   * CleanupExecution findMany
   */
  export type CleanupExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter, which CleanupExecutions to fetch.
     */
    where?: CleanupExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CleanupExecutions to fetch.
     */
    orderBy?: CleanupExecutionOrderByWithRelationInput | CleanupExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CleanupExecutions.
     */
    cursor?: CleanupExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CleanupExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CleanupExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CleanupExecutions.
     */
    distinct?: CleanupExecutionScalarFieldEnum | CleanupExecutionScalarFieldEnum[]
  }

  /**
   * CleanupExecution create
   */
  export type CleanupExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * The data needed to create a CleanupExecution.
     */
    data: XOR<CleanupExecutionCreateInput, CleanupExecutionUncheckedCreateInput>
  }

  /**
   * CleanupExecution createMany
   */
  export type CleanupExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CleanupExecutions.
     */
    data: CleanupExecutionCreateManyInput | CleanupExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanupExecution createManyAndReturn
   */
  export type CleanupExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many CleanupExecutions.
     */
    data: CleanupExecutionCreateManyInput | CleanupExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CleanupExecution update
   */
  export type CleanupExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * The data needed to update a CleanupExecution.
     */
    data: XOR<CleanupExecutionUpdateInput, CleanupExecutionUncheckedUpdateInput>
    /**
     * Choose, which CleanupExecution to update.
     */
    where: CleanupExecutionWhereUniqueInput
  }

  /**
   * CleanupExecution updateMany
   */
  export type CleanupExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CleanupExecutions.
     */
    data: XOR<CleanupExecutionUpdateManyMutationInput, CleanupExecutionUncheckedUpdateManyInput>
    /**
     * Filter which CleanupExecutions to update
     */
    where?: CleanupExecutionWhereInput
    /**
     * Limit how many CleanupExecutions to update.
     */
    limit?: number
  }

  /**
   * CleanupExecution updateManyAndReturn
   */
  export type CleanupExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * The data used to update CleanupExecutions.
     */
    data: XOR<CleanupExecutionUpdateManyMutationInput, CleanupExecutionUncheckedUpdateManyInput>
    /**
     * Filter which CleanupExecutions to update
     */
    where?: CleanupExecutionWhereInput
    /**
     * Limit how many CleanupExecutions to update.
     */
    limit?: number
  }

  /**
   * CleanupExecution upsert
   */
  export type CleanupExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * The filter to search for the CleanupExecution to update in case it exists.
     */
    where: CleanupExecutionWhereUniqueInput
    /**
     * In case the CleanupExecution found by the `where` argument doesn't exist, create a new CleanupExecution with this data.
     */
    create: XOR<CleanupExecutionCreateInput, CleanupExecutionUncheckedCreateInput>
    /**
     * In case the CleanupExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanupExecutionUpdateInput, CleanupExecutionUncheckedUpdateInput>
  }

  /**
   * CleanupExecution delete
   */
  export type CleanupExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
    /**
     * Filter which CleanupExecution to delete.
     */
    where: CleanupExecutionWhereUniqueInput
  }

  /**
   * CleanupExecution deleteMany
   */
  export type CleanupExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CleanupExecutions to delete
     */
    where?: CleanupExecutionWhereInput
    /**
     * Limit how many CleanupExecutions to delete.
     */
    limit?: number
  }

  /**
   * CleanupExecution without action
   */
  export type CleanupExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CleanupExecution
     */
    select?: CleanupExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CleanupExecution
     */
    omit?: CleanupExecutionOmit<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    version: number | null
  }

  export type PolicySumAggregateOutputType = {
    version: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    title: string | null
    purpose: string | null
    version: number | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    title: string | null
    purpose: string | null
    version: number | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    tenantId: number
    title: number
    purpose: number
    version: number
    content: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    version?: true
  }

  export type PolicySumAggregateInputType = {
    version?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    tenantId?: true
    title?: true
    purpose?: true
    version?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    title?: true
    purpose?: true
    version?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    tenantId?: true
    title?: true
    purpose?: true
    version?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    tenantId: string
    title: string
    purpose: string
    version: number
    content: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    title?: boolean
    purpose?: boolean
    version?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    consents?: boolean | Policy$consentsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    title?: boolean
    purpose?: boolean
    version?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    title?: boolean
    purpose?: boolean
    version?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    tenantId?: boolean
    title?: boolean
    purpose?: boolean
    version?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "title" | "purpose" | "version" | "content" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["policy"]>
  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    consents?: boolean | Policy$consentsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      consents: Prisma.$ConsentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      title: string
      purpose: string
      version: number
      content: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consents<T extends Policy$consentsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$consentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly tenantId: FieldRef<"Policy", 'String'>
    readonly title: FieldRef<"Policy", 'String'>
    readonly purpose: FieldRef<"Policy", 'String'>
    readonly version: FieldRef<"Policy", 'Int'>
    readonly content: FieldRef<"Policy", 'String'>
    readonly isActive: FieldRef<"Policy", 'Boolean'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy.consents
   */
  export type Policy$consentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    where?: ConsentWhereInput
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    cursor?: ConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model Consent
   */

  export type AggregateConsent = {
    _count: ConsentCountAggregateOutputType | null
    _avg: ConsentAvgAggregateOutputType | null
    _sum: ConsentSumAggregateOutputType | null
    _min: ConsentMinAggregateOutputType | null
    _max: ConsentMaxAggregateOutputType | null
  }

  export type ConsentAvgAggregateOutputType = {
    policyVersion: number | null
  }

  export type ConsentSumAggregateOutputType = {
    policyVersion: number | null
  }

  export type ConsentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    policyId: string | null
    purpose: string | null
    status: $Enums.ConsentStatus | null
    policyVersion: number | null
    createdAt: Date | null
  }

  export type ConsentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    policyId: string | null
    purpose: string | null
    status: $Enums.ConsentStatus | null
    policyVersion: number | null
    createdAt: Date | null
  }

  export type ConsentCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    policyId: number
    purpose: number
    status: number
    policyVersion: number
    createdAt: number
    _all: number
  }


  export type ConsentAvgAggregateInputType = {
    policyVersion?: true
  }

  export type ConsentSumAggregateInputType = {
    policyVersion?: true
  }

  export type ConsentMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    policyId?: true
    purpose?: true
    status?: true
    policyVersion?: true
    createdAt?: true
  }

  export type ConsentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    policyId?: true
    purpose?: true
    status?: true
    policyVersion?: true
    createdAt?: true
  }

  export type ConsentCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    policyId?: true
    purpose?: true
    status?: true
    policyVersion?: true
    createdAt?: true
    _all?: true
  }

  export type ConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consent to aggregate.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consents
    **/
    _count?: true | ConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsentMaxAggregateInputType
  }

  export type GetConsentAggregateType<T extends ConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsent[P]>
      : GetScalarType<T[P], AggregateConsent[P]>
  }




  export type ConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentWhereInput
    orderBy?: ConsentOrderByWithAggregationInput | ConsentOrderByWithAggregationInput[]
    by: ConsentScalarFieldEnum[] | ConsentScalarFieldEnum
    having?: ConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsentCountAggregateInputType | true
    _avg?: ConsentAvgAggregateInputType
    _sum?: ConsentSumAggregateInputType
    _min?: ConsentMinAggregateInputType
    _max?: ConsentMaxAggregateInputType
  }

  export type ConsentGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    policyId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt: Date
    _count: ConsentCountAggregateOutputType | null
    _avg: ConsentAvgAggregateOutputType | null
    _sum: ConsentSumAggregateOutputType | null
    _min: ConsentMinAggregateOutputType | null
    _max: ConsentMaxAggregateOutputType | null
  }

  type GetConsentGroupByPayload<T extends ConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsentGroupByOutputType[P]>
            : GetScalarType<T[P], ConsentGroupByOutputType[P]>
        }
      >
    >


  export type ConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    policyId?: boolean
    purpose?: boolean
    status?: boolean
    policyVersion?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consent"]>

  export type ConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    policyId?: boolean
    purpose?: boolean
    status?: boolean
    policyVersion?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consent"]>

  export type ConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    policyId?: boolean
    purpose?: boolean
    status?: boolean
    policyVersion?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consent"]>

  export type ConsentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    policyId?: boolean
    purpose?: boolean
    status?: boolean
    policyVersion?: boolean
    createdAt?: boolean
  }

  export type ConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "policyId" | "purpose" | "status" | "policyVersion" | "createdAt", ExtArgs["result"]["consent"]>
  export type ConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type ConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type ConsentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $ConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      policyId: string
      purpose: string
      status: $Enums.ConsentStatus
      policyVersion: number
      createdAt: Date
    }, ExtArgs["result"]["consent"]>
    composites: {}
  }

  type ConsentGetPayload<S extends boolean | null | undefined | ConsentDefaultArgs> = $Result.GetResult<Prisma.$ConsentPayload, S>

  type ConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsentCountAggregateInputType | true
    }

  export interface ConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consent'], meta: { name: 'Consent' } }
    /**
     * Find zero or one Consent that matches the filter.
     * @param {ConsentFindUniqueArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsentFindUniqueArgs>(args: SelectSubset<T, ConsentFindUniqueArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsentFindUniqueOrThrowArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindFirstArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsentFindFirstArgs>(args?: SelectSubset<T, ConsentFindFirstArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindFirstOrThrowArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consents
     * const consents = await prisma.consent.findMany()
     * 
     * // Get first 10 Consents
     * const consents = await prisma.consent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consentWithIdOnly = await prisma.consent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsentFindManyArgs>(args?: SelectSubset<T, ConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consent.
     * @param {ConsentCreateArgs} args - Arguments to create a Consent.
     * @example
     * // Create one Consent
     * const Consent = await prisma.consent.create({
     *   data: {
     *     // ... data to create a Consent
     *   }
     * })
     * 
     */
    create<T extends ConsentCreateArgs>(args: SelectSubset<T, ConsentCreateArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consents.
     * @param {ConsentCreateManyArgs} args - Arguments to create many Consents.
     * @example
     * // Create many Consents
     * const consent = await prisma.consent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsentCreateManyArgs>(args?: SelectSubset<T, ConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consents and returns the data saved in the database.
     * @param {ConsentCreateManyAndReturnArgs} args - Arguments to create many Consents.
     * @example
     * // Create many Consents
     * const consent = await prisma.consent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consents and only return the `id`
     * const consentWithIdOnly = await prisma.consent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consent.
     * @param {ConsentDeleteArgs} args - Arguments to delete one Consent.
     * @example
     * // Delete one Consent
     * const Consent = await prisma.consent.delete({
     *   where: {
     *     // ... filter to delete one Consent
     *   }
     * })
     * 
     */
    delete<T extends ConsentDeleteArgs>(args: SelectSubset<T, ConsentDeleteArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consent.
     * @param {ConsentUpdateArgs} args - Arguments to update one Consent.
     * @example
     * // Update one Consent
     * const consent = await prisma.consent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsentUpdateArgs>(args: SelectSubset<T, ConsentUpdateArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consents.
     * @param {ConsentDeleteManyArgs} args - Arguments to filter Consents to delete.
     * @example
     * // Delete a few Consents
     * const { count } = await prisma.consent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsentDeleteManyArgs>(args?: SelectSubset<T, ConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consents
     * const consent = await prisma.consent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsentUpdateManyArgs>(args: SelectSubset<T, ConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consents and returns the data updated in the database.
     * @param {ConsentUpdateManyAndReturnArgs} args - Arguments to update many Consents.
     * @example
     * // Update many Consents
     * const consent = await prisma.consent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consents and only return the `id`
     * const consentWithIdOnly = await prisma.consent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consent.
     * @param {ConsentUpsertArgs} args - Arguments to update or create a Consent.
     * @example
     * // Update or create a Consent
     * const consent = await prisma.consent.upsert({
     *   create: {
     *     // ... data to create a Consent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consent we want to update
     *   }
     * })
     */
    upsert<T extends ConsentUpsertArgs>(args: SelectSubset<T, ConsentUpsertArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentCountArgs} args - Arguments to filter Consents to count.
     * @example
     * // Count the number of Consents
     * const count = await prisma.consent.count({
     *   where: {
     *     // ... the filter for the Consents we want to count
     *   }
     * })
    **/
    count<T extends ConsentCountArgs>(
      args?: Subset<T, ConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsentAggregateArgs>(args: Subset<T, ConsentAggregateArgs>): Prisma.PrismaPromise<GetConsentAggregateType<T>>

    /**
     * Group by Consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsentGroupByArgs['orderBy'] }
        : { orderBy?: ConsentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consent model
   */
  readonly fields: ConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consent model
   */
  interface ConsentFieldRefs {
    readonly id: FieldRef<"Consent", 'String'>
    readonly tenantId: FieldRef<"Consent", 'String'>
    readonly userId: FieldRef<"Consent", 'String'>
    readonly policyId: FieldRef<"Consent", 'String'>
    readonly purpose: FieldRef<"Consent", 'String'>
    readonly status: FieldRef<"Consent", 'ConsentStatus'>
    readonly policyVersion: FieldRef<"Consent", 'Int'>
    readonly createdAt: FieldRef<"Consent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consent findUnique
   */
  export type ConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent findUniqueOrThrow
   */
  export type ConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent findFirst
   */
  export type ConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consents.
     */
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent findFirstOrThrow
   */
  export type ConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consents.
     */
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent findMany
   */
  export type ConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consents to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consents.
     */
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent create
   */
  export type ConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a Consent.
     */
    data: XOR<ConsentCreateInput, ConsentUncheckedCreateInput>
  }

  /**
   * Consent createMany
   */
  export type ConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consents.
     */
    data: ConsentCreateManyInput | ConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consent createManyAndReturn
   */
  export type ConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * The data used to create many Consents.
     */
    data: ConsentCreateManyInput | ConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consent update
   */
  export type ConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a Consent.
     */
    data: XOR<ConsentUpdateInput, ConsentUncheckedUpdateInput>
    /**
     * Choose, which Consent to update.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent updateMany
   */
  export type ConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consents.
     */
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyInput>
    /**
     * Filter which Consents to update
     */
    where?: ConsentWhereInput
    /**
     * Limit how many Consents to update.
     */
    limit?: number
  }

  /**
   * Consent updateManyAndReturn
   */
  export type ConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * The data used to update Consents.
     */
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyInput>
    /**
     * Filter which Consents to update
     */
    where?: ConsentWhereInput
    /**
     * Limit how many Consents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consent upsert
   */
  export type ConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the Consent to update in case it exists.
     */
    where: ConsentWhereUniqueInput
    /**
     * In case the Consent found by the `where` argument doesn't exist, create a new Consent with this data.
     */
    create: XOR<ConsentCreateInput, ConsentUncheckedCreateInput>
    /**
     * In case the Consent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsentUpdateInput, ConsentUncheckedUpdateInput>
  }

  /**
   * Consent delete
   */
  export type ConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter which Consent to delete.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent deleteMany
   */
  export type ConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consents to delete
     */
    where?: ConsentWhereInput
    /**
     * Limit how many Consents to delete.
     */
    limit?: number
  }

  /**
   * Consent without action
   */
  export type ConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consent
     */
    omit?: ConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    action: string | null
    purpose: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    action: string | null
    purpose: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    action: number
    purpose: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    purpose?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    purpose?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    purpose?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    action: string
    purpose: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    purpose?: boolean
    metadata?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    purpose?: boolean
    metadata?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    purpose?: boolean
    metadata?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    purpose?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "action" | "purpose" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      action: string
      purpose: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenantId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly purpose: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    keyPrefix: string | null
    keyHash: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    keyPrefix: string | null
    keyHash: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    keyPrefix: number
    keyHash: number
    isActive: number
    lastUsedAt: number
    expiresAt: number
    revokedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive: boolean
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "keyPrefix" | "keyHash" | "isActive" | "lastUsedAt" | "expiresAt" | "revokedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      keyPrefix: string
      keyHash: string
      isActive: boolean
      lastUsedAt: Date | null
      expiresAt: Date | null
      revokedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly tenantId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyPrefix: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Webhook
   */

  export type AggregateWebhook = {
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  export type WebhookMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    url: number
    secret: number
    events: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    url?: true
    secret?: true
    events?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webhook to aggregate.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Webhooks
    **/
    _count?: true | WebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookMaxAggregateInputType
  }

  export type GetWebhookAggregateType<T extends WebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook[P]>
      : GetScalarType<T[P], AggregateWebhook[P]>
  }




  export type WebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookWhereInput
    orderBy?: WebhookOrderByWithAggregationInput | WebhookOrderByWithAggregationInput[]
    by: WebhookScalarFieldEnum[] | WebhookScalarFieldEnum
    having?: WebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookCountAggregateInputType | true
    _min?: WebhookMinAggregateInputType
    _max?: WebhookMaxAggregateInputType
  }

  export type WebhookGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    url: string
    secret: string
    events: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  type GetWebhookGroupByPayload<T extends WebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookGroupByOutputType[P]>
        }
      >
    >


  export type WebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    circuitBreaker?: boolean | Webhook$circuitBreakerArgs<ExtArgs>
    deliveries?: boolean | Webhook$deliveriesArgs<ExtArgs>
    _count?: boolean | WebhookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "url" | "secret" | "events" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["webhook"]>
  export type WebhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    circuitBreaker?: boolean | Webhook$circuitBreakerArgs<ExtArgs>
    deliveries?: boolean | Webhook$deliveriesArgs<ExtArgs>
    _count?: boolean | WebhookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type WebhookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $WebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Webhook"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      circuitBreaker: Prisma.$WebhookCircuitBreakerPayload<ExtArgs> | null
      deliveries: Prisma.$WebhookDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      url: string
      secret: string
      events: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhook"]>
    composites: {}
  }

  type WebhookGetPayload<S extends boolean | null | undefined | WebhookDefaultArgs> = $Result.GetResult<Prisma.$WebhookPayload, S>

  type WebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookCountAggregateInputType | true
    }

  export interface WebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Webhook'], meta: { name: 'Webhook' } }
    /**
     * Find zero or one Webhook that matches the filter.
     * @param {WebhookFindUniqueArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookFindUniqueArgs>(args: SelectSubset<T, WebhookFindUniqueArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookFindUniqueOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindFirstArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookFindFirstArgs>(args?: SelectSubset<T, WebhookFindFirstArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindFirstOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhooks
     * const webhooks = await prisma.webhook.findMany()
     * 
     * // Get first 10 Webhooks
     * const webhooks = await prisma.webhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookWithIdOnly = await prisma.webhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookFindManyArgs>(args?: SelectSubset<T, WebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook.
     * @param {WebhookCreateArgs} args - Arguments to create a Webhook.
     * @example
     * // Create one Webhook
     * const Webhook = await prisma.webhook.create({
     *   data: {
     *     // ... data to create a Webhook
     *   }
     * })
     * 
     */
    create<T extends WebhookCreateArgs>(args: SelectSubset<T, WebhookCreateArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhooks.
     * @param {WebhookCreateManyArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookCreateManyArgs>(args?: SelectSubset<T, WebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhooks and returns the data saved in the database.
     * @param {WebhookCreateManyAndReturnArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook.
     * @param {WebhookDeleteArgs} args - Arguments to delete one Webhook.
     * @example
     * // Delete one Webhook
     * const Webhook = await prisma.webhook.delete({
     *   where: {
     *     // ... filter to delete one Webhook
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeleteArgs>(args: SelectSubset<T, WebhookDeleteArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook.
     * @param {WebhookUpdateArgs} args - Arguments to update one Webhook.
     * @example
     * // Update one Webhook
     * const webhook = await prisma.webhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookUpdateArgs>(args: SelectSubset<T, WebhookUpdateArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhooks.
     * @param {WebhookDeleteManyArgs} args - Arguments to filter Webhooks to delete.
     * @example
     * // Delete a few Webhooks
     * const { count } = await prisma.webhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeleteManyArgs>(args?: SelectSubset<T, WebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookUpdateManyArgs>(args: SelectSubset<T, WebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks and returns the data updated in the database.
     * @param {WebhookUpdateManyAndReturnArgs} args - Arguments to update many Webhooks.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook.
     * @param {WebhookUpsertArgs} args - Arguments to update or create a Webhook.
     * @example
     * // Update or create a Webhook
     * const webhook = await prisma.webhook.upsert({
     *   create: {
     *     // ... data to create a Webhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook we want to update
     *   }
     * })
     */
    upsert<T extends WebhookUpsertArgs>(args: SelectSubset<T, WebhookUpsertArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCountArgs} args - Arguments to filter Webhooks to count.
     * @example
     * // Count the number of Webhooks
     * const count = await prisma.webhook.count({
     *   where: {
     *     // ... the filter for the Webhooks we want to count
     *   }
     * })
    **/
    count<T extends WebhookCountArgs>(
      args?: Subset<T, WebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookAggregateArgs>(args: Subset<T, WebhookAggregateArgs>): Prisma.PrismaPromise<GetWebhookAggregateType<T>>

    /**
     * Group by Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookGroupByArgs['orderBy'] }
        : { orderBy?: WebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Webhook model
   */
  readonly fields: WebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Webhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circuitBreaker<T extends Webhook$circuitBreakerArgs<ExtArgs> = {}>(args?: Subset<T, Webhook$circuitBreakerArgs<ExtArgs>>): Prisma__WebhookCircuitBreakerClient<$Result.GetResult<Prisma.$WebhookCircuitBreakerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliveries<T extends Webhook$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Webhook$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Webhook model
   */
  interface WebhookFieldRefs {
    readonly id: FieldRef<"Webhook", 'String'>
    readonly tenantId: FieldRef<"Webhook", 'String'>
    readonly name: FieldRef<"Webhook", 'String'>
    readonly url: FieldRef<"Webhook", 'String'>
    readonly secret: FieldRef<"Webhook", 'String'>
    readonly events: FieldRef<"Webhook", 'String[]'>
    readonly isActive: FieldRef<"Webhook", 'Boolean'>
    readonly createdAt: FieldRef<"Webhook", 'DateTime'>
    readonly updatedAt: FieldRef<"Webhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Webhook findUnique
   */
  export type WebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook findUniqueOrThrow
   */
  export type WebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook findFirst
   */
  export type WebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook findFirstOrThrow
   */
  export type WebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook findMany
   */
  export type WebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhooks to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook create
   */
  export type WebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The data needed to create a Webhook.
     */
    data: XOR<WebhookCreateInput, WebhookUncheckedCreateInput>
  }

  /**
   * Webhook createMany
   */
  export type WebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Webhooks.
     */
    data: WebhookCreateManyInput | WebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Webhook createManyAndReturn
   */
  export type WebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * The data used to create many Webhooks.
     */
    data: WebhookCreateManyInput | WebhookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webhook update
   */
  export type WebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The data needed to update a Webhook.
     */
    data: XOR<WebhookUpdateInput, WebhookUncheckedUpdateInput>
    /**
     * Choose, which Webhook to update.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook updateMany
   */
  export type WebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Webhooks.
     */
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyInput>
    /**
     * Filter which Webhooks to update
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to update.
     */
    limit?: number
  }

  /**
   * Webhook updateManyAndReturn
   */
  export type WebhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * The data used to update Webhooks.
     */
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyInput>
    /**
     * Filter which Webhooks to update
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webhook upsert
   */
  export type WebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The filter to search for the Webhook to update in case it exists.
     */
    where: WebhookWhereUniqueInput
    /**
     * In case the Webhook found by the `where` argument doesn't exist, create a new Webhook with this data.
     */
    create: XOR<WebhookCreateInput, WebhookUncheckedCreateInput>
    /**
     * In case the Webhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookUpdateInput, WebhookUncheckedUpdateInput>
  }

  /**
   * Webhook delete
   */
  export type WebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter which Webhook to delete.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook deleteMany
   */
  export type WebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webhooks to delete
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to delete.
     */
    limit?: number
  }

  /**
   * Webhook.circuitBreaker
   */
  export type Webhook$circuitBreakerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookCircuitBreaker
     */
    select?: WebhookCircuitBreakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookCircuitBreaker
     */
    omit?: WebhookCircuitBreakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookCircuitBreakerInclude<ExtArgs> | null
    where?: WebhookCircuitBreakerWhereInput
  }

  /**
   * Webhook.deliveries
   */
  export type Webhook$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    cursor?: WebhookDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * Webhook without action
   */
  export type WebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
  }


  /**
   * Model InternalEvent
   */

  export type AggregateInternalEvent = {
    _count: InternalEventCountAggregateOutputType | null
    _min: InternalEventMinAggregateOutputType | null
    _max: InternalEventMaxAggregateOutputType | null
  }

  export type InternalEventMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dispatchedAt: Date | null
    processedAt: Date | null
  }

  export type InternalEventMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dispatchedAt: Date | null
    processedAt: Date | null
  }

  export type InternalEventCountAggregateOutputType = {
    id: number
    tenantId: number
    type: number
    payload: number
    status: number
    createdAt: number
    updatedAt: number
    dispatchedAt: number
    processedAt: number
    _all: number
  }


  export type InternalEventMinAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dispatchedAt?: true
    processedAt?: true
  }

  export type InternalEventMaxAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dispatchedAt?: true
    processedAt?: true
  }

  export type InternalEventCountAggregateInputType = {
    id?: true
    tenantId?: true
    type?: true
    payload?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dispatchedAt?: true
    processedAt?: true
    _all?: true
  }

  export type InternalEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalEvent to aggregate.
     */
    where?: InternalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalEvents to fetch.
     */
    orderBy?: InternalEventOrderByWithRelationInput | InternalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternalEvents
    **/
    _count?: true | InternalEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternalEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternalEventMaxAggregateInputType
  }

  export type GetInternalEventAggregateType<T extends InternalEventAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternalEvent[P]>
      : GetScalarType<T[P], AggregateInternalEvent[P]>
  }




  export type InternalEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalEventWhereInput
    orderBy?: InternalEventOrderByWithAggregationInput | InternalEventOrderByWithAggregationInput[]
    by: InternalEventScalarFieldEnum[] | InternalEventScalarFieldEnum
    having?: InternalEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternalEventCountAggregateInputType | true
    _min?: InternalEventMinAggregateInputType
    _max?: InternalEventMaxAggregateInputType
  }

  export type InternalEventGroupByOutputType = {
    id: string
    tenantId: string
    type: string
    payload: JsonValue
    status: string
    createdAt: Date
    updatedAt: Date
    dispatchedAt: Date | null
    processedAt: Date | null
    _count: InternalEventCountAggregateOutputType | null
    _min: InternalEventMinAggregateOutputType | null
    _max: InternalEventMaxAggregateOutputType | null
  }

  type GetInternalEventGroupByPayload<T extends InternalEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternalEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternalEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternalEventGroupByOutputType[P]>
            : GetScalarType<T[P], InternalEventGroupByOutputType[P]>
        }
      >
    >


  export type InternalEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatchedAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalEvent"]>

  export type InternalEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatchedAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalEvent"]>

  export type InternalEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatchedAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalEvent"]>

  export type InternalEventSelectScalar = {
    id?: boolean
    tenantId?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatchedAt?: boolean
    processedAt?: boolean
  }

  export type InternalEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "type" | "payload" | "status" | "createdAt" | "updatedAt" | "dispatchedAt" | "processedAt", ExtArgs["result"]["internalEvent"]>
  export type InternalEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type InternalEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type InternalEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $InternalEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternalEvent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      type: string
      payload: Prisma.JsonValue
      status: string
      createdAt: Date
      updatedAt: Date
      dispatchedAt: Date | null
      processedAt: Date | null
    }, ExtArgs["result"]["internalEvent"]>
    composites: {}
  }

  type InternalEventGetPayload<S extends boolean | null | undefined | InternalEventDefaultArgs> = $Result.GetResult<Prisma.$InternalEventPayload, S>

  type InternalEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternalEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternalEventCountAggregateInputType | true
    }

  export interface InternalEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternalEvent'], meta: { name: 'InternalEvent' } }
    /**
     * Find zero or one InternalEvent that matches the filter.
     * @param {InternalEventFindUniqueArgs} args - Arguments to find a InternalEvent
     * @example
     * // Get one InternalEvent
     * const internalEvent = await prisma.internalEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternalEventFindUniqueArgs>(args: SelectSubset<T, InternalEventFindUniqueArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternalEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternalEventFindUniqueOrThrowArgs} args - Arguments to find a InternalEvent
     * @example
     * // Get one InternalEvent
     * const internalEvent = await prisma.internalEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternalEventFindUniqueOrThrowArgs>(args: SelectSubset<T, InternalEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventFindFirstArgs} args - Arguments to find a InternalEvent
     * @example
     * // Get one InternalEvent
     * const internalEvent = await prisma.internalEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternalEventFindFirstArgs>(args?: SelectSubset<T, InternalEventFindFirstArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventFindFirstOrThrowArgs} args - Arguments to find a InternalEvent
     * @example
     * // Get one InternalEvent
     * const internalEvent = await prisma.internalEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternalEventFindFirstOrThrowArgs>(args?: SelectSubset<T, InternalEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternalEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternalEvents
     * const internalEvents = await prisma.internalEvent.findMany()
     * 
     * // Get first 10 InternalEvents
     * const internalEvents = await prisma.internalEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internalEventWithIdOnly = await prisma.internalEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternalEventFindManyArgs>(args?: SelectSubset<T, InternalEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternalEvent.
     * @param {InternalEventCreateArgs} args - Arguments to create a InternalEvent.
     * @example
     * // Create one InternalEvent
     * const InternalEvent = await prisma.internalEvent.create({
     *   data: {
     *     // ... data to create a InternalEvent
     *   }
     * })
     * 
     */
    create<T extends InternalEventCreateArgs>(args: SelectSubset<T, InternalEventCreateArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternalEvents.
     * @param {InternalEventCreateManyArgs} args - Arguments to create many InternalEvents.
     * @example
     * // Create many InternalEvents
     * const internalEvent = await prisma.internalEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternalEventCreateManyArgs>(args?: SelectSubset<T, InternalEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternalEvents and returns the data saved in the database.
     * @param {InternalEventCreateManyAndReturnArgs} args - Arguments to create many InternalEvents.
     * @example
     * // Create many InternalEvents
     * const internalEvent = await prisma.internalEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternalEvents and only return the `id`
     * const internalEventWithIdOnly = await prisma.internalEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternalEventCreateManyAndReturnArgs>(args?: SelectSubset<T, InternalEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternalEvent.
     * @param {InternalEventDeleteArgs} args - Arguments to delete one InternalEvent.
     * @example
     * // Delete one InternalEvent
     * const InternalEvent = await prisma.internalEvent.delete({
     *   where: {
     *     // ... filter to delete one InternalEvent
     *   }
     * })
     * 
     */
    delete<T extends InternalEventDeleteArgs>(args: SelectSubset<T, InternalEventDeleteArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternalEvent.
     * @param {InternalEventUpdateArgs} args - Arguments to update one InternalEvent.
     * @example
     * // Update one InternalEvent
     * const internalEvent = await prisma.internalEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternalEventUpdateArgs>(args: SelectSubset<T, InternalEventUpdateArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternalEvents.
     * @param {InternalEventDeleteManyArgs} args - Arguments to filter InternalEvents to delete.
     * @example
     * // Delete a few InternalEvents
     * const { count } = await prisma.internalEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternalEventDeleteManyArgs>(args?: SelectSubset<T, InternalEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternalEvents
     * const internalEvent = await prisma.internalEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternalEventUpdateManyArgs>(args: SelectSubset<T, InternalEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalEvents and returns the data updated in the database.
     * @param {InternalEventUpdateManyAndReturnArgs} args - Arguments to update many InternalEvents.
     * @example
     * // Update many InternalEvents
     * const internalEvent = await prisma.internalEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternalEvents and only return the `id`
     * const internalEventWithIdOnly = await prisma.internalEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternalEventUpdateManyAndReturnArgs>(args: SelectSubset<T, InternalEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternalEvent.
     * @param {InternalEventUpsertArgs} args - Arguments to update or create a InternalEvent.
     * @example
     * // Update or create a InternalEvent
     * const internalEvent = await prisma.internalEvent.upsert({
     *   create: {
     *     // ... data to create a InternalEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternalEvent we want to update
     *   }
     * })
     */
    upsert<T extends InternalEventUpsertArgs>(args: SelectSubset<T, InternalEventUpsertArgs<ExtArgs>>): Prisma__InternalEventClient<$Result.GetResult<Prisma.$InternalEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventCountArgs} args - Arguments to filter InternalEvents to count.
     * @example
     * // Count the number of InternalEvents
     * const count = await prisma.internalEvent.count({
     *   where: {
     *     // ... the filter for the InternalEvents we want to count
     *   }
     * })
    **/
    count<T extends InternalEventCountArgs>(
      args?: Subset<T, InternalEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternalEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternalEventAggregateArgs>(args: Subset<T, InternalEventAggregateArgs>): Prisma.PrismaPromise<GetInternalEventAggregateType<T>>

    /**
     * Group by InternalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternalEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternalEventGroupByArgs['orderBy'] }
        : { orderBy?: InternalEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternalEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternalEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternalEvent model
   */
  readonly fields: InternalEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternalEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternalEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternalEvent model
   */
  interface InternalEventFieldRefs {
    readonly id: FieldRef<"InternalEvent", 'String'>
    readonly tenantId: FieldRef<"InternalEvent", 'String'>
    readonly type: FieldRef<"InternalEvent", 'String'>
    readonly payload: FieldRef<"InternalEvent", 'Json'>
    readonly status: FieldRef<"InternalEvent", 'String'>
    readonly createdAt: FieldRef<"InternalEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"InternalEvent", 'DateTime'>
    readonly dispatchedAt: FieldRef<"InternalEvent", 'DateTime'>
    readonly processedAt: FieldRef<"InternalEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InternalEvent findUnique
   */
  export type InternalEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter, which InternalEvent to fetch.
     */
    where: InternalEventWhereUniqueInput
  }

  /**
   * InternalEvent findUniqueOrThrow
   */
  export type InternalEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter, which InternalEvent to fetch.
     */
    where: InternalEventWhereUniqueInput
  }

  /**
   * InternalEvent findFirst
   */
  export type InternalEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter, which InternalEvent to fetch.
     */
    where?: InternalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalEvents to fetch.
     */
    orderBy?: InternalEventOrderByWithRelationInput | InternalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalEvents.
     */
    cursor?: InternalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalEvents.
     */
    distinct?: InternalEventScalarFieldEnum | InternalEventScalarFieldEnum[]
  }

  /**
   * InternalEvent findFirstOrThrow
   */
  export type InternalEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter, which InternalEvent to fetch.
     */
    where?: InternalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalEvents to fetch.
     */
    orderBy?: InternalEventOrderByWithRelationInput | InternalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalEvents.
     */
    cursor?: InternalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalEvents.
     */
    distinct?: InternalEventScalarFieldEnum | InternalEventScalarFieldEnum[]
  }

  /**
   * InternalEvent findMany
   */
  export type InternalEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter, which InternalEvents to fetch.
     */
    where?: InternalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalEvents to fetch.
     */
    orderBy?: InternalEventOrderByWithRelationInput | InternalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternalEvents.
     */
    cursor?: InternalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalEvents.
     */
    distinct?: InternalEventScalarFieldEnum | InternalEventScalarFieldEnum[]
  }

  /**
   * InternalEvent create
   */
  export type InternalEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * The data needed to create a InternalEvent.
     */
    data: XOR<InternalEventCreateInput, InternalEventUncheckedCreateInput>
  }

  /**
   * InternalEvent createMany
   */
  export type InternalEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternalEvents.
     */
    data: InternalEventCreateManyInput | InternalEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternalEvent createManyAndReturn
   */
  export type InternalEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * The data used to create many InternalEvents.
     */
    data: InternalEventCreateManyInput | InternalEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalEvent update
   */
  export type InternalEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * The data needed to update a InternalEvent.
     */
    data: XOR<InternalEventUpdateInput, InternalEventUncheckedUpdateInput>
    /**
     * Choose, which InternalEvent to update.
     */
    where: InternalEventWhereUniqueInput
  }

  /**
   * InternalEvent updateMany
   */
  export type InternalEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternalEvents.
     */
    data: XOR<InternalEventUpdateManyMutationInput, InternalEventUncheckedUpdateManyInput>
    /**
     * Filter which InternalEvents to update
     */
    where?: InternalEventWhereInput
    /**
     * Limit how many InternalEvents to update.
     */
    limit?: number
  }

  /**
   * InternalEvent updateManyAndReturn
   */
  export type InternalEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * The data used to update InternalEvents.
     */
    data: XOR<InternalEventUpdateManyMutationInput, InternalEventUncheckedUpdateManyInput>
    /**
     * Filter which InternalEvents to update
     */
    where?: InternalEventWhereInput
    /**
     * Limit how many InternalEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalEvent upsert
   */
  export type InternalEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * The filter to search for the InternalEvent to update in case it exists.
     */
    where: InternalEventWhereUniqueInput
    /**
     * In case the InternalEvent found by the `where` argument doesn't exist, create a new InternalEvent with this data.
     */
    create: XOR<InternalEventCreateInput, InternalEventUncheckedCreateInput>
    /**
     * In case the InternalEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternalEventUpdateInput, InternalEventUncheckedUpdateInput>
  }

  /**
   * InternalEvent delete
   */
  export type InternalEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
    /**
     * Filter which InternalEvent to delete.
     */
    where: InternalEventWhereUniqueInput
  }

  /**
   * InternalEvent deleteMany
   */
  export type InternalEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalEvents to delete
     */
    where?: InternalEventWhereInput
    /**
     * Limit how many InternalEvents to delete.
     */
    limit?: number
  }

  /**
   * InternalEvent without action
   */
  export type InternalEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalEvent
     */
    select?: InternalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalEvent
     */
    omit?: InternalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalEventInclude<ExtArgs> | null
  }


  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    passwordHash: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    passwordHash: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    passwordHash: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperAdminMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: string
    passwordHash: string
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuperAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "passwordHash" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["superAdmin"]>

  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: string
      passwordHash: string
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperAdmins and returns the data saved in the database.
     * @param {SuperAdminCreateManyAndReturnArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins and returns the data updated in the database.
     * @param {SuperAdminUpdateManyAndReturnArgs} args - Arguments to update many SuperAdmins.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuperAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, SuperAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperAdmin model
   */
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'String'>
    readonly email: FieldRef<"SuperAdmin", 'String'>
    readonly name: FieldRef<"SuperAdmin", 'String'>
    readonly role: FieldRef<"SuperAdmin", 'String'>
    readonly passwordHash: FieldRef<"SuperAdmin", 'String'>
    readonly isActive: FieldRef<"SuperAdmin", 'Boolean'>
    readonly lastLoginAt: FieldRef<"SuperAdmin", 'DateTime'>
    readonly createdAt: FieldRef<"SuperAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin createManyAndReturn
   */
  export type SuperAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to update.
     */
    limit?: number
  }

  /**
   * SuperAdmin updateManyAndReturn
   */
  export type SuperAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to update.
     */
    limit?: number
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to delete.
     */
    limit?: number
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const OutboxEventScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    eventType: 'eventType',
    aggregateId: 'aggregateId',
    payload: 'payload',
    status: 'status',
    retryCount: 'retryCount',
    lastError: 'lastError',
    createdAt: 'createdAt',
    processedAt: 'processedAt'
  };

  export type OutboxEventScalarFieldEnum = (typeof OutboxEventScalarFieldEnum)[keyof typeof OutboxEventScalarFieldEnum]


  export const WebhookCircuitBreakerScalarFieldEnum: {
    id: 'id',
    webhookId: 'webhookId',
    state: 'state',
    consecutiveFailures: 'consecutiveFailures',
    openedAt: 'openedAt',
    lastTestedAt: 'lastTestedAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookCircuitBreakerScalarFieldEnum = (typeof WebhookCircuitBreakerScalarFieldEnum)[keyof typeof WebhookCircuitBreakerScalarFieldEnum]


  export const WebhookDeliveryScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    webhookId: 'webhookId',
    eventId: 'eventId',
    attempt: 'attempt',
    status: 'status',
    httpStatus: 'httpStatus',
    responseBody: 'responseBody',
    responseHeaders: 'responseHeaders',
    duration: 'duration',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type WebhookDeliveryScalarFieldEnum = (typeof WebhookDeliveryScalarFieldEnum)[keyof typeof WebhookDeliveryScalarFieldEnum]


  export const WebhookRetryHistoryScalarFieldEnum: {
    id: 'id',
    deliveryId: 'deliveryId',
    attempt: 'attempt',
    reason: 'reason',
    scheduledAt: 'scheduledAt',
    executedAt: 'executedAt',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type WebhookRetryHistoryScalarFieldEnum = (typeof WebhookRetryHistoryScalarFieldEnum)[keyof typeof WebhookRetryHistoryScalarFieldEnum]


  export const ReplayHistoryScalarFieldEnum: {
    id: 'id',
    targetType: 'targetType',
    targetId: 'targetId',
    originalJobId: 'originalJobId',
    newJobId: 'newJobId',
    reason: 'reason',
    result: 'result',
    operatorId: 'operatorId',
    replayCount: 'replayCount',
    maxReplayAttempts: 'maxReplayAttempts',
    replayedAt: 'replayedAt'
  };

  export type ReplayHistoryScalarFieldEnum = (typeof ReplayHistoryScalarFieldEnum)[keyof typeof ReplayHistoryScalarFieldEnum]


  export const CleanupExecutionScalarFieldEnum: {
    id: 'id',
    jobName: 'jobName',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    status: 'status',
    itemsProcessed: 'itemsProcessed',
    itemsDeleted: 'itemsDeleted',
    durationMs: 'durationMs',
    errorMessage: 'errorMessage'
  };

  export type CleanupExecutionScalarFieldEnum = (typeof CleanupExecutionScalarFieldEnum)[keyof typeof CleanupExecutionScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    title: 'title',
    purpose: 'purpose',
    version: 'version',
    content: 'content',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const ConsentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    policyId: 'policyId',
    purpose: 'purpose',
    status: 'status',
    policyVersion: 'policyVersion',
    createdAt: 'createdAt'
  };

  export type ConsentScalarFieldEnum = (typeof ConsentScalarFieldEnum)[keyof typeof ConsentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    action: 'action',
    purpose: 'purpose',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    keyPrefix: 'keyPrefix',
    keyHash: 'keyHash',
    isActive: 'isActive',
    lastUsedAt: 'lastUsedAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const WebhookScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    url: 'url',
    secret: 'secret',
    events: 'events',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookScalarFieldEnum = (typeof WebhookScalarFieldEnum)[keyof typeof WebhookScalarFieldEnum]


  export const InternalEventScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    type: 'type',
    payload: 'payload',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dispatchedAt: 'dispatchedAt',
    processedAt: 'processedAt'
  };

  export type InternalEventScalarFieldEnum = (typeof InternalEventScalarFieldEnum)[keyof typeof InternalEventScalarFieldEnum]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CircuitBreakerState'
   */
  export type EnumCircuitBreakerStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitBreakerState'>
    


  /**
   * Reference to a field of type 'CircuitBreakerState[]'
   */
  export type ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitBreakerState[]'>
    


  /**
   * Reference to a field of type 'ConsentStatus'
   */
  export type EnumConsentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentStatus'>
    


  /**
   * Reference to a field of type 'ConsentStatus[]'
   */
  export type ListEnumConsentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    consents?: ConsentListRelationFilter
    policies?: PolicyListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    webhooks?: WebhookListRelationFilter
    internalEvents?: InternalEventListRelationFilter
    outboxEvents?: OutboxEventListRelationFilter
    webhookDeliveries?: WebhookDeliveryListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consents?: ConsentOrderByRelationAggregateInput
    policies?: PolicyOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    webhooks?: WebhookOrderByRelationAggregateInput
    internalEvents?: InternalEventOrderByRelationAggregateInput
    outboxEvents?: OutboxEventOrderByRelationAggregateInput
    webhookDeliveries?: WebhookDeliveryOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    consents?: ConsentListRelationFilter
    policies?: PolicyListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    webhooks?: WebhookListRelationFilter
    internalEvents?: InternalEventListRelationFilter
    outboxEvents?: OutboxEventListRelationFilter
    webhookDeliveries?: WebhookDeliveryListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type OutboxEventWhereInput = {
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    id?: StringFilter<"OutboxEvent"> | string
    tenantId?: StringFilter<"OutboxEvent"> | string
    eventType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringNullableFilter<"OutboxEvent"> | string | null
    payload?: JsonFilter<"OutboxEvent">
    status?: StringFilter<"OutboxEvent"> | string
    retryCount?: IntFilter<"OutboxEvent"> | number
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type OutboxEventOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventType?: SortOrder
    aggregateId?: SortOrderInput | SortOrder
    payload?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type OutboxEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    tenantId?: StringFilter<"OutboxEvent"> | string
    eventType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringNullableFilter<"OutboxEvent"> | string | null
    payload?: JsonFilter<"OutboxEvent">
    status?: StringFilter<"OutboxEvent"> | string
    retryCount?: IntFilter<"OutboxEvent"> | number
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type OutboxEventOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventType?: SortOrder
    aggregateId?: SortOrderInput | SortOrder
    payload?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: OutboxEventCountOrderByAggregateInput
    _avg?: OutboxEventAvgOrderByAggregateInput
    _max?: OutboxEventMaxOrderByAggregateInput
    _min?: OutboxEventMinOrderByAggregateInput
    _sum?: OutboxEventSumOrderByAggregateInput
  }

  export type OutboxEventScalarWhereWithAggregatesInput = {
    AND?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    OR?: OutboxEventScalarWhereWithAggregatesInput[]
    NOT?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutboxEvent"> | string
    tenantId?: StringWithAggregatesFilter<"OutboxEvent"> | string
    eventType?: StringWithAggregatesFilter<"OutboxEvent"> | string
    aggregateId?: StringNullableWithAggregatesFilter<"OutboxEvent"> | string | null
    payload?: JsonWithAggregatesFilter<"OutboxEvent">
    status?: StringWithAggregatesFilter<"OutboxEvent"> | string
    retryCount?: IntWithAggregatesFilter<"OutboxEvent"> | number
    lastError?: StringNullableWithAggregatesFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OutboxEvent"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"OutboxEvent"> | Date | string | null
  }

  export type WebhookCircuitBreakerWhereInput = {
    AND?: WebhookCircuitBreakerWhereInput | WebhookCircuitBreakerWhereInput[]
    OR?: WebhookCircuitBreakerWhereInput[]
    NOT?: WebhookCircuitBreakerWhereInput | WebhookCircuitBreakerWhereInput[]
    id?: StringFilter<"WebhookCircuitBreaker"> | string
    webhookId?: StringFilter<"WebhookCircuitBreaker"> | string
    state?: EnumCircuitBreakerStateFilter<"WebhookCircuitBreaker"> | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFilter<"WebhookCircuitBreaker"> | number
    openedAt?: DateTimeNullableFilter<"WebhookCircuitBreaker"> | Date | string | null
    lastTestedAt?: DateTimeNullableFilter<"WebhookCircuitBreaker"> | Date | string | null
    updatedAt?: DateTimeFilter<"WebhookCircuitBreaker"> | Date | string
    webhook?: XOR<WebhookScalarRelationFilter, WebhookWhereInput>
  }

  export type WebhookCircuitBreakerOrderByWithRelationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    state?: SortOrder
    consecutiveFailures?: SortOrder
    openedAt?: SortOrderInput | SortOrder
    lastTestedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    webhook?: WebhookOrderByWithRelationInput
  }

  export type WebhookCircuitBreakerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    webhookId?: string
    AND?: WebhookCircuitBreakerWhereInput | WebhookCircuitBreakerWhereInput[]
    OR?: WebhookCircuitBreakerWhereInput[]
    NOT?: WebhookCircuitBreakerWhereInput | WebhookCircuitBreakerWhereInput[]
    state?: EnumCircuitBreakerStateFilter<"WebhookCircuitBreaker"> | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFilter<"WebhookCircuitBreaker"> | number
    openedAt?: DateTimeNullableFilter<"WebhookCircuitBreaker"> | Date | string | null
    lastTestedAt?: DateTimeNullableFilter<"WebhookCircuitBreaker"> | Date | string | null
    updatedAt?: DateTimeFilter<"WebhookCircuitBreaker"> | Date | string
    webhook?: XOR<WebhookScalarRelationFilter, WebhookWhereInput>
  }, "id" | "webhookId">

  export type WebhookCircuitBreakerOrderByWithAggregationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    state?: SortOrder
    consecutiveFailures?: SortOrder
    openedAt?: SortOrderInput | SortOrder
    lastTestedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: WebhookCircuitBreakerCountOrderByAggregateInput
    _avg?: WebhookCircuitBreakerAvgOrderByAggregateInput
    _max?: WebhookCircuitBreakerMaxOrderByAggregateInput
    _min?: WebhookCircuitBreakerMinOrderByAggregateInput
    _sum?: WebhookCircuitBreakerSumOrderByAggregateInput
  }

  export type WebhookCircuitBreakerScalarWhereWithAggregatesInput = {
    AND?: WebhookCircuitBreakerScalarWhereWithAggregatesInput | WebhookCircuitBreakerScalarWhereWithAggregatesInput[]
    OR?: WebhookCircuitBreakerScalarWhereWithAggregatesInput[]
    NOT?: WebhookCircuitBreakerScalarWhereWithAggregatesInput | WebhookCircuitBreakerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookCircuitBreaker"> | string
    webhookId?: StringWithAggregatesFilter<"WebhookCircuitBreaker"> | string
    state?: EnumCircuitBreakerStateWithAggregatesFilter<"WebhookCircuitBreaker"> | $Enums.CircuitBreakerState
    consecutiveFailures?: IntWithAggregatesFilter<"WebhookCircuitBreaker"> | number
    openedAt?: DateTimeNullableWithAggregatesFilter<"WebhookCircuitBreaker"> | Date | string | null
    lastTestedAt?: DateTimeNullableWithAggregatesFilter<"WebhookCircuitBreaker"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookCircuitBreaker"> | Date | string
  }

  export type WebhookDeliveryWhereInput = {
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    tenantId?: StringFilter<"WebhookDelivery"> | string
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventId?: StringFilter<"WebhookDelivery"> | string
    attempt?: IntFilter<"WebhookDelivery"> | number
    status?: StringFilter<"WebhookDelivery"> | string
    httpStatus?: IntNullableFilter<"WebhookDelivery"> | number | null
    responseBody?: StringNullableFilter<"WebhookDelivery"> | string | null
    responseHeaders?: JsonNullableFilter<"WebhookDelivery">
    duration?: IntFilter<"WebhookDelivery"> | number
    errorMessage?: StringNullableFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    webhook?: XOR<WebhookScalarRelationFilter, WebhookWhereInput>
    retryHistories?: WebhookRetryHistoryListRelationFilter
  }

  export type WebhookDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    webhookId?: SortOrder
    eventId?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    httpStatus?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    responseHeaders?: SortOrderInput | SortOrder
    duration?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    webhook?: WebhookOrderByWithRelationInput
    retryHistories?: WebhookRetryHistoryOrderByRelationAggregateInput
  }

  export type WebhookDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    tenantId?: StringFilter<"WebhookDelivery"> | string
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventId?: StringFilter<"WebhookDelivery"> | string
    attempt?: IntFilter<"WebhookDelivery"> | number
    status?: StringFilter<"WebhookDelivery"> | string
    httpStatus?: IntNullableFilter<"WebhookDelivery"> | number | null
    responseBody?: StringNullableFilter<"WebhookDelivery"> | string | null
    responseHeaders?: JsonNullableFilter<"WebhookDelivery">
    duration?: IntFilter<"WebhookDelivery"> | number
    errorMessage?: StringNullableFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    webhook?: XOR<WebhookScalarRelationFilter, WebhookWhereInput>
    retryHistories?: WebhookRetryHistoryListRelationFilter
  }, "id">

  export type WebhookDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    webhookId?: SortOrder
    eventId?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    httpStatus?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    responseHeaders?: SortOrderInput | SortOrder
    duration?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookDeliveryCountOrderByAggregateInput
    _avg?: WebhookDeliveryAvgOrderByAggregateInput
    _max?: WebhookDeliveryMaxOrderByAggregateInput
    _min?: WebhookDeliveryMinOrderByAggregateInput
    _sum?: WebhookDeliverySumOrderByAggregateInput
  }

  export type WebhookDeliveryScalarWhereWithAggregatesInput = {
    AND?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    OR?: WebhookDeliveryScalarWhereWithAggregatesInput[]
    NOT?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    tenantId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    webhookId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    eventId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    attempt?: IntWithAggregatesFilter<"WebhookDelivery"> | number
    status?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    httpStatus?: IntNullableWithAggregatesFilter<"WebhookDelivery"> | number | null
    responseBody?: StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null
    responseHeaders?: JsonNullableWithAggregatesFilter<"WebhookDelivery">
    duration?: IntWithAggregatesFilter<"WebhookDelivery"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string
  }

  export type WebhookRetryHistoryWhereInput = {
    AND?: WebhookRetryHistoryWhereInput | WebhookRetryHistoryWhereInput[]
    OR?: WebhookRetryHistoryWhereInput[]
    NOT?: WebhookRetryHistoryWhereInput | WebhookRetryHistoryWhereInput[]
    id?: StringFilter<"WebhookRetryHistory"> | string
    deliveryId?: StringFilter<"WebhookRetryHistory"> | string
    attempt?: IntFilter<"WebhookRetryHistory"> | number
    reason?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    scheduledAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"WebhookRetryHistory"> | Date | string | null
    result?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    createdAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
    delivery?: XOR<WebhookDeliveryScalarRelationFilter, WebhookDeliveryWhereInput>
  }

  export type WebhookRetryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    attempt?: SortOrder
    reason?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    delivery?: WebhookDeliveryOrderByWithRelationInput
  }

  export type WebhookRetryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookRetryHistoryWhereInput | WebhookRetryHistoryWhereInput[]
    OR?: WebhookRetryHistoryWhereInput[]
    NOT?: WebhookRetryHistoryWhereInput | WebhookRetryHistoryWhereInput[]
    deliveryId?: StringFilter<"WebhookRetryHistory"> | string
    attempt?: IntFilter<"WebhookRetryHistory"> | number
    reason?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    scheduledAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"WebhookRetryHistory"> | Date | string | null
    result?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    createdAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
    delivery?: XOR<WebhookDeliveryScalarRelationFilter, WebhookDeliveryWhereInput>
  }, "id">

  export type WebhookRetryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    attempt?: SortOrder
    reason?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookRetryHistoryCountOrderByAggregateInput
    _avg?: WebhookRetryHistoryAvgOrderByAggregateInput
    _max?: WebhookRetryHistoryMaxOrderByAggregateInput
    _min?: WebhookRetryHistoryMinOrderByAggregateInput
    _sum?: WebhookRetryHistorySumOrderByAggregateInput
  }

  export type WebhookRetryHistoryScalarWhereWithAggregatesInput = {
    AND?: WebhookRetryHistoryScalarWhereWithAggregatesInput | WebhookRetryHistoryScalarWhereWithAggregatesInput[]
    OR?: WebhookRetryHistoryScalarWhereWithAggregatesInput[]
    NOT?: WebhookRetryHistoryScalarWhereWithAggregatesInput | WebhookRetryHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookRetryHistory"> | string
    deliveryId?: StringWithAggregatesFilter<"WebhookRetryHistory"> | string
    attempt?: IntWithAggregatesFilter<"WebhookRetryHistory"> | number
    reason?: StringNullableWithAggregatesFilter<"WebhookRetryHistory"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"WebhookRetryHistory"> | Date | string
    executedAt?: DateTimeNullableWithAggregatesFilter<"WebhookRetryHistory"> | Date | string | null
    result?: StringNullableWithAggregatesFilter<"WebhookRetryHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookRetryHistory"> | Date | string
  }

  export type ReplayHistoryWhereInput = {
    AND?: ReplayHistoryWhereInput | ReplayHistoryWhereInput[]
    OR?: ReplayHistoryWhereInput[]
    NOT?: ReplayHistoryWhereInput | ReplayHistoryWhereInput[]
    id?: StringFilter<"ReplayHistory"> | string
    targetType?: StringFilter<"ReplayHistory"> | string
    targetId?: StringFilter<"ReplayHistory"> | string
    originalJobId?: StringNullableFilter<"ReplayHistory"> | string | null
    newJobId?: StringNullableFilter<"ReplayHistory"> | string | null
    reason?: StringNullableFilter<"ReplayHistory"> | string | null
    result?: StringFilter<"ReplayHistory"> | string
    operatorId?: StringNullableFilter<"ReplayHistory"> | string | null
    replayCount?: IntFilter<"ReplayHistory"> | number
    maxReplayAttempts?: IntFilter<"ReplayHistory"> | number
    replayedAt?: DateTimeFilter<"ReplayHistory"> | Date | string
  }

  export type ReplayHistoryOrderByWithRelationInput = {
    id?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    originalJobId?: SortOrderInput | SortOrder
    newJobId?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    result?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
    replayedAt?: SortOrder
  }

  export type ReplayHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReplayHistoryWhereInput | ReplayHistoryWhereInput[]
    OR?: ReplayHistoryWhereInput[]
    NOT?: ReplayHistoryWhereInput | ReplayHistoryWhereInput[]
    targetType?: StringFilter<"ReplayHistory"> | string
    targetId?: StringFilter<"ReplayHistory"> | string
    originalJobId?: StringNullableFilter<"ReplayHistory"> | string | null
    newJobId?: StringNullableFilter<"ReplayHistory"> | string | null
    reason?: StringNullableFilter<"ReplayHistory"> | string | null
    result?: StringFilter<"ReplayHistory"> | string
    operatorId?: StringNullableFilter<"ReplayHistory"> | string | null
    replayCount?: IntFilter<"ReplayHistory"> | number
    maxReplayAttempts?: IntFilter<"ReplayHistory"> | number
    replayedAt?: DateTimeFilter<"ReplayHistory"> | Date | string
  }, "id">

  export type ReplayHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    originalJobId?: SortOrderInput | SortOrder
    newJobId?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    result?: SortOrder
    operatorId?: SortOrderInput | SortOrder
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
    replayedAt?: SortOrder
    _count?: ReplayHistoryCountOrderByAggregateInput
    _avg?: ReplayHistoryAvgOrderByAggregateInput
    _max?: ReplayHistoryMaxOrderByAggregateInput
    _min?: ReplayHistoryMinOrderByAggregateInput
    _sum?: ReplayHistorySumOrderByAggregateInput
  }

  export type ReplayHistoryScalarWhereWithAggregatesInput = {
    AND?: ReplayHistoryScalarWhereWithAggregatesInput | ReplayHistoryScalarWhereWithAggregatesInput[]
    OR?: ReplayHistoryScalarWhereWithAggregatesInput[]
    NOT?: ReplayHistoryScalarWhereWithAggregatesInput | ReplayHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReplayHistory"> | string
    targetType?: StringWithAggregatesFilter<"ReplayHistory"> | string
    targetId?: StringWithAggregatesFilter<"ReplayHistory"> | string
    originalJobId?: StringNullableWithAggregatesFilter<"ReplayHistory"> | string | null
    newJobId?: StringNullableWithAggregatesFilter<"ReplayHistory"> | string | null
    reason?: StringNullableWithAggregatesFilter<"ReplayHistory"> | string | null
    result?: StringWithAggregatesFilter<"ReplayHistory"> | string
    operatorId?: StringNullableWithAggregatesFilter<"ReplayHistory"> | string | null
    replayCount?: IntWithAggregatesFilter<"ReplayHistory"> | number
    maxReplayAttempts?: IntWithAggregatesFilter<"ReplayHistory"> | number
    replayedAt?: DateTimeWithAggregatesFilter<"ReplayHistory"> | Date | string
  }

  export type CleanupExecutionWhereInput = {
    AND?: CleanupExecutionWhereInput | CleanupExecutionWhereInput[]
    OR?: CleanupExecutionWhereInput[]
    NOT?: CleanupExecutionWhereInput | CleanupExecutionWhereInput[]
    id?: StringFilter<"CleanupExecution"> | string
    jobName?: StringFilter<"CleanupExecution"> | string
    startedAt?: DateTimeFilter<"CleanupExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"CleanupExecution"> | Date | string | null
    status?: StringFilter<"CleanupExecution"> | string
    itemsProcessed?: IntFilter<"CleanupExecution"> | number
    itemsDeleted?: IntFilter<"CleanupExecution"> | number
    durationMs?: IntNullableFilter<"CleanupExecution"> | number | null
    errorMessage?: StringNullableFilter<"CleanupExecution"> | string | null
  }

  export type CleanupExecutionOrderByWithRelationInput = {
    id?: SortOrder
    jobName?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
  }

  export type CleanupExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CleanupExecutionWhereInput | CleanupExecutionWhereInput[]
    OR?: CleanupExecutionWhereInput[]
    NOT?: CleanupExecutionWhereInput | CleanupExecutionWhereInput[]
    jobName?: StringFilter<"CleanupExecution"> | string
    startedAt?: DateTimeFilter<"CleanupExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"CleanupExecution"> | Date | string | null
    status?: StringFilter<"CleanupExecution"> | string
    itemsProcessed?: IntFilter<"CleanupExecution"> | number
    itemsDeleted?: IntFilter<"CleanupExecution"> | number
    durationMs?: IntNullableFilter<"CleanupExecution"> | number | null
    errorMessage?: StringNullableFilter<"CleanupExecution"> | string | null
  }, "id">

  export type CleanupExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    jobName?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: CleanupExecutionCountOrderByAggregateInput
    _avg?: CleanupExecutionAvgOrderByAggregateInput
    _max?: CleanupExecutionMaxOrderByAggregateInput
    _min?: CleanupExecutionMinOrderByAggregateInput
    _sum?: CleanupExecutionSumOrderByAggregateInput
  }

  export type CleanupExecutionScalarWhereWithAggregatesInput = {
    AND?: CleanupExecutionScalarWhereWithAggregatesInput | CleanupExecutionScalarWhereWithAggregatesInput[]
    OR?: CleanupExecutionScalarWhereWithAggregatesInput[]
    NOT?: CleanupExecutionScalarWhereWithAggregatesInput | CleanupExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CleanupExecution"> | string
    jobName?: StringWithAggregatesFilter<"CleanupExecution"> | string
    startedAt?: DateTimeWithAggregatesFilter<"CleanupExecution"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"CleanupExecution"> | Date | string | null
    status?: StringWithAggregatesFilter<"CleanupExecution"> | string
    itemsProcessed?: IntWithAggregatesFilter<"CleanupExecution"> | number
    itemsDeleted?: IntWithAggregatesFilter<"CleanupExecution"> | number
    durationMs?: IntNullableWithAggregatesFilter<"CleanupExecution"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"CleanupExecution"> | string | null
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    tenantId?: StringFilter<"Policy"> | string
    title?: StringFilter<"Policy"> | string
    purpose?: StringFilter<"Policy"> | string
    version?: IntFilter<"Policy"> | number
    content?: StringFilter<"Policy"> | string
    isActive?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    consents?: ConsentListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    title?: SortOrder
    purpose?: SortOrder
    version?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    consents?: ConsentOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_purpose_version?: PolicyTenantIdPurposeVersionCompoundUniqueInput
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    tenantId?: StringFilter<"Policy"> | string
    title?: StringFilter<"Policy"> | string
    purpose?: StringFilter<"Policy"> | string
    version?: IntFilter<"Policy"> | number
    content?: StringFilter<"Policy"> | string
    isActive?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    consents?: ConsentListRelationFilter
  }, "id" | "tenantId_purpose_version">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    title?: SortOrder
    purpose?: SortOrder
    version?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    tenantId?: StringWithAggregatesFilter<"Policy"> | string
    title?: StringWithAggregatesFilter<"Policy"> | string
    purpose?: StringWithAggregatesFilter<"Policy"> | string
    version?: IntWithAggregatesFilter<"Policy"> | number
    content?: StringWithAggregatesFilter<"Policy"> | string
    isActive?: BoolWithAggregatesFilter<"Policy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type ConsentWhereInput = {
    AND?: ConsentWhereInput | ConsentWhereInput[]
    OR?: ConsentWhereInput[]
    NOT?: ConsentWhereInput | ConsentWhereInput[]
    id?: StringFilter<"Consent"> | string
    tenantId?: StringFilter<"Consent"> | string
    userId?: StringFilter<"Consent"> | string
    policyId?: StringFilter<"Consent"> | string
    purpose?: StringFilter<"Consent"> | string
    status?: EnumConsentStatusFilter<"Consent"> | $Enums.ConsentStatus
    policyVersion?: IntFilter<"Consent"> | number
    createdAt?: DateTimeFilter<"Consent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }

  export type ConsentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    policyVersion?: SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
  }

  export type ConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_userId_purpose?: ConsentTenantIdUserIdPurposeCompoundUniqueInput
    AND?: ConsentWhereInput | ConsentWhereInput[]
    OR?: ConsentWhereInput[]
    NOT?: ConsentWhereInput | ConsentWhereInput[]
    tenantId?: StringFilter<"Consent"> | string
    userId?: StringFilter<"Consent"> | string
    policyId?: StringFilter<"Consent"> | string
    purpose?: StringFilter<"Consent"> | string
    status?: EnumConsentStatusFilter<"Consent"> | $Enums.ConsentStatus
    policyVersion?: IntFilter<"Consent"> | number
    createdAt?: DateTimeFilter<"Consent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }, "id" | "tenantId_userId_purpose">

  export type ConsentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    policyVersion?: SortOrder
    createdAt?: SortOrder
    _count?: ConsentCountOrderByAggregateInput
    _avg?: ConsentAvgOrderByAggregateInput
    _max?: ConsentMaxOrderByAggregateInput
    _min?: ConsentMinOrderByAggregateInput
    _sum?: ConsentSumOrderByAggregateInput
  }

  export type ConsentScalarWhereWithAggregatesInput = {
    AND?: ConsentScalarWhereWithAggregatesInput | ConsentScalarWhereWithAggregatesInput[]
    OR?: ConsentScalarWhereWithAggregatesInput[]
    NOT?: ConsentScalarWhereWithAggregatesInput | ConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consent"> | string
    tenantId?: StringWithAggregatesFilter<"Consent"> | string
    userId?: StringWithAggregatesFilter<"Consent"> | string
    policyId?: StringWithAggregatesFilter<"Consent"> | string
    purpose?: StringWithAggregatesFilter<"Consent"> | string
    status?: EnumConsentStatusWithAggregatesFilter<"Consent"> | $Enums.ConsentStatus
    policyVersion?: IntWithAggregatesFilter<"Consent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Consent"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    purpose?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    purpose?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    purpose?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    purpose?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    purpose?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    tenantId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    tenantId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    tenantId?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyPrefix?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type WebhookWhereInput = {
    AND?: WebhookWhereInput | WebhookWhereInput[]
    OR?: WebhookWhereInput[]
    NOT?: WebhookWhereInput | WebhookWhereInput[]
    id?: StringFilter<"Webhook"> | string
    tenantId?: StringFilter<"Webhook"> | string
    name?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    secret?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    isActive?: BoolFilter<"Webhook"> | boolean
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    circuitBreaker?: XOR<WebhookCircuitBreakerNullableScalarRelationFilter, WebhookCircuitBreakerWhereInput> | null
    deliveries?: WebhookDeliveryListRelationFilter
  }

  export type WebhookOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    circuitBreaker?: WebhookCircuitBreakerOrderByWithRelationInput
    deliveries?: WebhookDeliveryOrderByRelationAggregateInput
  }

  export type WebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookWhereInput | WebhookWhereInput[]
    OR?: WebhookWhereInput[]
    NOT?: WebhookWhereInput | WebhookWhereInput[]
    tenantId?: StringFilter<"Webhook"> | string
    name?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    secret?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    isActive?: BoolFilter<"Webhook"> | boolean
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    circuitBreaker?: XOR<WebhookCircuitBreakerNullableScalarRelationFilter, WebhookCircuitBreakerWhereInput> | null
    deliveries?: WebhookDeliveryListRelationFilter
  }, "id">

  export type WebhookOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookCountOrderByAggregateInput
    _max?: WebhookMaxOrderByAggregateInput
    _min?: WebhookMinOrderByAggregateInput
  }

  export type WebhookScalarWhereWithAggregatesInput = {
    AND?: WebhookScalarWhereWithAggregatesInput | WebhookScalarWhereWithAggregatesInput[]
    OR?: WebhookScalarWhereWithAggregatesInput[]
    NOT?: WebhookScalarWhereWithAggregatesInput | WebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Webhook"> | string
    tenantId?: StringWithAggregatesFilter<"Webhook"> | string
    name?: StringWithAggregatesFilter<"Webhook"> | string
    url?: StringWithAggregatesFilter<"Webhook"> | string
    secret?: StringWithAggregatesFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    isActive?: BoolWithAggregatesFilter<"Webhook"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Webhook"> | Date | string
  }

  export type InternalEventWhereInput = {
    AND?: InternalEventWhereInput | InternalEventWhereInput[]
    OR?: InternalEventWhereInput[]
    NOT?: InternalEventWhereInput | InternalEventWhereInput[]
    id?: StringFilter<"InternalEvent"> | string
    tenantId?: StringFilter<"InternalEvent"> | string
    type?: StringFilter<"InternalEvent"> | string
    payload?: JsonFilter<"InternalEvent">
    status?: StringFilter<"InternalEvent"> | string
    createdAt?: DateTimeFilter<"InternalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"InternalEvent"> | Date | string
    dispatchedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type InternalEventOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type InternalEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InternalEventWhereInput | InternalEventWhereInput[]
    OR?: InternalEventWhereInput[]
    NOT?: InternalEventWhereInput | InternalEventWhereInput[]
    tenantId?: StringFilter<"InternalEvent"> | string
    type?: StringFilter<"InternalEvent"> | string
    payload?: JsonFilter<"InternalEvent">
    status?: StringFilter<"InternalEvent"> | string
    createdAt?: DateTimeFilter<"InternalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"InternalEvent"> | Date | string
    dispatchedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type InternalEventOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: InternalEventCountOrderByAggregateInput
    _max?: InternalEventMaxOrderByAggregateInput
    _min?: InternalEventMinOrderByAggregateInput
  }

  export type InternalEventScalarWhereWithAggregatesInput = {
    AND?: InternalEventScalarWhereWithAggregatesInput | InternalEventScalarWhereWithAggregatesInput[]
    OR?: InternalEventScalarWhereWithAggregatesInput[]
    NOT?: InternalEventScalarWhereWithAggregatesInput | InternalEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InternalEvent"> | string
    tenantId?: StringWithAggregatesFilter<"InternalEvent"> | string
    type?: StringWithAggregatesFilter<"InternalEvent"> | string
    payload?: JsonWithAggregatesFilter<"InternalEvent">
    status?: StringWithAggregatesFilter<"InternalEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InternalEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InternalEvent"> | Date | string
    dispatchedAt?: DateTimeNullableWithAggregatesFilter<"InternalEvent"> | Date | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"InternalEvent"> | Date | string | null
  }

  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: StringFilter<"SuperAdmin"> | string
    email?: StringFilter<"SuperAdmin"> | string
    name?: StringNullableFilter<"SuperAdmin"> | string | null
    role?: StringFilter<"SuperAdmin"> | string
    passwordHash?: StringFilter<"SuperAdmin"> | string
    isActive?: BoolFilter<"SuperAdmin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"SuperAdmin"> | Date | string | null
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    name?: StringNullableFilter<"SuperAdmin"> | string | null
    role?: StringFilter<"SuperAdmin"> | string
    passwordHash?: StringFilter<"SuperAdmin"> | string
    isActive?: BoolFilter<"SuperAdmin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"SuperAdmin"> | Date | string | null
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }, "id" | "email">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdmin"> | string
    email?: StringWithAggregatesFilter<"SuperAdmin"> | string
    name?: StringNullableWithAggregatesFilter<"SuperAdmin"> | string | null
    role?: StringWithAggregatesFilter<"SuperAdmin"> | string
    passwordHash?: StringWithAggregatesFilter<"SuperAdmin"> | string
    isActive?: BoolWithAggregatesFilter<"SuperAdmin"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"SuperAdmin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventCreateInput = {
    id?: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutOutboxEventsInput
  }

  export type OutboxEventUncheckedCreateInput = {
    id?: string
    tenantId: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type OutboxEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutOutboxEventsNestedInput
  }

  export type OutboxEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboxEventCreateManyInput = {
    id?: string
    tenantId: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type OutboxEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboxEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookCircuitBreakerCreateInput = {
    id?: string
    state?: $Enums.CircuitBreakerState
    consecutiveFailures?: number
    openedAt?: Date | string | null
    lastTestedAt?: Date | string | null
    updatedAt?: Date | string
    webhook: WebhookCreateNestedOneWithoutCircuitBreakerInput
  }

  export type WebhookCircuitBreakerUncheckedCreateInput = {
    id?: string
    webhookId: string
    state?: $Enums.CircuitBreakerState
    consecutiveFailures?: number
    openedAt?: Date | string | null
    lastTestedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WebhookCircuitBreakerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook?: WebhookUpdateOneRequiredWithoutCircuitBreakerNestedInput
  }

  export type WebhookCircuitBreakerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookCircuitBreakerCreateManyInput = {
    id?: string
    webhookId: string
    state?: $Enums.CircuitBreakerState
    consecutiveFailures?: number
    openedAt?: Date | string | null
    lastTestedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WebhookCircuitBreakerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookCircuitBreakerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateInput = {
    id?: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhookDeliveriesInput
    webhook: WebhookCreateNestedOneWithoutDeliveriesInput
    retryHistories?: WebhookRetryHistoryCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryUncheckedCreateInput = {
    id?: string
    tenantId: string
    webhookId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    retryHistories?: WebhookRetryHistoryUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhookDeliveriesNestedInput
    webhook?: WebhookUpdateOneRequiredWithoutDeliveriesNestedInput
    retryHistories?: WebhookRetryHistoryUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retryHistories?: WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryCreateManyInput = {
    id?: string
    tenantId: string
    webhookId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryCreateInput = {
    id?: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
    delivery: WebhookDeliveryCreateNestedOneWithoutRetryHistoriesInput
  }

  export type WebhookRetryHistoryUncheckedCreateInput = {
    id?: string
    deliveryId: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
  }

  export type WebhookRetryHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: WebhookDeliveryUpdateOneRequiredWithoutRetryHistoriesNestedInput
  }

  export type WebhookRetryHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryCreateManyInput = {
    id?: string
    deliveryId: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
  }

  export type WebhookRetryHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayHistoryCreateInput = {
    id?: string
    targetType: string
    targetId: string
    originalJobId?: string | null
    newJobId?: string | null
    reason?: string | null
    result: string
    operatorId?: string | null
    replayCount?: number
    maxReplayAttempts?: number
    replayedAt?: Date | string
  }

  export type ReplayHistoryUncheckedCreateInput = {
    id?: string
    targetType: string
    targetId: string
    originalJobId?: string | null
    newJobId?: string | null
    reason?: string | null
    result: string
    operatorId?: string | null
    replayCount?: number
    maxReplayAttempts?: number
    replayedAt?: Date | string
  }

  export type ReplayHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    originalJobId?: NullableStringFieldUpdateOperationsInput | string | null
    newJobId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    result?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    replayCount?: IntFieldUpdateOperationsInput | number
    maxReplayAttempts?: IntFieldUpdateOperationsInput | number
    replayedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    originalJobId?: NullableStringFieldUpdateOperationsInput | string | null
    newJobId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    result?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    replayCount?: IntFieldUpdateOperationsInput | number
    maxReplayAttempts?: IntFieldUpdateOperationsInput | number
    replayedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayHistoryCreateManyInput = {
    id?: string
    targetType: string
    targetId: string
    originalJobId?: string | null
    newJobId?: string | null
    reason?: string | null
    result: string
    operatorId?: string | null
    replayCount?: number
    maxReplayAttempts?: number
    replayedAt?: Date | string
  }

  export type ReplayHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    originalJobId?: NullableStringFieldUpdateOperationsInput | string | null
    newJobId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    result?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    replayCount?: IntFieldUpdateOperationsInput | number
    maxReplayAttempts?: IntFieldUpdateOperationsInput | number
    replayedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    originalJobId?: NullableStringFieldUpdateOperationsInput | string | null
    newJobId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    result?: StringFieldUpdateOperationsInput | string
    operatorId?: NullableStringFieldUpdateOperationsInput | string | null
    replayCount?: IntFieldUpdateOperationsInput | number
    maxReplayAttempts?: IntFieldUpdateOperationsInput | number
    replayedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanupExecutionCreateInput = {
    id?: string
    jobName: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status: string
    itemsProcessed?: number
    itemsDeleted?: number
    durationMs?: number | null
    errorMessage?: string | null
  }

  export type CleanupExecutionUncheckedCreateInput = {
    id?: string
    jobName: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status: string
    itemsProcessed?: number
    itemsDeleted?: number
    durationMs?: number | null
    errorMessage?: string | null
  }

  export type CleanupExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsDeleted?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CleanupExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsDeleted?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CleanupExecutionCreateManyInput = {
    id?: string
    jobName: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status: string
    itemsProcessed?: number
    itemsDeleted?: number
    durationMs?: number | null
    errorMessage?: string | null
  }

  export type CleanupExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsDeleted?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CleanupExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsDeleted?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyCreateInput = {
    id?: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPoliciesInput
    consents?: ConsentCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    tenantId: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPoliciesNestedInput
    consents?: ConsentUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: string
    tenantId: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentCreateInput = {
    id?: string
    userId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutConsentsInput
    policy: PolicyCreateNestedOneWithoutConsentsInput
  }

  export type ConsentUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    policyId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type ConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutConsentsNestedInput
    policy?: PolicyUpdateOneRequiredWithoutConsentsNestedInput
  }

  export type ConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    policyId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type ConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookCreateInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhooksInput
    circuitBreaker?: WebhookCircuitBreakerCreateNestedOneWithoutWebhookInput
    deliveries?: WebhookDeliveryCreateNestedManyWithoutWebhookInput
  }

  export type WebhookUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedCreateNestedOneWithoutWebhookInput
    deliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type WebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhooksNestedInput
    circuitBreaker?: WebhookCircuitBreakerUpdateOneWithoutWebhookNestedInput
    deliveries?: WebhookDeliveryUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedUpdateOneWithoutWebhookNestedInput
    deliveries?: WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalEventCreateInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutInternalEventsInput
  }

  export type InternalEventUncheckedCreateInput = {
    id?: string
    tenantId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
  }

  export type InternalEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutInternalEventsNestedInput
  }

  export type InternalEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalEventCreateManyInput = {
    id?: string
    tenantId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
  }

  export type InternalEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuperAdminCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    passwordHash: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    passwordHash: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    passwordHash: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConsentListRelationFilter = {
    every?: ConsentWhereInput
    some?: ConsentWhereInput
    none?: ConsentWhereInput
  }

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type WebhookListRelationFilter = {
    every?: WebhookWhereInput
    some?: WebhookWhereInput
    none?: WebhookWhereInput
  }

  export type InternalEventListRelationFilter = {
    every?: InternalEventWhereInput
    some?: InternalEventWhereInput
    none?: InternalEventWhereInput
  }

  export type OutboxEventListRelationFilter = {
    every?: OutboxEventWhereInput
    some?: OutboxEventWhereInput
    none?: OutboxEventWhereInput
  }

  export type WebhookDeliveryListRelationFilter = {
    every?: WebhookDeliveryWhereInput
    some?: WebhookDeliveryWhereInput
    none?: WebhookDeliveryWhereInput
  }

  export type ConsentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InternalEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutboxEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutboxEventCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type OutboxEventAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type OutboxEventMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventType?: SortOrder
    aggregateId?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type OutboxEventMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventType?: SortOrder
    aggregateId?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type OutboxEventSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCircuitBreakerStateFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitBreakerState | EnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitBreakerStateFilter<$PrismaModel> | $Enums.CircuitBreakerState
  }

  export type WebhookScalarRelationFilter = {
    is?: WebhookWhereInput
    isNot?: WebhookWhereInput
  }

  export type WebhookCircuitBreakerCountOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    state?: SortOrder
    consecutiveFailures?: SortOrder
    openedAt?: SortOrder
    lastTestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookCircuitBreakerAvgOrderByAggregateInput = {
    consecutiveFailures?: SortOrder
  }

  export type WebhookCircuitBreakerMaxOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    state?: SortOrder
    consecutiveFailures?: SortOrder
    openedAt?: SortOrder
    lastTestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookCircuitBreakerMinOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    state?: SortOrder
    consecutiveFailures?: SortOrder
    openedAt?: SortOrder
    lastTestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookCircuitBreakerSumOrderByAggregateInput = {
    consecutiveFailures?: SortOrder
  }

  export type EnumCircuitBreakerStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitBreakerState | EnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitBreakerStateWithAggregatesFilter<$PrismaModel> | $Enums.CircuitBreakerState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitBreakerStateFilter<$PrismaModel>
    _max?: NestedEnumCircuitBreakerStateFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebhookRetryHistoryListRelationFilter = {
    every?: WebhookRetryHistoryWhereInput
    some?: WebhookRetryHistoryWhereInput
    none?: WebhookRetryHistoryWhereInput
  }

  export type WebhookRetryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    webhookId?: SortOrder
    eventId?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    httpStatus?: SortOrder
    responseBody?: SortOrder
    responseHeaders?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryAvgOrderByAggregateInput = {
    attempt?: SortOrder
    httpStatus?: SortOrder
    duration?: SortOrder
  }

  export type WebhookDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    webhookId?: SortOrder
    eventId?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    httpStatus?: SortOrder
    responseBody?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    webhookId?: SortOrder
    eventId?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    httpStatus?: SortOrder
    responseBody?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliverySumOrderByAggregateInput = {
    attempt?: SortOrder
    httpStatus?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WebhookDeliveryScalarRelationFilter = {
    is?: WebhookDeliveryWhereInput
    isNot?: WebhookDeliveryWhereInput
  }

  export type WebhookRetryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    attempt?: SortOrder
    reason?: SortOrder
    scheduledAt?: SortOrder
    executedAt?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookRetryHistoryAvgOrderByAggregateInput = {
    attempt?: SortOrder
  }

  export type WebhookRetryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    attempt?: SortOrder
    reason?: SortOrder
    scheduledAt?: SortOrder
    executedAt?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookRetryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    attempt?: SortOrder
    reason?: SortOrder
    scheduledAt?: SortOrder
    executedAt?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookRetryHistorySumOrderByAggregateInput = {
    attempt?: SortOrder
  }

  export type ReplayHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    originalJobId?: SortOrder
    newJobId?: SortOrder
    reason?: SortOrder
    result?: SortOrder
    operatorId?: SortOrder
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
    replayedAt?: SortOrder
  }

  export type ReplayHistoryAvgOrderByAggregateInput = {
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
  }

  export type ReplayHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    originalJobId?: SortOrder
    newJobId?: SortOrder
    reason?: SortOrder
    result?: SortOrder
    operatorId?: SortOrder
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
    replayedAt?: SortOrder
  }

  export type ReplayHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    originalJobId?: SortOrder
    newJobId?: SortOrder
    reason?: SortOrder
    result?: SortOrder
    operatorId?: SortOrder
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
    replayedAt?: SortOrder
  }

  export type ReplayHistorySumOrderByAggregateInput = {
    replayCount?: SortOrder
    maxReplayAttempts?: SortOrder
  }

  export type CleanupExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
  }

  export type CleanupExecutionAvgOrderByAggregateInput = {
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrder
  }

  export type CleanupExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
  }

  export type CleanupExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
  }

  export type CleanupExecutionSumOrderByAggregateInput = {
    itemsProcessed?: SortOrder
    itemsDeleted?: SortOrder
    durationMs?: SortOrder
  }

  export type PolicyTenantIdPurposeVersionCompoundUniqueInput = {
    tenantId: string
    purpose: string
    version: number
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    title?: SortOrder
    purpose?: SortOrder
    version?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    title?: SortOrder
    purpose?: SortOrder
    version?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    title?: SortOrder
    purpose?: SortOrder
    version?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EnumConsentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentStatus | EnumConsentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentStatusFilter<$PrismaModel> | $Enums.ConsentStatus
  }

  export type PolicyScalarRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type ConsentTenantIdUserIdPurposeCompoundUniqueInput = {
    tenantId: string
    userId: string
    purpose: string
  }

  export type ConsentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    policyVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsentAvgOrderByAggregateInput = {
    policyVersion?: SortOrder
  }

  export type ConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    policyVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    policyVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsentSumOrderByAggregateInput = {
    policyVersion?: SortOrder
  }

  export type EnumConsentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentStatus | EnumConsentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentStatusFilter<$PrismaModel>
    _max?: NestedEnumConsentStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    purpose?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    purpose?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    purpose?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WebhookCircuitBreakerNullableScalarRelationFilter = {
    is?: WebhookCircuitBreakerWhereInput | null
    isNot?: WebhookCircuitBreakerWhereInput | null
  }

  export type WebhookCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternalEventCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatchedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type InternalEventMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatchedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type InternalEventMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatchedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsentCreateNestedManyWithoutTenantInput = {
    create?: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput> | ConsentCreateWithoutTenantInput[] | ConsentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutTenantInput | ConsentCreateOrConnectWithoutTenantInput[]
    createMany?: ConsentCreateManyTenantInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type PolicyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput> | PolicyCreateWithoutTenantInput[] | PolicyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutTenantInput | PolicyCreateOrConnectWithoutTenantInput[]
    createMany?: PolicyCreateManyTenantInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutTenantInput = {
    create?: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput> | ApiKeyCreateWithoutTenantInput[] | ApiKeyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTenantInput | ApiKeyCreateOrConnectWithoutTenantInput[]
    createMany?: ApiKeyCreateManyTenantInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type WebhookCreateNestedManyWithoutTenantInput = {
    create?: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput> | WebhookCreateWithoutTenantInput[] | WebhookUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutTenantInput | WebhookCreateOrConnectWithoutTenantInput[]
    createMany?: WebhookCreateManyTenantInputEnvelope
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
  }

  export type InternalEventCreateNestedManyWithoutTenantInput = {
    create?: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput> | InternalEventCreateWithoutTenantInput[] | InternalEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InternalEventCreateOrConnectWithoutTenantInput | InternalEventCreateOrConnectWithoutTenantInput[]
    createMany?: InternalEventCreateManyTenantInputEnvelope
    connect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
  }

  export type OutboxEventCreateNestedManyWithoutTenantInput = {
    create?: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput> | OutboxEventCreateWithoutTenantInput[] | OutboxEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OutboxEventCreateOrConnectWithoutTenantInput | OutboxEventCreateOrConnectWithoutTenantInput[]
    createMany?: OutboxEventCreateManyTenantInputEnvelope
    connect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
  }

  export type WebhookDeliveryCreateNestedManyWithoutTenantInput = {
    create?: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput> | WebhookDeliveryCreateWithoutTenantInput[] | WebhookDeliveryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutTenantInput | WebhookDeliveryCreateOrConnectWithoutTenantInput[]
    createMany?: WebhookDeliveryCreateManyTenantInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type ConsentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput> | ConsentCreateWithoutTenantInput[] | ConsentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutTenantInput | ConsentCreateOrConnectWithoutTenantInput[]
    createMany?: ConsentCreateManyTenantInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput> | PolicyCreateWithoutTenantInput[] | PolicyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutTenantInput | PolicyCreateOrConnectWithoutTenantInput[]
    createMany?: PolicyCreateManyTenantInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput> | ApiKeyCreateWithoutTenantInput[] | ApiKeyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTenantInput | ApiKeyCreateOrConnectWithoutTenantInput[]
    createMany?: ApiKeyCreateManyTenantInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type WebhookUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput> | WebhookCreateWithoutTenantInput[] | WebhookUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutTenantInput | WebhookCreateOrConnectWithoutTenantInput[]
    createMany?: WebhookCreateManyTenantInputEnvelope
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
  }

  export type InternalEventUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput> | InternalEventCreateWithoutTenantInput[] | InternalEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InternalEventCreateOrConnectWithoutTenantInput | InternalEventCreateOrConnectWithoutTenantInput[]
    createMany?: InternalEventCreateManyTenantInputEnvelope
    connect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
  }

  export type OutboxEventUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput> | OutboxEventCreateWithoutTenantInput[] | OutboxEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OutboxEventCreateOrConnectWithoutTenantInput | OutboxEventCreateOrConnectWithoutTenantInput[]
    createMany?: OutboxEventCreateManyTenantInputEnvelope
    connect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
  }

  export type WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput> | WebhookDeliveryCreateWithoutTenantInput[] | WebhookDeliveryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutTenantInput | WebhookDeliveryCreateOrConnectWithoutTenantInput[]
    createMany?: WebhookDeliveryCreateManyTenantInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConsentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput> | ConsentCreateWithoutTenantInput[] | ConsentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutTenantInput | ConsentCreateOrConnectWithoutTenantInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutTenantInput | ConsentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ConsentCreateManyTenantInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutTenantInput | ConsentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutTenantInput | ConsentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type PolicyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput> | PolicyCreateWithoutTenantInput[] | PolicyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutTenantInput | PolicyCreateOrConnectWithoutTenantInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutTenantInput | PolicyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PolicyCreateManyTenantInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutTenantInput | PolicyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutTenantInput | PolicyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput> | ApiKeyCreateWithoutTenantInput[] | ApiKeyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTenantInput | ApiKeyCreateOrConnectWithoutTenantInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutTenantInput | ApiKeyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ApiKeyCreateManyTenantInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutTenantInput | ApiKeyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutTenantInput | ApiKeyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type WebhookUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput> | WebhookCreateWithoutTenantInput[] | WebhookUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutTenantInput | WebhookCreateOrConnectWithoutTenantInput[]
    upsert?: WebhookUpsertWithWhereUniqueWithoutTenantInput | WebhookUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WebhookCreateManyTenantInputEnvelope
    set?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    disconnect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    delete?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    update?: WebhookUpdateWithWhereUniqueWithoutTenantInput | WebhookUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WebhookUpdateManyWithWhereWithoutTenantInput | WebhookUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
  }

  export type InternalEventUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput> | InternalEventCreateWithoutTenantInput[] | InternalEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InternalEventCreateOrConnectWithoutTenantInput | InternalEventCreateOrConnectWithoutTenantInput[]
    upsert?: InternalEventUpsertWithWhereUniqueWithoutTenantInput | InternalEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InternalEventCreateManyTenantInputEnvelope
    set?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    disconnect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    delete?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    connect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    update?: InternalEventUpdateWithWhereUniqueWithoutTenantInput | InternalEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InternalEventUpdateManyWithWhereWithoutTenantInput | InternalEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InternalEventScalarWhereInput | InternalEventScalarWhereInput[]
  }

  export type OutboxEventUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput> | OutboxEventCreateWithoutTenantInput[] | OutboxEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OutboxEventCreateOrConnectWithoutTenantInput | OutboxEventCreateOrConnectWithoutTenantInput[]
    upsert?: OutboxEventUpsertWithWhereUniqueWithoutTenantInput | OutboxEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OutboxEventCreateManyTenantInputEnvelope
    set?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    disconnect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    delete?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    connect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    update?: OutboxEventUpdateWithWhereUniqueWithoutTenantInput | OutboxEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OutboxEventUpdateManyWithWhereWithoutTenantInput | OutboxEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OutboxEventScalarWhereInput | OutboxEventScalarWhereInput[]
  }

  export type WebhookDeliveryUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput> | WebhookDeliveryCreateWithoutTenantInput[] | WebhookDeliveryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutTenantInput | WebhookDeliveryCreateOrConnectWithoutTenantInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutTenantInput | WebhookDeliveryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WebhookDeliveryCreateManyTenantInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutTenantInput | WebhookDeliveryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutTenantInput | WebhookDeliveryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type ConsentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput> | ConsentCreateWithoutTenantInput[] | ConsentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutTenantInput | ConsentCreateOrConnectWithoutTenantInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutTenantInput | ConsentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ConsentCreateManyTenantInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutTenantInput | ConsentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutTenantInput | ConsentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type PolicyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput> | PolicyCreateWithoutTenantInput[] | PolicyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutTenantInput | PolicyCreateOrConnectWithoutTenantInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutTenantInput | PolicyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PolicyCreateManyTenantInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutTenantInput | PolicyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutTenantInput | PolicyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput> | ApiKeyCreateWithoutTenantInput[] | ApiKeyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTenantInput | ApiKeyCreateOrConnectWithoutTenantInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutTenantInput | ApiKeyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ApiKeyCreateManyTenantInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutTenantInput | ApiKeyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutTenantInput | ApiKeyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type WebhookUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput> | WebhookCreateWithoutTenantInput[] | WebhookUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutTenantInput | WebhookCreateOrConnectWithoutTenantInput[]
    upsert?: WebhookUpsertWithWhereUniqueWithoutTenantInput | WebhookUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WebhookCreateManyTenantInputEnvelope
    set?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    disconnect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    delete?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    update?: WebhookUpdateWithWhereUniqueWithoutTenantInput | WebhookUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WebhookUpdateManyWithWhereWithoutTenantInput | WebhookUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
  }

  export type InternalEventUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput> | InternalEventCreateWithoutTenantInput[] | InternalEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InternalEventCreateOrConnectWithoutTenantInput | InternalEventCreateOrConnectWithoutTenantInput[]
    upsert?: InternalEventUpsertWithWhereUniqueWithoutTenantInput | InternalEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InternalEventCreateManyTenantInputEnvelope
    set?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    disconnect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    delete?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    connect?: InternalEventWhereUniqueInput | InternalEventWhereUniqueInput[]
    update?: InternalEventUpdateWithWhereUniqueWithoutTenantInput | InternalEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InternalEventUpdateManyWithWhereWithoutTenantInput | InternalEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InternalEventScalarWhereInput | InternalEventScalarWhereInput[]
  }

  export type OutboxEventUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput> | OutboxEventCreateWithoutTenantInput[] | OutboxEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OutboxEventCreateOrConnectWithoutTenantInput | OutboxEventCreateOrConnectWithoutTenantInput[]
    upsert?: OutboxEventUpsertWithWhereUniqueWithoutTenantInput | OutboxEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OutboxEventCreateManyTenantInputEnvelope
    set?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    disconnect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    delete?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    connect?: OutboxEventWhereUniqueInput | OutboxEventWhereUniqueInput[]
    update?: OutboxEventUpdateWithWhereUniqueWithoutTenantInput | OutboxEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OutboxEventUpdateManyWithWhereWithoutTenantInput | OutboxEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OutboxEventScalarWhereInput | OutboxEventScalarWhereInput[]
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput> | WebhookDeliveryCreateWithoutTenantInput[] | WebhookDeliveryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutTenantInput | WebhookDeliveryCreateOrConnectWithoutTenantInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutTenantInput | WebhookDeliveryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WebhookDeliveryCreateManyTenantInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutTenantInput | WebhookDeliveryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutTenantInput | WebhookDeliveryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutOutboxEventsInput = {
    create?: XOR<TenantCreateWithoutOutboxEventsInput, TenantUncheckedCreateWithoutOutboxEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOutboxEventsInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutOutboxEventsNestedInput = {
    create?: XOR<TenantCreateWithoutOutboxEventsInput, TenantUncheckedCreateWithoutOutboxEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOutboxEventsInput
    upsert?: TenantUpsertWithoutOutboxEventsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutOutboxEventsInput, TenantUpdateWithoutOutboxEventsInput>, TenantUncheckedUpdateWithoutOutboxEventsInput>
  }

  export type WebhookCreateNestedOneWithoutCircuitBreakerInput = {
    create?: XOR<WebhookCreateWithoutCircuitBreakerInput, WebhookUncheckedCreateWithoutCircuitBreakerInput>
    connectOrCreate?: WebhookCreateOrConnectWithoutCircuitBreakerInput
    connect?: WebhookWhereUniqueInput
  }

  export type EnumCircuitBreakerStateFieldUpdateOperationsInput = {
    set?: $Enums.CircuitBreakerState
  }

  export type WebhookUpdateOneRequiredWithoutCircuitBreakerNestedInput = {
    create?: XOR<WebhookCreateWithoutCircuitBreakerInput, WebhookUncheckedCreateWithoutCircuitBreakerInput>
    connectOrCreate?: WebhookCreateOrConnectWithoutCircuitBreakerInput
    upsert?: WebhookUpsertWithoutCircuitBreakerInput
    connect?: WebhookWhereUniqueInput
    update?: XOR<XOR<WebhookUpdateToOneWithWhereWithoutCircuitBreakerInput, WebhookUpdateWithoutCircuitBreakerInput>, WebhookUncheckedUpdateWithoutCircuitBreakerInput>
  }

  export type TenantCreateNestedOneWithoutWebhookDeliveriesInput = {
    create?: XOR<TenantCreateWithoutWebhookDeliveriesInput, TenantUncheckedCreateWithoutWebhookDeliveriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWebhookDeliveriesInput
    connect?: TenantWhereUniqueInput
  }

  export type WebhookCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<WebhookCreateWithoutDeliveriesInput, WebhookUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: WebhookCreateOrConnectWithoutDeliveriesInput
    connect?: WebhookWhereUniqueInput
  }

  export type WebhookRetryHistoryCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput> | WebhookRetryHistoryCreateWithoutDeliveryInput[] | WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput | WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput[]
    createMany?: WebhookRetryHistoryCreateManyDeliveryInputEnvelope
    connect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
  }

  export type WebhookRetryHistoryUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput> | WebhookRetryHistoryCreateWithoutDeliveryInput[] | WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput | WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput[]
    createMany?: WebhookRetryHistoryCreateManyDeliveryInputEnvelope
    connect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutWebhookDeliveriesNestedInput = {
    create?: XOR<TenantCreateWithoutWebhookDeliveriesInput, TenantUncheckedCreateWithoutWebhookDeliveriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWebhookDeliveriesInput
    upsert?: TenantUpsertWithoutWebhookDeliveriesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutWebhookDeliveriesInput, TenantUpdateWithoutWebhookDeliveriesInput>, TenantUncheckedUpdateWithoutWebhookDeliveriesInput>
  }

  export type WebhookUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<WebhookCreateWithoutDeliveriesInput, WebhookUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: WebhookCreateOrConnectWithoutDeliveriesInput
    upsert?: WebhookUpsertWithoutDeliveriesInput
    connect?: WebhookWhereUniqueInput
    update?: XOR<XOR<WebhookUpdateToOneWithWhereWithoutDeliveriesInput, WebhookUpdateWithoutDeliveriesInput>, WebhookUncheckedUpdateWithoutDeliveriesInput>
  }

  export type WebhookRetryHistoryUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput> | WebhookRetryHistoryCreateWithoutDeliveryInput[] | WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput | WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput[]
    upsert?: WebhookRetryHistoryUpsertWithWhereUniqueWithoutDeliveryInput | WebhookRetryHistoryUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: WebhookRetryHistoryCreateManyDeliveryInputEnvelope
    set?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    disconnect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    delete?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    connect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    update?: WebhookRetryHistoryUpdateWithWhereUniqueWithoutDeliveryInput | WebhookRetryHistoryUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: WebhookRetryHistoryUpdateManyWithWhereWithoutDeliveryInput | WebhookRetryHistoryUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: WebhookRetryHistoryScalarWhereInput | WebhookRetryHistoryScalarWhereInput[]
  }

  export type WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput> | WebhookRetryHistoryCreateWithoutDeliveryInput[] | WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput | WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput[]
    upsert?: WebhookRetryHistoryUpsertWithWhereUniqueWithoutDeliveryInput | WebhookRetryHistoryUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: WebhookRetryHistoryCreateManyDeliveryInputEnvelope
    set?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    disconnect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    delete?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    connect?: WebhookRetryHistoryWhereUniqueInput | WebhookRetryHistoryWhereUniqueInput[]
    update?: WebhookRetryHistoryUpdateWithWhereUniqueWithoutDeliveryInput | WebhookRetryHistoryUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: WebhookRetryHistoryUpdateManyWithWhereWithoutDeliveryInput | WebhookRetryHistoryUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: WebhookRetryHistoryScalarWhereInput | WebhookRetryHistoryScalarWhereInput[]
  }

  export type WebhookDeliveryCreateNestedOneWithoutRetryHistoriesInput = {
    create?: XOR<WebhookDeliveryCreateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedCreateWithoutRetryHistoriesInput>
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutRetryHistoriesInput
    connect?: WebhookDeliveryWhereUniqueInput
  }

  export type WebhookDeliveryUpdateOneRequiredWithoutRetryHistoriesNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedCreateWithoutRetryHistoriesInput>
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutRetryHistoriesInput
    upsert?: WebhookDeliveryUpsertWithoutRetryHistoriesInput
    connect?: WebhookDeliveryWhereUniqueInput
    update?: XOR<XOR<WebhookDeliveryUpdateToOneWithWhereWithoutRetryHistoriesInput, WebhookDeliveryUpdateWithoutRetryHistoriesInput>, WebhookDeliveryUncheckedUpdateWithoutRetryHistoriesInput>
  }

  export type TenantCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<TenantCreateWithoutPoliciesInput, TenantUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPoliciesInput
    connect?: TenantWhereUniqueInput
  }

  export type ConsentCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput> | ConsentCreateWithoutPolicyInput[] | ConsentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutPolicyInput | ConsentCreateOrConnectWithoutPolicyInput[]
    createMany?: ConsentCreateManyPolicyInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type ConsentUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput> | ConsentCreateWithoutPolicyInput[] | ConsentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutPolicyInput | ConsentCreateOrConnectWithoutPolicyInput[]
    createMany?: ConsentCreateManyPolicyInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<TenantCreateWithoutPoliciesInput, TenantUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPoliciesInput
    upsert?: TenantUpsertWithoutPoliciesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPoliciesInput, TenantUpdateWithoutPoliciesInput>, TenantUncheckedUpdateWithoutPoliciesInput>
  }

  export type ConsentUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput> | ConsentCreateWithoutPolicyInput[] | ConsentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutPolicyInput | ConsentCreateOrConnectWithoutPolicyInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutPolicyInput | ConsentUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ConsentCreateManyPolicyInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutPolicyInput | ConsentUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutPolicyInput | ConsentUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type ConsentUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput> | ConsentCreateWithoutPolicyInput[] | ConsentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutPolicyInput | ConsentCreateOrConnectWithoutPolicyInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutPolicyInput | ConsentUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ConsentCreateManyPolicyInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutPolicyInput | ConsentUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutPolicyInput | ConsentUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutConsentsInput = {
    create?: XOR<TenantCreateWithoutConsentsInput, TenantUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutConsentsInput
    connect?: TenantWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutConsentsInput = {
    create?: XOR<PolicyCreateWithoutConsentsInput, PolicyUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutConsentsInput
    connect?: PolicyWhereUniqueInput
  }

  export type EnumConsentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsentStatus
  }

  export type TenantUpdateOneRequiredWithoutConsentsNestedInput = {
    create?: XOR<TenantCreateWithoutConsentsInput, TenantUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutConsentsInput
    upsert?: TenantUpsertWithoutConsentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutConsentsInput, TenantUpdateWithoutConsentsInput>, TenantUncheckedUpdateWithoutConsentsInput>
  }

  export type PolicyUpdateOneRequiredWithoutConsentsNestedInput = {
    create?: XOR<PolicyCreateWithoutConsentsInput, PolicyUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutConsentsInput
    upsert?: PolicyUpsertWithoutConsentsInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutConsentsInput, PolicyUpdateWithoutConsentsInput>, PolicyUncheckedUpdateWithoutConsentsInput>
  }

  export type TenantCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
    upsert?: TenantUpsertWithoutAuditLogsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAuditLogsInput, TenantUpdateWithoutAuditLogsInput>, TenantUncheckedUpdateWithoutAuditLogsInput>
  }

  export type TenantCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<TenantCreateWithoutApiKeysInput, TenantUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: TenantCreateOrConnectWithoutApiKeysInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<TenantCreateWithoutApiKeysInput, TenantUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: TenantCreateOrConnectWithoutApiKeysInput
    upsert?: TenantUpsertWithoutApiKeysInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutApiKeysInput, TenantUpdateWithoutApiKeysInput>, TenantUncheckedUpdateWithoutApiKeysInput>
  }

  export type WebhookCreateeventsInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<TenantCreateWithoutWebhooksInput, TenantUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWebhooksInput
    connect?: TenantWhereUniqueInput
  }

  export type WebhookCircuitBreakerCreateNestedOneWithoutWebhookInput = {
    create?: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
    connectOrCreate?: WebhookCircuitBreakerCreateOrConnectWithoutWebhookInput
    connect?: WebhookCircuitBreakerWhereUniqueInput
  }

  export type WebhookDeliveryCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type WebhookCircuitBreakerUncheckedCreateNestedOneWithoutWebhookInput = {
    create?: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
    connectOrCreate?: WebhookCircuitBreakerCreateOrConnectWithoutWebhookInput
    connect?: WebhookCircuitBreakerWhereUniqueInput
  }

  export type WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type WebhookUpdateeventsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<TenantCreateWithoutWebhooksInput, TenantUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWebhooksInput
    upsert?: TenantUpsertWithoutWebhooksInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutWebhooksInput, TenantUpdateWithoutWebhooksInput>, TenantUncheckedUpdateWithoutWebhooksInput>
  }

  export type WebhookCircuitBreakerUpdateOneWithoutWebhookNestedInput = {
    create?: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
    connectOrCreate?: WebhookCircuitBreakerCreateOrConnectWithoutWebhookInput
    upsert?: WebhookCircuitBreakerUpsertWithoutWebhookInput
    disconnect?: WebhookCircuitBreakerWhereInput | boolean
    delete?: WebhookCircuitBreakerWhereInput | boolean
    connect?: WebhookCircuitBreakerWhereUniqueInput
    update?: XOR<XOR<WebhookCircuitBreakerUpdateToOneWithWhereWithoutWebhookInput, WebhookCircuitBreakerUpdateWithoutWebhookInput>, WebhookCircuitBreakerUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookDeliveryUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput | WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type WebhookCircuitBreakerUncheckedUpdateOneWithoutWebhookNestedInput = {
    create?: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
    connectOrCreate?: WebhookCircuitBreakerCreateOrConnectWithoutWebhookInput
    upsert?: WebhookCircuitBreakerUpsertWithoutWebhookInput
    disconnect?: WebhookCircuitBreakerWhereInput | boolean
    delete?: WebhookCircuitBreakerWhereInput | boolean
    connect?: WebhookCircuitBreakerWhereUniqueInput
    update?: XOR<XOR<WebhookCircuitBreakerUpdateToOneWithWhereWithoutWebhookInput, WebhookCircuitBreakerUpdateWithoutWebhookInput>, WebhookCircuitBreakerUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput | WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutInternalEventsInput = {
    create?: XOR<TenantCreateWithoutInternalEventsInput, TenantUncheckedCreateWithoutInternalEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInternalEventsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutInternalEventsNestedInput = {
    create?: XOR<TenantCreateWithoutInternalEventsInput, TenantUncheckedCreateWithoutInternalEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInternalEventsInput
    upsert?: TenantUpsertWithoutInternalEventsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInternalEventsInput, TenantUpdateWithoutInternalEventsInput>, TenantUncheckedUpdateWithoutInternalEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCircuitBreakerStateFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitBreakerState | EnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitBreakerStateFilter<$PrismaModel> | $Enums.CircuitBreakerState
  }

  export type NestedEnumCircuitBreakerStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitBreakerState | EnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitBreakerState[] | ListEnumCircuitBreakerStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitBreakerStateWithAggregatesFilter<$PrismaModel> | $Enums.CircuitBreakerState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitBreakerStateFilter<$PrismaModel>
    _max?: NestedEnumCircuitBreakerStateFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumConsentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentStatus | EnumConsentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentStatusFilter<$PrismaModel> | $Enums.ConsentStatus
  }

  export type NestedEnumConsentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentStatus | EnumConsentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentStatus[] | ListEnumConsentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentStatusFilter<$PrismaModel>
    _max?: NestedEnumConsentStatusFilter<$PrismaModel>
  }

  export type ConsentCreateWithoutTenantInput = {
    id?: string
    userId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
    policy: PolicyCreateNestedOneWithoutConsentsInput
  }

  export type ConsentUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    policyId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type ConsentCreateOrConnectWithoutTenantInput = {
    where: ConsentWhereUniqueInput
    create: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput>
  }

  export type ConsentCreateManyTenantInputEnvelope = {
    data: ConsentCreateManyTenantInput | ConsentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PolicyCreateWithoutTenantInput = {
    id?: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutTenantInput = {
    id?: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutTenantInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput>
  }

  export type PolicyCreateManyTenantInputEnvelope = {
    data: PolicyCreateManyTenantInput | PolicyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutTenantInput = {
    id?: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }

  export type AuditLogCreateManyTenantInputEnvelope = {
    data: AuditLogCreateManyTenantInput | AuditLogCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutTenantInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutTenantInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput>
  }

  export type ApiKeyCreateManyTenantInputEnvelope = {
    data: ApiKeyCreateManyTenantInput | ApiKeyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type WebhookCreateWithoutTenantInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitBreaker?: WebhookCircuitBreakerCreateNestedOneWithoutWebhookInput
    deliveries?: WebhookDeliveryCreateNestedManyWithoutWebhookInput
  }

  export type WebhookUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedCreateNestedOneWithoutWebhookInput
    deliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type WebhookCreateOrConnectWithoutTenantInput = {
    where: WebhookWhereUniqueInput
    create: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput>
  }

  export type WebhookCreateManyTenantInputEnvelope = {
    data: WebhookCreateManyTenantInput | WebhookCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type InternalEventCreateWithoutTenantInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
  }

  export type InternalEventUncheckedCreateWithoutTenantInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
  }

  export type InternalEventCreateOrConnectWithoutTenantInput = {
    where: InternalEventWhereUniqueInput
    create: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput>
  }

  export type InternalEventCreateManyTenantInputEnvelope = {
    data: InternalEventCreateManyTenantInput | InternalEventCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type OutboxEventCreateWithoutTenantInput = {
    id?: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type OutboxEventUncheckedCreateWithoutTenantInput = {
    id?: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type OutboxEventCreateOrConnectWithoutTenantInput = {
    where: OutboxEventWhereUniqueInput
    create: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput>
  }

  export type OutboxEventCreateManyTenantInputEnvelope = {
    data: OutboxEventCreateManyTenantInput | OutboxEventCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type WebhookDeliveryCreateWithoutTenantInput = {
    id?: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    webhook: WebhookCreateNestedOneWithoutDeliveriesInput
    retryHistories?: WebhookRetryHistoryCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryUncheckedCreateWithoutTenantInput = {
    id?: string
    webhookId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    retryHistories?: WebhookRetryHistoryUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryCreateOrConnectWithoutTenantInput = {
    where: WebhookDeliveryWhereUniqueInput
    create: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput>
  }

  export type WebhookDeliveryCreateManyTenantInputEnvelope = {
    data: WebhookDeliveryCreateManyTenantInput | WebhookDeliveryCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ConsentUpsertWithWhereUniqueWithoutTenantInput = {
    where: ConsentWhereUniqueInput
    update: XOR<ConsentUpdateWithoutTenantInput, ConsentUncheckedUpdateWithoutTenantInput>
    create: XOR<ConsentCreateWithoutTenantInput, ConsentUncheckedCreateWithoutTenantInput>
  }

  export type ConsentUpdateWithWhereUniqueWithoutTenantInput = {
    where: ConsentWhereUniqueInput
    data: XOR<ConsentUpdateWithoutTenantInput, ConsentUncheckedUpdateWithoutTenantInput>
  }

  export type ConsentUpdateManyWithWhereWithoutTenantInput = {
    where: ConsentScalarWhereInput
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyWithoutTenantInput>
  }

  export type ConsentScalarWhereInput = {
    AND?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
    OR?: ConsentScalarWhereInput[]
    NOT?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
    id?: StringFilter<"Consent"> | string
    tenantId?: StringFilter<"Consent"> | string
    userId?: StringFilter<"Consent"> | string
    policyId?: StringFilter<"Consent"> | string
    purpose?: StringFilter<"Consent"> | string
    status?: EnumConsentStatusFilter<"Consent"> | $Enums.ConsentStatus
    policyVersion?: IntFilter<"Consent"> | number
    createdAt?: DateTimeFilter<"Consent"> | Date | string
  }

  export type PolicyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutTenantInput, PolicyUncheckedUpdateWithoutTenantInput>
    create: XOR<PolicyCreateWithoutTenantInput, PolicyUncheckedCreateWithoutTenantInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutTenantInput, PolicyUncheckedUpdateWithoutTenantInput>
  }

  export type PolicyUpdateManyWithWhereWithoutTenantInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    OR?: PolicyScalarWhereInput[]
    NOT?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    id?: StringFilter<"Policy"> | string
    tenantId?: StringFilter<"Policy"> | string
    title?: StringFilter<"Policy"> | string
    purpose?: StringFilter<"Policy"> | string
    version?: IntFilter<"Policy"> | number
    content?: StringFilter<"Policy"> | string
    isActive?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutTenantInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutTenantInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    purpose?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutTenantInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutTenantInput, ApiKeyUncheckedUpdateWithoutTenantInput>
    create: XOR<ApiKeyCreateWithoutTenantInput, ApiKeyUncheckedCreateWithoutTenantInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutTenantInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutTenantInput, ApiKeyUncheckedUpdateWithoutTenantInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutTenantInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutTenantInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    tenantId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type WebhookUpsertWithWhereUniqueWithoutTenantInput = {
    where: WebhookWhereUniqueInput
    update: XOR<WebhookUpdateWithoutTenantInput, WebhookUncheckedUpdateWithoutTenantInput>
    create: XOR<WebhookCreateWithoutTenantInput, WebhookUncheckedCreateWithoutTenantInput>
  }

  export type WebhookUpdateWithWhereUniqueWithoutTenantInput = {
    where: WebhookWhereUniqueInput
    data: XOR<WebhookUpdateWithoutTenantInput, WebhookUncheckedUpdateWithoutTenantInput>
  }

  export type WebhookUpdateManyWithWhereWithoutTenantInput = {
    where: WebhookScalarWhereInput
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyWithoutTenantInput>
  }

  export type WebhookScalarWhereInput = {
    AND?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
    OR?: WebhookScalarWhereInput[]
    NOT?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
    id?: StringFilter<"Webhook"> | string
    tenantId?: StringFilter<"Webhook"> | string
    name?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    secret?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    isActive?: BoolFilter<"Webhook"> | boolean
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
  }

  export type InternalEventUpsertWithWhereUniqueWithoutTenantInput = {
    where: InternalEventWhereUniqueInput
    update: XOR<InternalEventUpdateWithoutTenantInput, InternalEventUncheckedUpdateWithoutTenantInput>
    create: XOR<InternalEventCreateWithoutTenantInput, InternalEventUncheckedCreateWithoutTenantInput>
  }

  export type InternalEventUpdateWithWhereUniqueWithoutTenantInput = {
    where: InternalEventWhereUniqueInput
    data: XOR<InternalEventUpdateWithoutTenantInput, InternalEventUncheckedUpdateWithoutTenantInput>
  }

  export type InternalEventUpdateManyWithWhereWithoutTenantInput = {
    where: InternalEventScalarWhereInput
    data: XOR<InternalEventUpdateManyMutationInput, InternalEventUncheckedUpdateManyWithoutTenantInput>
  }

  export type InternalEventScalarWhereInput = {
    AND?: InternalEventScalarWhereInput | InternalEventScalarWhereInput[]
    OR?: InternalEventScalarWhereInput[]
    NOT?: InternalEventScalarWhereInput | InternalEventScalarWhereInput[]
    id?: StringFilter<"InternalEvent"> | string
    tenantId?: StringFilter<"InternalEvent"> | string
    type?: StringFilter<"InternalEvent"> | string
    payload?: JsonFilter<"InternalEvent">
    status?: StringFilter<"InternalEvent"> | string
    createdAt?: DateTimeFilter<"InternalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"InternalEvent"> | Date | string
    dispatchedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"InternalEvent"> | Date | string | null
  }

  export type OutboxEventUpsertWithWhereUniqueWithoutTenantInput = {
    where: OutboxEventWhereUniqueInput
    update: XOR<OutboxEventUpdateWithoutTenantInput, OutboxEventUncheckedUpdateWithoutTenantInput>
    create: XOR<OutboxEventCreateWithoutTenantInput, OutboxEventUncheckedCreateWithoutTenantInput>
  }

  export type OutboxEventUpdateWithWhereUniqueWithoutTenantInput = {
    where: OutboxEventWhereUniqueInput
    data: XOR<OutboxEventUpdateWithoutTenantInput, OutboxEventUncheckedUpdateWithoutTenantInput>
  }

  export type OutboxEventUpdateManyWithWhereWithoutTenantInput = {
    where: OutboxEventScalarWhereInput
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyWithoutTenantInput>
  }

  export type OutboxEventScalarWhereInput = {
    AND?: OutboxEventScalarWhereInput | OutboxEventScalarWhereInput[]
    OR?: OutboxEventScalarWhereInput[]
    NOT?: OutboxEventScalarWhereInput | OutboxEventScalarWhereInput[]
    id?: StringFilter<"OutboxEvent"> | string
    tenantId?: StringFilter<"OutboxEvent"> | string
    eventType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringNullableFilter<"OutboxEvent"> | string | null
    payload?: JsonFilter<"OutboxEvent">
    status?: StringFilter<"OutboxEvent"> | string
    retryCount?: IntFilter<"OutboxEvent"> | number
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
  }

  export type WebhookDeliveryUpsertWithWhereUniqueWithoutTenantInput = {
    where: WebhookDeliveryWhereUniqueInput
    update: XOR<WebhookDeliveryUpdateWithoutTenantInput, WebhookDeliveryUncheckedUpdateWithoutTenantInput>
    create: XOR<WebhookDeliveryCreateWithoutTenantInput, WebhookDeliveryUncheckedCreateWithoutTenantInput>
  }

  export type WebhookDeliveryUpdateWithWhereUniqueWithoutTenantInput = {
    where: WebhookDeliveryWhereUniqueInput
    data: XOR<WebhookDeliveryUpdateWithoutTenantInput, WebhookDeliveryUncheckedUpdateWithoutTenantInput>
  }

  export type WebhookDeliveryUpdateManyWithWhereWithoutTenantInput = {
    where: WebhookDeliveryScalarWhereInput
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyWithoutTenantInput>
  }

  export type WebhookDeliveryScalarWhereInput = {
    AND?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    OR?: WebhookDeliveryScalarWhereInput[]
    NOT?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    tenantId?: StringFilter<"WebhookDelivery"> | string
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventId?: StringFilter<"WebhookDelivery"> | string
    attempt?: IntFilter<"WebhookDelivery"> | number
    status?: StringFilter<"WebhookDelivery"> | string
    httpStatus?: IntNullableFilter<"WebhookDelivery"> | number | null
    responseBody?: StringNullableFilter<"WebhookDelivery"> | string | null
    responseHeaders?: JsonNullableFilter<"WebhookDelivery">
    duration?: IntFilter<"WebhookDelivery"> | number
    errorMessage?: StringNullableFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
  }

  export type TenantCreateWithoutOutboxEventsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutOutboxEventsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutOutboxEventsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutOutboxEventsInput, TenantUncheckedCreateWithoutOutboxEventsInput>
  }

  export type TenantUpsertWithoutOutboxEventsInput = {
    update: XOR<TenantUpdateWithoutOutboxEventsInput, TenantUncheckedUpdateWithoutOutboxEventsInput>
    create: XOR<TenantCreateWithoutOutboxEventsInput, TenantUncheckedCreateWithoutOutboxEventsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutOutboxEventsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutOutboxEventsInput, TenantUncheckedUpdateWithoutOutboxEventsInput>
  }

  export type TenantUpdateWithoutOutboxEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutOutboxEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type WebhookCreateWithoutCircuitBreakerInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhooksInput
    deliveries?: WebhookDeliveryCreateNestedManyWithoutWebhookInput
  }

  export type WebhookUncheckedCreateWithoutCircuitBreakerInput = {
    id?: string
    tenantId: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type WebhookCreateOrConnectWithoutCircuitBreakerInput = {
    where: WebhookWhereUniqueInput
    create: XOR<WebhookCreateWithoutCircuitBreakerInput, WebhookUncheckedCreateWithoutCircuitBreakerInput>
  }

  export type WebhookUpsertWithoutCircuitBreakerInput = {
    update: XOR<WebhookUpdateWithoutCircuitBreakerInput, WebhookUncheckedUpdateWithoutCircuitBreakerInput>
    create: XOR<WebhookCreateWithoutCircuitBreakerInput, WebhookUncheckedCreateWithoutCircuitBreakerInput>
    where?: WebhookWhereInput
  }

  export type WebhookUpdateToOneWithWhereWithoutCircuitBreakerInput = {
    where?: WebhookWhereInput
    data: XOR<WebhookUpdateWithoutCircuitBreakerInput, WebhookUncheckedUpdateWithoutCircuitBreakerInput>
  }

  export type WebhookUpdateWithoutCircuitBreakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhooksNestedInput
    deliveries?: WebhookDeliveryUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookUncheckedUpdateWithoutCircuitBreakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type TenantCreateWithoutWebhookDeliveriesInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutWebhookDeliveriesInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutWebhookDeliveriesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutWebhookDeliveriesInput, TenantUncheckedCreateWithoutWebhookDeliveriesInput>
  }

  export type WebhookCreateWithoutDeliveriesInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhooksInput
    circuitBreaker?: WebhookCircuitBreakerCreateNestedOneWithoutWebhookInput
  }

  export type WebhookUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    tenantId: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedCreateNestedOneWithoutWebhookInput
  }

  export type WebhookCreateOrConnectWithoutDeliveriesInput = {
    where: WebhookWhereUniqueInput
    create: XOR<WebhookCreateWithoutDeliveriesInput, WebhookUncheckedCreateWithoutDeliveriesInput>
  }

  export type WebhookRetryHistoryCreateWithoutDeliveryInput = {
    id?: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
  }

  export type WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput = {
    id?: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
  }

  export type WebhookRetryHistoryCreateOrConnectWithoutDeliveryInput = {
    where: WebhookRetryHistoryWhereUniqueInput
    create: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput>
  }

  export type WebhookRetryHistoryCreateManyDeliveryInputEnvelope = {
    data: WebhookRetryHistoryCreateManyDeliveryInput | WebhookRetryHistoryCreateManyDeliveryInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutWebhookDeliveriesInput = {
    update: XOR<TenantUpdateWithoutWebhookDeliveriesInput, TenantUncheckedUpdateWithoutWebhookDeliveriesInput>
    create: XOR<TenantCreateWithoutWebhookDeliveriesInput, TenantUncheckedCreateWithoutWebhookDeliveriesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutWebhookDeliveriesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutWebhookDeliveriesInput, TenantUncheckedUpdateWithoutWebhookDeliveriesInput>
  }

  export type TenantUpdateWithoutWebhookDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutWebhookDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type WebhookUpsertWithoutDeliveriesInput = {
    update: XOR<WebhookUpdateWithoutDeliveriesInput, WebhookUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<WebhookCreateWithoutDeliveriesInput, WebhookUncheckedCreateWithoutDeliveriesInput>
    where?: WebhookWhereInput
  }

  export type WebhookUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: WebhookWhereInput
    data: XOR<WebhookUpdateWithoutDeliveriesInput, WebhookUncheckedUpdateWithoutDeliveriesInput>
  }

  export type WebhookUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhooksNestedInput
    circuitBreaker?: WebhookCircuitBreakerUpdateOneWithoutWebhookNestedInput
  }

  export type WebhookUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedUpdateOneWithoutWebhookNestedInput
  }

  export type WebhookRetryHistoryUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: WebhookRetryHistoryWhereUniqueInput
    update: XOR<WebhookRetryHistoryUpdateWithoutDeliveryInput, WebhookRetryHistoryUncheckedUpdateWithoutDeliveryInput>
    create: XOR<WebhookRetryHistoryCreateWithoutDeliveryInput, WebhookRetryHistoryUncheckedCreateWithoutDeliveryInput>
  }

  export type WebhookRetryHistoryUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: WebhookRetryHistoryWhereUniqueInput
    data: XOR<WebhookRetryHistoryUpdateWithoutDeliveryInput, WebhookRetryHistoryUncheckedUpdateWithoutDeliveryInput>
  }

  export type WebhookRetryHistoryUpdateManyWithWhereWithoutDeliveryInput = {
    where: WebhookRetryHistoryScalarWhereInput
    data: XOR<WebhookRetryHistoryUpdateManyMutationInput, WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryInput>
  }

  export type WebhookRetryHistoryScalarWhereInput = {
    AND?: WebhookRetryHistoryScalarWhereInput | WebhookRetryHistoryScalarWhereInput[]
    OR?: WebhookRetryHistoryScalarWhereInput[]
    NOT?: WebhookRetryHistoryScalarWhereInput | WebhookRetryHistoryScalarWhereInput[]
    id?: StringFilter<"WebhookRetryHistory"> | string
    deliveryId?: StringFilter<"WebhookRetryHistory"> | string
    attempt?: IntFilter<"WebhookRetryHistory"> | number
    reason?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    scheduledAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"WebhookRetryHistory"> | Date | string | null
    result?: StringNullableFilter<"WebhookRetryHistory"> | string | null
    createdAt?: DateTimeFilter<"WebhookRetryHistory"> | Date | string
  }

  export type WebhookDeliveryCreateWithoutRetryHistoriesInput = {
    id?: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhookDeliveriesInput
    webhook: WebhookCreateNestedOneWithoutDeliveriesInput
  }

  export type WebhookDeliveryUncheckedCreateWithoutRetryHistoriesInput = {
    id?: string
    tenantId: string
    webhookId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryCreateOrConnectWithoutRetryHistoriesInput = {
    where: WebhookDeliveryWhereUniqueInput
    create: XOR<WebhookDeliveryCreateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedCreateWithoutRetryHistoriesInput>
  }

  export type WebhookDeliveryUpsertWithoutRetryHistoriesInput = {
    update: XOR<WebhookDeliveryUpdateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedUpdateWithoutRetryHistoriesInput>
    create: XOR<WebhookDeliveryCreateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedCreateWithoutRetryHistoriesInput>
    where?: WebhookDeliveryWhereInput
  }

  export type WebhookDeliveryUpdateToOneWithWhereWithoutRetryHistoriesInput = {
    where?: WebhookDeliveryWhereInput
    data: XOR<WebhookDeliveryUpdateWithoutRetryHistoriesInput, WebhookDeliveryUncheckedUpdateWithoutRetryHistoriesInput>
  }

  export type WebhookDeliveryUpdateWithoutRetryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhookDeliveriesNestedInput
    webhook?: WebhookUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateWithoutRetryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutPoliciesInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPoliciesInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPoliciesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPoliciesInput, TenantUncheckedCreateWithoutPoliciesInput>
  }

  export type ConsentCreateWithoutPolicyInput = {
    id?: string
    userId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutConsentsInput
  }

  export type ConsentUncheckedCreateWithoutPolicyInput = {
    id?: string
    tenantId: string
    userId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type ConsentCreateOrConnectWithoutPolicyInput = {
    where: ConsentWhereUniqueInput
    create: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput>
  }

  export type ConsentCreateManyPolicyInputEnvelope = {
    data: ConsentCreateManyPolicyInput | ConsentCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutPoliciesInput = {
    update: XOR<TenantUpdateWithoutPoliciesInput, TenantUncheckedUpdateWithoutPoliciesInput>
    create: XOR<TenantCreateWithoutPoliciesInput, TenantUncheckedCreateWithoutPoliciesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPoliciesInput, TenantUncheckedUpdateWithoutPoliciesInput>
  }

  export type TenantUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ConsentUpsertWithWhereUniqueWithoutPolicyInput = {
    where: ConsentWhereUniqueInput
    update: XOR<ConsentUpdateWithoutPolicyInput, ConsentUncheckedUpdateWithoutPolicyInput>
    create: XOR<ConsentCreateWithoutPolicyInput, ConsentUncheckedCreateWithoutPolicyInput>
  }

  export type ConsentUpdateWithWhereUniqueWithoutPolicyInput = {
    where: ConsentWhereUniqueInput
    data: XOR<ConsentUpdateWithoutPolicyInput, ConsentUncheckedUpdateWithoutPolicyInput>
  }

  export type ConsentUpdateManyWithWhereWithoutPolicyInput = {
    where: ConsentScalarWhereInput
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyWithoutPolicyInput>
  }

  export type TenantCreateWithoutConsentsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutConsentsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutConsentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutConsentsInput, TenantUncheckedCreateWithoutConsentsInput>
  }

  export type PolicyCreateWithoutConsentsInput = {
    id?: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPoliciesInput
  }

  export type PolicyUncheckedCreateWithoutConsentsInput = {
    id?: string
    tenantId: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyCreateOrConnectWithoutConsentsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutConsentsInput, PolicyUncheckedCreateWithoutConsentsInput>
  }

  export type TenantUpsertWithoutConsentsInput = {
    update: XOR<TenantUpdateWithoutConsentsInput, TenantUncheckedUpdateWithoutConsentsInput>
    create: XOR<TenantCreateWithoutConsentsInput, TenantUncheckedCreateWithoutConsentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutConsentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutConsentsInput, TenantUncheckedUpdateWithoutConsentsInput>
  }

  export type TenantUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PolicyUpsertWithoutConsentsInput = {
    update: XOR<PolicyUpdateWithoutConsentsInput, PolicyUncheckedUpdateWithoutConsentsInput>
    create: XOR<PolicyCreateWithoutConsentsInput, PolicyUncheckedCreateWithoutConsentsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutConsentsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutConsentsInput, PolicyUncheckedUpdateWithoutConsentsInput>
  }

  export type PolicyUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type PolicyUncheckedUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAuditLogsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
  }

  export type TenantUpsertWithoutAuditLogsInput = {
    update: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
  }

  export type TenantUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutApiKeysInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutApiKeysInput, TenantUncheckedCreateWithoutApiKeysInput>
  }

  export type TenantUpsertWithoutApiKeysInput = {
    update: XOR<TenantUpdateWithoutApiKeysInput, TenantUncheckedUpdateWithoutApiKeysInput>
    create: XOR<TenantCreateWithoutApiKeysInput, TenantUncheckedCreateWithoutApiKeysInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutApiKeysInput, TenantUncheckedUpdateWithoutApiKeysInput>
  }

  export type TenantUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutWebhooksInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutWebhooksInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    internalEvents?: InternalEventUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutWebhooksInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutWebhooksInput, TenantUncheckedCreateWithoutWebhooksInput>
  }

  export type WebhookCircuitBreakerCreateWithoutWebhookInput = {
    id?: string
    state?: $Enums.CircuitBreakerState
    consecutiveFailures?: number
    openedAt?: Date | string | null
    lastTestedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput = {
    id?: string
    state?: $Enums.CircuitBreakerState
    consecutiveFailures?: number
    openedAt?: Date | string | null
    lastTestedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WebhookCircuitBreakerCreateOrConnectWithoutWebhookInput = {
    where: WebhookCircuitBreakerWhereUniqueInput
    create: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookDeliveryCreateWithoutWebhookInput = {
    id?: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWebhookDeliveriesInput
    retryHistories?: WebhookRetryHistoryCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryUncheckedCreateWithoutWebhookInput = {
    id?: string
    tenantId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
    retryHistories?: WebhookRetryHistoryUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type WebhookDeliveryCreateOrConnectWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    create: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookDeliveryCreateManyWebhookInputEnvelope = {
    data: WebhookDeliveryCreateManyWebhookInput | WebhookDeliveryCreateManyWebhookInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutWebhooksInput = {
    update: XOR<TenantUpdateWithoutWebhooksInput, TenantUncheckedUpdateWithoutWebhooksInput>
    create: XOR<TenantCreateWithoutWebhooksInput, TenantUncheckedCreateWithoutWebhooksInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutWebhooksInput, TenantUncheckedUpdateWithoutWebhooksInput>
  }

  export type TenantUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    internalEvents?: InternalEventUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type WebhookCircuitBreakerUpsertWithoutWebhookInput = {
    update: XOR<WebhookCircuitBreakerUpdateWithoutWebhookInput, WebhookCircuitBreakerUncheckedUpdateWithoutWebhookInput>
    create: XOR<WebhookCircuitBreakerCreateWithoutWebhookInput, WebhookCircuitBreakerUncheckedCreateWithoutWebhookInput>
    where?: WebhookCircuitBreakerWhereInput
  }

  export type WebhookCircuitBreakerUpdateToOneWithWhereWithoutWebhookInput = {
    where?: WebhookCircuitBreakerWhereInput
    data: XOR<WebhookCircuitBreakerUpdateWithoutWebhookInput, WebhookCircuitBreakerUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookCircuitBreakerUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookCircuitBreakerUncheckedUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumCircuitBreakerStateFieldUpdateOperationsInput | $Enums.CircuitBreakerState
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastTestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    update: XOR<WebhookDeliveryUpdateWithoutWebhookInput, WebhookDeliveryUncheckedUpdateWithoutWebhookInput>
    create: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    data: XOR<WebhookDeliveryUpdateWithoutWebhookInput, WebhookDeliveryUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput = {
    where: WebhookDeliveryScalarWhereInput
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyWithoutWebhookInput>
  }

  export type TenantCreateWithoutInternalEventsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentCreateNestedManyWithoutTenantInput
    policies?: PolicyCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTenantInput
    webhooks?: WebhookCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutInternalEventsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consents?: ConsentUncheckedCreateNestedManyWithoutTenantInput
    policies?: PolicyUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTenantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutTenantInput
    outboxEvents?: OutboxEventUncheckedCreateNestedManyWithoutTenantInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutInternalEventsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutInternalEventsInput, TenantUncheckedCreateWithoutInternalEventsInput>
  }

  export type TenantUpsertWithoutInternalEventsInput = {
    update: XOR<TenantUpdateWithoutInternalEventsInput, TenantUncheckedUpdateWithoutInternalEventsInput>
    create: XOR<TenantCreateWithoutInternalEventsInput, TenantUncheckedCreateWithoutInternalEventsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutInternalEventsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutInternalEventsInput, TenantUncheckedUpdateWithoutInternalEventsInput>
  }

  export type TenantUpdateWithoutInternalEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutTenantNestedInput
    policies?: PolicyUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutInternalEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutTenantNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTenantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutTenantNestedInput
    outboxEvents?: OutboxEventUncheckedUpdateManyWithoutTenantNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ConsentCreateManyTenantInput = {
    id?: string
    userId: string
    policyId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type PolicyCreateManyTenantInput = {
    id?: string
    title: string
    purpose: string
    version: number
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyTenantInput = {
    id?: string
    userId: string
    action: string
    purpose?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ApiKeyCreateManyTenantInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookCreateManyTenantInput = {
    id?: string
    name: string
    url: string
    secret: string
    events?: WebhookCreateeventsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InternalEventCreateManyTenantInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatchedAt?: Date | string | null
    processedAt?: Date | string | null
  }

  export type OutboxEventCreateManyTenantInput = {
    id?: string
    eventType: string
    aggregateId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type WebhookDeliveryCreateManyTenantInput = {
    id?: string
    webhookId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ConsentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutConsentsNestedInput
  }

  export type ConsentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consents?: ConsentUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitBreaker?: WebhookCircuitBreakerUpdateOneWithoutWebhookNestedInput
    deliveries?: WebhookDeliveryUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitBreaker?: WebhookCircuitBreakerUncheckedUpdateOneWithoutWebhookNestedInput
    deliveries?: WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalEventUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalEventUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalEventUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboxEventUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboxEventUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboxEventUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookDeliveryUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook?: WebhookUpdateOneRequiredWithoutDeliveriesNestedInput
    retryHistories?: WebhookRetryHistoryUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retryHistories?: WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryCreateManyDeliveryInput = {
    id?: string
    attempt: number
    reason?: string | null
    scheduledAt: Date | string
    executedAt?: Date | string | null
    result?: string | null
    createdAt?: Date | string
  }

  export type WebhookRetryHistoryUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentCreateManyPolicyInput = {
    id?: string
    tenantId: string
    userId: string
    purpose: string
    status: $Enums.ConsentStatus
    policyVersion: number
    createdAt?: Date | string
  }

  export type ConsentUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutConsentsNestedInput
  }

  export type ConsentUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateManyWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    status?: EnumConsentStatusFieldUpdateOperationsInput | $Enums.ConsentStatus
    policyVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateManyWebhookInput = {
    id?: string
    tenantId: string
    eventId: string
    attempt?: number
    status: string
    httpStatus?: number | null
    responseBody?: string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWebhookDeliveriesNestedInput
    retryHistories?: WebhookRetryHistoryUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retryHistories?: WebhookRetryHistoryUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    httpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseHeaders?: NullableJsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}