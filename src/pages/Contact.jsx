export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact card container-card bg-blue-box">
      <h2 className="container-title"> Contact</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your Name"
            name="username"
            className="form-control"
            required
          />
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="form-control"
            required
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your Message"
            name="message"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
