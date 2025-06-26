const translations = {
    en: {
        pageTitle: "Welcome to the jQuery Example Page",
        pageTitleTooltip: "Change Title",
        langSwitch: "Deutsch",
        footerName: "Your Name",
        footerNameTooltip: "Change Name",
        navHome: "Home",
        navExamples: "Examples",
        whatIsJqueryTitle: "What is jQuery?",
        whatIsJqueryText: "jQuery is a fast, small, and feature-rich JavaScript library. It was released in 2006 by John Resig and quickly became one of the most popular tools for web development. jQuery simplifies many common tasks in JavaScript, such as DOM manipulation, event handling, animation, and Ajax, making it easier to create interactive and dynamic web pages.",
        whyUseJqueryTitle: "Why Use jQuery?",
        whyUseJqueryList: `
            <li><strong>Cross-browser compatibility:</strong> jQuery handles differences between browsers, so your code works everywhere.</li>
            <li><strong>Simplified syntax:</strong> jQuery lets you write less code to do more. For example, selecting elements and adding effects is much easier than with plain JavaScript.</li>
            <li><strong>Rich plugin ecosystem:</strong> Thousands of plugins are available for tasks like sliders, galleries, form validation, and more.</li>
            <li><strong>Ajax made easy:</strong> jQuery makes it simple to load data from servers without reloading the page.</li>
            <li><strong>Animations and effects:</strong> Easily add fade, slide, and custom animations to your site.</li>
        `,
        basicExampleTitle: "Basic Example",
        basicExampleJqueryLabel: "With jQuery:",
        basicExampleJquery: `// Hide a paragraph when a button is clicked
$("#myButton").click(function() {
    $("#myParagraph").hide();
});`,
        basicExampleVanillaLabel: "With Vanilla JavaScript:",
        basicExampleVanilla: `// Hide a paragraph when a button is clicked
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myParagraph").style.display = "none";
});`,
        basicExampleText: "This comparison shows how jQuery can make JavaScript tasks shorter and more readable, but the same can be achieved with modern plain JavaScript.",
        howToIncludeTitle: "How to Include jQuery",
        howToIncludeCDN: `<strong>CDN:</strong>  
<code>&lt;script src="https://code.jquery.com/jquery-3.6.0.min.js"&gt;&lt;/script&gt;</code>`,
        howToIncludeDownload: `<strong>Download:</strong>  
Download the jQuery file from <a href="https://jquery.com/download/" target="_blank">jquery.com</a> and include it in your project.`,
        popularFeaturesTitle: "Popular jQuery Features",
        popularFeaturesList: `
            <li><strong>DOM Manipulation:</strong> Change, add, or remove HTML elements and attributes easily.</li>
            <li><strong>Event Handling:</strong> Respond to user actions like clicks, mouse movements, and keyboard input.</li>
            <li><strong>Effects and Animations:</strong> Fade, slide, show/hide elements with simple methods.</li>
            <li><strong>Ajax:</strong> Load data from servers and update your page without a full reload.</li>
            <li><strong>Plugins:</strong> Extend jQuery with ready-made solutions for common problems.</li>
        `,
        isJqueryRelevantTitle: "Is jQuery Still Relevant?",
        isJqueryRelevantText: "While modern JavaScript (ES6+) and frameworks like React or Vue have reduced the need for jQuery, it is still widely used in many projects and legacy systems. Its simplicity, reliability, and huge plugin ecosystem make it a valuable tool, especially for beginners or when working with older codebases.",
        summaryTitle: "Summary",
        summaryList: `
            <li>jQuery makes JavaScript easier and more accessible.</li>
            <li>It is great for quick prototyping and adding interactivity to websites.</li>
            <li>Learning jQuery helps you understand the basics of JavaScript and DOM manipulation.</li>
        `,
        summaryTip: "<strong>Tip:</strong> Even if you move on to modern frameworks, knowing jQuery is still useful for maintaining and understanding many existing websites!",
        examplesPageText: "This is a simple example page to demonstrate jQuery functionality.",
        toggleButton: "Toggle Paragraph",
        toggleParagraph: "This paragraph can be toggled using jQuery.",
        changeTextButton: "Change Text",
        clickMessage: "Click the button to change this text.",
        hoverMessage: "Hover over me!",
        hoverBoxTooltip: "Hover to change color",
        promptName: "Please enter your name:",
        promptTitle: "Please enter Title:"
    },
    de: {
        pageTitle: "Willkommen auf der jQuery Beispielseite",
        pageTitleTooltip: "Titel ändern",
        langSwitch: "English",
        footerName: "Dein Name",
        footerNameTooltip: "Name ändern",
        navHome: "Startseite",
        navExamples: "Beispiele",
        whatIsJqueryTitle: "Was ist jQuery?",
        whatIsJqueryText: "jQuery ist eine schnelle, kleine und funktionsreiche JavaScript-Bibliothek. Sie wurde 2006 von John Resig veröffentlicht und wurde schnell zu einem der beliebtesten Werkzeuge für die Webentwicklung. jQuery vereinfacht viele Aufgaben in JavaScript, wie DOM-Manipulation, Ereignisbehandlung, Animationen und Ajax, und macht es einfacher, interaktive und dynamische Webseiten zu erstellen.",
        whyUseJqueryTitle: "Warum jQuery verwenden?",
        whyUseJqueryList: `
            <li><strong>Browserübergreifende Kompatibilität:</strong> jQuery gleicht Unterschiede zwischen Browsern aus, sodass dein Code überall funktioniert.</li>
            <li><strong>Vereinfachte Syntax:</strong> Mit jQuery schreibst du weniger Code, um mehr zu erreichen. Zum Beispiel ist das Auswählen von Elementen und das Hinzufügen von Effekten viel einfacher als mit reinem JavaScript.</li>
            <li><strong>Großes Plugin-Ökosystem:</strong> Tausende Plugins sind verfügbar, z.B. für Slider, Galerien, Formularvalidierung und mehr.</li>
            <li><strong>Ajax leicht gemacht:</strong> Mit jQuery kannst du Daten vom Server laden, ohne die Seite neu zu laden.</li>
            <li><strong>Animationen und Effekte:</strong> Füge deiner Seite einfach Fade-, Slide- und eigene Animationen hinzu.</li>
        `,
        basicExampleTitle: "Grundbeispiel",
        basicExampleJqueryLabel: "Mit jQuery:",
        basicExampleJquery: `// Einen Absatz ausblenden, wenn ein Button geklickt wird
$("#myButton").click(function() {
    $("#myParagraph").hide();
});`,
        basicExampleVanillaLabel: "Mit Vanilla JavaScript:",
        basicExampleVanilla: `// Einen Absatz ausblenden, wenn ein Button geklickt wird
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myParagraph").style.display = "none";
});`,
        basicExampleText: "Dieser Vergleich zeigt, wie jQuery Aufgaben in JavaScript kürzer und lesbarer macht, aber das Gleiche kann auch mit modernem, reinem JavaScript erreicht werden.",
        howToIncludeTitle: "Wie bindet man jQuery ein?",
        howToIncludeCDN: `<strong>CDN:</strong>  
<code>&lt;script src="https://code.jquery.com/jquery-3.6.0.min.js"&gt;&lt;/script&gt;</code>`,
        howToIncludeDownload: `<strong>Download:</strong>  
Lade die jQuery-Datei von <a href="https://jquery.com/download/" target="_blank">jquery.com</a> herunter und binde sie in dein Projekt ein.`,
        popularFeaturesTitle: "Beliebte jQuery-Funktionen",
        popularFeaturesList: `
            <li><strong>DOM-Manipulation:</strong> HTML-Elemente und Attribute einfach ändern, hinzufügen oder entfernen.</li>
            <li><strong>Ereignisbehandlung:</strong> Auf Benutzeraktionen wie Klicks, Mausbewegungen und Tastatureingaben reagieren.</li>
            <li><strong>Effekte und Animationen:</strong> Elemente mit einfachen Methoden ein- und ausblenden, verschieben oder animieren.</li>
            <li><strong>Ajax:</strong> Daten vom Server laden und die Seite aktualisieren, ohne sie neu zu laden.</li>
            <li><strong>Plugins:</strong> jQuery mit fertigen Lösungen für häufige Probleme erweitern.</li>
        `,
        isJqueryRelevantTitle: "Ist jQuery noch relevant?",
        isJqueryRelevantText: "Auch wenn modernes JavaScript (ES6+) und Frameworks wie React oder Vue die Notwendigkeit von jQuery verringert haben, wird es immer noch in vielen Projekten und Altsystemen eingesetzt. Seine Einfachheit, Zuverlässigkeit und das große Plugin-Ökosystem machen es besonders für Einsteiger oder bei der Arbeit mit älterem Code wertvoll.",
        summaryTitle: "Zusammenfassung",
        summaryList: `
            <li>jQuery macht JavaScript einfacher und zugänglicher.</li>
            <li>Es eignet sich hervorragend für schnelles Prototyping und das Hinzufügen von Interaktivität zu Webseiten.</li>
            <li>jQuery zu lernen hilft dir, die Grundlagen von JavaScript und DOM-Manipulation zu verstehen.</li>
        `,
        summaryTip: "<strong>Tipp:</strong> Auch wenn du später moderne Frameworks verwendest, ist jQuery-Kenntnis nützlich, um viele bestehende Webseiten zu pflegen und zu verstehen!",
        examplesPageText: "Dies ist eine einfache Beispielseite, um jQuery-Funktionen zu demonstrieren.",
        toggleButton: "Absatz ein-/ausblenden",
        toggleParagraph: "Dieser Absatz kann mit jQuery ein- oder ausgeblendet werden.",
        changeTextButton: "Text ändern",
        clickMessage: "Klicke auf den Button, um diesen Text zu ändern.",
        hoverMessage: "Fahre mit der Maus über mich!",
        hoverBoxTooltip: "Fahre mit der Maus drüber, um die Farbe zu ändern",
        promptName: "Bitte gib deinen Namen ein:",
        promptTitle: "Bitte gib einen Titel ein:"
    }
};