import React from 'react';
import Navbar from './components/Navbar';

import './App.css';
function App() {
  return (
    <>
      <Navbar/>
		<div className="container-fluid">
  <section id="sms">
    <div className="row">
      <div className="col-md-4 sms">SMS LEFT</div>
      <div className="col-md-4 buy">Buy more sms</div>
      <div className="col-md-4 country">Country Wise Pricing</div>
    </div>
  </section>
  <section id="admin">
    <div className="row">
      <div className="col-md-4 admin">
        <form
          action="https://immense-bastion-25565.herokuapp.com/myaction"
          method="post"
        >
          {/* <form action="http://localhost:4000/myaction" method="post"> */}
          <p>
            <b>Admin Phone No.</b> <br />
            <br />
            Admin will be notify on this no. by selecting Notify Admin.
          </p>
        </form>
      </div>
      <div className="col-md-4 admin2 mr-2 gray">
        <label htmlFor="input">Admin Phone No:</label> <br />
        <input type="text" name="admin no" />
      </div>
      <div className="col-md-3 licence ml-5  px-2 gray">
        <br />
        <p>Licence Key: a43b4c25f400f37988ef7b5b6727b00f</p>
        <br />
      </div>
    </div>
  </section>
  <hr />
  <section id="notification">
    <div className="row">
      <div className="col-md-4 notification">
        <br />
        <br />
        <b>Notification Preference</b> <br /> <br />
        <p>Select when to send SMS</p>
      </div>
      <div className="col-md-8 gray ">
        <table>
          <tbody>
            <tr>
              <th>Orders</th>
            </tr>
            <tr>
              <td>Create: </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/create customer" /> Notify
                Customer{" "}
              </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/create admin" /> Notify
                Admin{" "}
              </td>
            </tr>
            <tr>
              <td>Cancelled: </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/cancelled customer" />{" "}
                Notify Customer{" "}
              </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/cancelled admin" /> Notify
                Admin{" "}
              </td>
            </tr>
            <tr>
              <td>Fulfilled: </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/fulfilled customer" />{" "}
                Notify Customer{" "}
              </td>
              <td>
                {" "}
                <input type="checkbox" name="orders/fulfilled admin" /> Notify
                Admin{" "}
              </td>
            </tr>
            <tr>
              <td>Partially Fulfilled: </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  name="orders/partially_fulfilled customer"
                />{" "}
                Notify Customer{" "}
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  name="orders/partially_fulfilled admin"
                />{" "}
                Notify Admin{" "}
              </td>
            </tr>
            <tr>
              <th>Customers Account</th>
            </tr>
            <tr>
              <td>Create: </td>
              <td>
                {" "}
                <input type="checkbox" name="customers/create customer" />{" "}
                Notify Customer{" "}
              </td>
              <td>
                {" "}
                <input type="checkbox" name="customers/create admin" /> Notify
                Admin{" "}
              </td>
            </tr>
            <tr>
              <th>Refunds</th>
            </tr>
            <tr>
              <td>Create: </td>
              <td>
                {" "}
                <input type="checkbox" name="refunds/create customer" /> Notify
                Customer{" "}
              </td>
              <td>
                {" "}
                <input type="checkbox" name="refunds/create admin" /> Notify
                Admin{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <hr />
  <section id="sender">
    <div className="row">
      <div className="col-md-4 admin">
        <p>
          <br />
          <br />
          <b>Sender Id</b> <br /> <br />
          Customise sender id according to your needs.
        </p>
      </div>
      <div className="col-md-7 admin2 mr-2 gray">
        <label htmlFor="input">Sender ID:</label>
        <input className="mx-5" type="text" name="sender id" />
        <br />
        <br />
        <p>
          <b>What is Sender ID?</b> <br />
        </p>
        <ul>
          <li>
            Sender ID is the alpha-character name or number which appears on the
            mobile phone as the sender of a SMS (It is used to identify who’s
            sending the message to the recipient). Sender ID can be a
            alphacharacter name such as the name of your company.
          </li>
          <li>
            You can enter sender id for approval, once approved all your sms
            notifications will be sent with approved sender id for you.
          </li>
          <li>Sender ID will be maximum of 6 Characters.</li>
        </ul>
        <p />
        <button type="submit" className>
          Save
        </button>
      </div>
    </div>
  </section>
</div>
</>
	);
}

export default App;
