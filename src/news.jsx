function Header() {
    return (
        <div className="header">
            <h1>Latest News</h1>
            <p>Covering March & April 2022</p>
        </div>
    ); 
}

function CardHeader({ category, imageLink }) {
    return (
        <div className="card-header">
            <h4>{ category }</h4>
            <img src={ imageLink } alt="" srcset="" />
        </div>
    );
}

function CardBody({title, date, content, link}) {
    return (
        <div className="card-body">
            <p>{ date }</p>
            <h2>{ title }</h2>
            <p>{ content }</p>
            <Button link={ link }/>
        </div>
    );
}

function Button({link}) {
    return (
        <div className="card-button">
            <a href={ link }>Find out more</a>
        </div>
    );
}

function Card({ category, imageLink, title, date, content, link}) {
    return (
        <div className="card">
            <CardHeader category={ category } imageLink={ imageLink }/>
            <CardBody title={ title } date={ date } content={ content } link={ link }/>
        </div>
    );
}

function News() {
    const news = [
        {
          title: 'CNN Acuire BEME',
          date: 'March 20 2022',
          content: "CNN purchased Casey Neistat's Beme app for $25million.",
          imageLink: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'React and the WP-API',
          date: 'March 19 2022',
          content: 'The first ever decoupled starter theme for React & the WP-API.',
          imageLink: 'https://source.unsplash.com/user/ilyapavlov/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'Nomad Lifestyle',
          date: 'March 19 2022',
          content: 'Learn our tips and tricks on living a nomadic lifestyle.',
          imageLink: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Travel',
          link: '#'
        }
    ];

    return (
        <div className="news">
            <Header />
            { news.map((n) => ( <Card {...n} key={ n.title } /> )) }
        </div>
    );
}

export default News;