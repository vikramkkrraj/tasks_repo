const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: [],
};
const reduce = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "year":
      return { ...state, establishment_year: action.payload };
    case "building":
      return {
        ...state,
        address: {
          ...state.address,
          [action.type]: action.payload,
        },
      };
    case "street":
      return {
        ...state,
        address: {
          ...state.address,
          [action.type]: action.payload,
        },
      };
    case "city":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            name: action.payload,
          },
        },
      };
    case "pincode":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              pinCode: action.payload,
            },
          },
        },
      };

    case "landmark":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              landmark: action.payload,
            },
          },
        },
      };

    case "state":
      return {
        ...state,
        address: {
          ...state.address,
          state: action.payload,
        },
      };

    case "latitude":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.type]: action.payload,
          },
        },
      };

    case "longitude":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.type]: action.payload,
          },
        },
      };

    case "add-course":
      return {
        ...state,
        courses_offered: [...state.courses_offered, action.payload],
      };
    case "remove-course":
      return {
        ...state,
        courses_offered: state.courses_offered.filter(
          (course, id) => id != action.payload
        ),
      };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reduce, initialState);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");
  const [course, setCourse] = React.useState("");

  const addCourse = () => {
    try {
      dispatch({ type: "add-course", payload: course });
      setCourse("");
    } catch (error) {
      setError(error.message);
    }
  };

  const removeCourseHandler = (id) => {
    dispatch({ type: "remove-course", payload: id });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="College Name"
          value={state.name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={(e) => dispatch({ type: "year", payload: e.target.value })}
        />

        <input
          type="text"
          placeholder="Building"
          value={state.address.building}
          onChange={(e) =>
            dispatch({ type: "building", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Street"
          value={state.address.street}
          onChange={(e) =>
            dispatch({ type: "street", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="City"
          value={state.address.city.name}
          onChange={(e) => dispatch({ type: "city", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={state.address.city.locality.pinCode}
          onChange={(e) =>
            dispatch({ type: "pincode", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={(e) =>
            dispatch({ type: "landmark", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="State"
          value={state.address.state}
          onChange={(e) => dispatch({ type: "state", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={(e) =>
            dispatch({ type: "latitude", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={(e) =>
            dispatch({ type: "longitude", payload: e.target.value })
          }
        />

        <div>
          <input
            type="text"
            placeholder="Enter a course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <button onClick={addCourse}>add course</button>
        </div>
        <ul>
          {state.courses_offered.map((course, i) => (
            <li key={i}>
              {course}
              <button onClick={() => removeCourseHandler(i)}>x</button>
            </li>
          ))}
        </ul>

        <button type="submit">Submit Form</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Form</button>
      </form>

      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}

      {submitted && (
        <div style={{ marginTop: 20 }}>
          <h3>Submitted College Details:</h3>
          <div><strong>Name:</strong> {state.name}</div>
          <div><strong>Est. Year:</strong> {state.establishment_year}</div>
          <div><strong>Building:</strong> {state.address.building}</div>
          <div><strong>Street:</strong> {state.address.street}</div>
          <div><strong>City:</strong> {state.address.city.name}</div>
          <div><strong>Pincode:</strong> {state.address.city.locality.pinCode}</div>
          <div><strong>Landmark:</strong> {state.address.city.locality.landmark}</div>
          <div><strong>State:</strong> {state.address.state}</div>
          <div><strong>Coordinates:</strong> { `(${state.address.coordinates.latitude}, ${state.address.coordinates.longitude})` }</div>
          <div><strong>Courses Offered:</strong></div>
          <ul>
            {state.courses_offered.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
