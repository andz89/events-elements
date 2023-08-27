 
import TimeAgo from "./TimeAgo"
const Comments = ({comments}) => {
    const userComments = comments.map((comment) => {
        return (
            <article  key={comment.userEmail} >
    <div className="border-slate-300 border p-1 rounded mb-3">
    <div className="flex items-center">
    
    <div className="font-medium dark:text-white">
        <p className="text-sm">{comment.userEmail}</p>
        <TimeAgo   timestamp={comment.date} />

    </div>
</div>

<p className="  text-gray-500 text-sm dark:text-gray-400">{comment.comment}</p>

    </div>
  
</article>
          
        )
    })
 
  return (
    <div>
      {userComments}
 
    </div>
  )
}

export default Comments
