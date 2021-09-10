import React, { Component} from "react";
import { Link } from "react-router-dom";
import { FaPoll, FaClipboardCheck } from "react-icons/fa";
import NavMenu from "../Navbar/NavMenu";
import axios from "axios";
import { API_URL } from "../../Common/Environment";





class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoll: {},
      previousPoll: [{}],
      user: { firstName: '', lastName: '' },   //Hard codded for testing purposes
    }

  }

  

//Provide headers for aunthentication
    // componentDidMount () {

    //   const url = `${API_URL}/Account/UserInfo`

    //   const auth = {
    //     headers: {
    //       Authorization: "Basic " + localStorage.getItem('token')
    //     }
    //   }
    //   axios.get(url,auth)
    //     .then(res => {
    //     //   this.setState({
    //     //    res.data
    //     // })
    //     console.log(res)
    //     },
    //     err => {
    //       console.log(err)
    //     })

    // }


  render() {
        const pageActions = [
          {
            icon: <FaPoll />,
            ctaPrefix: 'Vote on',
            ctaSuffix: 'Poll',
            ctaLinkAddress: '/pollingQuestions',
            ctaLinkText: 'Current',
          },
          {
            icon: <FaClipboardCheck />,
            ctaPrefix: 'View Results of',
            ctaSuffix: 'Polls',
            ctaLinkAddress: '#',
            ctaLinkText: 'Previous',
          },
      
        ];


        return (
          <div className = "main">
            {/* <NavMenu /> */}
          <div className=" mainDiv App-header margin_top">
            <h1 className="admin-initials m-6">
                {this.state.user.firstName.slice(0, 1) +
                this.state.user.lastName.slice(0, 1)} 
            </h1>
            <h4 className="m-5">{`Welcome,${this.state.user.firstName}`}</h4>
            <div className="admin-page-font-size">
              {pageActions.map((action, i) => (
                <div key={i} className="row row-cols-12 m-3">
                  <div className="col text-start">{action.icon}</div>
                  <div className="col-10 text-start text-nowrap">
                    <p>
                      {' '}
                      {action.ctaPrefix}{' '}
                      <Link to={action.ctaLinkAddress}>{action.ctaLinkText}</Link>{' '}
                      {action.ctaSuffix}{' '}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>       
          </div>
        );
      }
    }
  
  
export default UserProfilePage;
