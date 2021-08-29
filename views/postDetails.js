const postDetails = (post) => {
    return (
        `<!DOCTYPE html>
        <html>
            <head>
            <title>Wizard News</title>
            <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
            <div class="news-list">
                <header><img src="/logo.png"/>Wizard News</header>
                
                <div class='news-item'>
                    <p>
                    <span class="news-position"></span>${post.title}
                    <small>(by ${post.name})</small>
                    </p>
                    <p>
                    <small class="news-info">
                    ${post.upvotes} upvotes | ${post.date}
                    </small>
                    </p>
                    <p>
                    ${post.content}
                    </p>
                </div>
                
            </div>
            </body>
        </html>`
    )
}

module.exports = postDetails