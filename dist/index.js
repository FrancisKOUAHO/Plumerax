"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const sleep_for_1 = require("./methods/sleep_for");
const click_button_1 = require("./methods/click_button");
const login_1 = require("./methods/login/login");
const search_1 = require("./methods/search/search");
const get_search_element_1 = require("./methods/get_search_element");
const main_actual = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield puppeteer_1.default.launch({ headless: false });
        const page = yield browser.newPage();
        const URL = 'https://www.linkedin.com';
        yield page.setViewport({
            width: 1280,
            height: 800,
            deviceScaleFactor: 1
        });
        yield page.goto(URL, { waitUntil: 'networkidle2' });
        yield (0, sleep_for_1.sleep_for)(page, 1000, 2000);
        yield (0, login_1.authenticate)(page);
        yield (0, sleep_for_1.sleep_for)(page, 40000, 40000);
        yield (0, search_1.search)(page);
        yield (0, click_button_1.click_button)(page, 'li.search-reusables__primary-filter');
        yield (0, sleep_for_1.sleep_for)(page, 500, 1000);
        const User = yield (0, get_search_element_1.get_search_element)(page);
        console.log(User);
        yield (0, sleep_for_1.sleep_for)(page, 500, 1000);
    }
    catch (e) {
        console.log(e);
    }
});
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield main_actual();
});
main();
