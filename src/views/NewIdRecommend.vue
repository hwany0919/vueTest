<template>
  <div id="newId">
    <div class="question">
      <span class="word_bold">1.</span> new_id의 모든 대문자를 대응되는 소문자로 치환합니다.<br>
      <span class="word_bold">2.</span> new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.<br>
      <span class="word_bold">3.</span> new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.<br>
      <span class="word_bold">4.</span> new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.<br>
      <span class="word_bold">5.</span> new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.<br>
      <span class="word_bold">6.</span> new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.<br>
      <span class="word_bold">6-1.</span> 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.<br>
      <span class="word_bold">7.</span> new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    </div>
    <div class="answer" v-for="(str, idx) in new_id" :key="idx">{{ `${idx} :: ` }} {{ getStr(str) }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      new_id: ["...!@BaT#*..y.abcdefghijklm", "z-+.^.", "=.=", "123_.def", "abcdefghijk.l..mn.p"]
    }
  },
  methods: {
    getStr(new_id) {
      let newId = new_id
        .toLowerCase()            // 소문자로 변경
        .replace(/[^\w-.]/g, "")  // \w (알파벳, 숫자, 언더스코어(_)), 하이픈(-), 닷(.)을 제외한 문자 제거
        .replace(/\.{2,}/g, '.')  // \.{2,} : .이 최소 2개 이상인 단어는 . 으로 변경
        .replace(/^\.|\.$/g, '')  // ^\. : 처음 단어가 닷(.), \.$ : 마지막 단어가 닷(.)일 경우 닷(.) 제거
        .padEnd(1, 'a')           // 빈 값일 경우 'a'를 채워넣음
        .slice(0, 15)             // 16자 이상인 단어들 삭제
        .replace(/\.$/, '');      // 마지막 단어가 닷(.)일 경우 제거

      const answer = newId.padEnd(3, newId[newId.length-1]); // 3자리 문자열에 빈값이 있을경우 newId의 마지막 단어로 채워넣음
      
      return answer;
    }
  }
}
</script>

<style lang="less">
  #newId {

  }
</style>