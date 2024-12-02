"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header = () => {
    return (<div>
      <header>
        <ul className='flex gap-5 m-3 justify-center text-xl'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </header>
    </div>);
};
exports.default = Header;
