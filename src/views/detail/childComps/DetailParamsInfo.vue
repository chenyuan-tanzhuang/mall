<template lang="">
  <div class="detail-params" v-if="Object.keys(detailParams).length !==0">
    <table class="params-sizes" v-for="(item, index) in detailParams.sizes" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="params-infos" v-if="detailParams.infos">
      <tr v-for="item in detailParams.infos">
        <td class="vkey">{{item.key}}</td>
        <td class="vColor">{{item.value}}</td>
      </tr>
    </table>
    <div class="image-info" v-if="detailParams.infos.images">
      <img :src="detailParams.infos.images[0]" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .detail-params {
    padding: 10px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-sizes,
  .params-infos {
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    font-size: 14px;
    overflow: hidden;
  }
  .params-sizes > tr {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .params-sizes > tr > td {
    flex: 1;
  }
  .params-infos > tr {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .vkey {
    width: 60px;
  }
  .vColor {
    color: var(--color-high-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>