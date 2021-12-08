class Episode{
    constructor(title, duration, hasBeenWatched, ratings){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
      this.ratings = ratings;
    }
  }

  const calculateRatingsAverage = (ratings) => {
      if(ratings.length === 0){
        return 0;
      } else{
        let sumOfRatinngs = 0;
        for(let rating of ratings){
          sumOfRatinngs += rating;
        }
        const averageOfratings = sumOfRatinngs / ratings.length;
        return averageOfratings;
      }
  };
  
  let firstEpisode = new Episode("My name is", 10, true, [2, 4, 1, 5]);
  let secondEpisode = new Episode("How are you ?", 30, false, [5, 5, 3]);
  let thirdEpisode = new Episode("Where are come from ?", 20, true, []);
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
        Average of ratings : ${calculateRatingsAverage(episode.ratings) !== 0 ? 
          calculateRatingsAverage(episode.ratings).toFixed(1) : "Not yet ratings."}
        ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
        newDiv.append(newTitle);
        newDiv.append(newParagraph);
        body.append(newDiv);
    }