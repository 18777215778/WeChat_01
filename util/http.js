import { config } from '../config.js';

const tips = {
  "0": "抱歉，出现了一个错误",
  "1": "OK, 成功",
  "1000": "输入参数错误",
  "1001": "输入的json格式不正确",
  "1002": "找不到资源",
  "1003": "未知错误",
  "1004": "禁止访问",
  "1005": "不正确的开发者key",
  "1006": "服务器内部错误",
  "3000": "该期内容不存在",
}

export class HTTP {

  request (params) {
    params.method = params.method || 'GET';

    wx.request({
      url: `${ config.API_BASE_URL }${ params.url }`,
      method: params.method,
      data: params.dat,

      success: (res) => {
        const code = res.statusCode;
        if (code/100 === 2) {
          params.success(res.data);
        } else {
          this._showError("3000")
        }
        
      },

      fail: (errCode) => {
        this._showError("0")
      }
    })
  }

  _showError(errCode) {
    wx.showToast({
      title: tips[errCode] || tips["0"],
      icon: 'none',
      duration: 1500
    })
  }
}