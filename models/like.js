import { HTTP } from '../util/http.js';

export class LikeModel extends HTTP {
  
  like (behavior, artID, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'PATCH',
      data: {
        art_id: artID,
        category:category
      }
    })
  }
}