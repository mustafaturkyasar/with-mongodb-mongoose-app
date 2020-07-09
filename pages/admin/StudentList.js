import fetch from 'isomorphic-unfetch';
import CreateStudent from "../../components/CreateStudent";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import absoluteUrl from 'next-absolute-url'






export default function StudentList({stars,query}){
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
                {/*<Header name={query.query.name} id={query.query.id}></Header>*/}

                {console.log(query)}

                <div className="home">
                    <div className="home_background_container prlx_parent">
                        <div
                            className="home_background prlx"
                            style={{ backgroundImage: "url('/images/news_background.jpg')" }}
                        ></div>
                    </div>
                    <div className="home_content">
                        <h1>Yönetici Paneli</h1>
                    </div>
                </div>

                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="">
                                    <div className="">

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
                                                        Öğrenci Kayıt İşlemleri
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="news_post_text" >
                                            <CreateStudent></CreateStudent>
                                        </div>
                                        <div className="news_post_text">
                                            <table className="table table-dark">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Öğrenci Adı</th>
                                                    <th scope="col">Öğrenci Soyadı</th>
                                                    <th scope="col">Kullanıcı Ad</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {stars.data.map((e, index) => (
                                                    <tr>
                                                        <th scope="row">{index}</th>
                                                        <td>{e.Ad}</td>
                                                        <td>{e.Soyad}</td>
                                                        <td>{e.UserName}</td>
                                                        <td>
                                                            <Link href={`/admin/${query.id}?name=${query.name}&id=${query.id}`}>


                                                                <a href="/MatematikDers">İşlem Yap</a>


                                                            </Link>

                                                        </td>
                                                    </tr>

                                                ))}

                                                </tbody>
                                            </table>

                                        </div>


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

StudentList.getInitialProps = async ({ req,query }) => {
    const { protocol, host } = absoluteUrl(req, 'localhost:3000')
    const apiURL = `${protocol}//${host}/api/student/getAllUser` // const res = await fetch('/api/files')

    console.log(apiURL)

     const response = await fetch(apiURL);
    //
      const json = await response.json()

    return { stars: json,query }
}


