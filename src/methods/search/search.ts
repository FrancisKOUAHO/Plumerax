import {enter_text} from "../enter_text";
import {sleep_for} from "../sleep_for";
import puppeteer from "puppeteer";

export const search = async (page: puppeteer.Page) => {
    await enter_text(page, 'input.search-global-typeahead__input.always-show-placeholder', 'developpeur vuejs/nuxtjs')
    await page.keyboard.type(String.fromCharCode(13));
    await sleep_for(page, 1000, 2000)
}