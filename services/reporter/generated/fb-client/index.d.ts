
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FacebookEvent
 * 
 */
export type FacebookEvent = $Result.DefaultSelection<Prisma.$FacebookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FunnelStage: {
  top: 'top',
  bottom: 'bottom'
};

export type FunnelStage = (typeof FunnelStage)[keyof typeof FunnelStage]


export const Gender: {
  male: 'male',
  female: 'female',
  non_binary: 'non_binary'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Referrer: {
  newsfeed: 'newsfeed',
  marketplace: 'marketplace',
  groups: 'groups'
};

export type Referrer = (typeof Referrer)[keyof typeof Referrer]


export const ClickPosition: {
  top_left: 'top_left',
  bottom_right: 'bottom_right',
  center: 'center'
};

export type ClickPosition = (typeof ClickPosition)[keyof typeof ClickPosition]


export const Device: {
  mobile: 'mobile',
  desktop: 'desktop'
};

export type Device = (typeof Device)[keyof typeof Device]


export const Browser: {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Safari: 'Safari'
};

export type Browser = (typeof Browser)[keyof typeof Browser]

}

export type FunnelStage = $Enums.FunnelStage

export const FunnelStage: typeof $Enums.FunnelStage

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Referrer = $Enums.Referrer

export const Referrer: typeof $Enums.Referrer

export type ClickPosition = $Enums.ClickPosition

export const ClickPosition: typeof $Enums.ClickPosition

export type Device = $Enums.Device

export const Device: typeof $Enums.Device

export type Browser = $Enums.Browser

