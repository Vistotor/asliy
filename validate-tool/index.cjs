"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isArray = exports.jsonString = exports.isEmpty = exports.isLandline = exports.range = exports.contains = exports.enOrNum = exports.isLetter = exports.isChinese = exports.amount = exports.isCarNo = exports.idCard = exports.isDigits = exports.isNumber = exports.isDateISO = exports.isDate = exports.isUrl = exports.isPhone = exports.isEmail = void 0;
/**
 * 验证电子邮箱格式
 */
function isEmail(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}
exports.isEmail = isEmail;
/**
 * 验证手机格式
 */
function isPhone(value) {
    return /^1[23456789]\d{9}$/.test(value);
}
exports.isPhone = isPhone;
/**
 * 验证URL格式
 */
function isUrl(value) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}
exports.isUrl = isUrl;
/**
 * 验证日期格式
 */
function isDate(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
}
exports.isDate = isDate;
/**
 * 验证ISO类型的日期格式
 */
function isDateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}
exports.isDateISO = isDateISO;
/**
 * 验证十进制数字
 */
function isNumber(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}
exports.isNumber = isNumber;
/**
 * 验证整数
 */
function isDigits(value) {
    return /^\d+$/.test(value);
}
exports.isDigits = isDigits;
/**
 * 验证身份证号码
 */
function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}
exports.idCard = idCard;
/**
 * 是否车牌号
 */
function isCarNo(value) {
    // 新能源车牌
    var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    // 旧车牌
    var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
        return creg.test(value);
    }
    else if (value.length === 8) {
        return xreg.test(value);
    }
    else {
        return false;
    }
}
exports.isCarNo = isCarNo;
/**
 * 金额,只允许2位小数
 */
function amount(value) {
    //金额，只允许保留两位小数
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}
exports.amount = amount;
/**
 * 中文
 */
function isChinese(value) {
    var reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
}
exports.isChinese = isChinese;
/**
 * 只能输入字母
 */
function isLetter(value) {
    return /^[a-zA-Z]*$/.test(value);
}
exports.isLetter = isLetter;
/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
    //英文或者数字
    var reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
}
exports.enOrNum = enOrNum;
/**
 * 验证是否包含某个值
 */
function contains(value, param) {
    return value.indexOf(param) >= 0;
}
exports.contains = contains;
/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
    return value >= param[0] && value <= param[1];
}
exports.range = range;
/**
 * 是否固定电话
 */
function isLandline(value) {
    var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
}
exports.isLandline = isLandline;
/**
 * 判断是否为空
 */
function isEmpty(value) {
    switch (typeof value) {
        case 'undefined':
            return true;
        case 'string':
            if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
                return true;
            break;
        case 'boolean':
            if (!value)
                return true;
            break;
        case 'number':
            if (0 === value || isNaN(value))
                return true;
            break;
        case 'object':
            if (null === value || value.length === 0)
                return true;
            for (var i in value.split('')) {
                return false;
            }
            return true;
    }
    return false;
}
exports.isEmpty = isEmpty;
/**
 * 是否json字符串
 */
function jsonString(value) {
    if (typeof value == 'string') {
        try {
            var obj = JSON.parse(value);
            if (typeof obj == 'object' && obj) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    }
    return false;
}
exports.jsonString = jsonString;
/**
 * 是否数组
 */
function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    }
    else {
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}
exports.isArray = isArray;
/**
 * 是否对象
 */
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
exports.isObject = isObject;
