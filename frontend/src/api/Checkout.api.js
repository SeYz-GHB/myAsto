import http from "./http";

export const orderAPI = async ({payload}) => {
    const {
        customer_name,
        phone_number,
        shipping_address,
        delivery_method,
        total_price,
        cart,
        payment_method
    } = payload;

    const {data} = await http.post('/checkout/',payload);
    return data;

}