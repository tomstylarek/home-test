import { Page } from "@playwright/test";
import { CheckoutFormData } from "../types/CheckoutFormData";

export class CheckoutForm {

    private readonly emailInput = this.page.locator('#email');

    private readonly fullNameInput = this.page.locator('#fname');
    private readonly addressInput = this.page.locator('#adr');
    private readonly cityInput = this.page.locator('#city');
    private readonly stateInput = this.page.locator('#state');
    private readonly zipCodeInput = this.page.locator('#zip');
    private readonly shippingAddressSameAsBillingCheckbox = this.page.locator('[name=sameadr]');

    private readonly nameOnCardInput = this.page.locator('#cname');
    private readonly cardNumberInput = this.page.locator('#ccnum');
    private readonly expMonthSelector = this.page.locator('#expmonth');
    private readonly expYearInput = this.page.locator('#expyear');
    private readonly cvvInput = this.page.locator('#cvv');

    constructor(protected readonly page: Page) {}

    async fill(formData: CheckoutFormData) {
        await this.fullNameInput.fill(formData.fullName);
        await this.emailInput.fill(formData.email);
        await this.addressInput.fill(formData.billingAddress.address);
        await this.cityInput.fill(formData.billingAddress.city);
        await this.stateInput.fill(formData.billingAddress.state);
        await this.zipCodeInput.fill(formData.billingAddress.zipCode);
        await this.nameOnCardInput.fill(formData.paymentInfo.name);
        await this.cardNumberInput.fill(formData.paymentInfo.cardNumber);
        await this.expMonthSelector.selectOption(formData.paymentInfo.expMonth);
        await this.expYearInput.fill(formData.paymentInfo.expYear);
        await this.cvvInput.fill(formData.paymentInfo.cvv);

        if (formData.shippingAddressSameAsBilling) {
            await this.shippingAddressSameAsBillingCheckbox.check();
        } else {
            await this.shippingAddressSameAsBillingCheckbox.uncheck();
        }
    }
}