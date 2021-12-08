class Episode{
    constructor(title, duration, hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
      this.ratings = [];
    }

    addRating(rating){
      if(isNaN(rating)){
        console.log("Rating must be a number!");
      } else{
        this.ratings.push(rating);
      }
    }

    calculateRatingsAverage() {
      if(this.ratings.length === 0){
        return 0;
      } else{
        let sumOfRatinngs = 0;
        for(let rating of this.ratings){
          sumOfRatinngs += rating;
        }
        const averageOfratings = sumOfRatinngs / this.ratings.length;
        return averageOfratings;
    }
  }

  }

  
  let firstEpisode = new Episode("My name is", 10, true);
  firstEpisode.addRating(5);
  firstEpisode.addRating(5);
  firstEpisode.addRating(2);
  let secondEpisode = new Episode("How are you ?", 30, false);
  secondEpisode.addRating(3);
  secondEpisode.addRating(1);
  let thirdEpisode = new Episode("Where are come from ?", 20);
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
        Average of ratings : ${episode.calculateRatingsAverage() !== 0 ? 
          episode.calculateRatingsAverage().toFixed(1) : "Not yet ratings."}
        ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
        newDiv.append(newTitle);
        newDiv.append(newParagraph);
        body.append(newDiv);
    }