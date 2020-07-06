import Link from "next/link";


class Carusel extends React.Component {



    render() {
        return (
            <div className="hero_slide">
                <div
                    className="hero_slide_background"
                    style={{
                        backgroundImage:
                            "url(" +
                            "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                            ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                    }}
                />
                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                    <div className="hero_slide_content text-center">
                        <h1
                            data-animation-in="fadeInUp"
                            data-animation-out="animate-out fadeOut"
                        >
                            Uzaktan Özel <span>Matematik</span> dersleri!
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carusel;
