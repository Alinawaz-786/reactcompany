
import React from 'react';

const List = (props) => {
    return (
            <div>
                    <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>SR</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>


                    {/* {this.state.employee.length == 0 ?
                        <tr>
                            <td colSpan="5" className="text-center" > No Record Found</td>
                        </tr>
                        : this.state.employee.data.map((employee, i) =>
                            <tr key={i}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>
                                    <button onClick={(e) => this.getOne(e, employee)}
                                    data-toggle="modal" data-target="#exampleModalCenter"
                                    className="btn-sm btn-info"><i
                                        className="fa fa-edit"></i>edit
                                    </button>
                                    |
                                    <button onClick={(e) => this.delete(e, employee.id)} className="btn-sm btn-danger">
                                        <i
                                            className="fa fa-trush"></i>Delete</button>
                                </td>
                            </tr>
                        )} */}
                    </tbody>
                </table>
                {/* <div>
                    <Pagination
                        activePage={this.state?.employee?.current_page ? this.state?.employee?.current_page : 0}
                        itemsCountPerPage={this.state?.employee?.per_page ? this.state?.employee?.per_page : 0 }
                        totalItemsCount={this.state?.employee?.total ? this.state?.employee?.total : 0}
                        onChange={(pageNumber) => {
                            this.getAll(pageNumber)
                        }}
                        pageRangeDisplayed={5}
                        itemClass="page-item"
                        linkClass="page-link"
                        firstPageText="First Page"
                        lastPageText="Last Lage"
                    />
                </div> */}

            </div>
    );
}

export default List;

