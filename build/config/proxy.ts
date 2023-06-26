import type { ProxyOptions } from 'vite';

/**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param envConfig - env环境配置
 */
export function createViteProxy(isOpenProxy: boolean, envConfig: ServiceEnvConfigWithProxyPattern) {
  if (!isOpenProxy) return undefined;

  const proxy: Record<string, string | ProxyOptions> = {
    [envConfig.proxyPattern]: {
      target: envConfig.url,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${envConfig.proxyPattern}`), '')
    },
    [envConfig.proxyPatternNew]: {
      target: envConfig.newUrl ? envConfig.newUrl : envConfig.url,
      changeOrigin: true,
      secure: true,
      rewrite: path => path.replace(new RegExp(`^${envConfig.proxyPatternNew}`), '')
    }
  };

  return proxy;
}