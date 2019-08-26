import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class DeleteFromBag extends React.Component {
  dropItem = async () => {
    console.log(this.props.value.id_barang);
    let config = {
      method: "patch",
      url:
        "http://127.0.0.1:5001/user/nota/" +
        this.props.value.id_barang.toString(),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    alert(response.data.message);
    this.props.history.push("/theMarket");
  };

  render() {
    return (
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#del" + this.props.value.id_barang.toString()}
              >
                Delete Item
              </button>
            </h5>
          </div>

          <div
            id={"del" + this.props.value.id_barang.toString()}
            class="collapse hidden"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p className="m-0"> Are you sure?</p>
              <button className="btn btn-danger" onClick={this.dropItem}>
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
      //   <div>
      //     <button
      //       type="button"
      //       className="btn btn-light m-1"
      //       data-toggle="modal"
      //       data-target={"#delete" + this.props.value.id_barang.toString()}
      //     >
      //       delete from MyBag
      //     </button>
      //     <div
      //       class="modal fade"
      //       id={"delete" + this.props.value.id_barang.toString()}
      //       tabindex="-1"
      //       role="dialog"
      //       aria-labelledby="exampleModalLabel"
      //       aria-hidden="true"
      //     >
      //       <div class="modal-dialog" role="document">
      //         <div class="modal-content">
      //           <div class="modal-header bg-dark white">
      //             <h5 class="modal-title" id="exampleModalLabel">
      //               Are you sure want to drop {this.props.value.nama_barang} from
      //               shopping bag?
      //             </h5>
      //             <button
      //               type="button"
      //               class="close white"
      //               data-dismiss="modal"
      //               aria-label="Close"
      //             >
      //               <span aria-hidden="true">&times;</span>
      //             </button>
      //           </div>
      //           <div class="modal-body black">
      //             <div className="container">
      //               <div className="row">
      //                 <div className="col-6">
      //                   <button
      //                     className="btn btn-danger align-center"
      //                     onClick={this.dropItem}
      //                   >
      //                     Yes
      //                   </button>
      //                 </div>
      //                 <div className="col-6">
      //                   <button className="btn btn-success align-center">
      //                     No
      //                   </button>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword",
  actions
)(withRouter(DeleteFromBag));
