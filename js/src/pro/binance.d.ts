import binanceRest from '../binance.js';
export default class binance extends binanceRest {
    describe(): any;
    requestId(url: any): any;
    stream(type: any, subscriptionHash: any): string;
    watchOrderBook(symbol: any, limit?: any, params?: {}): Promise<any>;
    fetchOrderBookSnapshot(client: any, message: any, subscription: any): Promise<void>;
    handleDelta(bookside: any, delta: any): void;
    handleDeltas(bookside: any, deltas: any): void;
    handleOrderBookMessage(client: any, message: any, orderbook: any): any;
    handleOrderBook(client: any, message: any): void;
    handleOrderBookSubscription(client: any, message: any, subscription: any): void;
    handleSubscriptionStatus(client: any, message: any): any;
    watchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    parseTrade(trade: any, market?: any): import("../base/types.js").Trade | {
        id: any;
        timestamp: number;
        datetime: string;
        symbol: any;
        order: string;
        type: any;
        takerOrMaker: any;
        side: any;
        amount: number;
        price: number;
        cost: number;
        fee: {
            currency: any;
            cost: number;
        };
        info: any;
    };
    handleTrade(client: any, message: any): void;
    watchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<object[]>;
    handleOHLCV(client: any, message: any): void;
    watchTicker(symbol: any, params?: {}): Promise<any>;
    watchTickers(symbols?: any, params?: {}): any;
    parseWsTicker(message: any, marketType: any): {
        symbol: any;
        timestamp: any;
        datetime: string;
        high: number;
        low: number;
        bid: number;
        bidVolume: number;
        ask: number;
        askVolume: number;
        vwap: number;
        open: number;
        close: number;
        last: number;
        previousClose: number;
        change: number;
        percentage: number;
        average: any;
        baseVolume: number;
        quoteVolume: number;
        info: any;
    };
    handleTicker(client: any, message: any): void;
    handleTickers(client: any, message: any): void;
    authenticate(params?: {}): Promise<void>;
    keepAliveListenKey(params?: {}): Promise<void>;
    setBalanceCache(client: any, type: any): any;
    loadBalanceSnapshot(client: any, messageHash: any, type: any): Promise<void>;
    watchBalance(params?: {}): Promise<any>;
    handleBalance(client: any, message: any): void;
    watchOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    parseWsOrder(order: any, market?: any): any;
    handleOrderUpdate(client: any, message: any): void;
    watchMyTrades(symbol?: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    handleMyTrade(client: any, message: any): void;
    handleOrder(client: any, message: any): void;
    handleMessage(client: any, message: any): any;
}
