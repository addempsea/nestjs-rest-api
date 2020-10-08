export interface Item {
    id?: string;
    name: string;
    desc?: string;
    price: number;
}

export interface ApiResponse {
    status: string;
    message?: string;
    data?: any;
}
