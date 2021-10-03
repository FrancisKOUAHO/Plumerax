import puppeteer from 'puppeteer';
import {sleep_for} from "./sleep_for";

export  const enter_text = async function (page: puppeteer.Page,selector: string, text: string) {
    const session_key = await page.$(selector);
    session_key?.type(text)
    await sleep_for(page, 1000, 2000)
};