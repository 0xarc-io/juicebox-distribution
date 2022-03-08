// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

import configJson from "../config.json";

// Config from generator
const config: IConfig = {
  ...configJson
};

// Export config
export default config;
