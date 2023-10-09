const Blog = ({blog}) => {
    const {thumbnail, title, details, publish_date} = blog;
    return (
        <div className="w-full">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="culture"
          src={thumbnail}
          className="h-56 w-full object-cover"
        />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {publish_date}
          </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-primary font-semibold">
              {title}
            </h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
           {details}
          </p>
        </div>
      </article>
        </div>
    );
};

export default Blog;