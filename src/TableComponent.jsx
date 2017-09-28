import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableComponent extends React.Component {

state = {
	showCheckboxes : false,
};

	render() {
		return(
			<Table>
				<TableHeader displaySelectAll={this.state.showCheckboxes}>
 					<TableRow>
						<TableHeaderColumn>Matière</TableHeaderColumn>
						<TableHeaderColumn>Note</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={this.state.showCheckboxes}>
					<TableRow>
						<TableRowColumn>Français</TableRowColumn>
						<TableRowColumn>{10}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Anglais</TableRowColumn>
						<TableRowColumn>{10}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Economie</TableRowColumn>
						<TableRowColumn>{10}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Droit</TableRowColumn>
						<TableRowColumn>{10}</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		)
	}
}
