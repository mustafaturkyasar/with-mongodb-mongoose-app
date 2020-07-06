
import Layout from "../components/Layout";
import Login from "../components/Login";



export default function HomePage() {
  return (
      <Layout>
        <div className="super_container">


          <div className="register">
            <div className="container-fluid">
              <div className="row row-eq-height">
                <div className="col-lg-6 nopadding">
                  <div className="register_section d-flex flex-column align-items-center justify-content-center">
                    <div className="register_content text-center">
                      <h1 className="register_title">
                        Matematik Özel Ders Uzaktan Canlı Özel Ders <span>Kemal Balta</span> Koçluk
                        Sistemi
                      </h1>
                      <h1 className="register_title">
                        Matematik Özel Ders Uzaktan Canlı Özel Ders <span>Kemal Balta</span> Koçluk
                        Sistemi
                      </h1>
                      <p className="register_text">
                        Üniversiteden mezun olduğum 2001 yılından buyana neredeyse her gün Matematik Özel Ders vermekteyim.
                        Üniversite Sınavı (TYT-AYT) ve Liselere Geçiş (LGS) sınavında bu güne kadar ilk 100'de 11 farklı öğrencim olup,
                        5. sınıf ile Üniversite Sınavına hazırlık arasındaki seviyelere hitap etmekteyim.
                      </p>

                    </div>
                  </div>
                </div>

                <Login></Login>
              </div>
            </div>
          </div>








        </div>
      </Layout>
  );
}
