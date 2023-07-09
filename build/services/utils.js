"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.checkAdress = exports.validateNumber = exports.internalServerError = exports.ok = exports.notFound = exports.badRequest = void 0;
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
function checkAdress(end) {
    if (end.bairro == '') {
        return false;
    }
    else if (!end.numero || end.numero == 0) {
        return false;
    }
    if (end.rua == '') {
        return false;
    }
    return true;
}
exports.checkAdress = checkAdress;
class utils {
    constructor() {
        this.badRequest = (res, err) => {
            res.status(400).json({
                err
            });
        };
        this.notFound = (res) => res.sendStatus(404);
        this.ok = (res) => res.sendStatus(200);
        this.internalServerError = (res, err) => {
            res.status(500).json({
                err: err.message
            });
        };
        this.validateNumber = (num) => { return parseFloat(num) > 0; };
    }
}
exports.utils = utils;
