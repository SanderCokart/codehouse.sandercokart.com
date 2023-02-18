export type CustomApiResponse<DATA = any> =
    SuccessResponse<DATA>
    | FormErrorResponse
    | StringErrorResponse
    | DefaultErrorResponse;

// export type CustomApiPromise<DATA = any> = Promise<SuccessResponse<DATA> | FormErrorResponse | StringErrorResponse | DefaultErrorResponse>;

export interface SuccessResponse<T> {
    data: T;
    error: null;
    status: number;
    type: 'success';
}

export interface FormErrors {
    [key: string]: string[];
}

export interface FormErrorResponse {
    data: null;
    errors: FormErrors;
    status: number;
    type: 'form';
}

export interface StringErrorResponse {
    data: null;
    error: string;
    status: number;
    type: 'string';
}

export interface DefaultErrorResponse {
    data: null;
    error: string;
    status: 400;
    type: 'default';
}