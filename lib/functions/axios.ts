import type {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
});

const handler = async (promise: AxiosPromise, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
    try {
        const { data, status } = await promise;

        config?.handleSuccessMessage?.(data.message || data);

        return { data, status, error: null, type: 'success' };
    } catch (error: any) {
        if (error?.response) {
            // outside the 2xx range
            // if 422 form errors | validation errors | unprocessable entity
            if (error.response.status === 422) {
                config?.handleFormErrors?.(error.response.data.errors);
                return {
                    data: null,
                    status: error.response.status,
                    errors: error.response.data.errors,
                    type: 'form'
                };
            }

            // other 4xx errors
            if (error.response.status.toString().startsWith('4')) {
                config?.handleClientError?.(error.response.data?.message || error.response.data);
                return {
                    data: null,
                    status: error.response.status,
                    error: error.response.data?.message || error.response.data,
                    type: 'client'
                };
            }

            // other 5xx errors
            if (error.response.status.toString().startsWith('5')) {
                config?.handleServerError?.(error.response.data?.message || error.response.data);
                return {
                    data: null,
                    status: error.response.status,
                    error: error.response.data?.message || error.response.data,
                    type: 'server'
                };
            }
        } else if (error.request) {
            config?.handleErrorMessage?.(error.message);
            // request was made but no response was received
            console.error('Error', error.message);
            return { data: null, status: 0, error: error.message, type: 'default' };
        }

        config?.handleErrorMessage?.(error.message);
        // The request was never made
        console.error('Error', error.message);
        return { data: null, status: 0, error: error.message, type: 'default' };
    }
};

const toExport = {
    ...axiosInstance,
    simpleGet: (url: string, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
        return handler(axiosInstance.get(url, config), config);
    },
    simpleDelete: (url: string, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
        return handler(axiosInstance.delete(url, config), config);
    },
    simplePost: (url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
        return handler(axiosInstance.post(url, data, config), config);
    },
    simplePut: (url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
        return handler(axiosInstance.put(url, data, config), config);
    },
    simplePatch: (url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<CustomApiResponse> => {
        return handler(axiosInstance.patch(url, data, config), config);
    }
} as CustomAxiosInstance;

type MessageHandler = (message: string) => void;

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    handleSuccessMessage?: MessageHandler;
    handleFormErrors?: MessageHandler;
    handleClientError?: MessageHandler;
    handleServerError?: MessageHandler;
    handleErrorMessage?: MessageHandler;
}

interface CustomAxiosInstance extends AxiosInstance {
    simpleGet<DATA = any, RESPONSE = CustomApiResponse<DATA>>(url: string, config?: CustomAxiosRequestConfig): Promise<RESPONSE>;

    simpleDelete<DATA = any, RESPONSE = CustomApiResponse<DATA>>(url: string, config?: CustomAxiosRequestConfig): Promise<RESPONSE>;

    simplePost<DATA = any, RESPONSE = CustomApiResponse<DATA>>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<RESPONSE>;

    simplePut<DATA = any, RESPONSE = CustomApiResponse<DATA>>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<RESPONSE>;

    simplePatch<DATA = any, RESPONSE = CustomApiResponse<DATA>>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<RESPONSE>;
}

export type CustomApiResponse<DATA = any> =
    SuccessResponse<DATA>
    | FormErrorResponse
    | ServerErrorResponse
    | ClientErrorResponse
    | DefaultErrorResponse;

export interface SuccessResponse<T> {
    data: T;
    error: null;
    status: number;
    type: 'success';
}

export interface FormError {
    [key: string]: string;
}

export interface FormErrorResponse {
    data: null;
    errors: FormError[];
    status: number;
    type: 'form';
}

export interface ServerErrorResponse {
    data: null;
    error: string;
    status: number;
    type: 'server';
}

export interface ClientErrorResponse {
    data: null;
    error: string;
    status: number;
    type: 'client';
}

export interface DefaultErrorResponse {
    data: null;
    error: string;
    status: number;
    type: 'default';
}

export default toExport;