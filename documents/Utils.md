# Pocket-Utils
[返回](https://github.com/yanyj1993/pocket-es6)<br>
[查看源码](../src/pocket-utils)
## utils:

* coordinate: 坐标转换的工具类
   * `bd09togcj02`: 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换，即 百度 转 谷歌、高德
   * `gcj02tobd09`: 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
   * `wgs84togcj02`: WGS84转GCj02
   * `gcj02towgs84`: GCJ02 转换为 WGS84
   * `bd09towgs84`: GCJ02 转换为 WGS84
   * `out_of_china`: 判断是否在国内，不在国内则不做偏移
   * `mercatorTolonlat`: 墨卡托投影转换为经纬度坐标
   * `lonlatTomercator`: 经纬度转换为墨卡托投影

