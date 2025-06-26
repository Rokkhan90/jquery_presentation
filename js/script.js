$(document).ready(function() {
    // Helper function for translation
    function t(key) {
        return translations[isEnglish ? "en" : "de"][key];
    }

    // Toggle paragraph visibility
    $("#toggleButton").click(function() {
        $("#toggleParagraph").toggle();
    });

    // Change text on button click
    $("#changeTextButton").click(function() {
        $("#clickMessage").text(isEnglish
            ? "The text has been changed!"
            : "Der Text wurde geändert!"
        );
    });

    // Hover message and color change
    $("#hoverMessage").hover(
        function() {
            $(this).text(t("hoverMessage"));
            $(".hover-box").css("background-color", "red");
        },
        function() {
            $(this).text(t("hoverMessage"));
            $(".hover-box").css("background-color", "");
        }
    );

    // Change footer name on click
    $("#footerName").click(function() {
        const name = prompt(t("promptName"));
        if (name && name.trim() !== "") {
            $(this).text(name);
        } else {
            $(this).text(t("footerName"));
        }
    });

    // Change page title on click
    $("#pageTitle").click(function() {
        const name = prompt(t("promptTitle"));
        if (name && name.trim() !== "") {
            $(this).text(name);
        } else {
            $(this).text(t("pageTitle"));
        }
    });

    // Set all translatable texts
    function setLanguage(isEnglish) {
        // Header, button, and footer (on both pages)
        $("#pageTitle").text(t("pageTitle")).attr("title", t("pageTitleTooltip"));
        $("#langSwitch").text(t("langSwitch"));
        $("#footerName").attr("title", t("footerNameTooltip")).text(t("footerName"));
        $("nav ul li a[href='index.html']").text(t("navHome"));
        $("nav ul li a[href='examples.html']").text(t("navExamples"));

        // Only on index.html: presentation texts and headings
        if (window.location.pathname.endsWith("index.html")) {
            $("section").eq(0).find("h2").text(t("whatIsJqueryTitle"));
            $("section").eq(0).find("p").text(t("whatIsJqueryText"));
            $("section").eq(1).find("h2").text(t("whyUseJqueryTitle"));
            $("section").eq(1).find("ul").html(t("whyUseJqueryList"));
            $("section").eq(2).find("h2").text(t("basicExampleTitle"));
            $("section").eq(2).find("h3").eq(0).text(t("basicExampleJqueryLabel"));
            $("section").eq(2).find("pre").eq(0).find("code").text(t("basicExampleJquery"));
            $("section").eq(2).find("h3").eq(1).text(t("basicExampleVanillaLabel"));
            $("section").eq(2).find("pre").eq(1).find("code").text(t("basicExampleVanilla"));
            $("section").eq(2).find("p").text(t("basicExampleText"));
            $("section").eq(3).find("h2").text(t("howToIncludeTitle"));
            $("section").eq(3).find("ol li").eq(0).html(t("howToIncludeCDN"));
            $("section").eq(3).find("ol li").eq(1).html(t("howToIncludeDownload"));
            $("section").eq(4).find("h2").text(t("popularFeaturesTitle"));
            $("section").eq(4).find("ul").html(t("popularFeaturesList"));
            $("section").eq(5).find("h2").text(t("isJqueryRelevantTitle"));
            $("section").eq(5).find("p").text(t("isJqueryRelevantText"));
            $("section").eq(6).find("h2").text(t("summaryTitle"));
            $("section").eq(6).find("ul").html(t("summaryList"));
            $("section").eq(6).find("p").html(t("summaryTip"));
        }

        // Only on examples.html: example text
        if (window.location.pathname.endsWith("examples.html")) {
            $("main > p").first().text(t("examplesPageText"));
        }

        // Interactive elements
        $("#toggleButton").text(t("toggleButton"));
        $("#toggleParagraph").text(t("toggleParagraph"));
        $("#changeTextButton").text(t("changeTextButton"));

        // Only reset clickMessage if it is still the default (so changed text stays after language switch)
        const defaultEn = translations.en.clickMessage;
        const defaultDe = translations.de.clickMessage;
        if (
            $("#clickMessage").text() === defaultEn ||
            $("#clickMessage").text() === defaultDe
        ) {
            $("#clickMessage").text(t("clickMessage"));
        }

        $("#hoverMessage").text(t("hoverMessage"));
        $(".hover-box").attr("title", t("hoverBoxTooltip"));
    }

    // Load language from local storage or default to English
    let isEnglish = localStorage.getItem("isEnglish");
    if (isEnglish === null) {
        isEnglish = true;
    } else {
        isEnglish = (isEnglish === "true");
    }
    setLanguage(isEnglish);

    // Language switch button
    $("#langSwitch").click(function() {
        isEnglish = !isEnglish;
        localStorage.setItem("isEnglish", isEnglish);
        setLanguage(isEnglish);
    });
        // Darkmode toggle
    function setDarkmode(isDark) {
        if (isDark) {
            $("body").addClass("darkmode");
            $("#darkModeSwitch").text("☀️ Lightmode");
        } else {
            $("body").removeClass("darkmode");
            $("#darkModeSwitch").text("🌙 Darkmode");
        }
    }

    // Load darkmode from local storage
    let isDark = localStorage.getItem("isDarkmode");
    if (isDark === null) {
        isDark = false;
    } else {
        isDark = (isDark === "true");
    }
    setDarkmode(isDark);

    // Darkmode button click
    $("#darkModeSwitch").click(function() {
        isDark = !isDark;
        localStorage.setItem("isDarkmode", isDark);
        setDarkmode(isDark);
    });
});

