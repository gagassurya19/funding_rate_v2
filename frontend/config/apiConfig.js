const baseUrl = 'https://40a4-2a09-bac5-3a1a-18d2-00-279-77.ngrok-free.app';

export const API_CONFIG = {
    endpoints: {
        auth: `${baseUrl}/api/auth/`,
        register: `${baseUrl}/api/user/`,
        aevo: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/aevo?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        hyperliquid: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/hyperliquid?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        bybit: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/bybit?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        gateio: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/gateio?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        tickers: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/tickers?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        // Add other endpoints as needed
    }
};
