const stundent_score = [30, 45, 50, 55, 60, 75, 80 , 85, 90, 95 ]
console.log(stundent_score.length);
let count_passed_students = 0;
for(let i=0; i<stundent_score.length; i++){
    if(stundent_score[i] < 40){
        stundent_score[i] += 20;
        if(stundent_score[i] >= 50){
            count_passed_students++;
        }
    }else if(stundent_score[i] > 90){
        stundent_score[i] = 90;
        count_passed_students++
    }else if(stundent_score[i] >= 50){
        count_passed_students++;
    }
}
console.log(count_passed_students);

console.log(stundent_score);