/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export type SchemaRecordStruct = {
  uuid: PromiseOrValue<BytesLike>;
  resolver: PromiseOrValue<string>;
  index: PromiseOrValue<BigNumberish>;
  schema: PromiseOrValue<BytesLike>;
};

export type SchemaRecordStructOutput = [string, string, BigNumber, string] & {
  uuid: string;
  resolver: string;
  index: BigNumber;
  schema: string;
};

export interface SchemaRegistryInterface extends utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "getSchema(bytes32)": FunctionFragment;
    "getSchemaCount()": FunctionFragment;
    "register(bytes,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "VERSION"
      | "getSchema"
      | "getSchemaCount"
      | "register"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSchema",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {
    "Registered(bytes32,uint256,bytes,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export interface RegisteredEventObject {
  uuid: string;
  index: BigNumber;
  schema: string;
  resolver: string;
  attester: string;
}
export type RegisteredEvent = TypedEvent<
  [string, BigNumber, string, string, string],
  RegisteredEventObject
>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface SchemaRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SchemaRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    getSchema(
      uuid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[SchemaRecordStructOutput]>;

    getSchemaCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    register(
      schema: PromiseOrValue<BytesLike>,
      resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  getSchema(
    uuid: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<SchemaRecordStructOutput>;

  getSchemaCount(overrides?: CallOverrides): Promise<BigNumber>;

  register(
    schema: PromiseOrValue<BytesLike>,
    resolver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    getSchema(
      uuid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<SchemaRecordStructOutput>;

    getSchemaCount(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      schema: PromiseOrValue<BytesLike>,
      resolver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Registered(bytes32,uint256,bytes,address,address)"(
      uuid?: PromiseOrValue<BytesLike> | null,
      index?: PromiseOrValue<BigNumberish> | null,
      schema?: null,
      resolver?: null,
      attester?: null
    ): RegisteredEventFilter;
    Registered(
      uuid?: PromiseOrValue<BytesLike> | null,
      index?: PromiseOrValue<BigNumberish> | null,
      schema?: null,
      resolver?: null,
      attester?: null
    ): RegisteredEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    getSchema(
      uuid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchemaCount(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      schema: PromiseOrValue<BytesLike>,
      resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSchema(
      uuid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchemaCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      schema: PromiseOrValue<BytesLike>,
      resolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}