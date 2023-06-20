
import * as React from 'react';
import { contact , btnMsg } from './cForm.module.css';

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitin');
    };

    return (
        <div className={contact + ' container'}>

            <aside>
                <h3>im .. Address</h3>
                <br />
                <p> im .. Cameroon, Yaounde</p>
                <p> im .. Phone: (+237) 151 515 000 </p>
            </aside>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="message" placeholder="Message" />
                <button className={btnMsg} type='submit'>SEND MESSAGE</button>
            </form>

        </div>
    );
};

export default ContactForm;