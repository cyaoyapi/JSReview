let episodeTitle = "Modern events made clear by prophecy";
let episodeDuration = 30;
let hasBeenWatched = true;

const episode = document.querySelector("#episode-info");
episode.innerHTML = `Episode : ${episodeTitle}. 
Duratiion : ${episodeDuration}. 
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;