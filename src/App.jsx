
import React from "react"
import DatePicker from 'material-ui/DatePicker';
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateFrom: null,
      selectedDateTo: null,
      secondDatePickerOpen: false
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSecondDatePickerOpen = this.handleSecondDatePickerOpen.bind(this);
    this.handleSetYearView = this.handleSetYearView.bind(this);
    this.handleClearDate = this.handleClearDate.bind(this);
  }


  handleDateChange(name, date) {
    this.setState({ [name]: date });
  }

  handleSecondDatePickerOpen() {
    this.setState({ secondDatePickerOpen: true });
  }

  handleClearDate(name) {
    this.setState({ [name]: null });
  }

  handleSetYearView() {
    const { selectedDateTo, selectedDateFrom } = this.state;

    // here we handle behavior of selectedDateTo datepicker. 
    // clicked on selectedDateFrom picker we set month and year as in first one
    // but when second date is selected we set the same period that was previos selected
    this.setState({ selectedDateTo: selectedDateTo || selectedDateFrom });
  }

  render() {
    const { selectedDateFrom, selectedDateTo, secondDatePickerOpen } = this.state;
    console.log(selectedDateFrom, selectedDateTo)
    return (
      <MuiThemeProvider>
        <div>
          <DatePicker
            name="selectedDateFrom"
            hintText="Select Date From"
            value={selectedDateFrom}
            onChange={(event, date) => this.handleDateChange("selectedDateFrom", date)}
            onDismiss={this.handleSecondDatePickerOpen}
          />
          <DatePicker
            name="selectedDateTo"
            onClick={this.handleSetYearView}
            hintText="Select Date To"
            openToYearSelection={true}
            value={secondDatePickerOpen ? null : selectedDateTo}
            defaultDate={selectedDateTo}
            onDismiss={() => this.handleClearDate("selectedDateTo")}
            onChange={(event, date) => this.handleDateChange("selectedDateTo", date)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
