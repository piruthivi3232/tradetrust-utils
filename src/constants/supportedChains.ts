import { networkName, networkType, networkCurrency } from "./network";
import { iconEthereum, iconPolygon, iconXDC } from "../static/icons";

export enum CHAIN_ID {
  local = "1337",
  mainnet = "1",
  matic = "137",
  maticmum = "80001",
  sepolia = "11155111",
  xdc = "50",
  xdcapothem = "51",
}

export type chainInfo = {
  id: CHAIN_ID;
  label: string;
  name: networkName;
  type: networkType;
  currency: networkCurrency;
  iconImage: string;
  explorerUrl: string;
  explorerApiUrl?: string;
  rpcUrl?: string;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
};

type supportedChains = Record<CHAIN_ID, chainInfo>;

export const SUPPORTED_CHAINS: supportedChains = {
  [CHAIN_ID.local]: {
    id: CHAIN_ID.local,
    label: "Local",
    name: "local",
    type: "development",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://localhost/explorer",
    rpcUrl: "http://localhost:8545",
  },
  [CHAIN_ID.mainnet]: {
    id: CHAIN_ID.mainnet,
    label: "Mainnet",
    name: "mainnet",
    type: "production",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://etherscan.io",
    explorerApiUrl: "https://api.etherscan.io",
  },
  [CHAIN_ID.matic]: {
    id: CHAIN_ID.matic,
    label: "Polygon",
    name: "matic",
    type: "production",
    currency: "MATIC",
    iconImage: iconPolygon,
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
  },
  [CHAIN_ID.maticmum]: {
    id: CHAIN_ID.maticmum,
    label: "Polygon Mumbai",
    name: "maticmum",
    type: "test",
    currency: "MATIC",
    iconImage: iconPolygon,
    explorerUrl: "https://mumbai.polygonscan.com",
    explorerApiUrl: "https://api-testnet.polygonscan.com",
    rpcUrl: "https://rpc-mumbai.matic.today",
    nativeCurrency: {
      name: "MATIC",
      symbol: "mMATIC",
      decimals: 18,
    },
  },
  [CHAIN_ID.sepolia]: {
    id: CHAIN_ID.sepolia,
    label: "Sepolia",
    name: "sepolia",
    type: "test",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",
    nativeCurrency: {
      name: "ETH",
      symbol: "sepETH",
      decimals: 18,
    },
  },
  [CHAIN_ID.xdc]: {
    id: CHAIN_ID.xdc,
    label: "XDC Network",
    name: "xdc",
    type: "production",
    currency: "XDC",
    iconImage: iconXDC,
    explorerUrl: "https://xdcscan.io",
    rpcUrl: "https://erpc.xinfin.network",
    nativeCurrency: {
      name: "XDC",
      symbol: "XDC",
      decimals: 18,
    },
  },
  [CHAIN_ID.xdcapothem]: {
    id: CHAIN_ID.xdcapothem,
    label: "Apothem Network",
    name: "xdcapothem",
    type: "test",
    currency: "XDC",
    iconImage: iconXDC,
    explorerUrl: "https://apothem.xdcscan.io",
    rpcUrl: "https://erpc.apothem.network",
    nativeCurrency: {
      name: "XDC",
      symbol: "XDC",
      decimals: 18,
    },
  },
};
