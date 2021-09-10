import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardCheck, FaPenAlt, FaPoll } from 'react-icons/fa';

class AdminWelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoll: {},
      previousPoll: [{}],
      user: { firstName: '', lastName: '' },
    };
  }

  render() {
    const pageActions = [
      {
        icon: <FaPoll />,
        ctaPrefix: 'View',
        ctaSuffix: 'Poll',
        ctaLinkAddress: '/pollingQuestions',
        ctaLinkText: 'Current',
      },
      {
        icon: <FaClipboardCheck/>,
        ctaPrefix: 'View',
        ctaSuffix: 'Results',
        ctaLinkAddress: '#',
        ctaLinkText: 'Poll History',
      },
      {
        icon: <FaPenAlt />,
        ctaPrefix: 'Create a',
        ctaSuffix: '',
        ctaLinkAddress: "/createPoll",
        ctaLinkText: 'New Poll',
      },
 
    ];

    return (
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
    );
  }
}

export default AdminWelcomePage;
