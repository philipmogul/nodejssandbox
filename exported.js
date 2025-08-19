var txt = 'Example of exported text. Will reflect to page it is exported to.'

function exportedlog(message)
{
    console.log(message);
}

// export the modules 
module.exports.exportedlog = exportedlog; // will export log function 
module.exports.txt = txt; // will export txt variable 

