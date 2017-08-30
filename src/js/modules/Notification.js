/*----------------------Ways To Export----------------------*/

///////////////
// Method 01 //
///////////////
// function notify(message)
// {
//     alert(message);
// }
// export default notify;

/*------------------------------------------------------------------------*/

///////////////
// Method 02 //
///////////////
// export function notify(message)
// {
//     alert(message);
// }

/*------------------------------------------------------------------------*/

//////////////////////////////////////////////
// Method 03 - Exporting multiple functions //
//////////////////////////////////////////////
// export function notify(message)
// {
//     alert(message);
// };

// export function log(message)
// {
//     console.log(message);
// };

/*------------------------------------------------------------------------*/

///////////////////////////////////////////////////////
// Method 04 - Exporting various functions in object //
///////////////////////////////////////////////////////
function notify(message)
{
    alert(message);
};

function log(message)
{
    console.log(message);
};

export default
{
    notify: notify,
    log: log
}

/*------------------------------------------------------------------------*/