	const player = document.getElementById("player");
	const gameDisplay = document.getElementById("body-container");
    const sky = document.getElementsByClassName('sky');
	const playerImg = document.getElementById("playerImg");
	const scoreValue = document.querySelector('h1');
	const timeValue = document.querySelector('h2');
	const btn = document.querySelector('button');
	const input = document.querySelector('input');
	const ul = document.querySelector('ul');
	const playAgain = document.getElementById('playagain')
	// const scoreForm = document.getElementsByClassName("form")

	let playerLeft = 250;
	let playerBottom = 300;
	let gravity = 2;
	let isGameOver = false;
	let score = 0;
    let obstacleBottom;
	let gap = 400;
	// let time = 30;
	// let level = 1;
	// let isLevelTwo = false;

	function startGame() {
		playerBottom -= gravity;
		player.style.bottom = playerBottom + "px";
		player.style.left = playerLeft + "px";
		if (playerBottom <= 50) {
            gameOver();
    	}
	}

	function resetGlobalVariables() {
		gameOver()
		document.getElementsByClassName("form")[0].style.display = "none"
		timerId = setInterval(startGame, 15)
		playerLeft = 250;
		playerBottom = 300;
		gravity = 2;
		isGameOver = false;
		score = 0;
		scoreValue.innerText = `SCORE: ${score}`
		gap = 400;
		startGame()
		createObstacle()
		document.addEventListener("click", jump);
		playerImg.src = "/images/pig.png"
	}

	let timerId = setInterval(startGame, 15);
	
	// function updateTimer() {
	// 	time = time - 1;
	// 	timeValue.innerText = `TIME: ${time}`
		// if(time === 0){
		// 	isLevelTwo = true;
		// 	console.log(isLevelTwo)
		// 	time = 30;
		// }
	// }

	// timer = setInterval(updateTimer, 1000);
	// updateTimer()

	// Jump function
	function jump() {
		if (playerBottom < 480) {
			playerBottom += 60;
			player.style.bottom = playerBottom + "px";
		}
		console.log(playerBottom)
    }
	document.addEventListener("click", jump);

    // Creating obstacles
	function createObstacle() {
		let obstacleLeft = 900;
		let randomHeight = Math.random() * 100;
		let obstacleBottom = randomHeight;
		const obstacle = document.createElement("div");
		const topObstacle = document.createElement("div");
		if (!isGameOver) {
			obstacle.classList.add("obstacle");
			topObstacle.classList.add("topObstacle");
		}
		gameDisplay.appendChild(obstacle);
		gameDisplay.appendChild(topObstacle);
		obstacle.style.left = obstacleLeft + "px";
		topObstacle.style.left = obstacleLeft + "px";
		obstacle.style.bottom = obstacleBottom + "px";
		topObstacle.style.bottom = obstacleBottom + gap + "px";
    
        function moveObstacle() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px';
            topObstacle.style.left = obstacleLeft + 'px';
             
            if (obstacleLeft < playerLeft - 300) {
             clearInterval(obstacleTime)
             gameDisplay.removeChild(obstacle)
			 gameDisplay.removeChild(topObstacle)
            }				
            if (obstacleLeft > 200 && obstacleLeft <= 250 && (playerBottom < obstacleBottom + 200 || playerBottom > gap - 50)){
				playerImg.src = "/images/ham.png"
				startGame()
				if (playerBottom <= 50) {
					playerBottom = 50
				}
				document.removeEventListener("click", jump);
            }
			if (!(obstacleLeft > 200 && obstacleLeft <= 250 && (playerBottom < obstacleBottom + 200 || playerBottom > gap)) && obstacleLeft === playerLeft){
				score += 1;
				scoreValue.innerText = `SCORE: ${score}`
			}
			// if(isLevelTwo) {
			// 	levelTwo()
			// }
			}
		let obstacleTime = setInterval(moveObstacle, 25)
        if (!isGameOver) {setTimeout(createObstacle, 3000)
		 } // else {
		// 	clearInterval(obstacleTime)
        //     while(gameDisplay.contains('obstacle')){
		// 	gameDisplay.removeChild(obstacle)
		// 	}
		// 	while(gameDisplay.contains('topObstacle')){
		// 		gameDisplay.removeChild(topObstacle)
		// 	}
		// }
	// 	if(isLevelTwo) {
	// 		setTimeout(createObstacle, 2000)
	// 		obstacleLeft -= 4
	// }
	}
	createObstacle()
    
function gameOver() {
		clearInterval(timerId);
		console.log("Game Over");
		isGameOver = true;
		playerImg.src = '/images/bacon.png'
		document.removeEventListener("click", jump);
		console.log(isGameOver);
		document.getElementsByClassName("form")[0].style.display = "block"		
	}	
	btn.addEventListener('click', event => {
		const li = document.createElement('li');

		li.textContent = input.value + ': ' + score
	
		ul.appendChild(li)
	
		input.value = ''
	});
	playAgain.addEventListener('click', event => {
	// document.getElementsByClassName("form")[0].style.display = "none"
	resetGlobalVariables()
	// if (!isGameOver) {setTimeout(createObstacle, 3000)
	// }
	})


// function levelTwo() {
// 	gap = 300;
// 	}

