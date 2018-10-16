Component({
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },
  data: {
    NOT_LIKE_IMG: 'images/not-like.png',
    LIKE_IMG: 'images/like.png'
  },
  methods: {
    onLike: function () {
      let like = this.properties.like;
      let count = this.properties.count;
      this.setData({
        like: !like,
        count: like ? --count : ++count
      })
      
      let behavior = this.properties.like ? 'like' : 'cancel';
      this.triggerEvent('like', {
        behavior: behavior
      });
    }
  }
})