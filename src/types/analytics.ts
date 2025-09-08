// Analytics and data aggregation types

export interface DateCount {
  [yearMonth: string]: number;
}

export interface AllDataResponse {
  tags: import('./post').TagCount[];
  categories: import('./post').CategoryData[];
  dateCounts: DateCount;
}
