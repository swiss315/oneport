// src/Store/actions.ts
import { createAction } from '@reduxjs/toolkit';

export const saveDataRequest = createAction<any>('SAVE_DATA_REQUEST');
export const saveNextMonthRequest = createAction<any>('SAVE_NEXT_MONTH_REQUEST');
export const savePrevMonthRequest = createAction<any>('SAVE_PREV_MONTH_REQUEST');
export const saveUpdateDataRequest = createAction<any>('SAVE_UPDATE_DATA_REQUEST');
