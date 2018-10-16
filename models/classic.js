import {HTTP} from '../util/http.js';

export class ClassicModel extends HTTP {

  getLatest (callback) {
    this.request({
      url: '/classic/1',
      success: function (res) {
        callback(res);
      }
    })
  }
}