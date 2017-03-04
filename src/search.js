/**
 * @file 搜索算法
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

import Sort from './sort';

/**
 * 搜索算法class
 */
export default class Search extends Sort {

  /**
   * 顺序搜索
   * @param item 搜索的元素
   * @return {number} 搜索结果
   */
  sequentialSearch(item) {
    for (let i = 0; i < this.array.length; i++) {
      if (item === this.array[i]) {
        return i;
      }
    }
    return -1;
  }

  /**
   * 二分搜索
   * @param item 搜索的元素
   * @return {number} 搜索结果
   */
  binarySearch(item) {
    this.quickSort();
    let low  = 0;
    let high = this.array.length - 1;
    let mid;
    let element;

    while (low <= high) {
      mid     = Math.floor((low + high) / 2);
      element = this.array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return high
      }
    }
    return -1;
  }
}