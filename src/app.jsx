import React from 'react';
import '../styles/index.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableComponent from './TableComponent.jsx';

export default class App extends React.Component {
  render() {
    return (
    <div>
			<MuiThemeProvider>
				<TableComponent/>
			</MuiThemeProvider>
		</div>
    )
  }
}
