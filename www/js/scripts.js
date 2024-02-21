$(function() {
    $(document).ready(function(){
        $("#search-news").on("input", function() {
            $.ajax({
                url: "https://api.spaceflightnewsapi.net/v3/articles?title_contains=" + $(this).val(),
                type: "GET",
                success: function(response) {
                    let articles = '';
                    for (let article of response) {
                        articles += `<li class="collection-item" onclick="$('.tabs').tabs('select', 'swipe-2'); callAjax2(${article.title});">${article.title}</li>`
                    }
                    $("#ajax-results").html(
                        $(articles)
                    )

                    console.log(typeof response)
                }
            })
        });

        function callAjax2(articleTitle) {
            $.ajax({
                url: "https://api.spaceflightnewsapi.net/v3/articles?title_contains=" + articleTitle,
                type: "GET",
                success: function(response) {
                    let articles = '';
                    for (let article of response) {
                        articles += `
                        <div class="row">
                            <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img src="${article.imageUrl}">
                                    <span class="card-title">${article.title}</span>
                                </div>
                                <div class="card-content">
                                    <p>
                                        ${article.summary}
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="${article.url}">Go to the article</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `
                    }
                    $("#ajax-results").html(
                        $(articles)
                    )

                    console.log(typeof response)
                }
            })
        }
    });
})

/*
$(".loading").fadeIn('slow');
$.ajax({
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
    }
});
*/

/*document.addEventListener('DOMContentLoaded', function() {
    const options = {
        duration: 300,
        onShow: null,
        swipeable: true,
        responsiveThreshold: Infinity
    };

    const tabsContainer = document.querySelector(".tabs");
    const instance = M.Tabs.init(tabsContainer, options);

    // Seleccionar la pestaña "swipe-1"
    instance.select("swipe-1");
});*/

    /*$(".loading").fadeIn('slow');
    $.ajax({
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });*/