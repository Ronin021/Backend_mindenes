"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/apik", controller_1.getALLData);
router.get("/apik", controller_1.run);
exports.default = router;
