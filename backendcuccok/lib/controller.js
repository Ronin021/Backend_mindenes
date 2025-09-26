"use strict";
//import Kutya from "./kutya";
//import { data } from "./data";
//const kutyus = new Kutya(data[0]);
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.getALLData = void 0;
const getALLData = (_req, res) => {
    res.status(208).send("sodv");
};
exports.getALLData = getALLData;
const run = (_req1, res1) => {
    res1.status(208).send("a cuccli futni szeretne");
};
exports.run = run;
//export const valasz3 = (_req2:any, res2: any) => {
//  res2.status(205).send(kutyus.renderTable("dogtable", data));
//}
