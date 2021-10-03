import puppeteer from "puppeteer";
import {sleep_for} from "./sleep_for";

export const click_button = async (page: puppeteer.Page, selector: string)=>{
    await page.click(selector)
    await sleep_for(page, 5000, 8000)
}