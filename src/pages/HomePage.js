import React, { Component } from 'react';

import FormSearch from './../components/FormSearch';
import ListPostHome from './../components/ListPostHome';
import SearchBy from './../components/SearchBy';

class ProfilePage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">HomePage</h3>
					
				</div>
				<div className="panel-body">
					<FormSearch/>
					<SearchBy/>
					<ListPostHome/>
				</div>
			</div>
        ); 
    }
}
export default ProfilePage;