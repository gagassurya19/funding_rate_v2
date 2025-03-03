const baseUrl = 'https://bab2xff1tfm5.share.zrok.io';
const coinMarketCapApiKey = 'd1b90582-1f85-4dee-8c31-2d43c234a453';

export const API_CONFIG = {
    endpoints: {
        auth: `${baseUrl}/api/auth/`,
        register: `${baseUrl}/api/user/`,
        allCoin: (page, limit, time, keyword) => `${baseUrl}/api/funding-rates/aggregated-funding?page=${page}&limit=${limit}&time=${time}&keyword=${keyword}`,
        coinList: (keyword) => `${baseUrl}/api/funding-rates/coins?keyword=${keyword}`,
        detailCoin: (coin) => `${baseUrl}/api/funding-rates/coin-details-cmc?coin=${coin}`,
        // Add other endpoints as needed
    },
    apiKey: coinMarketCapApiKey,
};
