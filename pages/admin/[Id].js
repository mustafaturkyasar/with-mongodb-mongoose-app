import fetch from 'isomorphic-unfetch';
import UpdateStudent from "../../components/UpdateStudent";
import UpdateFile from "../../components/UpdateFİle";
import Layout from "../../components/Layout";
import Head from "next/head";
import Header from "../../components/Header";
import absoluteUrl from "next-absolute-url";

export default function Admins ({stars,user,query}) {
    return (
        <Layout>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_styles.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_responsive.css"
                />
            </Head>
            <div className="super_container">
                {console.log(query)}
                <Header
                    name={query.name}
                    id={query.id}
                ></Header>


                <div className="home">
                    <div className="home_background_container prlx_parent">
                        <div
                            className="home_background prlx"
                            style={{ backgroundImage: "url('/images/news_background.jpg')" }}
                        ></div>
                    </div>
                    <div className="home_content">
                        <h1>Yöentim Paneli</h1>
                    </div>
                </div>

                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="news_post_container">
                                    <div className="news_post">
                                        <div className="news_post_image">

                                        </div>
                                        <div className="news_post_top d-flex flex-column flex-sm-row">
                                            <div className="news_post_date_container">
                                                <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                                                    <div>Kemal</div>
                                                    <div>Balta</div>
                                                </div>
                                            </div>
                                            <a name="#op"></a>
                                            <div className="news_post_title_container">
                                                <div className="news_post_title">
                                                    <a href="#top" style={{pointerEvents: 'none', cursor: 'default'}}>
                                                        Bilgi Güncelleme
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="news_post_text">

                                            <UpdateStudent user = {user}></UpdateStudent>
                                        </div>
                                        <div className="news_post_text">
                                            <UpdateFile user = {user[0]}></UpdateFile>
                                        </div>









                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">

                                <div className="sidebar">
                                    <div className="sidebar_section">

                                        <div className="sidebar_section_title" style={{marginTop:'10%'}}>

                                            <h3>Daha önce Yüklenen Dosyalar</h3>
                                        </div>
                                        <ul className="sidebar_list">
                                            {stars.data.map((e, index) => (
                                                <li className="sidebar_list_item">
                                                    <a style={{ pointerEvents: "none", cursor: "default" }} href="#">
                                                        {e.DosyaAd} - {e.Tarih}
                                                    </a>
                                                </li>

                                            ))}


                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    );
}

Admins.getInitialProps = async ({ req,query }) => {
    // const res = await fetch('/api/files')
    const { protocol, host } = absoluteUrl(req, 'localhost:3000')
    const apiURL = `${protocol}//${host}/api/student/getUserFiles` // const res = await fetch('/api/files')
    const response = await fetch(apiURL);
    // console.log(query.Id)
    const json = await response.json()
    const apiURL2 = `${protocol}//${host}/api/student/getUserById?id=1` // const res = await fetch('/api/files')
    const response2 = await fetch(apiURL2);
    // console.log(query.Id)
    const json2 = await response2.json()

    return { stars: json,user:json2,query }
}


