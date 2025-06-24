

function onInit() {
    let container = document.getElementById('impressum');
    container.innerHTML += getHeader(false);
    container.innerHTML += getImpressumContent();
    container.innerHTML += getFooter();
}



function getImpressumContent() {
    return `
        <div class="impressum-container">
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 DDG</p>
            <p>Enrico Hoffmann<br>
                <br>
                Neckar-Alb-Str. 9/1<br>
                72127 Kusterdingen <br>
            </p>
            <p>
                Diese Seite ist im Rahmen einer Weiterbildung an der Developer-Akademie entstanden.
            </p>
            <p> <strong>Vertreten durch: </strong><br>
                Enrico Hoffmann<br>
            </p>
            <p><strong>Kontakt:</strong> <br>
                Telefon: 07071-5667664<br>
                E-Mail: <a href='mailto:enricohoffmann@web.de'>enricohoffmann(at)web.de</a></br></p>
            <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
                Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis
                10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese
                Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben
                werden,
                erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
                Zustimmung nicht an Dritte weitergegeben. <br>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                nicht
                möglich. <br>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung
                von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
                widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
                unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
            </p><br>

            <p>
                Impressum von <a href="https://websitewissen.com">WebsiteWissen.com</a>, dem Ratgeber für
                <a href="https://websitewissen.com/wordpress-website-erstellen" rel="dofollow">WordPress-Websites</a>,
                <a href="https://websitewissen.com/wordpress-hosting-vergleich" rel="dofollow">WordPress-Hosting</a> und
                <a href="https://websitewissen.com/website-kosten" rel="dofollow">Website-Kosten</a> nach einem Muster
                von
                <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach Rechtsanwälte</a>.
            </p>
        </div>
    
    `;
}