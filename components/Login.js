import Link from "next/link";
import Router from 'next/router'
const axios = require("axios")

class Login extends React.Component {
  state = {
    // Initially, no file is selected
    user :'',
    pass  :''
  };
   onLoginClick =  (e) => {

       axios.post('/api/student/getUser', {
       user: this.state.user,
       pass: this.state.pass
     })
         .then(function (response) {
             console.log(response.data.data[0]._id)
            // Router.push('/present')
            if (response.data.data.length === 0)
               alert('hata')
            else
            {
              if(response.data.data[0].Type === 1)
              {
                  window.location.href = '/present?name=Vercel&id='+ response.data.data[0]._id

                  Router.push({
                      pathname: '/present',
                      query: { name: 'Vercel',id : response.data.data[0]._id },
                  })

              }
              else
             {

                  Router.push({
                      pathname: '/present',
                      query: { name: 'Sercel',id : response.data.data[0]._id },
                  })

              }
            }




         })
         .catch(function (error) {
           console.log(error);
         });

  };
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
          <div
            className="search_background"
            style={{
              backgroundImage: "url('/images/search_background.jpg')",
            }}
          ></div>
          <div className="search_content text-center">
            <h1 className="search_title">Öğrenci Girişi</h1>
            <input
              value={this.state.value}
              onChange={this.userChange}
              id="search_form_category"
              className="input_field search_form_category"
              type="text"
              placeholder="Kullanıcı Ad"
            />
            <input
                value={this.state.value}
                onChange={this.passChange}
              id="search_form_degree"
              className="input_field search_form_degree"
              type="password"
              placeholder="Şifre"
            />

            <Link href="#">
              <button
                id="search_submit_button"

                className="search_submit_button trans_200"
                onClick={this.onLoginClick}
              >
                Giriş Yap
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
