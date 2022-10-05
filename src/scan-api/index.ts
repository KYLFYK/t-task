import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.etherscan.io/api',
  params: {
    apikey: 'D4IYNUDMPJID1643AECQ9U8BMNW6P5EPRD',
  },
});

export interface BaseEthraScanTransaction<T> {
  status: string;
  message: string;
  result: T;
}

export interface ITransaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

export const ScanApi = {
  getTransactions: (address: string) => {
    return instance.get<
      string,
      AxiosResponse<BaseEthraScanTransaction<ITransaction[]>>
    >('?module=account', {
      params: {
        action: 'txlist',
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10,
        sort: 'asc',
        address,
      },
    });
  },
};
