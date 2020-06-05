import React from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            step: 1 ,
            firstName: '',
            lastname: '',
            email:'',
            occupation: '',
            city: '',
            bio: '',
        }
    }

        // proceed to the next step
         nextStep = (event) => {
            const { step } = this.state;
            this.setState({
                step: step+1
            });
        }

        // return to previous step
        prevStep = () => {
            const { step } = this.state;
            this.setState({
                step: step-1
            });
        }

        // handle input change of forms 
        changeValue = (event) => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
    
            this.setState({
                [name]: value
            })
        }
           

    render(){
        const { step } = this.state;
        const { firstName, lastname, email, occupation, city, bio } = this.state;


        switch(step){
            case 1:
                return(
                    <FormUserDetails firstName={firstName} lastName={lastname} email={email} onChange={this.changeValue} onNext={this.nextStep}/>
                );
            case 2:
                return(
                    <FormPersonalDetails occupation={occupation} city={city} bio={bio} onChange={this.changeValue} onPrev={this.prevStep} onNext={this.nextStep}/>
                );
            case 3:
                return(
                    <Confirm firstName={firstName} lastName={lastname} email={email} occupation={occupation} city={city} bio={bio} onPrev={this.prevStep} onNext={this.nextStep}/>
                );
            case 4:
                return(
                    <Success />
                );
        }
    }
    
}

export default UserForm;




