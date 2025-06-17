
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
 * Model TiktokEvent
 * 
 */
export type TiktokEvent = $Result.DefaultSelection<Prisma.$TiktokEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FunnelStage: {
  top: 'top',
  bottom: 'bottom'
};

export type FunnelStage = (typeof FunnelStage)[keyof typeof FunnelStage]


export const Device: {
  Android: 'Android',
  iOS: 'iOS',
  Desktop: 'Desktop'
};

export type Device = (typeof Device)[keyof typeof Device]

}

export type FunnelStage = $Enums.FunnelStage

export const FunnelStage: typeof $Enums.FunnelStage

export type Device = $Enums.Device

export const Device: typeof $Enums.Device

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TiktokEvents
 * const tiktokEvents = await prisma.tiktokEvent.findMany()
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
   * // Fetch zero or more TiktokEvents
   * const tiktokEvents = await prisma.tiktokEvent.findMany()
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
   * `prisma.tiktokEvent`: Exposes CRUD operations for the **TiktokEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokEvents
    * const tiktokEvents = await prisma.tiktokEvent.findMany()
    * ```
    */
  get tiktokEvent(): Prisma.TiktokEventDelegate<ExtArgs, ClientOptions>;
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
    TiktokEvent: 'TiktokEvent'
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
      modelProps: "tiktokEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TiktokEvent: {
        payload: Prisma.$TiktokEventPayload<ExtArgs>
        fields: Prisma.TiktokEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          findFirst: {
            args: Prisma.TiktokEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          findMany: {
            args: Prisma.TiktokEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          create: {
            args: Prisma.TiktokEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          createMany: {
            args: Prisma.TiktokEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          delete: {
            args: Prisma.TiktokEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          update: {
            args: Prisma.TiktokEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          deleteMany: {
            args: Prisma.TiktokEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          upsert: {
            args: Prisma.TiktokEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          aggregate: {
            args: Prisma.TiktokEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokEvent>
          }
          groupBy: {
            args: Prisma.TiktokEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokEventCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokEventCountAggregateOutputType> | number
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
    tiktokEvent?: TiktokEventOmit
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
   * Model TiktokEvent
   */

  export type AggregateTiktokEvent = {
    _count: TiktokEventCountAggregateOutputType | null
    _avg: TiktokEventAvgAggregateOutputType | null
    _sum: TiktokEventSumAggregateOutputType | null
    _min: TiktokEventMinAggregateOutputType | null
    _max: TiktokEventMaxAggregateOutputType | null
  }

  export type TiktokEventAvgAggregateOutputType = {
    followers: number | null
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEventSumAggregateOutputType = {
    followers: number | null
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    userId: string | null
    username: string | null
    followers: number | null
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.Device | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiktokEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    userId: string | null
    username: string | null
    followers: number | null
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.Device | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiktokEventCountAggregateOutputType = {
    id: number
    eventId: number
    timestamp: number
    source: number
    funnelStage: number
    eventType: number
    userId: number
    username: number
    followers: number
    watchTime: number
    percentageWatched: number
    device: number
    country: number
    videoId: number
    actionTime: number
    profileId: number
    purchasedItem: number
    purchaseAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TiktokEventAvgAggregateInputType = {
    followers?: true
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEventSumAggregateInputType = {
    followers?: true
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEventMinAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    username?: true
    followers?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiktokEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    username?: true
    followers?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiktokEventCountAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    username?: true
    followers?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TiktokEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEvent to aggregate.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokEvents
    **/
    _count?: true | TiktokEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokEventMaxAggregateInputType
  }

  export type GetTiktokEventAggregateType<T extends TiktokEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokEvent[P]>
      : GetScalarType<T[P], AggregateTiktokEvent[P]>
  }




  export type TiktokEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEventWhereInput
    orderBy?: TiktokEventOrderByWithAggregationInput | TiktokEventOrderByWithAggregationInput[]
    by: TiktokEventScalarFieldEnum[] | TiktokEventScalarFieldEnum
    having?: TiktokEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokEventCountAggregateInputType | true
    _avg?: TiktokEventAvgAggregateInputType
    _sum?: TiktokEventSumAggregateInputType
    _min?: TiktokEventMinAggregateInputType
    _max?: TiktokEventMaxAggregateInputType
  }

  export type TiktokEventGroupByOutputType = {
    id: string
    eventId: string
    timestamp: Date
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    username: string
    followers: number
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.Device | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
    createdAt: Date
    updatedAt: Date
    _count: TiktokEventCountAggregateOutputType | null
    _avg: TiktokEventAvgAggregateOutputType | null
    _sum: TiktokEventSumAggregateOutputType | null
    _min: TiktokEventMinAggregateOutputType | null
    _max: TiktokEventMaxAggregateOutputType | null
  }

  type GetTiktokEventGroupByPayload<T extends TiktokEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokEventGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokEventGroupByOutputType[P]>
        }
      >
    >


  export type TiktokEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TiktokEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "timestamp" | "source" | "funnelStage" | "eventType" | "userId" | "username" | "followers" | "watchTime" | "percentageWatched" | "device" | "country" | "videoId" | "actionTime" | "profileId" | "purchasedItem" | "purchaseAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["tiktokEvent"]>

  export type $TiktokEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      timestamp: Date
      source: string
      funnelStage: $Enums.FunnelStage
      eventType: string
      userId: string
      username: string
      followers: number
      watchTime: number | null
      percentageWatched: number | null
      device: $Enums.Device | null
      country: string | null
      videoId: string | null
      actionTime: Date | null
      profileId: string | null
      purchasedItem: string | null
      purchaseAmount: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tiktokEvent"]>
    composites: {}
  }

  type TiktokEventGetPayload<S extends boolean | null | undefined | TiktokEventDefaultArgs> = $Result.GetResult<Prisma.$TiktokEventPayload, S>

  type TiktokEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokEventCountAggregateInputType | true
    }

  export interface TiktokEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokEvent'], meta: { name: 'TiktokEvent' } }
    /**
     * Find zero or one TiktokEvent that matches the filter.
     * @param {TiktokEventFindUniqueArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokEventFindUniqueArgs>(args: SelectSubset<T, TiktokEventFindUniqueArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokEventFindUniqueOrThrowArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindFirstArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokEventFindFirstArgs>(args?: SelectSubset<T, TiktokEventFindFirstArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindFirstOrThrowArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokEvents
     * const tiktokEvents = await prisma.tiktokEvent.findMany()
     * 
     * // Get first 10 TiktokEvents
     * const tiktokEvents = await prisma.tiktokEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokEventWithIdOnly = await prisma.tiktokEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokEventFindManyArgs>(args?: SelectSubset<T, TiktokEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokEvent.
     * @param {TiktokEventCreateArgs} args - Arguments to create a TiktokEvent.
     * @example
     * // Create one TiktokEvent
     * const TiktokEvent = await prisma.tiktokEvent.create({
     *   data: {
     *     // ... data to create a TiktokEvent
     *   }
     * })
     * 
     */
    create<T extends TiktokEventCreateArgs>(args: SelectSubset<T, TiktokEventCreateArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokEvents.
     * @param {TiktokEventCreateManyArgs} args - Arguments to create many TiktokEvents.
     * @example
     * // Create many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokEventCreateManyArgs>(args?: SelectSubset<T, TiktokEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokEvents and returns the data saved in the database.
     * @param {TiktokEventCreateManyAndReturnArgs} args - Arguments to create many TiktokEvents.
     * @example
     * // Create many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokEvents and only return the `id`
     * const tiktokEventWithIdOnly = await prisma.tiktokEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokEvent.
     * @param {TiktokEventDeleteArgs} args - Arguments to delete one TiktokEvent.
     * @example
     * // Delete one TiktokEvent
     * const TiktokEvent = await prisma.tiktokEvent.delete({
     *   where: {
     *     // ... filter to delete one TiktokEvent
     *   }
     * })
     * 
     */
    delete<T extends TiktokEventDeleteArgs>(args: SelectSubset<T, TiktokEventDeleteArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokEvent.
     * @param {TiktokEventUpdateArgs} args - Arguments to update one TiktokEvent.
     * @example
     * // Update one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokEventUpdateArgs>(args: SelectSubset<T, TiktokEventUpdateArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokEvents.
     * @param {TiktokEventDeleteManyArgs} args - Arguments to filter TiktokEvents to delete.
     * @example
     * // Delete a few TiktokEvents
     * const { count } = await prisma.tiktokEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokEventDeleteManyArgs>(args?: SelectSubset<T, TiktokEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokEventUpdateManyArgs>(args: SelectSubset<T, TiktokEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEvents and returns the data updated in the database.
     * @param {TiktokEventUpdateManyAndReturnArgs} args - Arguments to update many TiktokEvents.
     * @example
     * // Update many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokEvents and only return the `id`
     * const tiktokEventWithIdOnly = await prisma.tiktokEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends TiktokEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokEvent.
     * @param {TiktokEventUpsertArgs} args - Arguments to update or create a TiktokEvent.
     * @example
     * // Update or create a TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.upsert({
     *   create: {
     *     // ... data to create a TiktokEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokEvent we want to update
     *   }
     * })
     */
    upsert<T extends TiktokEventUpsertArgs>(args: SelectSubset<T, TiktokEventUpsertArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventCountArgs} args - Arguments to filter TiktokEvents to count.
     * @example
     * // Count the number of TiktokEvents
     * const count = await prisma.tiktokEvent.count({
     *   where: {
     *     // ... the filter for the TiktokEvents we want to count
     *   }
     * })
    **/
    count<T extends TiktokEventCountArgs>(
      args?: Subset<T, TiktokEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TiktokEventAggregateArgs>(args: Subset<T, TiktokEventAggregateArgs>): Prisma.PrismaPromise<GetTiktokEventAggregateType<T>>

    /**
     * Group by TiktokEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventGroupByArgs} args - Group by arguments.
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
      T extends TiktokEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokEventGroupByArgs['orderBy'] }
        : { orderBy?: TiktokEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TiktokEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokEvent model
   */
  readonly fields: TiktokEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TiktokEvent model
   */
  interface TiktokEventFieldRefs {
    readonly id: FieldRef<"TiktokEvent", 'String'>
    readonly eventId: FieldRef<"TiktokEvent", 'String'>
    readonly timestamp: FieldRef<"TiktokEvent", 'DateTime'>
    readonly source: FieldRef<"TiktokEvent", 'String'>
    readonly funnelStage: FieldRef<"TiktokEvent", 'FunnelStage'>
    readonly eventType: FieldRef<"TiktokEvent", 'String'>
    readonly userId: FieldRef<"TiktokEvent", 'String'>
    readonly username: FieldRef<"TiktokEvent", 'String'>
    readonly followers: FieldRef<"TiktokEvent", 'Int'>
    readonly watchTime: FieldRef<"TiktokEvent", 'Int'>
    readonly percentageWatched: FieldRef<"TiktokEvent", 'Int'>
    readonly device: FieldRef<"TiktokEvent", 'Device'>
    readonly country: FieldRef<"TiktokEvent", 'String'>
    readonly videoId: FieldRef<"TiktokEvent", 'String'>
    readonly actionTime: FieldRef<"TiktokEvent", 'DateTime'>
    readonly profileId: FieldRef<"TiktokEvent", 'String'>
    readonly purchasedItem: FieldRef<"TiktokEvent", 'String'>
    readonly purchaseAmount: FieldRef<"TiktokEvent", 'String'>
    readonly createdAt: FieldRef<"TiktokEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"TiktokEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TiktokEvent findUnique
   */
  export type TiktokEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent findUniqueOrThrow
   */
  export type TiktokEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent findFirst
   */
  export type TiktokEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEvents.
     */
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent findFirstOrThrow
   */
  export type TiktokEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEvents.
     */
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent findMany
   */
  export type TiktokEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter, which TiktokEvents to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent create
   */
  export type TiktokEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data needed to create a TiktokEvent.
     */
    data: XOR<TiktokEventCreateInput, TiktokEventUncheckedCreateInput>
  }

  /**
   * TiktokEvent createMany
   */
  export type TiktokEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokEvents.
     */
    data: TiktokEventCreateManyInput | TiktokEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEvent createManyAndReturn
   */
  export type TiktokEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokEvents.
     */
    data: TiktokEventCreateManyInput | TiktokEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEvent update
   */
  export type TiktokEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data needed to update a TiktokEvent.
     */
    data: XOR<TiktokEventUpdateInput, TiktokEventUncheckedUpdateInput>
    /**
     * Choose, which TiktokEvent to update.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent updateMany
   */
  export type TiktokEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokEvents.
     */
    data: XOR<TiktokEventUpdateManyMutationInput, TiktokEventUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEvents to update
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to update.
     */
    limit?: number
  }

  /**
   * TiktokEvent updateManyAndReturn
   */
  export type TiktokEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data used to update TiktokEvents.
     */
    data: XOR<TiktokEventUpdateManyMutationInput, TiktokEventUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEvents to update
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to update.
     */
    limit?: number
  }

  /**
   * TiktokEvent upsert
   */
  export type TiktokEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The filter to search for the TiktokEvent to update in case it exists.
     */
    where: TiktokEventWhereUniqueInput
    /**
     * In case the TiktokEvent found by the `where` argument doesn't exist, create a new TiktokEvent with this data.
     */
    create: XOR<TiktokEventCreateInput, TiktokEventUncheckedCreateInput>
    /**
     * In case the TiktokEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokEventUpdateInput, TiktokEventUncheckedUpdateInput>
  }

  /**
   * TiktokEvent delete
   */
  export type TiktokEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Filter which TiktokEvent to delete.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent deleteMany
   */
  export type TiktokEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEvents to delete
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to delete.
     */
    limit?: number
  }

  /**
   * TiktokEvent without action
   */
  export type TiktokEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
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


  export const TiktokEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    timestamp: 'timestamp',
    source: 'source',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    userId: 'userId',
    username: 'username',
    followers: 'followers',
    watchTime: 'watchTime',
    percentageWatched: 'percentageWatched',
    device: 'device',
    country: 'country',
    videoId: 'videoId',
    actionTime: 'actionTime',
    profileId: 'profileId',
    purchasedItem: 'purchasedItem',
    purchaseAmount: 'purchaseAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TiktokEventScalarFieldEnum = (typeof TiktokEventScalarFieldEnum)[keyof typeof TiktokEventScalarFieldEnum]


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
   * Reference to a field of type 'Device'
   */
  export type EnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device'>
    


  /**
   * Reference to a field of type 'Device[]'
   */
  export type ListEnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device[]'>
    


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


  export type TiktokEventWhereInput = {
    AND?: TiktokEventWhereInput | TiktokEventWhereInput[]
    OR?: TiktokEventWhereInput[]
    NOT?: TiktokEventWhereInput | TiktokEventWhereInput[]
    id?: StringFilter<"TiktokEvent"> | string
    eventId?: StringFilter<"TiktokEvent"> | string
    timestamp?: DateTimeFilter<"TiktokEvent"> | Date | string
    source?: StringFilter<"TiktokEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"TiktokEvent"> | $Enums.FunnelStage
    eventType?: StringFilter<"TiktokEvent"> | string
    userId?: StringFilter<"TiktokEvent"> | string
    username?: StringFilter<"TiktokEvent"> | string
    followers?: IntFilter<"TiktokEvent"> | number
    watchTime?: IntNullableFilter<"TiktokEvent"> | number | null
    percentageWatched?: IntNullableFilter<"TiktokEvent"> | number | null
    device?: EnumDeviceNullableFilter<"TiktokEvent"> | $Enums.Device | null
    country?: StringNullableFilter<"TiktokEvent"> | string | null
    videoId?: StringNullableFilter<"TiktokEvent"> | string | null
    actionTime?: DateTimeNullableFilter<"TiktokEvent"> | Date | string | null
    profileId?: StringNullableFilter<"TiktokEvent"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEvent"> | string | null
    purchaseAmount?: StringNullableFilter<"TiktokEvent"> | string | null
    createdAt?: DateTimeFilter<"TiktokEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TiktokEvent"> | Date | string
  }

  export type TiktokEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    watchTime?: SortOrderInput | SortOrder
    percentageWatched?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    actionTime?: SortOrderInput | SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiktokEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: TiktokEventWhereInput | TiktokEventWhereInput[]
    OR?: TiktokEventWhereInput[]
    NOT?: TiktokEventWhereInput | TiktokEventWhereInput[]
    timestamp?: DateTimeFilter<"TiktokEvent"> | Date | string
    source?: StringFilter<"TiktokEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"TiktokEvent"> | $Enums.FunnelStage
    eventType?: StringFilter<"TiktokEvent"> | string
    userId?: StringFilter<"TiktokEvent"> | string
    username?: StringFilter<"TiktokEvent"> | string
    followers?: IntFilter<"TiktokEvent"> | number
    watchTime?: IntNullableFilter<"TiktokEvent"> | number | null
    percentageWatched?: IntNullableFilter<"TiktokEvent"> | number | null
    device?: EnumDeviceNullableFilter<"TiktokEvent"> | $Enums.Device | null
    country?: StringNullableFilter<"TiktokEvent"> | string | null
    videoId?: StringNullableFilter<"TiktokEvent"> | string | null
    actionTime?: DateTimeNullableFilter<"TiktokEvent"> | Date | string | null
    profileId?: StringNullableFilter<"TiktokEvent"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEvent"> | string | null
    purchaseAmount?: StringNullableFilter<"TiktokEvent"> | string | null
    createdAt?: DateTimeFilter<"TiktokEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TiktokEvent"> | Date | string
  }, "id" | "eventId">

  export type TiktokEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    watchTime?: SortOrderInput | SortOrder
    percentageWatched?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    actionTime?: SortOrderInput | SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TiktokEventCountOrderByAggregateInput
    _avg?: TiktokEventAvgOrderByAggregateInput
    _max?: TiktokEventMaxOrderByAggregateInput
    _min?: TiktokEventMinOrderByAggregateInput
    _sum?: TiktokEventSumOrderByAggregateInput
  }

  export type TiktokEventScalarWhereWithAggregatesInput = {
    AND?: TiktokEventScalarWhereWithAggregatesInput | TiktokEventScalarWhereWithAggregatesInput[]
    OR?: TiktokEventScalarWhereWithAggregatesInput[]
    NOT?: TiktokEventScalarWhereWithAggregatesInput | TiktokEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiktokEvent"> | string
    eventId?: StringWithAggregatesFilter<"TiktokEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TiktokEvent"> | Date | string
    source?: StringWithAggregatesFilter<"TiktokEvent"> | string
    funnelStage?: EnumFunnelStageWithAggregatesFilter<"TiktokEvent"> | $Enums.FunnelStage
    eventType?: StringWithAggregatesFilter<"TiktokEvent"> | string
    userId?: StringWithAggregatesFilter<"TiktokEvent"> | string
    username?: StringWithAggregatesFilter<"TiktokEvent"> | string
    followers?: IntWithAggregatesFilter<"TiktokEvent"> | number
    watchTime?: IntNullableWithAggregatesFilter<"TiktokEvent"> | number | null
    percentageWatched?: IntNullableWithAggregatesFilter<"TiktokEvent"> | number | null
    device?: EnumDeviceNullableWithAggregatesFilter<"TiktokEvent"> | $Enums.Device | null
    country?: StringNullableWithAggregatesFilter<"TiktokEvent"> | string | null
    videoId?: StringNullableWithAggregatesFilter<"TiktokEvent"> | string | null
    actionTime?: DateTimeNullableWithAggregatesFilter<"TiktokEvent"> | Date | string | null
    profileId?: StringNullableWithAggregatesFilter<"TiktokEvent"> | string | null
    purchasedItem?: StringNullableWithAggregatesFilter<"TiktokEvent"> | string | null
    purchaseAmount?: StringNullableWithAggregatesFilter<"TiktokEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TiktokEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TiktokEvent"> | Date | string
  }

  export type TiktokEventCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    username: string
    followers: number
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.Device | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiktokEventUncheckedCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    username: string
    followers: number
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.Device | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiktokEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokEventCreateManyInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source?: string
    funnelStage: $Enums.FunnelStage
    eventType: string
    userId: string
    username: string
    followers: number
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.Device | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiktokEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TiktokEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiktokEventAvgOrderByAggregateInput = {
    followers?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
  }

  export type TiktokEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiktokEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiktokEventSumOrderByAggregateInput = {
    followers?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
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

  export type EnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumDeviceFieldUpdateOperationsInput = {
    set?: $Enums.Device | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedEnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
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

  export type NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
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