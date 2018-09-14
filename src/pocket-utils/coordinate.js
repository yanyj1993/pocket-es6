// 一些常量的定义

const x_PI = 3.14159265358979324 * 3000.0 / 180.0;
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = .00669342162296594323;

/**
 *  该类用来封装一些个人处理坐标转换的函数
 */
export default class Coordinate {

    /**
     * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
     * 即 百度 转 谷歌、高德
     * @param bd_lon
     * @param bd_lat
     * @returns {number[]}
     */
    static bd09togcj02(bd_lon, bd_lat) {
        bd_lon = +bd_lon;
        bd_lat = +bd_lat;
        let x = bd_lon - 0.0065;
        let y = bd_lat - 0.006;
        let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
        let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
        let gg_lng = z * Math.cos(theta);
        let gg_lat = z * Math.sin(theta);
        return [gg_lng, gg_lat]
    };

    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
     * 即谷歌、高德 转 百度
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    static gcj02tobd09(lng, lat) {
        lat = +lat;
        lng = +lng;
        let z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
        let theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
        let bd_lng = z * Math.cos(theta) + 0.0065;
        let bd_lat = z * Math.sin(theta) + 0.006;
        return [bd_lng, bd_lat]
    };

    /**
     * WGS84转GCj02
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    static wgs84togcj02(lng, lat) {
        lat = +lat;
        lng = +lng;
        if (Coordinate.out_of_china(lng, lat)) {
            return [lng, lat]
        } else {
            let dlat = Coordinate.transformlat(lng - 105.0, lat - 35.0);
            let dlng = Coordinate.transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * PI;
            let magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return [mglng, mglat]
        }
    };

    /**
     * GCJ02 转换为 WGS84
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    static gcj02towgs84(lng, lat) {
        lat = +lat;
        lng = +lng;
        let transformlat = Coordinate.transformlat;
        let transformlng = Coordinate.transformlng;
        if (Coordinate.out_of_china(lng, lat)) {
            return [lng, lat]
        } else {
            let dlat = transformlat(lng - 105.0, lat - 35.0);
            let dlng = transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * PI;
            let magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return [lng * 2 - mglng, lat * 2 - mglat]
        }
    };

    static transformlat(lng, lat) {
        lat = +lat;
        lng = +lng;
        let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
        return ret
    };

    static transformlng(lng, lat) {
        lat = +lat;
        lng = +lng;
        let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
        return ret
    };

    static bd09towgs84(lng, lat) {
        let _a = Coordinate.bd09togcj02(lng,lat);
        return Coordinate.gcj02towgs84(_a[0], _a[1]);
    };

    /**
     * 判断是否在国内，不在国内则不做偏移
     * @param lng
     * @param lat
     * @returns {boolean}
     */
    static out_of_china(lng, lat) {
        lat = +lat;
        lng = +lng;
        // 纬度3.86~53.55,经度73.66~135.05
        return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
    };

    /**
     * 墨卡托投影转换为经纬度坐标
     * @param mercator
     * @return {*[]}
     */
    static mercatorTolonlat(mercator) {
        let x = mercator[0] / 20037508.34 * 180;
        let y = mercator[1] / 20037508.34 * 180;
        y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
        return [x, y];
    };
    /**
     * 经纬度转换为墨卡托投影
     * @param lonlat
     * @return
     */
    static lonlatTomercator(lonlat) {
        let x = lonlat[0] *20037508.34/180;
        let y = Math.log(Math.tan((90+lonlat[1])*Math.PI/360))/(Math.PI/180);
        y = y *20037508.34/180;
        return [x, y] ;
    }


}
