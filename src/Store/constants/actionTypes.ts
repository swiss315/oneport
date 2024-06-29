// src/Store/types.ts
export interface SaveDataAction {
    type: string;
    payload: any;
}

export interface SaveMonthAction {
    type: string;
    payload: number;
}