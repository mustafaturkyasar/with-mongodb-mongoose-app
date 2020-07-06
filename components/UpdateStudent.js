import Link from "next/link";
import Router from 'next/router'
const axios = require("axios").default;

class UpdateStudent extends React.Component {
    state = {
        // Initially, no file is selected
        name: this.props.user.Ad,
        surname : this.props.user.Soyad,
        user :this.props.user.UserName,
        pass  :this.props.user.Pass
    };
    onLoginClick = async () => {


        await  axios.post('/api/student/updateStudent', {
            user: this.state.user,
            pass: this.state.pass,
            name : this.state.name,
            surname : this.state.surname,
            id : this.props.user.Id
        })
            .then(function (response) {
                if (response.data === 1)
                    alert("Güncelleme işlemi başarılı");
                else
                {
                    console.log(response.data)
                    alert("Bir hata oluştu tekrar deneyiniz")
                }


                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    deleteStudent = async () => {


        await  axios.post('/api/student/deleteStudent', {

            id : this.props.user.Id
        })
            .then(function (response) {
                if (response.data === 1)
                    alert("Silme işlemi başarılı");
                else
                {
                    console.log(response.data)
                    alert("Bir hata oluştu tekrar deneyiniz")
                }


                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    nameChange = (event) => {
        this.setState({name: event.target.value})
    }
    surnameChange = (event) => {
        this.setState({surname: event.target.value})
    }
    userChange = (event) => {
        this.setState({user: event.target.value})
    }
    passChange = (event) => {
        this.setState({pass: event.target.value})
    }


    render() {
        return (
            <div className="col-lg-6 nopadding">
                <div className="search_section d-flex flex-column align-items-center justify-content-center">

                    <div className="search_content text-center">

                        <input
                            value={this.state.name}
                            onChange={this.nameChange}
                            id="search_form_category"
                            className="input_field search_form_category"
                            type="text"
                            placeholder="Öğrenci Adı"
                        />
                        <input
                            value={this.state.surname}
                            onChange={this.surnameChange}
                            id="search_form_degree"
                            className="input_field search_form_degree"

                            placeholder="Öğrneci Soyadı"
                        />
                        <input
                            value={this.state.user}
                            onChange={this.userChange}
                            id="search_form_degree"
                            className="input_field search_form_degree"

                            placeholder="Kullanıcı Adı"
                        />
                        <input
                            value={this.state.pass}
                            onChange={this.passChange}
                            id="search_form_degree"
                            className="input_field search_form_degree"

                            placeholder="Sifre"
                        />
                        <Link href="#">
                        <button
                            id="search_submit_button"
                            type="submit"
                            className="search_submit_button trans_200"
                            onClick={this.onLoginClick}
                        >
                            Güncelle
                        </button>
                    </Link>
                        <Link href="#">
                            <button
                                id="search_submit_button"
                                type="submit"
                                className="search_submit_button trans_200"
                                onClick={this.onLoginClick}
                            >
                                Sil
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudent;
