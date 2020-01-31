//오름차순으로 정리
function solution(answers) { 
    //1. 패턴 정리하기
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    //2. 학생 점수
    let student = [0, 0, 0];
    //예를 들어서 [5,9,8];


    //3. 채점하기
    //맞추면 1점씩 올라감
    for (let i = 0; i < answers.lenght; i++){
        if (one[i % one.length] === answers[i]) student[0] += 1;
        //만약에 i가 0이면 0 % 5 = 0 i의 0번째는 1 이것이 대답의 0번째와 같니?
        //만약에 i가 5이면 1 % 5 = 1 i의 1번째는 2 이것이 대답의 0번째와 같니?
        
        //=> 인덱스가 length를 넘어가면 다시 반복 시켜야 하니까 인덱스의 값을 길이로 나눠서 반복시키는거지
        if (two[i % two.length] === answers[i]) student[0] += 1;
        if (three[i % three.length] === answers[i]) student[0] += 1;
    }

    //4. 채점 다 하고 가장 많이 맞춘 학생의 점수 구하기
    const max = Math.max(student[0], student[1], student[2]);
    //만약에 5개 9개 8개 맞췄다면 최댓값은 9

    //5. 1번 학생부터 가장 많이 맞춘 학생의 점수와 비교하며 최고점인 학생들만 answer 배열에 추가하기
    //(배열 index가 0부터 시작하므로 문제가 원하는 리턴값을 맞추기 위해서는 index에 1을 더해야함)

    const answer = [];
    student.forEach((item, index) => {
        if (item === max) {
            //각각의 요소들이 최댓값인 것을 찾아서 만약 student[1]이 최댓값을 가지고 있다면
            answer.push(index + 1);
            //answer.push(2) //숫자 2를 넣어라 그래야지 두번째 사람이 최댓값을 가지고 있는 것이니까
        }
    })
    //오름차순이 a-b이다
    return answer.sort((a, b) => a - b);
}
//다른 분들이 푼 것

// //call 함수 ? 
// fun.call([thisObj[, arg[, arg2[, ...]]]])

// 2. 매개 변수
// fun : 가져다쓸 메소드
// thisObj (선택 사항입니다) : 현재 객체로 사용될 객체
// arg1, arg2, argN (선택 사항입니다) : 메소드에 전달될 인수 목록

//call 메소드는 다른 객체 대신 메소드를 호출하는데 사용,
//이 메서드르 사용해서 함수의 this 객체를 원래 컨텍스트에서 thisObj로 지정된 새객체로 변경할 수 있습니다. 


//apply 함수 ?
// 1. 구문
// 메소드에 체이닝으로 이어 붙여서 사용
// fun.apply([선택사항 : 현재 객체로 사용될 객체],[함수에 전달된 인수 집합]) 

//
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2));
console.log(sum.call(this, 1, 2));
// 값은 같으나 굳이 사용하는 이유는?
// this를 함수의 인자로 넘김으로서 this의 값을 사용할 수도, 변경 할 수도 있게 되기 때문

//예를 들어
type = "zero";
var type1 = { t: "one" };
var type2 = { t: "two" };

function getType() {
    console.log(this.t);
}

getType(); //zero
getType.call(this);     //zero
getType.call(type1);    //one
getType.call(type2);    //two

//this의 값을 변경하는 것도 동일함
type = "zero";
var type1 = { t: "one" };
var type2 = { t: "two" };

function setType(type) {
    this.t = type;
}

function getType() {
    console.log(this.t);
}

setType("_zero");
getType(); //_zero

setType.call(this, "__zero"); //이렇게 설정을 바꿔 이런 뜻인가
getType.call(this); //__zero

setType.call(type1, "_one");
getType.call(type1); //_one

setType.call(type2, "_two");
getType.call(type2); //_two







