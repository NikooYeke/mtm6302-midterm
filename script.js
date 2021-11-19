
const storyList = document.getElementById('story-list')
const storyForm = document.getElementById('story-form')
const storyResult = document.getElementById('story-result')

function story(story_id) {
     // remove story list
     storyList.classList.remove('d-block')
     storyList.classList.add('d-none')

     //show story form
     storyForm.classList.remove('d-none')
     storyForm.classList.add('d-block')

     loadStories(story_id)
}

function loadStories(story_id) {
     console.log(stories[story_id].title);
     console.log(stories[story_id].words);



}


 

