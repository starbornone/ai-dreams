/** @type {import('next').NextConfig} */

const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/starborn/**',
      },
      {
        protocol: 'https',
        hostname: 'ap-southeast-2.graphassets.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Bundle optimization
  experimental: {
    optimizePackageImports: [
      '@markdoc/markdoc',
      'react-syntax-highlighter',
      'chart.js',
      'react-chartjs-2',
      'date-fns',
    ],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          markdoc: {
            test: /[\\/]node_modules[\\/]@markdoc[\\/]/,
            name: 'markdoc',
            chunks: 'all',
          },
          syntaxHighlighter: {
            test: /[\\/]node_modules[\\/]react-syntax-highlighter[\\/]/,
            name: 'syntax-highlighter',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
