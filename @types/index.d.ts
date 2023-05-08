declare global {
  interface Window {
    ethereum?: any;
    gtag: (param1: string, param2: string, param3: object) => void;
  }

}
export const ethereum = window.ethereum;
