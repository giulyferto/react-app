import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //useHistory is deprecated, we have to useNavigate now
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-first-app-b5209-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        //Stringify method will convert what is sent to JSON data
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>{
      //This takes you back to the Home Page once the process is completed, it won't allow you to go back to the add page
      navigate('/', { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
