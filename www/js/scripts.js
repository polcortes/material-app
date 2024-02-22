$(function() {
    $(document).ready(function(){
        $("#search-news").on("input", function() {
            $.ajax({
                url: "https://api.spaceflightnewsapi.net/v3/articles?title_contains=" + $(this).val(),
                type: "GET",
                success: function(response) {
                    let articles = '';
                    for (let article of response) {
                        articles += `<li style="cursor: pointer;" class="collection-item">${article.title}</li>`
                    }

                    $("#ajax-results").html($(articles))

                    $(".collection-item").click(function() {
                        $('.tabs').tabs('select', 'swipe-2');
                        callAjax2($(this).text());
                    })

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
                                    <a 
                                        href="${article.url}"
                                        target="_blank"    
                                    >
                                        Go to the article
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `
                    }

                    $("#ajax-result-2").html($(articles))

                    console.log(typeof response)
                }
            })
        }

        function callAjax3() {
            $.ajax({
                url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=10",
                type: "GET",
                success: function(response) {
                    let articles = '';
                    for (let article of response) {
                        articles += `
                            <div class="card">
                                <div class="card-image">
                                    <img src="${article.imageUrl}">
                                    <span class="card-title">${article.title}</span>
                                </div>
                                <div class="card-content">
                                    <p class="article-summary">
                                        ${article.summary}
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a 
                                        href="${article.url}"
                                        target="_blank"
                                    >
                                        Link to the article
                                    </a>
                                </div>
                            </div>
                        `
                    }

                    $("#all-articles-container").html($(articles))
                }
            })
        }

        callAjax3();
    });
})