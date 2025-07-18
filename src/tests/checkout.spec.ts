import { test } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { createCheckoutForm } from '../data/checkoutFormFactory';
import { OrderPage } from '../pages/OrderPage';
import { AlertMessages } from '../constants/AlertMessages';

test.describe('Checkout Page', () => {
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        checkoutPage = new CheckoutPage(page);
        await checkoutPage.visit();
    });

    test.describe('Checkout Form Component', () => {

        test('User creates an order successfully', async ({ page }) => {
            const orderPage = new OrderPage(page);
            const checkoutForm = createCheckoutForm();

            await checkoutPage.completeForm(checkoutForm);
            await checkoutPage.submitCheckout();
            await orderPage.checkOrderNumber();
        });

        test('User cannot create an order due to alert', async () => {
            const checkoutForm = createCheckoutForm({ shippingAddressSameAsBilling: false });

            await checkoutPage.completeForm(checkoutForm);
            await checkoutPage.submitCheckout();
            await checkoutPage.validateAlertMessage(AlertMessages.shippingAddressSameAsBillingDisabled);
        });
    });

    test.describe('Cart Component', () => {
    
        test('Displays correct total', async () => {
            await checkoutPage.validateTotalCartItems();
        });
    });
});