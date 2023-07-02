"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = exports.internalServerError = exports.ok = exports.notFound = exports.badRequest = void 0;
const badRequest = (res, err) => {
    res.status(400).json({
        err
    });
};
exports.badRequest = badRequest;
const notFound = (res) => res.sendStatus(404);
exports.notFound = notFound;
const ok = (res) => res.sendStatus(200);
exports.ok = ok;
const internalServerError = (res, err) => {
    res.status(500).json({
        err: err.message
    });
};
exports.internalServerError = internalServerError;
const validateNumber = (num) => { return parseFloat(num) > 0; };
exports.validateNumber = validateNumber;
