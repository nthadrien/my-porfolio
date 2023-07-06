
import * as React from 'react';
import { contact } from './cForm.module.css';
import { EmailInput, TextArea, TextInput } from '../../inputs/inputs';


const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitin');
    };

    return (
        <div className={contact}>

            <aside>
                <h1>Contact Me</h1>
                <p>  Cameroon, Yaounde</p>
                <p>  Phone: (+237) 151 515 000  </p>
                <p>  Email: jui@gmail.com  </p>
                <button>Download CV</button>
            </aside>

            <form onSubmit={handleSubmit}>
                <TextInput place='Name' name='name' req={true} />
                <EmailInput name="email" place="Email" req={true} />
                <TextArea name='message' place='Hello' req={true} />
                <button type='submit'>SEND MESSAGE</button>
            </form>

        </div>
    );
};

export default ContactForm; 