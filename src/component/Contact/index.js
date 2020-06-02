import React from 'react';

function Contact() {
  return(
    <div>
      <div className="container contact-form">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <section>
            <h1 className="display-4"> Contact</h1>
            <form>
              <label for="name" style={{marginTop: '20px'}}>Name</label>
              <input className="form-control" />
              <label for="email" style={{marginTop: '20px'}}>Email</label>
              <input className="form-control" />
              <label for="message" style={{marginTop: '20px'}}>Message</label>
              <textarea className="form-control" rows="5"></textarea>
              <button style={{marginTop: '20px'}} className="btn btn-primary">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact;