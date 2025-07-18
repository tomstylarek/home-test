import { ExpirationMonth } from "../constants/ExpirationMonth";
import { CheckoutFormData } from "../types/CheckoutFormData";

export const createCheckoutForm = (
    overrides: Partial<CheckoutFormData> = {}
): CheckoutFormData => ({
    fullName: 'Tomas Stylarek',
    email: 'tomas@example.com',
    shippingAddressSameAsBilling: true,
    billingAddress: {
        address: '123 Main Street',
        city: 'The City',
        state: 'The State',
        zipCode: '1001',
    },
    paymentInfo: {
        name: 'Tomas Stylarek',
        cardNumber: '4111111111111111',
        expMonth: ExpirationMonth.January,
        expYear: '2027',
        cvv: '123',
    },
    ...overrides,
});