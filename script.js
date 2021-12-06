let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons

let paragraph = document.querySelector("#info");
paragraph.innerHTML = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per seasons.
Total viewing time : ${totalShowTime}.`;