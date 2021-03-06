import {getOptions} from 'loader-utils'

const pxRegex = /url\([^\)]+\)|(\d*\.?\d+)px((\;?)(\s*)(\/\*(.+?)\*\/))?/ig

const baseOptions = {
    UIWidth: 750,
    minPixelValue: 1,
    unitPrecision: 3,
    targetUnit: 'vw'
}

export default function (source) {
    const options = getOptions(this)
    const opts = Object.assign({}, baseOptions, options)
    const pxReplace = createPxReplace(opts.UIWidth, opts.minPixelValue, opts.unitPrecision, opts.targetUnit, opts.rem)
    source = source.replace(pxRegex, pxReplace)

    return `export default ${source}`
}

/*
 * return replace function
 */
function createPxReplace(UIWidth, minPixelValue, unitPrecision, targetUnit, rem) {
    return function (m, $1, $2, $3, $4, $5, $6, $7) {
        if (!$1 || ($6 && ($6.indexOf('not convert') >= 0))) return m
        const pixels = parseFloat($1)
        if (pixels <= minPixelValue) return m
        if (targetUnit === 'vw') return px2vw(pixels, UIWidth).toFixed(unitPrecision) + targetUnit
        if (targetUnit === 'rem' && rem) return px2rem(pixels, rem).toFixed(unitPrecision) + targetUnit
    }
}

/*
 * from px to vw
 */
function px2vw(px, UIWidth) {
    return px / UIWidth * 100
}

/*
 * from px to rem
 */
function px2rem(px, rem) {
    return px / rem
}
