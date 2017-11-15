import { InjectionToken } from '@angular/core';
import io from 'socket.io-client';

export interface SocketIoConfig {
  hostname: string;
  port: number;
}

/**
 * Default configuration for socket.io (see ~websocket-chat-server dep.)
 * @type {*}
 */
export const Config: SocketIoConfig = {
  hostname: window.location.hostname,
  port: 3001
};

/**
 * Interface to SOCKET.IO
 */
export interface Socket {
  /**
   * Add a handler to listen an event coming from the server
   * @param event name
   * @param handler function
   */
  on(event: string, handler: any): void;

  /**
   * Emit an event with some data to the server
   * @param event
   * @param data
   */
  emit(event: string, data: any): void;
}

/**
 * Factory function to instantiate Socket
 * @param host
 * @param options
 * @return Socket
 */
export declare type Io = (host: string, options: any) => Socket;

/**
 * Injection Token to be used when ask for the service
 * @type {InjectionToken}
 */
export const SOCKET_IO = new InjectionToken<Io>('socket.io');

/**
 * Config injection token
 * @type {InjectionToken}
 */
export const SOCKET_IO_CONFIG = new InjectionToken<SocketIoConfig>('socket.io.config');

/**
 * Provider to use on the module
 * @type {*}
 */
export const SOCKET_IO_PROVIDER = {
  provide: SOCKET_IO,
  useValue: io
};

/**
 * Config provider to use on the module
 * @type {*}
 */
export const SOCKET_IO_CONFIG_PROVIDER = {
  provide: SOCKET_IO_CONFIG,
  useValue: Config
};
