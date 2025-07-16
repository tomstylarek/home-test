import { Routes } from "../constants/Routes";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {

    override async visit() {
        this.page.goto(Routes.Checkout);
    }
}