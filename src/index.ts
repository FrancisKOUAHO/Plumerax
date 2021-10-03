import puppeteer from 'puppeteer';

import {username, password} from "./config/secrets";

import {random_in_from_interval} from './methods/random_in_from_interval'
import {sleep_for} from './methods/sleep_for'
import {enter_text} from "./methods/enter_text";
import {click_button} from "./methods/click_button";
import {authenticate} from "./methods/login/login";
import {search} from "./methods/search/search";

const main_actual = async () => {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        const URL = 'https://www.linkedin.com';
        await page.setViewport({
            width: 1280,
            height: 800,
            deviceScaleFactor: 1
        });
        await page.goto(URL, {waitUntil: 'networkidle2'});
        await sleep_for(page, 1000, 2000)

        await authenticate(page)
        await search(page)
        await click_button(page, 'li.search-reusables__primary-filter')

    } catch (e) {
        console.log(e)
    }
}

let main = async () => {
    await main_actual()
}

main()
