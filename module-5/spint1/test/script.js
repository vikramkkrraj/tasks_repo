const FeedBackItem = ({ feedback, onDelete }) => {
  // name , commnet, email and a delete button
  console.log("frombackItem", feedback);

  
  return (
    <div>
      <div className="card">
        <h2>{feedback.name}</h2>
        <h4>{feedback.email}</h4>
        <h5>{feedback.comment}</h5>
        <button onClick={() =>onDelete(feedback.id)}>Delete</button>
      </div>
    </div>
  );
};

const FeedBackList = () => {
  // fetching data and  pass to the feedbacktiem
  const [allfeedBack, setAllFeedBack] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://feedbackform-3205a-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackform.json"
      );
      const result = await response.json();
      console.log(result);

      const data = Object.entries(result).map(([id, value]) => ({
        id,
        ...value,
      }));
      setAllFeedBack(data);
      console.log(allfeedBack);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteFeedBack = async(id) => {
    console.log(id);
    try {
        await fetch(`https://feedbackform-3205a-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackform/${id}.json`,{
            method : "DELETE"
        });
    } catch (error) {
        console.log(error)
    }
   
    setAllFeedBack((prev) => prev.filter((feedback) => feedback.id !==id))
  }

//   fetchData();
  React.useEffect(() => {
    fetchData();
  }, []);
  console.log("from outside", allfeedBack);

  return (
    <div>
      {allfeedBack?.map((feedback) => {
        return <FeedBackItem feedback={feedback} key={feedback.id} onDelete={deleteFeedBack} />;
      })}
    </div>
  );
};

const FeedBackForm = () => {
  // name, email, comment
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [message, setMessage] = React.useState(false);

  const nameHandler = (name) => {
    setName(name);
  };
  const emailHandler = (email) => {
    setEmail(email);
  };
  const commentHanlder = (comment) => {
    setComment(comment);
  };
  const submitHanlder = async (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert("All Fields are need to be filled");
      return;
    }
    const feedback = {
      id: Date.now(),
      name,
      email,
      comment,
    };
    console.log(feedback);
    try {
      await fetch(
        "https://feedbackform-3205a-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackform.json",
        {
          method: "POST",
          headers: {
            "Context-Type": "application/json",
          },
          body: JSON.stringify(feedback),
        }
      );
      setName("");
      setEmail("");
      setComment("");
      setMessage(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setMessage(false);
      },2000);
    }
  };
  return (
    <div>
      <form onSubmit={submitHanlder}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => nameHandler(e.target.value)}
            required
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            value={email}
            placeholder="Enter Your Name"
            onChange={(e) => emailHandler(e.target.value)}
            required
          />
        </label>
        <label>
          Comment:{" "}
          <textarea
            onChange={(e) => commentHanlder(e.target.value)}
            value={comment}
            placeholder="say something"
            required
          ></textarea>
        </label>
        <button type="submit">Submit FeedBack</button>
      </form>
      {message ? <p>FeedBack Submitted Successfuly!</p> : null}
    </div>
  );
};
const ThemeToggle = () => {
  // Dark and Ligth, store in localStorage. useEffect
  return <></>;
};

const App = () => {
  return (
    <div>
      <FeedBackForm />
      <FeedBackList />
      <ThemeToggle />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
