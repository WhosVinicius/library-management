"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
class utils {
    static checkAdress(end) {
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
}
exports.utils = utils;
utils.badRequest = (res, err) => {
    res.status(400).json({
        err
    });
};
utils.notFound = (res) => res.sendStatus(404);
utils.ok = (res) => res.sendStatus(200);
utils.internalServerError = (res, err) => {
    res.status(500).json({
        err: err.message
    });
};
utils.validateNumber = (num) => { return parseFloat(num) > 0; };
