export const isEmptyArray = (array: unknown) => Array.isArray(array) && array.length === 0;

export const isArrayWithItems = (array: unknown) => Array.isArray(array) && array.length > 0;
