import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Alert from './alert';
import Modal from './Modal';
import Pagination from "react-js-pagination";
import Nav from './navbar';
import addForm from './addForm';
import List from './test';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            id: 0,
            name: '',
            email: '',
            phone: '',
            alertMessage: '',
            alertType: '',
            alertShow: ''
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChange3(e) {
        this.setState({
            phone: e.target.value
        })
    }

    componentDidMount() {
        this.getAll();
    }

    getAll(pageNumber = 1) {
        Axios.get(`employee/list?page=${pageNumber}`)
            .then((res) => {
                this.setState({
                    employee: res.data.list
                })
            })
    }

    reset() {
        this.state.name = '';
        this.state.email = '';
        this.state.phone = '';
    }

    resetAlertType() {
        this.timerId = setTimeout(() => {
            this.setState({alertShow: ""});
            this.timerId = null;
        }, 1500);
    }

    handleSubmit(e) {
        e.preventDefault();
        $('p').remove();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }
        let uri = 'employee/store';
        if (this.state.id == 0) {
            axios.post(uri, data)
                .then((response) => {
                    if (response.data.status === 422) {
                        var errors = response.data.errors;
                        $.each(errors, function (key, val) {
                            $.each(val, function (item, value) {
                                $('input[name="' + key + '"]').after("<p class='text-danger'>" + value + "</b>");
                            });
                        });
                    } else {
                        this.state.alertMessage = 'Your Record Save SuccessFully.';
                        this.state.alertType = 'Save';
                        this.state.alertShow = 'show';
                        this.resetAlertType();

                        this.getAll();
                        this.reset();
                    }

                }).catch((response) => {
                alert(response)

            });
        } else {
            const data = {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone
            }
            let uri = 'employee/update';
            axios.post(uri, data)
                .then((response) => {
                    if (response.data.status === 422) {
                        var errors = response.data.errors;
                        $.each(errors, function (key, val) {
                            $.each(val, function (item, value) {
                                $('input[name="' + key + '"]').after("<p class='text-danger'>" + value + "</b>");
                            });
                        });
                    } else {
                        this.state.alertMessage = 'Your Record Update SuccessFully.';
                        this.state.alertType = 'Update';
                        this.state.alertShow = 'show';
                        this.resetAlertType();
                        this.getAll();
                        this.reset();
                    }

                }).catch((response) => {
                alert(response)

            });
        }

    }

    getOne(e, emplpoyee) {
        this.setState({
            id: emplpoyee.id,
            name: emplpoyee.name,
            email: emplpoyee.email,
            phone: emplpoyee.phone,
        });
    }


    delete(e, id) {
        if (confirm('Are You sure You want to Delete this Record.')) {
            Axios.delete(`employee/destroy/${id}`).then((res) => {
                this.state.alertMessage = 'Your Record Delete SuccessFully.';
                this.state.alertType = 'Delete';
                this.state.alertShow = 'show';
                this.resetAlertType();
                this.getAll();
            })
        }

    }

    render() {
        return (

            <div>
                <BrowserRouter>
                    <Nav/>
                    <div className="py-4">
                        <Switch>
                            <Route exact path="/" component={List}/>
                            <Route path="/add-new-record" component={addForm}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                <div className="container">



                    <Alert type={this.state.alertType} message={this.state.alertMessage} show={this.state.alertShow}/>
                    <Modal data={this.state}/>
                    {/*<table className="table table-bordered table-striped">*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*<th>SR</th>*/}
                    {/*<th>Name</th>*/}
                    {/*<th>Email</th>*/}
                    {/*<th>Phone</th>*/}
                    {/*<th>Action</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}


                    {/*{this.state.employee.length == 0 ?*/}
                    {/*<tr>*/}
                    {/*<td colSpan="5" className="text-center"> No Record Found</td>*/}
                    {/*</tr>*/}
                    {/*: this.state.employee.data.map((employee, i) =>*/}
                    {/*<tr key={i}>*/}
                    {/*<td>{employee.id}</td>*/}
                    {/*<td>{employee.name}</td>*/}
                    {/*<td>{employee.email}</td>*/}
                    {/*<td>{employee.phone}</td>*/}
                    {/*<td>*/}
                    {/*<button onClick={(e) => this.getOne(e, employee)}*/}
                    {/*data-toggle="modal" data-target="#exampleModalCenter"*/}
                    {/*className="btn-sm btn-info"><i*/}
                    {/*className="fa fa-edit"></i>edit*/}
                    {/*</button>*/}
                    {/*|*/}
                    {/*<button onClick={(e) => this.delete(e, employee.id)} className="btn-sm btn-danger">*/}
                    {/*<i*/}
                    {/*className="fa fa-trush"></i>Delete</button>*/}
                    {/*</td>*/}
                    {/*</tr>*/}
                    {/*)}*/}
                    {/*</tbody>*/}
                    {/*</table>*/}
                    {/*<div>*/}
                    {/*<Pagination*/}
                    {/*activePage={this.state?.employee?.current_page ? this.state?.employee?.current_page : 0}*/}
                    {/*itemsCountPerPage={this.state?.employee?.per_page ? this.state?.employee?.per_page : 0}*/}
                    {/*totalItemsCount={this.state?.employee?.total ? this.state?.employee?.total : 0}*/}
                    {/*onChange={(pageNumber) => {*/}
                    {/*this.getAll(pageNumber)*/}
                    {/*}}*/}
                    {/*pageRangeDisplayed={5}*/}
                    {/*itemClass="page-item"*/}
                    {/*linkClass="page-link"*/}
                    {/*firstPageText="First Page"*/}
                    {/*lastPageText="Last Lage"*/}
                    {/*/>*/}
                    {/*</div>*/}

                    {/*<form onSubmit={this.handleSubmit} autoComplete="off">*/}
                    {/*<div className="form-group">*/}
                    {/*<label>Name</label>*/}
                    {/*<input type="text" value={this.state.name} name="name" className="form-control"*/}
                    {/*onChange={this.handleChange1}/>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*<label>Email</label>*/}
                    {/*<input type="email" value={this.state.email} name="email" className="form-control"*/}
                    {/*onChange={this.handleChange2}/>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*<label>Phone</label>*/}
                    {/*<input type="text" value={this.state.phone} name="phone" className="form-control"*/}
                    {/*onChange={this.handleChange3}/>*/}
                    {/*</div>*/}
                    {/*<Button type="submit" className="btn btn-primary">Save It!</Button>*/}
                    {/*</form>*/}


                </div>
            </div>

        );
    }
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main/>, document.getElementById('main'));
}
