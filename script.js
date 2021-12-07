const episode = {
    title: "Modern events made clear by prophecy",
    duration: 30,
    hasBeenWatched: true
};
let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let hasBeenWatched = episode.hasBeenWatched;
const episodeInfo = document.querySelector("#episode-info");
episodeInfo.innerHTML = `Episode : ${episodeTitle}. 
Duratiion : ${episodeDuration}. 
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;