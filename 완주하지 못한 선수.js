//완주하지 못한 선수
function solution(participant, completion) {
    const p = participant.sort();
    const c = completion.sort();

    for (let i = 0; i < p.lenght; i++){
        if (p[i] != c[i]) {
            return p[i];
        }
    }
}

//다른 사람의 풀이
//reduec?? 배열 안의 모든 값들을 연산할 때 사용
const numbers = [1, 2, 3, 4, 5];

//더하기
const sum = numbers.reduce((acc, cur) => acc + cur, 0) //첫번째는 accumulator(누적값), 두번째는 current(현재값) // 그 다음 0은 초기 누적값을 뜻함
console.log(sum); //결과는 15

//만약 평균을 구하고 싶다면
const avg = numbers.reduce((acc, cur, index, array) => {
    if (i2ndex === array.length - 1) {
        //가장 마지막 꺼라면 즉 인덱스가 4라면
        return (acc + cur) / array.length;
    }
    return acc + cur //0,1,2,3 인덱스에서는 더하기만 함
}, 0); //-> 3
//일단 계속 더하다가 마지막에는 나누기 