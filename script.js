let episode = {
    title: "Modern events made clear by prophecy",
    duration: 30,
    hasBeenWatched: true
};

const episodeInfo = document.querySelector("#episode-info");
episodeInfo.innerHTML = `Episode : ${episode.title}. 
Duratiion : ${episode.duration}. 
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;