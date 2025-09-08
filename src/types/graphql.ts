// GraphQL-specific types

export interface GraphQLResponse<T> {
  data: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: string[];
}
