import Common from '../pocket-common';
import _String from "../pocket-string";
import _Number from "../pocket-number";

export default class _Date {
    static isDate(arg) {
        return Common.isType(arg, 'Date')
    }

    /**
     *   获取当前时间戳
     * @returns {number}
     */
    static now() {
        return +new Date();
    }

    /**
     * 返回date
     */
    static date(date, format) {
        return new Moment(date, format);

    }

    static parse2Date(date, format) {
        return Moment.parse2Date(date, format);
    }
}


class Moment {
    /**
     *
     * @param {string|Date}date
     */
    constructor(date, format) {
        /**
         *
         * @type {date}
         * @private
         */
        this._date = Moment.parse2Date(date, format);
    }

    format() {
        return Moment.format(this._date);
    }

    /**
     *
     * @returns {*|void|*}
     */
    date() {
        return this._date;
    }

    move(type, numbers) {

        if(type === 'y' || type === 'years') { // years
            this._date.setFullYear(this._date.getFullYear() + numbers);
        } else if( type === 'M' || type === 'months') { // months
            this._date.setMonth(this._date.getMonth() + numbers);
        } else if( type === 'd' || type === 'days') { // days
            this._date.setDate(this._date.getDate() + numbers);
        } else if( type === 'w' || type === 'weeks') { //weeks
            this._date.setDate(this._date.getDate() + (numbers * 7));
        } else if( type === 'H' || type === 'hours') {
            this._date.setHours(this._date.getHours() + numbers);
        } else if( type === 'm' || type === 'minutes') {
            this._date.setMinutes(this._date.getMinutes() + numbers);
        } else if( type === 's' || type === 'seconds') {
            this._date.setSeconds(this._date.getSeconds() + numbers);
        } else {

        }


        return this;
    }



    static format(date, format) {

        if(!_Date.isDate(date)) {
            date = Moment.parse2Date(date, format);
        }

        format = format || 'YYYY-MM-DD HH:mm:ss';

        let o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "D+" : date.getDate(),                    //日
            "H+" : date.getHours(),                   //小时
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+|Y+)/.test(format))
            format=format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let k in o) {
            console.log(format);
            if(new RegExp("("+ k +")").test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }

        return format;
    }

    static parse2Date(date, format) {
        if(_Date.isDate(date)) {
            return date;
        } else if(_String.isString(date)) {
            return Moment.parseString2Date(date, format);
        } else if(_Number.isNumber(date)) {
            return Moment.parseNumber2Date(date);
        } else {
            throw new Error('参数无法转换成date');
        }

    }

    static parseString2Date(str, format) {
        if(!format) {
            throw new Error(`参数 format 不能为空`);
        }

        if(!parsers[format]) {
            throw new Error(`没有找到${format} 的解析器！`);
        }
        return parsers[format](str);
    }

    static parseNumber2Date(time) {
        return new Date(time);
    }


}

const parsers = {
    'YYYY-MM-DD HH:mm:ss': function (str) {

        let ymdhms = str.split(' ');
        let ymd = ymdhms[0].split('-'),
            hms = ymdhms[1].split(':');

        return new Date(+ymd[0], +ymd[1], +ymd[2], +hms[0], +hms[1], +hms[2])
    },
};
