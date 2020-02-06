const currentDayEl = $(`#currentDay`)
const mainContentContainer = $(`#mainContentContainer`)
const dayinHistory = $(`#dayinHistory`)
const timeSettingsBtn = $(`#timeSettingsBtn`)
const containerRow = $(`#containerRow`)
const textareaObj = $(`.textInput`)
const blockquoteFooter = $(`#blockquote-footer`)
const blockquoteBody = $(`#blockquoteBody`)
const blockquoteHeadline = $(`#blockquoteHeadline`)
const articleDateSpan = $(`#articleDate`)
const dateRowDiv = $(`#dateRow`)
var currentMonth = moment().format(`M`)
var currentYear = moment().format(`YYYY`)
var storedSlotData, t, amt;

if(localStorage.getItem(`userTimeChoice`) === null){
    t = 9
} else {
    t = localStorage.getItem(`userTimeChoice`)
}
if(localStorage.getItem(`userAmtChoice`) === null){
    amt = 9
} else {
    amt = localStorage.getItem(`userAmtChoice`)
}


var dayInHistoryEvent;
var currentDate = moment().format(`LLLL`) 
var optionalUserDefaultText;

function retrievePastArticle(){
    var apiKey = "2ObGDPGfogXexClajXxjgalAgy5fUWke";
    var dateNow = moment().format()
    var randYear = (Math.floor(Math.random() * (currentYear - 1851)) + 1851)

    $.ajax({
        url: "https://api.nytimes.com/svc/archive/v1/"+ randYear + "/" + currentMonth + ".json?api-key=" + apiKey,
        method: "GET"
    }).then(function(res) {
        console.log(`======= response received =======`)
        console.log(res.response)
    
        var len = res.response.docs.length
        var today = moment().format(`D`)
        var rand = Math.floor(Math.random() * len)
        var article = res.response.docs[rand]  
        
        // skipping any articles from the archives that don't have a lead paragraph
        for(i=0;i<len;i++){
            if(article.abstract === null){
                console.log(`abstract is null`)
                 rand = Math.floor(Math.random() * len)
                 article = res.response.docs[rand]
            } else {
                break
            }
        }

        var pubDate = res.response.docs[rand].pub_date
        var pubDD = moment(pubDate).format(`D`)

        console.log(article)
        
        console.log(`today day is: ` + today + ` and article's pub day is: ` + pubDD)
        pubDate = moment(pubDate).format(`LL`)
        console.log(pubDate)

        articleDateSpan.text(moment(pubDate).format(`LL`))
        console.log(article.headline.main)
        blockquoteHeadline.text(article.headline.main)
        blockquoteBody.text(article.abstract)
        $(`#articleSource`).text(article.source)
        // save this for when you want actual day, day
        // for(i=0;i<len;i++){
        //     if(pubDD === today){
        //         console.log(`=== MATCH! ===`)
        //         console.log(`This is your article to use: ` + article.headline.main)
        //         console.log(`Published on: ` + pubDate)
        //         return
        //     } else {
        //         console.log(`Not matching: pubDD-`+pubDD+` today-`+today)
        //     }
        // }
        // console.log(`This is your article to use: ` + article.headline.main)
        // console.log(`Published on: ` + pubDate)
        // pubDate = moment(pubDate).format(`LL`)


    
    
        console.log(`======= END response =======`)
    });

}

function init(){
    retrievePastArticle()
    setInterval(() => {
        currentDayEl.text(currentDate) 
        }, 1000);
    if((JSON.parse(localStorage.getItem(`storedSlotData`)) === null)){
        storedSlotData = savedTimeSlots;
    } else {
        storedSlotData = JSON.parse(localStorage.getItem(`storedSlotData`))
    }
        
    generateTimeSlots()
    printSavedData()
}

init()

dateRowDiv.on(`click`, function(e){
    var el = e.target
    console.log(el)

    switch(el.id){
        case `leftChevron`:
            alert(`this is the left`)
            break
        case `currentDay`:
            alert(`Today is: ` + currentDate)
            break
        case `rightChevron`:
            alert(`this is the right`)
            break
    }
})

