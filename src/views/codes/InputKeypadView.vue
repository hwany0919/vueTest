<template>
  <div id="inputKeyPad">
    <div class="question">
      <span class="word_bold">1.</span> 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.<br>
      <span class="word_bold">2.</span> 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.<br>
      <span class="word_bold">3.</span> 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.<br>
      <span class="word_bold">4.</span> 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.<br>
      <span class="word_bold">4-1.</span> 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
    </div>
    <div class="answer" v-for="(number, idx) in numbers" :key="idx">
      {{ `idx :: [${number} / ${hand[idx]}] =====> ` }}
      {{ getData(number, hand[idx], resultData[idx]) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
        [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      ],
      hand: ["right", "left", "right"],
      resultData: ["LRLLLRLLRRL", "LRLLRRLLLRR", "LLRLLRLLRL"]
    }
  },
  created() {
    const numbers = [1,2,3,4,6,7,8,0];
    let answer = numbers.reduce((acc, cur) => {
      console.log("acc :: ", acc,  " /// cur :: ", cur);
      acc += cur;
      return acc;
    });
    console.log("answer :: ", 45 - answer);
  },
  methods: {
    getData(numbers, hand, resultData) {
      // const arrLeft = [1, 4, 7], arrRight= [3, 6, 9], arrMid = [2, 5, 8, 0];
      const left = [1, 4, 7], right = [3, 6, 9], mid = [2, 5, 8, 0],
      handed = (hand === "right") ? "R" : "L";
      let leftFinger, rightFinger;
      let arrData = numbers.reduce((arr, cur) => {
          if (left.indexOf(cur) > -1) {
              arr.push("L");
              leftFinger = left.indexOf(cur);
          } else if (right.indexOf(cur) > -1) {
              arr.push("R");
              rightFinger = right.indexOf(cur);
          } else {
              let indexMid = mid.indexOf(cur),
                  lCnt = Math.abs(indexMid - leftFinger),
                  rCnt = Math.abs(indexMid - rightFinger);
              console.log(cur, indexMid, "lCnt :: ", lCnt, " // rCnt :: ", rCnt);
              if (lCnt < rCnt) {
                  arr.push("L");
              } else if (lCnt > rCnt) {
                  arr.push("R");
              } else {
                  arr.push(handed);
              }
          }
          return arr;
      }, []);
      
      // return `Numbers : ${numbers}, hand : ${hand}, result: ${resultData}`;
      return `Answer :: ${arrData}, result: ${resultData}`;
    }
  }
}
</script>