/////////////////////////Translate///////////////////////////

const translationsToEN = {
    "Die FIFA-Weltmeisterschaft": "The FIFA World Cup",
    "Die FIFA-Weltmeisterschaft, oft einfach als WM bezeichnet, ist das wichtigste Turnier im internationalen Fußball und wird alle vier Jahre von der Fédération Internationale de Football Association (FIFA) organisiert. Es ist das weltweit am meisten verfolgte Sportereignis, das Millionen von Fans vor die Fernseher und in die Stadien zieht.": "The FIFA World Cup, often simply referred to as the World Cup, is the most important tournament in international football and is organized every four years by the Fédération Internationale de Football Association (FIFA). It is the world's most watched sporting event, drawing millions of fans to televisions and stadiums.",
    "Geschichte von FIFA-Weltmeisterschaft": "History of FIFA World Cup",
    "Geschichte": "History",
    "Alle Länder Statistiken": "All countries statistics",
    "Für mehr Informationen kannst Du uns gerne kontaktieren!":"For more information, please feel free to contact us!",
    "Kontakt":"Contact",
    "Land:":"Country:",
    "Offizieller Name:":"Official name:"

};

const translationsToGER = {
    "The FIFA World Cup":"Die FIFA-Weltmeisterschaft",
    "The FIFA World Cup, often simply referred to as the World Cup, is the most important tournament in international football and is organized every four years by the Fédération Internationale de Football Association (FIFA). It is the world's most watched sporting event, drawing millions of fans to televisions and stadiums.":"Die FIFA-Weltmeisterschaft, oft einfach als WM bezeichnet, ist das wichtigste Turnier im internationalen Fußball und wird alle vier Jahre von der Fédération Internationale de Football Association (FIFA) organisiert. Es ist das weltweit am meisten verfolgte Sportereignis, das Millionen von Fans vor die Fernseher und in die Stadien zieht.",
    "History of FIFA World Cup":"Geschichte von FIFA-Weltmeisterschaft",
    "History":"Geschichte",
    "All countries statistics":"Alle Länder Statistiken",
    "For more information, please feel free to contact us!":"Für mehr Informationen kannst Du uns gerne kontaktieren!",
    "Contact":"Kontakt",
    "Country":"Land",
    "Official name":"Offizieller Name"
    
};

const textAEN = `<b>History </b> <br>The first World Cup took place in Uruguay in 1930. At that time, 13 teams took part and Uruguay became the first world champions. Since then, the tournament has evolved and expanded significantly, both in terms of the number of teams participating and its global reach. In 1998, the tournament expanded to 32 teams, allowing teams from more regions of the world to participate`;
const textBEN = "<b>Tournament </b> <br> The tournament begins with a qualifying phase where teams compete in regional competitions to secure a place in the final round. The final tournament consists of a group stage followed by a knockout round. In the group stage, teams are divided into groups of four, with each team playing against every other team in their group. The top two teams in each group advance to the knockout phase, which begins with the round of 16 and culminates in a single final.";
const textCEN = "<b>Records and highlights </b> <br> Brazil is the most successful participant in World Cup history with five titles, followed by Germany and Italy with four titles each. The World Cup has produced numerous memorable moments, including the “Miracle of Bern” in 1954 when Germany beat Hungary and Diego Maradona’s “Hand of God” goal in 198";

const textAGER = "<b>Geschichte </b> <br> Die erste Weltmeisterschaft fand 1930 in Uruguay statt. Damals nahmen 13 Mannschaften teil, und Uruguay wurde der erste Weltmeister. Seitdem hat sich das Turnier erheblich weiterentwickelt und vergrößert, sowohl in Bezug auf die Anzahl der teilnehmenden Teams als auch auf die globale Reichweite. 1998 wurde das Turnier auf 32 Mannschaften erweitert, was die Teilnahme von Teams aus mehr Regionen der Welt ermöglichte";
const textBGER = "<b>Turnierformat </b> <br> Das Turnier beginnt mit einer Qualifikationsphase, in der die Teams in regionalen Wettbewerben gegeneinander antreten, um sich einen Platz in der Endrunde zu sichern. Die Endrunde besteht aus einer Gruppenphase, gefolgt von einer K.-o.-Runde. In der Gruppenphase werden die Teams in Gruppen zu je vier Mannschaften aufgeteilt, wobei jede Mannschaft gegen jede andere in ihrer Gruppe spielt. Die besten zwei Teams jeder Gruppe ziehen in die K.-o.-Phase ein, die mit dem Achtelfinale beginnt und in einem einzigen Endspiel gipfelt.";
const textCGER = "<b>Rekorde und Höhepunkte</b> <br>Brasilien ist mit fünf Titeln der erfolgreichste Teilnehmer der WM-Geschichte, gefolgt von Deutschland und Italien mit jeweils vier Titeln. Die Weltmeisterschaft hat zahlreiche denkwürdige Momente hervorgebracht, darunter das „Wunder von Bern“ 1954, als Deutschland Ungarn besiegte, und das „Hand Gottes“-Tor von Diego Maradona 1986.";


////////////////GET DATA AND RENDER ////////////////////////

function renderCardsHTML(data,i) {
    return `
    <div class="card hidden-card" id="a${i}"> 
        <img src="${data['data'][i]['image_path']}">
        <div class="back">
            <span> <b>Land:</b> ${data['data'][i]['name']}</span>
            <span> <b>Offizieller Name:</b> ${data['data'][i]['official_name']}</span>
            <span> <b>Fifa Name:</b> ${data['data'][i]['fifa_name']}</span>
        </div>
    </div>
    `
}