function printSavedData(){
    console.log(`======= printSaveData() function START =======`)

    for(i=0;i<storedSlotData.length;i++){
        $(`#textarea-`+storedSlotData[i].datestamp).text(storedSlotData[i].message)
        console.log(`datestamps in obj are: `)
        console.log(storedSlotData[i].datestamp)
    }

    console.log(`======= printSaveData() function END =======`)
}
function generateTimeSlots(time = 9, amount = 9, input = `enter text`){
    console.log(`======= generateTimeSlots() function START =======`)
    console.log(time, amt, input)
    time = t
    amount = amt 

    var textAreaClassPast = `col col-lg-8 px-1 h-100 textInput border-none bg-gray`
    var textAreaClassPresent = `col col-lg-8 px-1 h-100 textInput border-none bg-danger`
    var textAreaClassFuture = `col col-lg-8 px-1 h-100 textInput border-none bg-success`

    for(i=0;i<amt;i++){
        var timePrint, str;

        if(time > 24){
            timePrint = moment(`0101 `+(time-24)+`:00`).format(`hh:mm A`)
            str = moment().add(1, 'day').format(`YYYYMMDD`)
        } else {
            str = moment().format(`YYYYMMDD`)
            timePrint = moment(`0101 `+time+`:00`).format(`hh:mm A`)
        }

        var textareaInput = $(`<textarea>`)
        var timeDisplay = $(`<div>`)
        var expandBtn = $(`<i>`)
        var saveBtn = $(`<i>`)
        // var expandDiv = $(`<div>`)
        var newRow = $(`<div>`).attr(`class`, `row mb-1 w-100 justify-content-center timeSlotRow`)

        // quick check between current time and time displayed in planner
        var dateNow = moment().format(`YYYYMMDDHH`)
        
        var dateStamp
        if(time<10){
            dateStamp = str+`0`+time
        } else{
            dateStamp = str+time
        }

        if(dateStamp === dateNow){
            taClass = textAreaClassPresent
        } else if(dateStamp < dateNow){
            taClass = textAreaClassPast
        } else{
            taClass = textAreaClassFuture
        }

        timeDisplay.attr(`class`,`col-2 bg-light timeDisplay px-2 text-right`).text(timePrint).attr(`title`,`timeDisplay`).attr(`data-date`, moment().format(`YYYYMMDD`));
        textareaInput.attr(`class`,taClass).attr(`placeholder`,input).attr(`title`,`textarea`).attr(`id`, `textarea-`+dateStamp).attr(`data-datestamp`, dateStamp);
        expandBtn.attr(`class`,`col-1 btn btn-info rounded-0 fa fa-chevron-down`).attr(`title`,`expandBtn`).attr(`id`, `expandBtn-`+dateStamp).attr(`data-toggle`,`disabled`).attr(`data-target`,`#textarea-`+i).attr(`aria-expanded`,`false`).attr(`aria-controls`,`textarea-`+dateStamp).attr(`data-datestamp`, dateStamp);
        saveBtn.attr(`class`,`col-1 btn btn-light rounded-0 fa fa-save`).attr( `title`,`saveBtn`).attr(`id`, `saveBtn-`+dateStamp).attr(`data-datestamp`, dateStamp);
        containerRow.append(newRow)
        newRow.append(timeDisplay, textareaInput, saveBtn, expandBtn)
        
        time++
        
    }

    // localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))  
    console.log(`======= generateTimeSlots() function END =======`)
}
function clearTimeSlots(){
    console.log(`======= clearTimeSlots() function START =======`)




    console.log(`======= clearTimeSlots() function END =======`)

}
function removeTimeSlots(){
    // console.log(`======= removeTimeSlots() function START =======`)

    containerRow[0].innerHTML = ``;

    // console.log(`======= removeTimeSlots() function END =======`)
}
function savetoStorage(event){
    console.log(`======= Saved to Storage START ======= `)

    var el = event.target
    var buttonDateStamp = el.attributes[`data-datestamp`].value
    var winnerTextarea = $(`#textarea-`+buttonDateStamp)
    var winnerMessage = winnerTextarea[0].value
    var winnerStamp = winnerTextarea[0].attributes[`data-datestamp`].value
    var found = false;

    // checking to see if timeslot already exists in savedObj
    for(j=0;j<storedSlotData.length;j++){
        if(storedSlotData[j].datestamp === winnerStamp){
            // if entry already exists, update found variable so no new obj gets inserted
            found = true
            console.log(`found a match in the saved logs`)
            storedSlotData[j].message = winnerMessage                                   // update the value to new text input
            localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))
            // return found
        }

    }
    // if no entry found in savedObj make new obj from template and insert relevant info
    if(found){
        console.log(`updated logs (i think)...`)
        found = false
    } else {
        console.log(`creating new obj...`)
        var newObj = templateObj
        newObj.datestamp = winnerStamp
        newObj.message = winnerMessage
        console.log(storedSlotData)
        storedSlotData.push(newObj)
        localStorage.setItem(`storedSlotData`,JSON.stringify(storedSlotData))       // don't forget to update the savedObj
    }

    console.log(`======= Saved to Storage END ======= `)
}

function timeSettings(e){
    // should save this in localStorage and have it preload into default time and amt (in generateSlots)
    var timeChoice =  prompt(`What time does your work day start? (0 - 23)\n0 = midnight\n23 = 11PM`)
    var amtChoice = prompt(`how many hours would you like displayed?`)
    localStorage.setItem(`userAmtChoice`,amtChoice)
    localStorage.setItem(`userTimeChoice`,timeChoice)
    // confirm user input is not empty ? (or handled in generateTimeSlots?)
    removeTimeSlots()
    generateTimeSlots(parseInt(timeChoice),amtChoice)
    alert(`Your settings have been saved!`)
}

timeSettingsBtn.on(`click`, timeSettings)

containerRow.on(`click`, function(e){
    e.preventDefault()
    var el = e.target

    switch(el.title){
        case `saveBtn`:
            savetoStorage(e)
            // alert(`Saved!`)
            break
        case `expandBtn`:
            alert(`Expanding`)
            break
        case `timeDisplay`:

            // this variable needs to be global to allow for user customization & local storage
            // will work on later
            t = prompt(`enter new time (0 - 23): `)

            if(isNaN(parseInt(t)) || t < 0 || t > 23) {
                alert(`please enter a valid number (0 - 23)`)
                break
            } else {
                t = t
                localStorage.setItem(`userTimeChoice`,t)
            }

            removeTimeSlots()
            generateTimeSlots(t)

            break
    }
    
})
/* 

NOTES/TODOS/PSEUDOCODE
----------------------

1. dynamically create "time slot" divs
    - add attributes (id, class, )
    - ad
2. event listener to container wrapping the time slots
3. add conditional to select the appropriate "time slot" div


*/