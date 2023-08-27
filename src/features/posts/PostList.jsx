import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import {FaArrowRight} from  "react-icons/fa"
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      
<div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div className="flex flex-col">
    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
    <small className="text-slate-500  ">Agency Name: {post.agencyName}</small>

        <small className="text-slate-500  ">Event Organizer: {post.organizer}</small>
        <TimeAgo   timestamp={post.date} />
    </div>
       
      
       
    <br />
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content }</p>
   
    <div className="inline-flex items-center px-2 py-1 text-sm  mb-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
        Read more  <FaArrowRight  className="ml-2"/>
      
    </div>
    <ReactionButtons post={post} />
</div>
    </article>
  ));

  return (
    <section className="">
    
   
      <div className="flex justify-center flex-col items-center gap-4">
      {renderedPosts}
      </div>
    
    </section>
  );
};
export default PostsList;
