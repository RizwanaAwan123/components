"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./components/page"));
const header_1 = __importDefault(require("./components/header"));
const Home = () => {
    return (<div>
      <header_1.default />
      <page_1.default />
    </div>);
};
exports.default = Home;
