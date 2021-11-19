const storyList = document.getElementById('story-list');
const storyForm = document.getElementById('story-form');
const storyResult = document.getElementById('story-result');

function toggleView(enable_view, disable_views){
    // clear both block and none class for all views
    storyList.classList.remove('d-block', 'd-none');
    storyForm.classList.remove('d-block', 'd-none');
    storyResult.classList.remove('d-block', 'd-none');

    // hide other views
    for(let i = 0; i < disable_views.length; i++){
        // console.log(disable_views[i])
        disable_views[i].classList.add('d-none');
    }

    // show active view
    enable_view.classList.add('d-block')

}

function story(story_id){
    toggleView(storyForm, [storyList, storyResult]);
    loadStories(story_id)
}

function loadStories(story_id){
    storyForm.innerHTML = ""; // empty div 

    const storyTitle = document.createElement('h3');
//     storyTitle.className = "text-primary py-2"
    storyTitle.innerHTML = 'Provide the following words';
    storyForm.appendChild(storyTitle);

    // create a dynamic form
    const form = document.createElement('form');

    // generrate form input dynamically
    const words = stories[story_id].words;
    for (const word of words) {
        let input = document.createElement("input");
        input.type = "text";
        input.name = word;
        input.placeholder = word;
     //    input.className = "form-control mb-2";
        form.appendChild(input);
    }
    
    // generate submit button
    const btnRead = document.createElement("button");
    btnRead.innerHTML = "Read story"
//     btnRead.className = "btn btn-primary";
    btnRead.onclick = function(){
        storyResult.innerHTML = ""; // empty div  

        // convert form data to array
        const elements = form.elements;
        const user_input ={};
        for(let i = 0 ; i < elements.length ; i++){
            const item = elements.item(i);
            user_input[item.name] = item.value;
        }
        
        console.log(user_input)

        // add story title
        const title = document.createElement("h3");
        title.innerHTML = stories[story_id].title
     //    title.className = "text-center text-primary";
        storyResult.appendChild(title);

        // show story content
        const storyBox = document.createElement('div');
        storyBox.innerHTML = stories[story_id].output(user_input);;
        storyBox.className = 'story-result';
        storyResult.appendChild(storyBox)

        // add button to show story list view
        const btnReturn = document.createElement("button");
        btnReturn.innerHTML = "Create New Story"
        btnReturn.className = "result";
        btnReturn.onclick = function(){
            toggleView(storyList, [storyResult, storyForm])
        }
        storyResult.append(btnReturn)
    
        toggleView(storyResult, [storyForm, storyList])
        return false;
    };
    form.appendChild(btnRead);

    // add form to div
    storyForm.appendChild(form)
}



 

