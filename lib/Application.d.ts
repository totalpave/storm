/// <reference types="node" />
import { EventEmitter } from 'events';
import { Logger } from './Logger';
import { LogSeverity } from './LogSeverity';
import { TokenManager } from './TokenManager';
import { Database } from './Database';
import { IHandler } from './IHandler';
import { IConfig } from './IConfig';
import Commander = require('commander');
export declare abstract class Application extends EventEmitter {
    private logger;
    private name;
    private configPath;
    private config;
    private tokenManager;
    private server;
    private db;
    private _logConfigDefaulting;
    private _isTestEnvironment;
    private socket;
    private _program;
    constructor(name: string, configPath: string, logSeverity?: LogSeverity);
    private _load;
    private $buildArgOptions;
    protected _buildArgOptions(program: Commander.CommanderStatic): void;
    getProgram(): Commander.CommanderStatic;
    getRequestSizeLimit(): number;
    attachHandler(path: string, HandlerClass: IHandler): void;
    close(): Promise<void>;
    protected abstract attachHandlers(): Promise<void>;
    loadConfig(path: string): Promise<IConfig>;
    getName(): string;
    getLogger(): Logger;
    getConfig(): IConfig;
    shouldListen(): boolean;
    protected onConfigLoad(config: IConfig): void;
    setTokenManager(tokenManager: TokenManager): void;
    getTokenManager(): TokenManager;
    getDB(): Database;
    getCmdLineArgs(): any;
    protected initDB(config: IConfig): Promise<Database>;
    protected _createLogger(): Logger;
    protected _getDefaultLogLevel(): LogSeverity;
    protected _parseLogLevelConfig(config: IConfig): LogSeverity;
    protected _llStrToSeverity(ll: string): LogSeverity;
    protected onBeforeReady(): void;
    protected onReady(): void;
}
