import React from 'react';
import EventForm from './EventForm';

class NewEventPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <EventForm />
        </div>
      </div>
    )
  }
}

export default NewEventPage;
