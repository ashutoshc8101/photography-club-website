eventData = [
    {
        image : './assest/pp.jpg',
        title : 'title of the event',
        description : 'Description of the event',
        googleForm : 'https://www.google.com'
    },
    {
        image : './assest/pp.jpg',
        title : 'title of the event',
        description : 'Description of the event',
        googleForm : 'https://www.google.com'
    },
    {
        image : './assest/pp.jpg',
        title : 'title of the event',
        description : 'Description of the event',
        googleForm : 'https://www.google.com'
    },
    {
        image : './assest/pp.jpg',
        title : 'title of the event',
        description : 'Description of the event',
        googleForm : 'https://www.google.com'
    },
    {
        image : './assest/pp.jpg',
        title : 'title of the event',
        description : 'Description of the event',
        googleForm : 'https://www.google.com'
    }
]



function showEventData(eventData){
    for(i = 0; i<eventData.length; i++){
        document.querySelector('.event-container').innerHTML +=`
        <section class="event-card" data-aos="fade-up">
            <img src="${eventData[i].image}" alt="" class="event-image"/>
            <div>
              <h3 class="event-title">${eventData[i].title}</h3>
              <p class = "event-description">
                ${eventData[i].description}
              </p>
              <a href="${eventData[i].googleForm}" class="btn btn-primary">Register Now</a>
            </div>
          </section>` 
    }
}

showEventData(eventData)