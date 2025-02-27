import kucoin from './kucoin.js';
export default class kucoinfutures extends kucoin {
    describe(): any;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTime(params?: {}): Promise<number>;
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchDepositAddress(code: any, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchL3OrderBook(symbol: any, limit?: any, params?: {}): Promise<void>;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchFundingHistory(symbol?: any, since?: any, limit?: any, params?: {}): Promise<any[]>;
    fetchPositions(symbols?: any, params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): {
        info: any;
        id: any;
        symbol: string;
        timestamp: number;
        datetime: string;
        initialMargin: number;
        initialMarginPercentage: number;
        maintenanceMargin: number;
        maintenanceMarginPercentage: number;
        entryPrice: number;
        notional: number;
        leverage: number;
        unrealizedPnl: number;
        contracts: number;
        contractSize: any;
        marginRatio: any;
        liquidationPrice: number;
        markPrice: number;
        collateral: number;
        marginMode: string;
        side: any;
        percentage: number;
    };
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<{
        id: string;
        clientOrderId: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        symbol: any;
        type: any;
        side: any;
        price: any;
        amount: any;
        cost: any;
        average: any;
        filled: any;
        remaining: any;
        status: any;
        fee: any;
        trades: any;
        timeInForce: any;
        postOnly: any;
        stopPrice: any;
        triggerPrice: any;
        info: any;
    }>;
    cancelOrder(id: any, symbol?: any, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: any, params?: {}): Promise<any>;
    addMargin(symbol: any, amount: any, params?: {}): Promise<any>;
    parseMarginModification(info: any, market?: any): {
        info: any;
        direction: any;
        mode: string;
        amount: any;
        code: any;
        symbol: any;
        status: any;
    };
    fetchOrdersByStatus(status: any, symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOrder(id?: any, symbol?: any, params?: {}): Promise<any>;
    parseOrder(order: any, market?: any): any;
    fetchFundingRate(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: number;
        previousFundingTimestamp: number;
        previousFundingDatetime: string;
    }>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    transfer(code: any, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: string;
        info: any;
    };
    parseTransferStatus(status: any): string;
    fetchMyTrades(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchDeposits(code?: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    fetchWithdrawals(code?: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    fetchTransactionFee(code: any, params?: {}): Promise<any>;
    fetchDepositWithdrawFee(code: any, params?: {}): Promise<void>;
    fetchLedger(code?: any, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchMarketLeverageTiers(symbol: any, params?: {}): Promise<any[]>;
    parseMarketLeverageTiers(info: any, market: any): any[];
    fetchFundingRateHistory(symbol?: any, since?: any, limit?: any, params?: {}): Promise<object[]>;
    parseFundingRateHistory(info: any, market?: any): {
        info: any;
        symbol: any;
        fundingRate: number;
        timestamp: number;
        datetime: string;
    };
}
