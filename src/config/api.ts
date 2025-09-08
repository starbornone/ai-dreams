// API Configuration

export const API_CONFIG = {
  // Rate limiting configuration
  RATE_LIMIT: {
    DELAY_MS: 1000, // Reduced from 3000ms for better performance
    MAX_RETRIES: 3,
    BACKOFF_MULTIPLIER: 2,
  },
  
  // Request timeout
  TIMEOUT_MS: 10000,
  
  // Environment-specific settings
  STAGES: {
    DEVELOPMENT: 'DRAFT' as const,
    PRODUCTION: 'PUBLISHED' as const,
  },
} as const;

export const getCurrentStage = (): 'DRAFT' | 'PUBLISHED' => {
  return process.env.NODE_ENV === 'development' 
    ? API_CONFIG.STAGES.DEVELOPMENT 
    : API_CONFIG.STAGES.PRODUCTION;
};

export const getAuthToken = (): string => {
  return process.env.NODE_ENV === 'development'
    ? process.env.HYGRAPH_DEV_AUTH_TOKEN || ''
    : process.env.HYGRAPH_PROD_AUTH_TOKEN || '';
};
