<template>
  <div id="app">
    <div class="filebox">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="filebox"
      />
      <label for="file" class="btn btn-margin">사진찾기</label>
      <input type="file" id="file" />

      <label for="my-modal-2" class="btn btn-primary modal-button">text</label>
    </div>
    <input type="checkbox" id="my-modal-2" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <label for="text" class="label-text">text </label>
        <input
          type="text"
          placeholder="text"
          class="input input-bordered label-text"
          v-model="input_data"
        />
        <br />
        <label for="font" class="label-text">font </label>
        <select
          v-model="font"
          class="input input-bordered label-text"
          style="width: 100%"
          @change="img_update"
        >
          <option value="" disabled>폰트</option>
          <option :key="i" :value="d.name" v-for="(d, i) in fonts.FontOptions">
            {{ d.name }}
          </option>
        </select>

        <br />
        <label for="font_size" class="label-text">font size</label>
        <input
          type="text"
          placeholder="font_size"
          class="input input-bordered label-text"
          v-model="font_size"
        />
        <br />
        <label for="font_color" class="label-text">font color</label>
        <input
          type="text"
          placeholder="font_color"
          class="input input-bordered label-text"
          v-model="font_color"
        />
        <div class="modal-action">
          <label for="my-modal-2" class="btn" @click="img_update">Close</label>
        </div>
      </div>
    </div>

    <div class="form_range">
      <label for="text_X_val" class="label-text">X index</label>
      <input
        id="text_X_val"
        type="range"
        :max="image_width - 10"
        v-model="text_X_val"
        class="range range-md"
        @change="img_update"
      />

      <label for="text_Y_val" class="label-text">Y index</label>
      <input
        id="text_Y_val"
        type="range"
        :max="image_height - font_size"
        v-model="text_Y_val"
        class="range range-md"
        @change="img_update"
      />
    </div>
    <br />
    <img id="img" :src="imageLink" alt="" />
    <a :href="imageLink" v-if="imageLink.length > 0" download
      ><label class="btn" @click="img_update">Download</label></a
    >
  </div>
</template>

<script>
import Vue from "vue";
import mergeImages from "merge-images";
import text2png from "text2png";
import fonts from "../assets/data/fonts.ts";
import apollo_client from "../graphql/server_conn";
export default Vue.extend({
  name: "Main",
  data() {
    return {
      fonts,
      imageLink: "",
      input_data: "",
      text_data: "",
      image_url: "",
      text_X_val: 0,
      text_Y_val: 0,
      font_size: 40,
      font: "Arial",
      font_color: "#000000",
      image_width: 0,
      image_height: 0,
    };
  },
  created() {
    apollo_client(navigator.userAgentData.brands);
  },
  methods: {
    async make_text2png() {
      this.text_data = text2png(this.input_data, {
        color: this.font_color,
        font: `${this.font_size}px ${this.font}`,

        output: "dataURL",
      });
    },
    async make_mergeImages(url, text) {
      try {
        await mergeImages([
          { src: url, x: 0, y: 0 },
          { src: text, x: this.text_X_val, y: this.text_Y_val },
        ]).then((b64) => (this.imageLink = b64));
      } catch (e) {
        console.log(e);
      }
    },
    upload(e) {
      this.imageLink = URL.createObjectURL(e.target.files[0]);
      this.make_text2png();
      var file = e.target.files[0];
      this.image_url = window.URL.createObjectURL(file);
      this.text_data == "data:,"
        ? null
        : this.make_mergeImages(this.image_url, this.text_data);
    },
    img_update() {
      this.image_url != "" && this.text_data != ""
        ? (this.make_text2png(),
          (this.image_width = document.getElementById("img").naturalWidth),
          (this.image_height = document.getElementById("img").naturalHeight),
          this.make_mergeImages(this.image_url, this.text_data))
        : null;
    },
  },
});
</script>

<style scoped>
.form_range {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2%;
}
#app {
  justify-content: center;
  align-items: center;
  margin: 3% auto;
}
#img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
}
.input {
  margin: 1%;
}
.modal-box {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.filebox input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  margin-right: 30%;
}
.btn-margin {
  margin-right: 30%;
}
</style>
