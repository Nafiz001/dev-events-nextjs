import CreateEventForm from "@/components/CreateEventForm";

const CreateEventPage = () => {
    return (
        <section id="create-event">
            <div className="header">
                <h1>Create New Event</h1>
                <p>Fill in the details below to create your developer event</p>
            </div>

            <div className="form-container">
                <CreateEventForm />
            </div>
        </section>
    );
};

export default CreateEventPage;
