"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_constants_1 = require("./constants/app.constants");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Boot express
var app = (0, express_1.default)();
// Application routing
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use('/', function (_req, res, _next) {
    res.status(200).send({ data: 'Hello from Suman Project' });
});
// Start server
app.listen(app_constants_1.APP_PORT, function () {
    console.log("Express is listening at http://localhost:".concat(app_constants_1.APP_PORT));
});
//# sourceMappingURL=index.js.map