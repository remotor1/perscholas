import './Article.css';
import image1 from './article_image/blog-image-1.jpg';
import image2 from './article_image/blog-image-2.jpg';

const Article = () => {
  return (
    <>
      <article className='post'>
        <time className='post__time' dateTime='2020-11-12'>
          11/12/20
        </time>
        <h2 className='post__title'>On the Street in Broolyn</h2>
        <img className='post__image' src={image1} alt='Broolyn' />
        <p className='post__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          accusamus necessitatibus a, totam sed est illo in voluptates error
          facere, recusandae sint aliquam voluptas soluta numquam ab! Nostrum
          dicta delectus expedita, obcaecati et incidunt vel, veniam nisi harum
          voluptatum, magnam consequatur veritatis ipsum dolorum similique iure
          velit eaque amet in sed fugit fuga voluptate quod doloribus. Illo
          veniam aliquid rerum voluptates porro! Aperiam maxime sit ab hic omnis
          dignissimos, commodi iste quas expedita quaerat reprehenderit ad
          error, praesentium atque. Explicabo nesciunt sequi quae,
        </p>
        <a className='post__link' href='#'>
          Continues...
        </a>
      </article>
      <article className='post'>
        <time className='post__time' dateTime='2020-11-11'>
          11/11/20
        </time>
        <h2 className='post__title'>Vintage in Vogue</h2>
        <img className='post__image' src={image2} alt='Broolyn' />
        <p className='post__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          accusamus necessitatibus a, totam sed est illo in voluptates error
          facere, recusandae sint aliquam voluptas soluta numquam ab! Nostrum
          dicta delectus expedita, obcaecati et incidunt vel, veniam nisi harum
          voluptatum, magnam consequatur veritatis ipsum dolorum similique iure
          velit eaque amet in sed fugit fuga voluptate quod doloribus. Illo
          veniam aliquid rerum voluptates porro! Aperiam maxime sit ab hic omnis
          dignissimos, commodi iste quas expedita quaerat reprehenderit ad
          error, praesentium atque. Explicabo nesciunt sequi quae,
        </p>
        <a className='post__link' href='#'>
          Continues...
        </a>
      </article>
    </>
  );
};

export default Article;
