const axios = require("axios").default;

class UpdateFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploaded: false,
      path: null,
      dosya: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  dosyaChange = (event) => {
    event.preventDefault();
    this.setState({ dosya: event.target.value });
  };
  onClickKaydet = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/student/createStudentFile", {
        UserId: this.props.user.data.Id,
        DosyaAd: this.state.path,
        Path: this.state.dosya,
        Aktif: 1,
      })
      .then(function (response) {
        if (response.data > 1) alert("Ekleme İşlemi Balarılı");
        else {
          console.log(response.data);
          alert("Bir hata oluştu tekrar deneyiniz");
        }

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  onClickHandler = (e) => {
    e.preventDefault();
    const self = this;
    const data = new FormData();
    data.append("video", this.state.selectedFile);
    data.append("Id", 1);
    axios
      .post("/api/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
        self.setState({ path: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="col-lg-6 nopadding">
        <div className="search_section d-flex flex-column align-items-center justify-content-center">
          <div className="search_content text-center">
            <h1>Dosya Yükleme İşlemleri</h1>
            <form
              action="#"
              method="post"
              encType="multipart/form-data"
              target="transFrame"
            >
              <input
                value={this.state.dosya}
                onChange={this.dosyaChange}
                id="search_form_category"
                className="input_field search_form_category"
                type="text"
                placeholder="Dosya Adı"
              />
              <input type="file" name="video"  className="input_field search_form_degree" onChange={this.onChangeHandler} />
              <button  className="search_submit_button trans_200" onClick={this.onClickHandler}>upload</button>
              <button  className="search_submit_button trans_200" onClick={this.onClickKaydet}>Kaydet</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateFile;
