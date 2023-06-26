import { getServiceEnvConfig } from '~/.env-config';
import { createRequest } from './request';

const { url, newUrl, proxyPattern, proxyPatternNew } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url });

export const requestNew = createRequest({ baseURL: isHttpProxy ? proxyPatternNew : newUrl });

export const mockRequest = createRequest({ baseURL: '/mock' });
