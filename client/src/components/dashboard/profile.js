const cookie = require('react-cookie')
const axios = require('axios');
const React = require('react');
const EditInfo = require('./profile/edit-info');
const UserInfo = require('./profile/user-info');
import PhotoBoothModal from './profile/photo-booth-modal';

// const PhotoBooth = require('./profile/photo-booth');

const Profile = React.createClass({
    componentWillMount() {
        // Fetch user data prior to component mounting
        let user = cookie.load('user');
        console.log(user.firstName);
        if (user == undefined) {
            window.location.href = 'http://localhost:8080/login';
        } else {
            let gender = user.is_male;
            if (gender === false) {
                gender = "girl";
            } else {
                gender = "guy";
            }
            this.setState({
                firstName: user.firstName,
                lastInitial: user.lastInitial,
                age: user.age,
                age_pref_min: user.age_pref_min,
                age_pref_max: user.age_pref_max,
                is_male: gender,
                seeking_male: user.seeking_male,
            })
        }
    },

     check() {

        console.log(window.location.href.indexOf("edit-info"));

        if (window.location.href.indexOf("edit-info") > -1) {
            return (
                <EditInfo firstName={this.state.firstName} 
                          lastInitial={this.state.lastInitial} 
                          is_male={this.state.is_male} age={this.state.age} 
                          seeking_male={this.state.seeking_male}
                          age_pref_min={this.state.age_pref_min} 
                          age_pref_max={this.state.age_pref_max} 
                          profile_look={this.state.profile_look} />
            );
        } else {
            return (
                <UserInfo firstName={this.state.firstName} 
                          lastInitial={this.state.lastInitial} 
                          is_male={this.state.is_male} age={this.state.age}
                          seeking_male={this.state.seeking_male} 
                          age_pref_min={this.state.age_pref_min} 
                          age_pref_max={this.state.age_pref_max} 
                          profile_look={this.state.profile_look} />
            );
        }
    },

    render: function () {

        return (
            <div>
                <div className="lookContainer">
                    <span className="look"><PhotoBoothModal /></span>
                    <span className="look"><PhotoBoothModal /></span>
                    <span className="look"><PhotoBoothModal /></span>
                    <span className="look"><PhotoBoothModal /></span>
                    <span className="look"><PhotoBoothModal /></span>
                    <span className="look"><PhotoBoothModal /></span>
                </div>
               {this.check()}
            </div>
        );
    }
});

module.exports = Profile;