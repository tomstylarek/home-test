import { ExpirationMonth } from "../constants/ExpirationMonth";

export interface BillingAddress {
    address: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface PaymentInfo {
    name: string;
    cardNumber: string;
    expMonth: ExpirationMonth;
    expYear: string;
    cvv: string;
}

export interface CheckoutFormData {
    billingAddress: BillingAddress;
    paymentInfo: PaymentInfo;
    fullName: string;
    email: string;
    shippingAddressSameAsBilling: boolean;
}