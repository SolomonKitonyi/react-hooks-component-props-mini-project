import Article from "./Article"
function ArticleList ({posts}) {
    return (
        <main>
            {posts.map(post => <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>)}
        </main>
    )
    //return posts.map(post => (<main><Article key={post.id} title={post.title} preview={post.preview} date={post.date}/> </main>))
}
export default ArticleList