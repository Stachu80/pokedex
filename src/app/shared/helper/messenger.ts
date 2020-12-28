import { environment } from '../../../environments/environment';

export function messenger(): any{
  const color = 'background:green;color:#fff;font-size: 14px';
  const bootColor = 'background:#CC0000;color:#fff;font-size: 14px';
  const actionColor = 'background:green;color:#fff;font-size: 14px';
  const effectColor = 'background:blue;color:#fff;font-size: 14px';
  const errorColor = 'background:red;color:#fff;font-size: 14px';
  const parserColor = 'background:orange;color:#fff;font-size: 14px';
  const infoColor = 'background:orange;color:#fff;font-size: 14px';

  const empty = (msg, ...args: unknown[]) => {
  };
  const warn = (msg, ...args: unknown[]) => console.log('%c' + msg, errorColor, ...args);
  const log = (msg, ...args: unknown[]) => console.log(msg, ...args);
  const info = (msg, ...args: unknown[]) => console.log('%c' + msg, infoColor, ...args);
  const boot = (msg, ...args: unknown[]) => console.log('%c' + msg, bootColor, ...args);
  const action = (msg, ...args: unknown[]) => console.log('%c' + msg, actionColor, ...args);
  const effect = (msg, ...args: unknown[]) => console.log('%c' + msg, effectColor, ...args);
  const error = (msg, ...args: unknown[]) => console.log('%c' + msg, errorColor, ...args);
  const parser = (msg, ...args: unknown[]) => console.log('%c' + msg, parserColor);

  const condition = environment.production;
  return {
    warn: condition ? empty : warn,
    log: condition ? empty : log,
    info: condition ? empty : info,
    action: condition ? empty : action,
    effect: condition ? empty : effect,
    error: condition ? empty : error,
    boot: condition ? empty : boot,
    parser: condition ? empty : parser
  };
}
