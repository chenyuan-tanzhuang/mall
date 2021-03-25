<template lang="">
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-head">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <!-- 头像 名称 -->
    <div class="comment-info">
      <img :src="commentInfo.user.avatar"  />
      <span>{{ commentInfo.user.uname}}</span>
    </div>
    <!-- 信息 -->
    <div class="comment-detail">
      <p>{{commentInfo.content}}</p>
      <div class="comment-detail-info">
        <span>{{ commentInfo.created | createdDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="comment-detail-img" v-if="commentInfo.images">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" />
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    createdDate(val) {
      const date = new Date(val * 1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>
<style scoped>
  .detail-comment {
    padding: 10px 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-head {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    align-items: center;
    border-bottom: 1px solid rgb(224, 223, 223);
  }
  .comment-head > div {
    flex: 1;
  }
  .comment-head > div:last-child {
    text-align: right;
  }
  .comment-info {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .comment-info img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .comment-info span {
    padding-left: 20px;
  }
  .comment-detail-info {
    margin-top: 10px;
  }
  .comment-detail-info > span:last-child {
    margin-left: 10px;
  }
  .comment-detail-img {
    margin-top: 10px;
  }
  .comment-detail-img > img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>