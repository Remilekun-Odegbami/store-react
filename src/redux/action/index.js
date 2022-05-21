export const addProduct = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};

export const delProduct = (product) => {
    return {
        type: 'DELETEITEM',
        payload: product
    };
};