const { HashMap } = require('vbase/node/containers/HashMap');

module.exports = class extends HashMap {
    constructor() {
        super(([hi, lo]) => {
            const n = this._capacity;
            const h = (hi ^ lo) % n;
            return h < 0 ? h + n : h;
        }, (lhs, rhs) => {
            return lhs[0] === rhs[0] && lhs[1] === rhs[1];
        });
        this._capacity = 0;
    }

    reserve(size) {
        this._capacity = size * 2;
    }
};
