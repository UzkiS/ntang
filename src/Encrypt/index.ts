import { hex_md5, hex_hmac_md5 } from "./md5";

interface encrypt {
  md5: (string: string) => string;
  md5_16: (string: string) => string;
  hmacmd5: (key: string, data: string) => string;
}

const encrypt: encrypt = {
  md5: hex_md5,
  md5_16: (string) => hex_md5(string).slice(8, 24),
  hmacmd5: hex_hmac_md5,
};

const useEncrypt = (): encrypt => {
  return encrypt;
};

export { useEncrypt };
