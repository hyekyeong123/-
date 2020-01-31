function solution(array, commands) {
    return commands.map( v=> {
        return array.slice(v[0]-1, v[1]).sort().slice(v[2]-1,v[2])[0];
        //커맨즈의 0번째부터 커맨즈의 1번째까지 가져오기(단 슬라이스는 그 전까지 가져오는 것이기 때문에 -1을 해줘야함) // 그 후 정렬 //그 후 해당인덱스 숫자 가져오기
        
        //뒤에 [0]을 붙이지 않았을 때에는 실행한 결괏값 Array [ Array [ 5 ], Array [ 6 ], Array [ 3 ] ]이(가) 기댓값 Array [ 5, 6, 3 ]와(과) 다릅니다. 
    })
}