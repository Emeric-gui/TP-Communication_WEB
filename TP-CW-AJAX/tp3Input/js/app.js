function print(date){
    date = '<span class="material-icons">watch_later</span> <strong>'+ date + '</strong>'
document.getElementById('timestamp').innerHTML = date;

setTimeout(ajaxRequest('GET','php/timestamp.php', print, error), 1000);
}


function error(text){
    switch (text){
        case 400:
            console.log('Requête incorrecte'); 
            break;
        case 401:
            console.log('Authentifiez vous'); 
        break;
        case 403:
            console.log('Accès refusé');
            break;
        case 404:
            console.log('Page non trouvée');
            text = '<span class="material-icons">error</span>'+'Page non trouvée';
            let variable = document.getElementById('errors');
            variable.style.display = null;
            variable.innerHTML = text;
            break;

        case 500:
            console.log('Erreur interne du serveur');
           break;
        case 503:
            console.log('Service indisponible');
        break;
        default:  console.log('HTTP error : '+text);
    }
}



function ajaxRequest(type, url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);

    xhr.onload = () => {
        switch (xhr.status){
            case 200:
            case 201: 
            console.log(xhr.responseText);
                // callback(xhr.responseText);
            break;
            default:  callback(xhr.status);
        }
    };

    xhr.send();
    
}


// ajaxRequest('GET', 'php/timestamp.php', print);
// ajaxRequest('GET', 'php/errors.php', error);
ajaxRequest('GET', 'php/timestampp.php', error);