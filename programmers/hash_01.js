/* 
    프로그래머스 코딩 테스트 연습
    해시 01번 문제 완주하지 못한 선수
*/

function solution(participant, completion) {
    

    const map = new Map();

    participant.forEach(e => {
        const index = map.get(e) || 0;
        
        map.set(e, index + 1);
    });


    completion.forEach(e =>{
        const index = map.get(e);

        map.set(e, index - 1)

        if(map.get(e) === 0 ){
            map.delete(e);
        }
    });


    return map.keys().next().value;

    
};