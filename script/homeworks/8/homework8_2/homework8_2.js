// Как разобрать строку с форматными символами и построить DOM
// на ее базе
function formatFromCodes(element, formatString) {
    let s = formatString.replace('[EM]', '').replace('[EM]', '')
        .replace('[EM]', '').replace('[EM]', '').trim();
    let parts = s.split('[B]').filter(x => !!x);
    console.log(parts);
    let startsFromBoldEm = s.indexOf('[B]') === 0;
    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0 && startsFromBoldEm) {
            const bold = document.createElement('strong');
            bold.textContent = parts[i];
            element.appendChild(bold);
        }   else   if (i / 3 === 1 || i / 7 === 1 && startsFromBoldEm) {
            const em = document.createElement('em');
            em.textContent = parts[i];
            element.appendChild(em);
            } else {
            const text = document.createTextNode(parts[i]);
            element.appendChild(text);
        }
    }

}

formatFromCodes(
    document.body,
    "[B]это жирный текст[B] а это обычный [B], а это опять жирный текст[B],[EM] а это курсив [EM], [B]это жирный текст[B] а это обычный [B], а это опять жирный текст[B], [EM] а это курсив [EM]");
