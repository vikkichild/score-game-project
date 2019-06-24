var player1_button = document.getElementById("p1");
var player2_button = document.getElementById("p2");
var p1_score = 0;
var p1_scoreboard = document.getElementById("p1_board");
var p2_score = 0;
var p2_scoreboard = document.getElementById("p2_board");
var game_over = false;
var winning_score = 5;
var reset_button = document.getElementById("reset");
var num_input = document.querySelector("input");
var playing_to_num = document.getElementById("playing_to_num");

player1_button.addEventListener('click', function(){
    if(!game_over){
        p1_score++;
        if(p1_score === winning_score){
            p1_scoreboard.classList.add("winner");
            game_over = true;
        }
        p1_scoreboard.textContent = p1_score;
    }
});

player2_button.addEventListener('click', function(){
    if(!game_over){
        p2_score++;
        if(p2_score === winning_score){
            p2_scoreboard.classList.add("winner");
            game_over = true;
        }
        p2_scoreboard.textContent = p2_score;
    }
});

reset_button.addEventListener("click", function(){
    reset();
})

function reset (){
    p1_score = 0;
    p2_score = 0;
    p1_scoreboard.textContent = 0;
    p2_scoreboard.textContent = 0;
    p1_scoreboard.classList.remove("winner");
    p2_scoreboard.classList.remove("winner");
    game_over = false;
}

num_input.addEventListener("change", function(){
    playing_to_num.textContent = num_input.value;
    winning_score = Number(num_input.value);
    reset();
});
