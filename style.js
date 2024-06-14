
        document.querySelectorAll('div[id^="d"]').forEach(div => {
            div.classList.add('hidden');
        });
        function handleButtonClick(event) {
            document.querySelectorAll('div[id^="d"]').forEach(div => {
                div.classList.add('hidden');
            });
            const buttonId = event.target.id;
            const divId = 'd' + buttonId.slice(1);
            document.getElementById(divId).classList.remove('hidden');
        }
        document.querySelectorAll('button[id^="b"]').forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
	document.querySelector(".icon-boutique").addEventListener("click", function() {
	    var blueDiv = document.getElementById("blueDiv");
	    blueDiv.classList.remove("hidden");
	    
	    var cardDiv = document.querySelector(".card");
	    cardDiv.classList.add("hidden");
	});
	document.getElementById("hideButton").addEventListener("click", function() {
	    var blueDiv = document.getElementById("blueDiv");
	    blueDiv.classList.add("hidden");
	    
	    var cardDiv = document.querySelector(".card");
	    cardDiv.classList.remove("hidden");
	});



