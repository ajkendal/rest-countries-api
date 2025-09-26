export type Country = {
  name: {
    common: string;
    official?: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca2?: string;
  cca3?: string;
  region?: string;
  subregion?: string;
  population?: number;
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  flags?: { png?: string; svg?: string };
  [key: string]: unknown; // If truly needed for dynamic properties
}