export const Browser: typeof $Enums.Browser

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FacebookEvents
 * const facebookEvents = await prisma.facebookEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FacebookEvents
   * const facebookEvents = await prisma.facebookEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facebookEvent`: Exposes CRUD operations for the **FacebookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEvents
    * const facebookEvents = await prisma.facebookEvent.findMany()
    * ```
    */
  get facebookEvent(): Prisma.FacebookEventDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    FacebookEvent: 'FacebookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facebookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FacebookEvent: {
        payload: Prisma.$FacebookEventPayload<ExtArgs>
        fields: Prisma.FacebookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findFirst: {
            args: Prisma.FacebookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findMany: {
            args: Prisma.FacebookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          create: {
            args: Prisma.FacebookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          createMany: {
            args: Prisma.FacebookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          delete: {
            args: Prisma.FacebookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          update: {
            args: Prisma.FacebookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          aggregate: {
            args: Prisma.FacebookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEvent>
          }
          groupBy: {
            args: Prisma.FacebookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEventCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    facebookEvent?: FacebookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model FacebookEvent
   */

  export type AggregateFacebookEvent = {
    _count: FacebookEventCountAggregateOutputType | null
    _avg: FacebookEventAvgAggregateOutputType | null
    _sum: FacebookEventSumAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  export type FacebookEventAvgAggregateOutputType = {
    userAge: number | null
  }

  export type FacebookEventSumAggregateOutputType = {
    userAge: number | null
  }

  export type FacebookEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    userId: string | null
    userName: string | null
    userAge: number | null
    userGender: $Enums.Gender | null
    userCountry: string | null
    userCity: string | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacebookEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    userId: string | null
    userName: string | null
    userAge: number | null
    userGender: $Enums.Gender | null
    userCountry: string | null
    userCity: string | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacebookEventCountAggregateOutputType = {
    id: number
    eventId: number
    timestamp: number
    source: number
    funnelStage: number
    eventType: number
    userId: number
    userName: number
    userAge: number
    userGender: number
    userCountry: number
    userCity: number
    actionTime: number
    referrer: number
    videoId: number
    adId: number
    campaignId: number
    clickPosition: number
    device: number
    browser: number
    purchaseAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacebookEventAvgAggregateInputType = {
    userAge?: true
  }

  export type FacebookEventSumAggregateInputType = {
    userAge?: true
  }

  export type FacebookEventMinAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacebookEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacebookEventCountAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacebookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvent to aggregate.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEvents
    **/
    _count?: true | FacebookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEventMaxAggregateInputType
  }

  export type GetFacebookEventAggregateType<T extends FacebookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEvent[P]>
      : GetScalarType<T[P], AggregateFacebookEvent[P]>
  }




  export type FacebookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEventWhereInput
    orderBy?: FacebookEventOrderByWithAggregationInput | FacebookEventOrderByWithAggregationInput[]
    by: FacebookEventScalarFieldEnum[] | FacebookEventScalarFieldEnum
    having?: FacebookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEventCountAggregateInputType | true
    _avg?: FacebookEventAvgAggregateInputType
    _sum?: FacebookEventSumAggregateInputType
    _min?: FacebookEventMinAggregateInputType
    _max?: FacebookEventMaxAggregateInputType
  }

  export type FacebookEventGroupByOutputType = {
    id: string
    eventId: string
    timestamp: Date
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    createdAt: Date
    updatedAt: Date
    _count: FacebookEventCountAggregateOutputType | null
    _avg: FacebookEventAvgAggregateOutputType | null
    _sum: FacebookEventSumAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  type GetFacebookEventGroupByPayload<T extends FacebookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacebookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "timestamp" | "source" | "funnelStage" | "eventType" | "userId" | "userName" | "userAge" | "userGender" | "userCountry" | "userCity" | "actionTime" | "referrer" | "videoId" | "adId" | "campaignId" | "clickPosition" | "device" | "browser" | "purchaseAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["facebookEvent"]>

  export type $FacebookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      timestamp: Date
      source: string
      funnelStage: $Enums.FunnelStage
      eventType: string
      userId: string
      userName: string
      userAge: number
      userGender: $Enums.Gender
      userCountry: string
      userCity: string
      actionTime: Date | null
      referrer: $Enums.Referrer | null
      videoId: string | null
      adId: string | null
      campaignId: string | null
      clickPosition: $Enums.ClickPosition | null
      device: $Enums.Device | null
      browser: $Enums.Browser | null
      purchaseAmount: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facebookEvent"]>
    composites: {}
  }

  type FacebookEventGetPayload<S extends boolean | null | undefined | FacebookEventDefaultArgs> = $Result.GetResult<Prisma.$FacebookEventPayload, S>

  type FacebookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEventCountAggregateInputType | true
    }

  export interface FacebookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEvent'], meta: { name: 'FacebookEvent' } }
    /**
     * Find zero or one FacebookEvent that matches the filter.
     * @param {FacebookEventFindUniqueArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEventFindUniqueArgs>(args: SelectSubset<T, FacebookEventFindUniqueArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEventFindUniqueOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEventFindFirstArgs>(args?: SelectSubset<T, FacebookEventFindFirstArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany()
     * 
     * // Get first 10 FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookEventFindManyArgs>(args?: SelectSubset<T, FacebookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEvent.
     * @param {FacebookEventCreateArgs} args - Arguments to create a FacebookEvent.
     * @example
     * // Create one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.create({
     *   data: {
     *     // ... data to create a FacebookEvent
     *   }
     * })
     * 
     */
    create<T extends FacebookEventCreateArgs>(args: SelectSubset<T, FacebookEventCreateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEvents.
     * @param {FacebookEventCreateManyArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEventCreateManyArgs>(args?: SelectSubset<T, FacebookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEvents and returns the data saved in the database.
     * @param {FacebookEventCreateManyAndReturnArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEvents and only return the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEvent.
     * @param {FacebookEventDeleteArgs} args - Arguments to delete one FacebookEvent.
     * @example
     * // Delete one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.delete({
     *   where: {
     *     // ... filter to delete one FacebookEvent
     *   }
     * })
     * 
     */
    delete<T extends FacebookEventDeleteArgs>(args: SelectSubset<T, FacebookEventDeleteArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEvent.
     * @param {FacebookEventUpdateArgs} args - Arguments to update one FacebookEvent.
     * @example
     * // Update one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEventUpdateArgs>(args: SelectSubset<T, FacebookEventUpdateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEvents.
     * @param {FacebookEventDeleteManyArgs} args - Arguments to filter FacebookEvents to delete.
     * @example
     * // Delete a few FacebookEvents
     * const { count } = await prisma.facebookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEventDeleteManyArgs>(args?: SelectSubset<T, FacebookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEventUpdateManyArgs>(args: SelectSubset<T, FacebookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents and returns the data updated in the database.
     * @param {FacebookEventUpdateManyAndReturnArgs} args - Arguments to update many FacebookEvents.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEvents and only return the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacebookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEvent.
     * @param {FacebookEventUpsertArgs} args - Arguments to update or create a FacebookEvent.
     * @example
     * // Update or create a FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.upsert({
     *   create: {
     *     // ... data to create a FacebookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEvent we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEventUpsertArgs>(args: SelectSubset<T, FacebookEventUpsertArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventCountArgs} args - Arguments to filter FacebookEvents to count.
     * @example
     * // Count the number of FacebookEvents
     * const count = await prisma.facebookEvent.count({
     *   where: {
     *     // ... the filter for the FacebookEvents we want to count
     *   }
     * })
    **/
    count<T extends FacebookEventCountArgs>(
      args?: Subset<T, FacebookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacebookEventAggregateArgs>(args: Subset<T, FacebookEventAggregateArgs>): Prisma.PrismaPromise<GetFacebookEventAggregateType<T>>

    /**
     * Group by FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventGroupByArgs} args - Group by arguments.
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
      T extends FacebookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEventGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacebookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEvent model
   */
  readonly fields: FacebookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FacebookEvent model
   */
  interface FacebookEventFieldRefs {
    readonly id: FieldRef<"FacebookEvent", 'String'>
    readonly eventId: FieldRef<"FacebookEvent", 'String'>
    readonly timestamp: FieldRef<"FacebookEvent", 'DateTime'>
    readonly source: FieldRef<"FacebookEvent", 'String'>
    readonly funnelStage: FieldRef<"FacebookEvent", 'FunnelStage'>
    readonly eventType: FieldRef<"FacebookEvent", 'String'>
    readonly userId: FieldRef<"FacebookEvent", 'String'>
    readonly userName: FieldRef<"FacebookEvent", 'String'>
    readonly userAge: FieldRef<"FacebookEvent", 'Int'>
    readonly userGender: FieldRef<"FacebookEvent", 'Gender'>
    readonly userCountry: FieldRef<"FacebookEvent", 'String'>
    readonly userCity: FieldRef<"FacebookEvent", 'String'>
    readonly actionTime: FieldRef<"FacebookEvent", 'DateTime'>
    readonly referrer: FieldRef<"FacebookEvent", 'Referrer'>
    readonly videoId: FieldRef<"FacebookEvent", 'String'>
    readonly adId: FieldRef<"FacebookEvent", 'String'>
    readonly campaignId: FieldRef<"FacebookEvent", 'String'>
    readonly clickPosition: FieldRef<"FacebookEvent", 'ClickPosition'>
    readonly device: FieldRef<"FacebookEvent", 'Device'>
    readonly browser: FieldRef<"FacebookEvent", 'Browser'>
    readonly purchaseAmount: FieldRef<"FacebookEvent", 'String'>
    readonly createdAt: FieldRef<"FacebookEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"FacebookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEvent findUnique
   */
  export type FacebookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findUniqueOrThrow
   */
  export type FacebookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findFirst
   */
  export type FacebookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findFirstOrThrow
   */
  export type FacebookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findMany
   */
  export type FacebookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter, which FacebookEvents to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent create
   */
  export type FacebookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a FacebookEvent.
     */
    data: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
  }

  /**
   * FacebookEvent createMany
   */
  export type FacebookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEvent createManyAndReturn
   */
  export type FacebookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEvent update
   */
  export type FacebookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a FacebookEvent.
     */
    data: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
    /**
     * Choose, which FacebookEvent to update.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent updateMany
   */
  export type FacebookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
  }

  /**
   * FacebookEvent updateManyAndReturn
   */
  export type FacebookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
  }

  /**
   * FacebookEvent upsert
   */
  export type FacebookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the FacebookEvent to update in case it exists.
     */
    where: FacebookEventWhereUniqueInput
    /**
     * In case the FacebookEvent found by the `where` argument doesn't exist, create a new FacebookEvent with this data.
     */
    create: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
    /**
     * In case the FacebookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
  }

  /**
   * FacebookEvent delete
   */
  export type FacebookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Filter which FacebookEvent to delete.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent deleteMany
   */
  export type FacebookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvents to delete
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to delete.
     */
    limit?: number
  }

  /**
   * FacebookEvent without action
   */
  export type FacebookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
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


  export const FacebookEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    timestamp: 'timestamp',
    source: 'source',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    userId: 'userId',
    userName: 'userName',
    userAge: 'userAge',
    userGender: 'userGender',
    userCountry: 'userCountry',
    userCity: 'userCity',
    actionTime: 'actionTime',
    referrer: 'referrer',
    videoId: 'videoId',
    adId: 'adId',
    campaignId: 'campaignId',
    clickPosition: 'clickPosition',
    device: 'device',
    browser: 'browser',
    purchaseAmount: 'purchaseAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacebookEventScalarFieldEnum = (typeof FacebookEventScalarFieldEnum)[keyof typeof FacebookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FunnelStage'
   */
  export type EnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage'>
    


  /**
   * Reference to a field of type 'FunnelStage[]'
   */
  export type ListEnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Referrer'
   */
  export type EnumReferrerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referrer'>
    


  /**
   * Reference to a field of type 'Referrer[]'
   */
  export type ListEnumReferrerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referrer[]'>
    


  /**
   * Reference to a field of type 'ClickPosition'
   */
  export type EnumClickPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClickPosition'>
    


  /**
   * Reference to a field of type 'ClickPosition[]'
   */
  export type ListEnumClickPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClickPosition[]'>
    


  /**
   * Reference to a field of type 'Device'
   */
  export type EnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device'>
    


  /**
   * Reference to a field of type 'Device[]'
   */
  export type ListEnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device[]'>
    


  /**
   * Reference to a field of type 'Browser'
   */
  export type EnumBrowserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Browser'>
    


  /**
   * Reference to a field of type 'Browser[]'
   */
  export type ListEnumBrowserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Browser[]'>
    


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


  export type FacebookEventWhereInput = {
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    id?: StringFilter<"FacebookEvent"> | string
    eventId?: StringFilter<"FacebookEvent"> | string
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    source?: StringFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: StringFilter<"FacebookEvent"> | string
    userId?: StringFilter<"FacebookEvent"> | string
    userName?: StringFilter<"FacebookEvent"> | string
    userAge?: IntFilter<"FacebookEvent"> | number
    userGender?: EnumGenderFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringFilter<"FacebookEvent"> | string
    userCity?: StringFilter<"FacebookEvent"> | string
    actionTime?: DateTimeNullableFilter<"FacebookEvent"> | Date | string | null
    referrer?: EnumReferrerNullableFilter<"FacebookEvent"> | $Enums.Referrer | null
    videoId?: StringNullableFilter<"FacebookEvent"> | string | null
    adId?: StringNullableFilter<"FacebookEvent"> | string | null
    campaignId?: StringNullableFilter<"FacebookEvent"> | string | null
    clickPosition?: EnumClickPositionNullableFilter<"FacebookEvent"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableFilter<"FacebookEvent"> | $Enums.Device | null
    browser?: EnumBrowserNullableFilter<"FacebookEvent"> | $Enums.Browser | null
    purchaseAmount?: StringNullableFilter<"FacebookEvent"> | string | null
    createdAt?: DateTimeFilter<"FacebookEvent"> | Date | string
    updatedAt?: DateTimeFilter<"FacebookEvent"> | Date | string
  }

  export type FacebookEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    actionTime?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    clickPosition?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacebookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    source?: StringFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: StringFilter<"FacebookEvent"> | string
    userId?: StringFilter<"FacebookEvent"> | string
    userName?: StringFilter<"FacebookEvent"> | string
    userAge?: IntFilter<"FacebookEvent"> | number
    userGender?: EnumGenderFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringFilter<"FacebookEvent"> | string
    userCity?: StringFilter<"FacebookEvent"> | string
    actionTime?: DateTimeNullableFilter<"FacebookEvent"> | Date | string | null
    referrer?: EnumReferrerNullableFilter<"FacebookEvent"> | $Enums.Referrer | null
    videoId?: StringNullableFilter<"FacebookEvent"> | string | null
    adId?: StringNullableFilter<"FacebookEvent"> | string | null
    campaignId?: StringNullableFilter<"FacebookEvent"> | string | null
    clickPosition?: EnumClickPositionNullableFilter<"FacebookEvent"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableFilter<"FacebookEvent"> | $Enums.Device | null
    browser?: EnumBrowserNullableFilter<"FacebookEvent"> | $Enums.Browser | null
    purchaseAmount?: StringNullableFilter<"FacebookEvent"> | string | null
    createdAt?: DateTimeFilter<"FacebookEvent"> | Date | string
    updatedAt?: DateTimeFilter<"FacebookEvent"> | Date | string
  }, "id" | "eventId">

  export type FacebookEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    actionTime?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    clickPosition?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacebookEventCountOrderByAggregateInput
    _avg?: FacebookEventAvgOrderByAggregateInput
    _max?: FacebookEventMaxOrderByAggregateInput
    _min?: FacebookEventMinOrderByAggregateInput
    _sum?: FacebookEventSumOrderByAggregateInput
  }

  export type FacebookEventScalarWhereWithAggregatesInput = {
    AND?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    OR?: FacebookEventScalarWhereWithAggregatesInput[]
    NOT?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacebookEvent"> | string
    eventId?: StringWithAggregatesFilter<"FacebookEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"FacebookEvent"> | Date | string
    source?: StringWithAggregatesFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageWithAggregatesFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userId?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userName?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userAge?: IntWithAggregatesFilter<"FacebookEvent"> | number
    userGender?: EnumGenderWithAggregatesFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userCity?: StringWithAggregatesFilter<"FacebookEvent"> | string
    actionTime?: DateTimeNullableWithAggregatesFilter<"FacebookEvent"> | Date | string | null
    referrer?: EnumReferrerNullableWithAggregatesFilter<"FacebookEvent"> | $Enums.Referrer | null
    videoId?: StringNullableWithAggregatesFilter<"FacebookEvent"> | string | null
    adId?: StringNullableWithAggregatesFilter<"FacebookEvent"> | string | null
    campaignId?: StringNullableWithAggregatesFilter<"FacebookEvent"> | string | null
    clickPosition?: EnumClickPositionNullableWithAggregatesFilter<"FacebookEvent"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableWithAggregatesFilter<"FacebookEvent"> | $Enums.Device | null
    browser?: EnumBrowserNullableWithAggregatesFilter<"FacebookEvent"> | $Enums.Browser | null
    purchaseAmount?: StringNullableWithAggregatesFilter<"FacebookEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FacebookEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacebookEvent"> | Date | string
  }

  export type FacebookEventCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacebookEventUncheckedCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacebookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookEventCreateManyInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacebookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type EnumReferrerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableFilter<$PrismaModel> | $Enums.Referrer | null
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

  export type EnumClickPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableFilter<$PrismaModel> | $Enums.ClickPosition | null
  }

  export type EnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
  }

  export type EnumBrowserNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableFilter<$PrismaModel> | $Enums.Browser | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacebookEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacebookEventAvgOrderByAggregateInput = {
    userAge?: SortOrder
  }

  export type FacebookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacebookEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacebookEventSumOrderByAggregateInput = {
    userAge?: SortOrder
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

  export type EnumFunnelStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel> | $Enums.FunnelStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunnelStageFilter<$PrismaModel>
    _max?: NestedEnumFunnelStageFilter<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type EnumReferrerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Referrer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReferrerNullableFilter<$PrismaModel>
    _max?: NestedEnumReferrerNullableFilter<$PrismaModel>
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

  export type EnumClickPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClickPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumClickPositionNullableFilter<$PrismaModel>
  }

  export type EnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
  }

  export type EnumBrowserNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel> | $Enums.Browser | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBrowserNullableFilter<$PrismaModel>
    _max?: NestedEnumBrowserNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFunnelStageFieldUpdateOperationsInput = {
    set?: $Enums.FunnelStage
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumReferrerFieldUpdateOperationsInput = {
    set?: $Enums.Referrer | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumClickPositionFieldUpdateOperationsInput = {
    set?: $Enums.ClickPosition | null
  }

  export type NullableEnumDeviceFieldUpdateOperationsInput = {
    set?: $Enums.Device | null
  }

  export type NullableEnumBrowserFieldUpdateOperationsInput = {
    set?: $Enums.Browser | null
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

  export type NestedEnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumReferrerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableFilter<$PrismaModel> | $Enums.Referrer | null
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

  export type NestedEnumClickPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableFilter<$PrismaModel> | $Enums.ClickPosition | null
  }

  export type NestedEnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
  }

  export type NestedEnumBrowserNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableFilter<$PrismaModel> | $Enums.Browser | null
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

  export type NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel> | $Enums.FunnelStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunnelStageFilter<$PrismaModel>
    _max?: NestedEnumFunnelStageFilter<$PrismaModel>
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Referrer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReferrerNullableFilter<$PrismaModel>
    _max?: NestedEnumReferrerNullableFilter<$PrismaModel>
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

  export type NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClickPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumClickPositionNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
  }

  export type NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel> | $Enums.Browser | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBrowserNullableFilter<$PrismaModel>
    _max?: NestedEnumBrowserNullableFilter<$PrismaModel>
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