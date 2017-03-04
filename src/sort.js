/**
 * @file 排序算法
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 排序算法class
 */
class Sort {
  constructor() {
    this.array = [];
  }

  /**
   * 插入元素
   * @param item 元素
   */
  insert(item) {
    this.array.push(item);
  }

  /**
   * 输出排序结果
   * @return {string}
   */
  toSting() {
    return this.array.join();
  }

  /**
   * 冒泡排序
   */
  bubbleSort() {
    const length = this.array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this._swap(j, j + 1)
        }
      }
    }
  }

  /**
   * 选择排序
   */
  selectionSort() {
    const length = this.array.length;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = 0; j < length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        this._swap(i, indexMin);
      }
    }
  }

  /**
   * 插入排序
   */
  insertionSort() {
    const length = this.array.length;
    let j;
    let temp;
    for (let i = 0; i < length; i++) {
      j    = i;
      temp = this.array[i];
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1];
        j--;
      }
      this.array[j] = temp;
    }
  }

  /**
   * 归并排序
   */
  mergeSort() {
    this.array = this._mergeSortRec(this.array);
  }

  /**
   * 快速排序
   */
  quickSort() {
    this._quick(this.array, 0, this.array.length - 1);
  }

  /**
   * 拆分大数组为小数组（归并排序）
   * @param {Array} array 参与排序的数组
   * @return {Array} 排序结果
   * @private
   */
  _mergeSortRec(array) {
    const length = this.array.length;

    if (length === 1) {
      return array;
    }

    const mid   = Math.floor(length / 2);
    const left  = array.slice(0, mid);
    const right = array.slice(mid, length);

    return this._merge(left, right);
  }

  /**
   * 合并和排序小数组（归并排序）
   * @param {Array} left 左数组
   * @param {Array} right 右数组
   * @return {Array} 排序结果
   * @private
   */
  _merge(left, right) {
    let result = [];
    let il     = 0;
    let ir     = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il + 1]);
      } else {
        result.push(right[ir + 1]);
      }
    }

    while (il < left.length) {
      result.push(left[il + 1]);
    }

    while (ir < right.length) {
      result.push(right[ir + 1]);
    }

    return result;
  }

  /**
   * 快速排序
   * @param {Array} array 参与排序的数组
   * @param {number} left 左指针
   * @param {number} right 右指针
   * @private
   */
  _quick(array, left, right) {
    let index;

    if (array.length > 1) {
      index = this._partition(array, left, right);

      if (left < index - 1) {
        this._quick(array, left, index - 1);
      }

      if (index < right) {
        this._quick(array, index, right);
      }
    }
  }

  /**
   * 快速排序划分过程
   * @param {Array} array 参与排序的数组
   * @param {number} left 左指针
   * @param {number} right 右指针
   * @return {number}
   * @private
   */
  _partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let i     = left;
    let j     = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this._swapQuickSort(array, i, j);
        i++;
        j--;
      }
    }

    return i;
  }

  /**
   * 交换元素
   * @param {number} index1 元素1指针
   * @param {number} index2 元素2指针
   * @private
   */
  _swap(index1, index2) {
    const aux          = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = aux;
  }

  /**
   * 交换元素（快速排序）
   * @param {Array} array 参与交换元素的数组
   * @param {number} index1 元素1指针
   * @param {number} index2 元素2指针
   * @private
   */
  _swapQuickSort(array, index1, index2) {
    const aux     = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
}