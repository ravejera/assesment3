const Post=()=>{

    const [state, setState]=useState({posts: [],id: 2})
    
    useEffect(() => {
        const fetchPost=async()=> {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${state.id}`
            );
            const data = await response.json();
            setState({...state, posts: data})
    
          }
    fetchPost()
    }, [state.id]);
    
    return (
        <div>
          <input
            type="text"
            value={state.id}
            onChange={(e) =>setState({...state, id: e.target.value })}
          />
    
          <p>{JSON.stringify(state.posts)}</p>
        </div>
      );
    
    
    }
    
    export default Post