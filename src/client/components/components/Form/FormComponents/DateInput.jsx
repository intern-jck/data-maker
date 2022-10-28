import React, {useState, useEffect} from 'react';
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const YEARS = [...Array(10)].map((item, i) => (2014 + i));

const DateInput = ({date, dateHandler}) => {
  // const [newDate, setNewDate] = useState({
  //   start_month: '',
  //   start_year: '',
  //   end_month: '',
  //   end_year: '',
  // });
  const [newDate, setNewDate] = useState(date);

  const updateDate = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const updatedDate = newDate;
    newDate[name] = value;
    setNewDate(updatedDate);
    dateHandler(updatedDate);
  };

  return (
    <div className='DateInput'>
      <div className='date-row'>
        <span>
          START:
        </span>
        <label htmlFor='form-start-month'>
          month
          <select
            id='form-start-month'
            name='start_month'
            value={newDate.start_month}
            onChange={updateDate}
          >
            <option key='0' value='default'></option>
            {
              MONTHS.map((month, i) => (
                <option key={i+1} value={month}>{month}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor='form-start-year'>
          year
          <select
            id='form-start-year'
            name='start_year'
            value={newDate.start_year}
            onChange={updateDate}
          >
            <option key='0' value='default'></option>
            {
              YEARS.map((year, i) => (
                <option key={i}>{year}</option>
              ))
            }
          </select>
        </label>
      </div>

      <div className='date-row'>
        <span>
          END:
        </span>
        <label htmlFor='form-start-month'>
          month
          <select
            id='form-start-month'
            name='end_month'
            value={newDate.end_month}
            onChange={updateDate}
          >
            <option key='0' value='default'></option>
            <option>Present</option>
            {
              MONTHS.map((month, i) => (
                <option key={i}>{month}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor='form-start-year'>
          year
          <select
            id='form-start-year'
            name='end_year'
            value={newDate.end_year}
            onChange={updateDate}
          >
            <option key='0' value='default'></option>
            <option>Present</option>
            {
              YEARS.map((year, i) => (
                <option key={i}>{year}</option>
              ))
            }
          </select>
        </label>
      </div>
    </div>
  );
};

export default DateInput;
