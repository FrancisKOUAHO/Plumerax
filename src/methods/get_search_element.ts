import puppeteer from 'puppeteer';
import {sleep_for} from "./sleep_for";
import {click_button} from "./click_button";


export const get_search_element = async (page: puppeteer.Page) => {

    const user_infos = await page.evaluate(() => {
        let user = [];
        let elements = document.querySelectorAll('div.entity-result__item');
        for (let element of elements) {
            user.push({
                fullName: element.querySelector('span.entity-result__title-text.t-16')?.textContent,
                poste: element.querySelector('div.entity-result__primary-subtitle.t-14.t-black.t-normal')?.textContent,
                localisations: element.querySelector('div.entity-result__secondary-subtitle.t-14.t-normal')?.textContent,
                company: element.querySelector('p.entity-result__summary.entity-result__summary--2-lines.t-12.t-black--light.mb1')?.textContent,
                image: element.querySelector('img.ivm-view-attr__img--centered.EntityPhoto-circle-3.lazy-image.ember-view')?.getAttribute('src')
            })
        }
        return user
    })
    await sleep_for(page, 500, 1000)
};