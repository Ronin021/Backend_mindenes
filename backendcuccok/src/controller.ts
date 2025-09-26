//import Kutya from "./kutya";
//import { data } from "./data";
//const kutyus = new Kutya(data[0]);


export const getALLData = (_req:any, res: any) => {
    res.status(208).send("sodv");
}

export const run = (_req1:any, res1: any) => {
    res1.status(208).send("a cuccli futni szeretne");
}

//export const valasz3 = (_req2:any, res2: any) => {
  //  res2.status(205).send(kutyus.renderTable("dogtable", data));
//}