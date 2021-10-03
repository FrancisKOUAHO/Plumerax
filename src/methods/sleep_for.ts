import puppeteer from 'puppeteer';
import {random_in_from_interval} from "./random_in_from_interval";



export const sleep_for = async (page: puppeteer.Page, min: number, max: number) => {
    let sleep_duration = random_in_from_interval(min, max);
    console.log('waiting for', sleep_duration / 100, 'second')
    await page.waitForTimeout(sleep_duration)
}