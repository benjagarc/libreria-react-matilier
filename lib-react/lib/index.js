"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBox = exports.HelloCC = exports.HelloFC = void 0;
// Se van a importar todos los compnenete
const hello_fc_1 = __importDefault(require("./hello-fc"));
exports.HelloFC = hello_fc_1.default;
const hello_cc_1 = __importDefault(require("./hello-cc"));
exports.HelloCC = hello_cc_1.default;
const custom_box_1 = __importDefault(require("./custom-box"));
exports.CustomBox = custom_box_1.default;
