function submitDate(){
    const timestamp= new Date();
    document.querySelector("#hiddendate").value=timestamp;

    // console.log timestamp to the inspect window for testing purposes
    console.log("test:" + timestamp);
}

//get timestamp when page loads
submitDate();