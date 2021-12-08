class Episode{
    constructor(title, duration, hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode("My name is", 10, true);
  let secondEpisode = new Episode("How are you ?", 30, false);
  let thirdEpisode = new Episode("Where are come from ?", 20, true);
  let episodes = new Array();
  episodes.push(firstEpisode);
  episodes.push(secondEpisode);
  episodes.push(secondEpisode);

  const body = document.querySelector("body");
  
  for(let episode of episodes){
        let newDiv = document.createElement("div");
        newDiv.classList.add("series-frame");
        let newTitle = document.createElement("h2");
        newTitle.innerHTML = "The Story of Tau";
        let newParagraph = document.createElement("p");
        newParagraph.innerHTML = `${episode.title}. 
        ${episode.duration} minutes.
        ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
        newDiv.append(newTitle);
        newDiv.append(newParagraph);
        body.append(newDiv);
    }