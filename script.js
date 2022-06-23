 
//  getting elements by their ids from the document(html file)
 const quoteText = document.getElementById('quote');
 const author = document.getElementById('author');
 const noQoutes = document.getElementById('no');
 const mainConatiner = document.getElementById('main');
 const loader = document.getElementById('loader');
// url of the api 
 const url = 'https://type.fit/api/quotes';
 var i =0;
 window.onload = () =>{
    fetchUser();
 }
//  function for showing only loader 
function showloader()
{
    mainConatiner.style.display = 'none';
    loader.style.display = 'block';
}
// function for hiding loader
function hideloader()
{
    loader.style.display = 'none';
    mainConatiner.style.display = 'flex';
}
// changing the dom model
function newQuotes()
{
    showloader();
    newquote = data[Math.floor(Math.random() *1643)];//gerating new quotes randomly
    if(newquote.author != null)
    {
        quoteText.innerHTML= newquote.text;//changing quotes 
        author.innerHTML= newquote.author//changing author according to the new quote
        if(i==1)
        {
            noQoutes.innerHTML= 'You already accessed '+ i +' quote';
        }
        else{
            noQoutes.innerHTML= 'You already accessed '+ i +' quotes';
        }
         i++;
    }
    hideloader();
}
// fetching the  api
 async function fetchUser()
 {
    showloader();
    try{
        const resp = await fetch(url);
        data = await resp.json();
        console.log(data);
        newQuotes(); 
    }
    catch(err)
    {
        alert('you have and error : ' + err);
    }
 }
//  tweeting this tweet on twitter automatically

function tweet(){
    const auth = author.innerHTML;
    const tweet = quoteText.innerHTML;
    const url_tweet = `https://twitter.com/intent/tweet?text=${tweet} - ${auth}`;
    window.open(url_tweet,'_blank');
}

