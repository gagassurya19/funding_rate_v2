const baseUrl = 'https://2149-104-28-247-133.ngrok-free.app';

export const API_CONFIG = {
    endpoints: {
        auth: `${baseUrl}/api/auth/`,
        register: `${baseUrl}/api/user/`,
        aevo: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/aevo?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        hyperliquid: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/hyperliquid?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        bybit: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/bybit?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        gateio: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/gateio?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        tickers: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/tickers?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        detailCoin: (coin) => `https://api.coingecko.com/api/v3/coins/${coin}`,
        // Add other endpoints as needed
    }
};
