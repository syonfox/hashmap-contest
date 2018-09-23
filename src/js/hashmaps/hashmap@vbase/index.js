const { HashMap } = require('vbase/stage/node/containers/HashMap');
const { M_LOG2 } = require('vbase/stage/node/math/constants');

module.exports = class extends HashMap {
    constructor() {
        super(([hi, lo]) => {
            const n = this._capacity;
            const h = (hi ^ lo) & (n - 1);
            return h < 0 ? h + n : h;
        }, (lhs, rhs) => {
            return lhs[0] === rhs[0] && lhs[1] === rhs[1];
        });
        this._capacity = 0;
    }

    reserve(size) {
        this._capacity = (1 << Math.ceil(Math.log(size) / M_LOG2)) >>> 0;
    }
};
