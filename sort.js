//문자열을 정렬해라 . 올림차순으로
function solution(s) {
    return s.split("").sort((a, b) => a > b ? -1 : 1).join("");
}
//a가 더 크면 -1을 주는것이 오름차순
//내림차순은 a가 더 크면 1을 줘야함
function solution(s) {
    return s.split('').sort((a,b)⇒{
        if(a > b) return -1
        if(b > a) return 1;
        retrun 0
    }).join('');
    }
    
    function solution (s){
    return s
    .split()
    .sort()
    .reverse()
    .join("");
    }