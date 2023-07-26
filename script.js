const toDoList=[];

function toAdd()
{
    let inputName=document.querySelector(".input-name");

    let inputDate=document.querySelector(".input-date");

    let inputTime=document.querySelector(".input-time");

    toDoList.push({
        name:inputName.value,
        date:inputDate.value,
        time:inputTime.value

    });


    addBellow();

    inputName.value='';
    inputDate.value='';
    inputTime.value='';

}

function addBellow()
{
    let textHtml='';

    for(i=0;i<toDoList.length;i++)
    {
        const todoObject=toDoList[i];

        const {name}=todoObject;
        
        const {date}=todoObject;

        const {time}=todoObject;
        let html;
        html=`
            
            <p>${i+1}: ${name}</p>
            <p>${date}</p>
            <p>${time}</p>
            <button class="del-but" onclick="    toDoList.splice(${i},1);
            addBellow()">
            Delete
            </button>`;

        textHtml += html;   
    }

    document.querySelector('.js-div').innerHTML=textHtml;
}

function press(event)
{
    if(event.key==='Enter')
    {
        toAdd();
    }
}