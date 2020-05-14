function dom(reponse){
    let title = document.getElementById('title');
    let detail = document.getElementById('detail');
    title.innerHTML = reponse[0];
    // console.log(reponse[1]);
    detail.innerHTML = " <strong><span style='color:blue'>*** Détail ***</span></strong> <br> hours : "+reponse[1]['hours'] + " <br> Minutes : "+reponse[1]['minutes'] + " <br> Seconds : "+reponse[1]['seconds'];
    displayClock(reponse[1]);
    setTimeout(ajaxRequest('GET', 'php/time.php', dom, error), 1000);
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

function ajaxRequest(type, url, callback, callback1){
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);

    xhr.onload = () => {
        switch (xhr.status){
            case 200:
            case 201: 
            // console.log(xhr.responseText);
            var json = xhr.responseText;
            var data = JSON.parse(json);
            // console.log(data);
                callback(data);
            break;
            default:  
            console.log("HTTP error");
            callback1(xhr.status);
        }
    };

    xhr.send();
}

ajaxRequest('GET', 'php/time.php', dom, error);